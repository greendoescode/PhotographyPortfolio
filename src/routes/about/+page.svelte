<script>
  import { onMount, onDestroy } from "svelte";
  import { parseBlob } from "music-metadata";
  import "$lib/global.css";

  let loaded = $state(false);
  let audio = $state(null);
  let playing = $state(false);
  let canvasRef = $state(null);
  let animationFrame;
  let metadata = $state({
    title: "Loading...",
    artist: "Loading...",
  });

  const year = new Date().getFullYear();

  const audioTracks = [
    "/audio/snippet1.mp3",
    "/audio/snippet2.mp3",
    "/audio/snippet3.mp3",
    "/audio/snippet4.mp3",
    "/audio/snippet5.mp3",
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
    const selectedTrack = getTrackOfTheDay();

    try {
      const res = await fetch(selectedTrack);
      const blob = await res.blob();
      const meta = await parseBlob(blob);
      metadata.title = meta.common.title || "Daily Snippet";
      metadata.artist = meta.common.artist || "Leo Hanney";

      audio = new Audio(URL.createObjectURL(blob));
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioCtx.createMediaElementSource(audio);
      const analyser = audioCtx.createAnalyser();
      
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
      analyser.fftSize = 64;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      function drawWaveform() {
        if (!canvasRef) return;
        const ctx = canvasRef.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);

        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "#ffffff";
        ctx.beginPath();

        const sliceWidth = canvasRef.width / bufferLength;
        let x = 0;

        analyser.getByteTimeDomainData(dataArray);

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0;
          const y = (v * canvasRef.height) / 2;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          x += sliceWidth;
        }
        ctx.lineTo(canvasRef.width, canvasRef.height / 2);
        ctx.stroke();

        animationFrame = requestAnimationFrame(drawWaveform);
      }

      drawWaveform();
    } catch (err) {
      console.error("Audio metadata parsing error:", err);
    }
  });

  onDestroy(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    if (audio) audio.pause();
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

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Leo Hanney - Personal</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet">
  <link rel="preload" href="/images/_DSC2618.avif" as="image" type="image/avif" />
</svelte:head>

<main class="font-['Poppins'] relative min-h-screen w-full bg-neutral-950 text-neutral-100 overflow-hidden flex flex-col justify-between p-8 md:p-14 select-none">
  <div class="absolute inset-0 z-0 overflow-hidden">
    <img
      src="/images/_DSC2618.avif"
      alt="Personal background photo"
      class="h-full w-full object-cover transition-opacity duration-1000 ease-out opacity-25"
      class:opacity-0={!loaded}
      class:opacity-25={loaded}
      onload={() => (loaded = true)}
    />
    <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/40"></div>
  </div>

  <header class="relative z-10 flex justify-between items-start">
    <a href="/" class="group flex flex-col text-left">
      <span class="text-xs uppercase tracking-[0.3em] font-medium text-white">Leo Hanney</span>
      <span class="text-[10px] tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors">About</span>
    </a>

    <nav class="flex gap-8 text-xs tracking-[0.2em] font-light text-neutral-300">
      <a href="/about" class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">About</a>
      <a href="/portfolio" class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">Portfolio</a>
    </nav>
  </header>

  <div class="relative z-10 max-w-4xl my-auto py-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
    
    <section class="md:col-span-7 space-y-4">
      <p class="text-[10px] uppercase tracking-[0.3em] text-neutral-400">Introduction</p>
      <h1 class="text-4xl md:text-5xl font-extralight tracking-tight text-white">
        Hey, I'm Leo.
      </h1>
      
      <p class="text-xs md:text-sm font-light text-neutral-300 leading-relaxed tracking-wide pt-2">
        I'm really into <strong class="font-normal text-white">drumming and music</strong>, The Strokes are my favorite. People say I'm pretty kind, but I can be a bit full on sometimes. Life's weird like that.
      </p>

      <p class="text-xs md:text-sm font-light text-neutral-300 leading-relaxed tracking-wide">
        Most days I'm chilling, listening to music, tying my laces (it's a skill), and loving buses: yes, buses <strong class="font-normal text-white">are</strong> a legitimate hobby.
      </p>
    </section>

    <section class="md:col-span-5 bg-neutral-900/60 border border-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col justify-between gap-4">
      <div>
        <span class="text-[9px] uppercase tracking-[0.25em] text-neutral-400 block mb-1">Track of the Day</span>
        <h2 class="text-sm font-medium text-white truncate">{metadata.title}</h2>
        <p class="text-xs font-light text-neutral-400 truncate">{metadata.artist}</p>
      </div>

      <canvas bind:this={canvasRef} width="320" height="40" class="w-full h-10 bg-neutral-950/40 rounded border border-white/5"></canvas>

      <button
        onclick={togglePlay}
        aria-label={playing ? "Pause audio snippet" : "Play audio snippet"}
        class="w-full py-2.5 px-4 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-950 bg-white hover:bg-neutral-200 transition-colors rounded-sm flex items-center justify-center gap-2"
      >
        {#if playing}
          <span class="w-2 h-2 bg-neutral-950 rounded-sm"></span> Pause Snippet
        {:else}
          <span class="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-neutral-950"></span> Play Snippet
        {/if}
      </button>
    </section>

  </div>

  <footer class="relative z-10 flex justify-between items-end text-[10px] tracking-[0.25em] text-neutral-400 font-light">
    <div>Based in UK</div>
    <div>&copy; {year} Leo Hanney</div>
  </footer>
</main>