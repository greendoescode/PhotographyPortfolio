<script>
  import { onMount } from "svelte";
  import { parseBlob } from "music-metadata";
  import "$lib/global.css";

  let bgImageLoaded = false;
  let audio;
  let playing = false;
  let animationFrame;
  let metadata = {
    title: "Loading...",
    artist: "Loading...",
  };

  const year = new Date().getFullYear();

  const audioTracks = [
    "/audio/snippet1.mp3",
    "/audio/snippet2.mp3",
    "/audio/snippet3.mp3",
    "/audio/snippet4.mp3"
  ];

  function getTrackOfTheDay() {
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return audioTracks[dayOfYear % audioTracks.length];
  }

  onMount(async () => {
    const img = new Image();
    img.src = "/images/_DSC2618.avif";
    img.onload = () => (bgImageLoaded = true);

    const selectedTrack = getTrackOfTheDay();

    const res = await fetch(selectedTrack);
    const blob = await res.blob();
    const meta = await parseBlob(blob);
    metadata.title = meta.common.title || "Unknown Title";
    metadata.artist = meta.common.artist || "Unknown Artist";


    audio = new Audio(URL.createObjectURL(blob));
    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaElementSource(audio);
    const analyser = audioCtx.createAnalyser();
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 64;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function drawWaveform() {
      analyser.getByteTimeDomainData(dataArray);
      const canvas = document.getElementById("waveform");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = "#222";
      ctx.beginPath();

      const sliceWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      animationFrame = requestAnimationFrame(drawWaveform);
    }

    drawWaveform();
  });

  function togglePlay() {
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    playing = !playing;
  }
</script>

<main
  class={`relative flex flex-col items-center justify-center min-h-screen w-screen px-6
    ${
      bgImageLoaded
        ? "bg-[url(/images/_DSC2618.avif)]"
        : "bg-[url(/images/low-quality_2618.avif)] blur-sm"
    } bg-center bg-cover transition-filter duration-1500 ease-in-out text-black`}
>
  <nav
    style="opacity: 1;"
    class="fixed top-0 w-full bg-opacity-60 p-4 flex justify-center space-x-8 z-50 select-none text-white"
  >
    <a href="/about" class="hover:underline">About</a>
    <a href="/photography" class="text-2xl font-semibold hover:underline"
      >Leo Hanney</a
    >
    <a href="/portfolio" class="hover:underline">Portfolio</a>
  </nav>

  <div class="h-20"></div>

  <section
    style="opacity: 1;"
    class="bg-white bg-opacity-75 rounded-xl p-12 max-w-xl w-full shadow-lg backdrop-blur-sm
      flex flex-col items-center text-black text-center"
  >
    <h1 class="text-5xl font-extrabold mb-8 leading-tight select-none">
      Hey, I'm Leo.
    </h1>

    <p class="mb-6 text-lg leading-relaxed max-w-prose">
      I'm really into <strong>drumming and music</strong> — The Strokes are my fav.
      People say I'm pretty kind, but I can be a bit full-on sometimes. Life's weird
      like that.
    </p>

    <p class="mb-6 text-lg leading-relaxed max-w-prose">
      Most days I'm just chilling, listening to music, tying my laces (it's a
      skill), and loving buses — yes, buses <strong>ARE</strong> a hobby. <em
        >YOLO, yk?</em
      >
    </p>
  </section>

  <section style="opacity: 1;" class="audio-section" aria-label="Audio snippet player">
    <div
      class="now-playing"
      style="margin-bottom: 0.75rem; font-weight: 600; font-size: 1.1rem;"
    >
      Todays Song: {metadata.title} — {metadata.artist}
    </div>
    <canvas id="waveform" width="320" height="60" aria-hidden="true"></canvas>
    <button
      class="play-toggle"
      aria-pressed={playing}
      aria-label={playing ? "Pause audio snippet" : "Play audio snippet"}
      on:click={togglePlay}
    >
      {playing ? "Pause" : "Play"} Music Snippet
    </button>
  </section>

  <footer
    style="opacity: 1;"
    class="absolute bottom-4 text-white text-xs tracking-widest font-light select-none"
  >
    &copy; {year} Leo Hanney. All rights reserved.
  </footer>
</main>

<style>
  .audio-section {
    margin-top: 3rem;
    background: rgba(255 255 255 / 0.85);
    padding: 1.5rem 2rem;
    border-radius: 20px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
    max-width: 360px;
    width: 100%;
    text-align: center;
  }

  #waveform {
    width: 100%;
    height: 60px;
    border-radius: 12px;
    background: #ddd;
    margin-bottom: 1rem;
  }

  .play-toggle {
    background: #222;
    color: #fff;
    border: none;
    padding: 0.5rem 1.8rem;
    border-radius: 9999px;
    font-weight: 700;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .play-toggle:hover,
  .play-toggle:focus {
    background: #444;
    outline: none;
  }
</style>