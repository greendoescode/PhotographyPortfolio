<script>
  import { page } from "$app/state";
  import "$lib/global.css";

  const playHoverSound = () => {
    const audio = new Audio("/beep.mp3");
    audio.play();
  };

  const getRandomPage = () => {
    const pages = [
      "/personal/timetravel",
      "/personal/chickenconspiracy",
      "/personal/halorat"
    ];
    const randomIndex = Math.floor(Math.random() * pages.length);
    return pages[randomIndex];
  };
</script>

<svelte:head>
  <title>{page.status} - Lost in the Weird Wonderland</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div
  class="divbody bg-cover bg-center min-h-screen flex flex-col justify-center items-center weird-background"
>
  <div class="container justify-center weird-container">
    <h1
      class="relative w-full max-w-[800px] font-mono
                before:absolute before:inset-0 before:animate-typewriter
                before:bg-black
                after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
                after:bg-stone-700 flicker-text heading-align-left"
    >
      {page.status} - You are lost.
    </h1>

    <p class="description text-center text-lg mt-4">
      It seems you've wandered too far into the unknown. No worries, though!
    </p>

    <section class="options-section mt-8">
      <u><h2 class="section-title">What would you like to do?</h2></u>
      <ul class="options-list">
        <li>
          <a href="/" onmouseover={playHoverSound}>Go back to safety (Home)</a>
        </li>
        <li>
          <a
            href={getRandomPage()}
            onmouseover={playHoverSound}
            onclick={playHoverSound}
          >
            Explore a random page
          </a>
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

  .weird-background {
    background: url("/giphy4.gif") no-repeat center center fixed;
    background-size: cover;
    animation:
      weirdAnimation 20s infinite,
      gentleFlicker 5s infinite;
  }

  @keyframes weirdAnimation {
    0% {
      background-color: #ff00ff;
    }
    50% {
      background-color: #00ffff;
    }
    100% {
      background-color: #ff00ff;
    }
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
    border: 2px solid #ff00ff;
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
    color: #ff00ff;
    text-shadow:
      0 0 15px #ff00ff,
      0 0 30px #ff00ff;
    text-align: left;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .options-list a:hover {
    color: #00ff00;
    transform: scale(1.2);
    text-decoration: underline;
  }

  .options-section {
    margin-top: 40px;
  }

  .options-list {
    list-style: none;
    padding: 0;
  }

  .options-list li {
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
