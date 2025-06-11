<script>
  import "$lib/global.css";

  let isMobile = false;
  let showMessage = false;

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  const checkMobile = () => {
    isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    showMessage = isMobile && !getCookie("dismissedMobileMessage");
  };

  import { onMount } from "svelte";
  onMount(() => {
    checkMobile();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile);
    }
  });

  const dismissMessage = () => {
    showMessage = false;
    setCookie("dismissedMobileMessage", "true", 30);
  };

  const playHoverSound = () => {
    const audio = new Audio("/beep.mp3");
    audio.play();
  };

  const getRandomPage = () => {
    const pages = [
      "/personal/timetravel",
      "/personal/chickenconspiracy",
      "/personal/halorat",
    ];
    const randomIndex = Math.floor(Math.random() * pages.length);
    return pages[randomIndex];
  };

  const playRandomSound = () => {
    const sounds = ["/sound1.mp3", "/sound2.mp3"];
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[randomIndex]);
    audio.play();
  };
</script>

<svelte:head>
  <title>My Weird Wonderland</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div
  class="divbody bg-cover bg-center min-h-screen flex flex-col justify-center items-center weird-background"
>
  {#if showMessage}
    <div class="mobile-message">
      <p>This site is better experienced on desktop.</p>
      <button onclick={dismissMessage} class="dismiss-btn">Got it</button>
    </div>
  {/if}

  <div class="container justify-center weird-container">
    <h1
      class="relative w-full max-w-[800px] font-mono
              before:absolute before:inset-0 before:animate-typewriter
              before:bg-black
              after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
              after:bg-stone-700 flicker-text heading-align-left"
    >
      Welcome to my Weird Wonderland.
    </h1>

    <section class="blog-section">
      <u><h2 class="section-title">BLOG POSTS (COMING SOON)</h2></u>
      <ul class="blog-posts">
        <li>
          <a href="/blog/post-1" onmouseover={playHoverSound}>Lorem 1</a>
        </li>
        <li>
          <a href="/blog/post-2" onmouseover={playHoverSound}
            >I Took Photos of Invisible Things</a
          >
        </li>
        <li>
          <a href="/blog/post-3" onmouseover={playHoverSound}>Lorem 2</a>
        </li>
      </ul>
    </section>

    <section class="random-section">
      <u><h2 class="section-title">Explore Random Content</h2></u>
      <ul class="random-pages">
        <li>
          <a
            href="/personal/timetravel"
            onmouseover={playRandomSound}
            onclick={playRandomSound}>Click for Time Travel Predictions</a
          >
        </li>
        <li>
          <a
            href="/personal/chickenconspiracy"
            onmouseover={playRandomSound}
            onclick={playRandomSound}>The Great Chicken Conspiracy</a
          >
        </li>
        <li>
          <a
            href="/personal/music"
            onmouseover={playRandomSound}
            onclick={playRandomSound}>Explore MY Music</a
          >
        </li>
        <li>
          <a
            href={getRandomPage()}
            onmouseover={playRandomSound}
            onclick={playRandomSound}>Surprise Me!</a
          >
        </li>
      </ul>
    </section>

    <section>
      <ul>
        <li>
          <footer class="text-left text-xs">
            <a href="/personal/credits">Credits</a>
          </footer>
        </li>
        <li>
          <footer class="text-left text-xs">
            <a href="/personal/contact">Say Hi</a>
          </footer>
        </li>
        <footer class="text-left text-xs">
          <a href="mailto:me@leohanney.com">Have an idea? Let me know.</a>
        </footer>
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
    background: url("/giphy.gif") no-repeat center center fixed;
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
    animation: containerAnimation 10s ease-in-out infinite;
    max-width: 800px;
    width: 100%;
  }

  .container:hover {
    animation-play-state: paused;
  }

  @keyframes containerAnimation {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    25% {
      transform: translateX(20px) rotate(10deg);
    }
    50% {
      transform: translateX(0) rotate(-10deg);
    }
    75% {
      transform: translateX(-20px) rotate(10deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  h1 {
    font-size: 2em;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #ff00ff;
    text-shadow:
      0 0 15px #ff00ff,
      0 0 30px #ff00ff;
    animation: glitch 2s infinite;
    text-align: left;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  @keyframes glitch {
    0% {
      transform: translate(0px, 0px);
    }
    10% {
      transform: translate(-5px, -5px);
    }
    20% {
      transform: translate(5px, 5px);
    }
    30% {
      transform: translate(-5px, 5px);
    }
    40% {
      transform: translate(5px, -5px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  .blog-posts a:hover,
  .random-pages a:hover {
    color: #00ff00;
    transform: scale(1.2);
    text-decoration: underline;
  }

  .random-section {
    margin-top: 40px;
  }

  .random-pages {
    list-style: none;
    padding: 0;
  }

  .random-pages li {
    margin: 10px 0;
  }

  .mobile-message {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #ff00ff;
    text-align: center;
    padding: 10px;
    font-size: 1.2em;
    z-index: 1000;
  }

  .dismiss-btn {
    margin-left: 20px;
    padding: 5px 10px;
    background-color: #ff00ff;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1em;
  }

  .dismiss-btn:hover {
    background-color: #00ff00;
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

    .blog-posts a {
      font-size: 1.2em;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 10px;
    }

    h1 {
      font-size: 1.2em;
    }

    .blog-posts a {
      font-size: 1em;
    }
  }
</style>
