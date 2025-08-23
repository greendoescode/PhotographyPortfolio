<script>
  import { onMount } from "svelte";
  import "$lib/global.css";

  let currentAudio = null;
  let isPlaying = null;
  let progress = 0;
  let currentTime = "0:00";
  let duration = "0:00";

  const tracks = [
    { title: "Sentimental Man", src: "/audio/sentimentalman.mp3" },
    { title: "Talk I Perchance?", src: "/audio/talkiperchance.mp3" },
    { title: "Scan I Perchance?", src: "/audio/scaniperchance.mp3" },
  ];

  let waveforms = tracks.map(() => {
    return Array.from(
      { length: 150 },
      () => 6 + Math.floor(Math.random() * 20)
    );
  });

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const togglePlayback = (index) => {
    if (currentAudio && isPlaying === index) {
      currentAudio.pause();
      isPlaying = null;
      progress = 0;
    } else {
      if (currentAudio) {
        currentAudio.pause();
      }
      currentAudio = new Audio(tracks[index].src);
      currentAudio.play();
      isPlaying = index;

      currentAudio.ontimeupdate = () => {
        progress = (currentAudio.currentTime / currentAudio.duration) * 100;
        currentTime = formatTime(currentAudio.currentTime);
        duration = formatTime(currentAudio.duration);
      };

      currentAudio.onended = () => {
        isPlaying = null;
        progress = 0;
        currentTime = "0:00";
        duration = "0:00";
      };
    }
  };

  function seek(event, index) {
    if (!currentAudio || isPlaying !== index) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const seekTime = (clickX / rect.width) * currentAudio.duration;
    currentAudio.currentTime = seekTime;
  }
</script>

<svelte:head>
  <title>My Music</title>
</svelte:head>

<div class="songs-body">
  <div class="container">
    <h1 class="page-title">My Tracks</h1>

    <div class="tracklist-vertical">
      {#each tracks as track, index}
        <div class="track-card">
          <div class="track-row">
            <button class="play-button" on:click={() => togglePlayback(index)}>
              {isPlaying === index ? "⏸" : "▶"}
            </button>
            <div class="track-title">{track.title}</div>
            <div class="time-display">
              {isPlaying === index
                ? `${currentTime} / ${duration}`
                : "0:00 / 0:00"}
            </div>
          </div>
          <div
            class="waveform"
            on:click={(e) => seek(e, index)}
            aria-label="Seek in track waveform"
          >
            {#each waveforms[index] as height, i}
              <div
                class="wave-bar {i <
                (isPlaying === index ? Math.floor(progress * 1.5) : 0)
                  ? 'active-bar'
                  : ''}"
                style="height: {height}px"
              ></div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
  <a class="return-link" href="/personal">← Back to Home</a>
</div>

<style>
  .page-title {
    text-transform: uppercase;
    font-size: 2.5rem;
    color: #659944;
    text-shadow:
      0 0 15px #659944,
      0 0 30px #659944;
    margin-bottom: 2rem;
    user-select: none;
    text-align: center;
  }

  .tracklist {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .track-card {
    background: transparent; /* no separate background */
    border: none;
    padding: 0;
    box-shadow: none;
  }

  .track-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .track-title {
    font-size: 1.4rem;
    font-weight: bold;
    color: #659944;
    text-shadow: 0 0 10px #659944;
    margin: 0;
  }

  /* progress bar removed as you wanted */

  .time-display {
    font-size: 0.9rem;
    color: #aaa;
    text-align: right;
    margin-bottom: 1.5rem;
  }

  .container {
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid #87cc5b;
    border-radius: 0; /* no rounding */
    padding: 2rem;
    box-shadow: 0 4px 10px rgba(135, 204, 91, 0.8);
    max-width: 700px;
    width: 100%;
    position: relative;
    transition: none; /* removed hover animation */
    margin: 2rem auto; /* center horizontally */
  }

  .container:hover {
    transform: none; /* no hover transform */
    box-shadow: 0 4px 10px rgba(135, 204, 91, 0.8); /* keep default shadow on hover */
  }

  .play-button {
    font-size: 1.1rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #659944;
    color: #659944;
    padding: 0.5rem 1rem;
    border-radius: 0; /* no rounding */
    font-family: inherit;
    cursor: pointer;
    text-shadow: 0 0 5px #659944;
    transition: none; /* remove hover transition */
    margin-right: 1rem; /* spacing */
  }

  .play-button:hover {
    background: rgba(0, 0, 0, 0.3); /* no change on hover */
    color: #659944; /* no color change */
    border-color: #659944;
  }

  .track-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .waveform {
    display: flex;
    gap: 2px;
    cursor: pointer;
    height: 28px;
    align-items: flex-end;
    user-select: none;
    margin-top: 0.5rem;
  }

  .wave-bar {
    width: 4px;
    background: #324c22;
    border-radius: 0;
    transition: background 0.25s ease;
  }

  /* Center the whole page vertically and horizontally */
  .songs-body {
    background: url("/giphy7.gif") no-repeat center center;
    background-size: cover;
    min-height: 100vh;
    padding: 2rem;
    font-family: "Courier New", monospace;
    color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center; /* center vertically */
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  /* Style and center the back to home link better */
  .return-link {
    display: inline-block;
    margin-top: 3rem;
    font-size: 1.2rem;
    color: #659944;
    text-shadow: 0 0 8px #659944;
    text-align: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 2px solid #659944;
    border-radius: 0;
    transition:
      color 0.3s ease,
      border-color 0.3s ease;
    user-select: none;
  }

  .return-link:hover {
    color: #39ff14;
    border-color: #39ff14;
  }

  .active-bar {
    background: linear-gradient(180deg, #659944, #659944);
  }
</style>
