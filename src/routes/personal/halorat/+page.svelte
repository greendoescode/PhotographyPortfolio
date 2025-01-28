<script>
  import "$lib/global.css";

  const playHoverSound = () => {
    const audio = new Audio("/beep.mp3");
    audio.play();
  };
</script>

<svelte:head>
  <title>Halo 3 Rat - A Tribute</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div
  class="divbody bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
>
  <div class="container justify-center weird-container">
    <h1 class="relative w-full max-w-[800px] font-mono">
      Behold the Halo 3 Rat.
    </h1>

    <img
      src="/halorat.webp"
      alt="Halo 3 Rat"
      class="halo-rat-image mt-6 shadow-xl border-2 border-solid border-stone-700"
    />

    <p class="description text-center text-lg mt-4">
      This is Halo 3 Rat, a perfect rat.
    </p>

    <section class="interaction-section mt-8 text-center">
      <u><h2 class="section-title">What will you do?</h2></u>
      <ul class="interaction-list">
        <li>
          <a href="/personal" onmouseover={playHoverSound}>Stop admiring the rat</a>
        </li>
        <li>
          <a href="/personal/chickenconspiracy" onmouseover={playHoverSound}
            >Uncover the Chicken Conspiracy</a
          >
        </li>
      </ul>
    </section>
  </div>
</div>

<style>
  .divbody {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: "Courier New", monospace;
    color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    overflow: hidden;
  }

  @keyframes gentleFlicker {
    0% {
      opacity: 1;
    }
    10% {
      opacity: 0.95;
    }
    20% {
      opacity: 1;
    }
    30% {
      opacity: 0.98;
    }
    40% {
      opacity: 1;
    }
    50% {
      opacity: 0.97;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 2px solid #523052;
    background: #000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    max-width: 800px;
    width: 100%;
  }

  .container:hover {
    animation-play-state: paused;
  }

  h1 {
    font-size: 2em;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #523052;
    text-shadow:
      0 0 15px #523052,
      0 0 30px #523052;
    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .halo-rat-image {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }

  .halo-rat-image:hover {
    transform: scale(1.1);
  }

  .interaction-list a:hover {
    color: #00ff00;
    transform: scale(1.2);
    text-decoration: underline;
  }

  .interaction-section {
    margin-top: 40px;
  }

  .interaction-list {
    list-style: none;
    padding: 0;
  }

  .interaction-list li {
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    .container {
      max-width: 90%;
      padding: 15px;
    }

    h1 {
      font-size: 1.5em;
    }

    .weird-background {
      animation: none;
    }

    .container {
      animation: none;
    }

    h1 {
      animation: none;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 10px;
    }

    h1 {
      font-size: 1.2em;
    }
  }
</style>
