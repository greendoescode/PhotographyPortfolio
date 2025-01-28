<script>
  import { onMount } from "svelte"; // Import onMount
  import "$lib/global.css";

  const playHoverSound = () => {
    const audio = new Audio("/beep.mp3");
    audio.play();
  };

  let position = { x: 0, y: 0 };
  let velocity = { x: 2, y: 2 };
  let container;
  let animationFrame;
  let isPaused = false;

  // Function to check if we're in the browser and if it's a mobile screen
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const moveContainer = () => {
    if (isPaused || isMobile) return; // Pause animation if hovered or on mobile

    const containerRect = container.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Update position
    position.x += velocity.x;
    position.y += velocity.y;

    // Check for collision with screen edges
    if (position.x + containerRect.width >= screenWidth || position.x <= 0) {
      velocity.x *= -1;
    }
    if (position.y + containerRect.height >= screenHeight || position.y <= 0) {
      velocity.y *= -1;
    }

    // Apply position to container
    container.style.transform = `translate(${position.x}px, ${position.y}px)`;

    // Request the next frame
    animationFrame = requestAnimationFrame(moveContainer);
  };

  const pauseAnimation = () => {
    isPaused = true;
  };

  const resumeAnimation = () => {
    isPaused = false;
    moveContainer();
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      // Only run this in the browser
      container = document.querySelector(".container");
      container.addEventListener("mouseenter", pauseAnimation);
      container.addEventListener("mouseleave", resumeAnimation);
      if (!isMobile) {
        moveContainer();
      }

      // Listen for window resize to update isMobile dynamically
      window.addEventListener("resize", () => {
        if (window.innerWidth <= 768) {
          isPaused = true; // Pause animation if resized to mobile
        } else {
          isPaused = false; // Resume animation if resized back to desktop
          moveContainer();
        }
      });
    }
  });
</script>

<svelte:head>
  <title>Credits</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div
  class="divbody bg-cover bg-center min-h-screen flex flex-col justify-center items-start"
>
  <div class="container">
    <h1 class="font-mono text-2xl text-pink-500 mb-6">Credits</h1>

    <section class="credits-section">
      <p class="description text-lg mb-4">
        I'd like to thank:
      </p>

      <ul class="credits-list">
        <li class="mb-2">
          <a
            href="https://giphy.com/gustavo"
            target="_blank"
            class="hover:text-green-400 text-green-300 text-base"
            onmouseover={playHoverSound}
          >
            Kidmograph (Gustavo Torres) - Creator of the GIFs
          </a>
        </li>
        <li class="mb-2">
          <a
            href="https://twitter.com/fvmsfvms"
            target="_blank"
            class="hover:text-green-400 text-green-300 text-base"
            onmouseover={playHoverSound}
          >
            fvm$ - The Halo Rat guy.
          </a>
        </li>
      </ul>
    </section>

    <section class="interaction-section mt-8">
      <h2 class="section-title underline mb-4 text-pink-500">What’s Next?</h2>
      <ul class="interaction-list">
        <li class="mb-2">
          <a
            href="/personal"
            class="hover:text-green-400 text-green-300 text-base"
            onmouseover={playHoverSound}>Go back to Home</a
          >
        </li>
      </ul>
    </section>
  </div>
</div>

<style>
  .divbody {
    margin: 0;
    padding: 20px;
    height: 100%;
    width: 100%;
    font-family: "Courier New", monospace;
    color: #e0e0e0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background: #000;
    overflow: hidden;
    background: url("/giphy5.gif") no-repeat center center;
    background-size: cover;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 2px solid #ff00ff;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    max-width: 600px;
    width: 100%;
    position: absolute;
  }

  h1 {
    text-transform: uppercase;
    text-shadow:
      0 0 15px #ff00ff,
      0 0 30px #ff00ff;
  }

  .credits-list {
    list-style: none;
    padding: 0;
  }

  .interaction-list {
    list-style: none;
    padding: 0;
  }

  @media (max-width: 768px) {
    .container {
      max-width: 90%;
      padding: 15px;
    }

    h1 {
      font-size: 1.5em;
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
