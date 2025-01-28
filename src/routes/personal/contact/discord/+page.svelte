<script>
  import { onMount } from "svelte";
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

  // Split the username into individual letters
  const splitText = "imgreenonline".split("");

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const moveContainer = () => {
    if (isPaused || isMobile) return;

    const containerRect = container.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    position.x += velocity.x;
    position.y += velocity.y;

    if (position.x + containerRect.width >= screenWidth || position.x <= 0) {
      velocity.x *= -1;
    }
    if (position.y + containerRect.height >= screenHeight || position.y <= 0) {
      velocity.y *= -1;
    }

    container.style.transform = `translate(${position.x}px, ${position.y}px)`;

    animationFrame = requestAnimationFrame(moveContainer);
  };

  const pauseAnimation = () => {
    isPaused = true;
  };

  const resumeAnimation = () => {
    isPaused = false;
    moveContainer();
  };

  const copyToClipboard = () => {
    const textToCopy = "imgreenonline";
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log("Copied to clipboard!");
    }).catch(err => {
      console.error("Error copying text: ", err);
    });
  };

  // Function to get random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      container = document.querySelector(".container");
      container.addEventListener("mouseenter", pauseAnimation);
      container.addEventListener("mouseleave", resumeAnimation);
      if (!isMobile) {
        moveContainer();
      }

      window.addEventListener("resize", () => {
        if (window.innerWidth <= 768) {
          isPaused = true;
        } else {
          isPaused = false;
          moveContainer();
        }
      });
    }
  });
</script>

<svelte:head>
  <title>Discord Username</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="divbody bg-cover bg-center min-h-screen flex flex-col justify-center items-center">
  <div class="container move-in" onclick={copyToClipboard}>
    <h1 class="font-mono text-4xl text-pink-500 mb-6" onclick={copyToClipboard}>
      {#each splitText as letter, i}
        <span
          class="letter"
          style="color: {getRandomColor()}; animation-delay: {i * 0.1}s"
          onmouseover={playHoverSound}
        >
          {letter}
        </span>
      {/each}
    </h1>
    <p class="message">Click the username to copy</p>

    <a class="go-back-button" href="/personal/contact">Go Back</a>
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
    justify-content: center;
    align-items: center;
    background: #000;
    overflow: hidden;
    background: url("/giphy6.gif") no-repeat center center;
    background-size: cover;
  }

  .container {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 20px;
    border: 2px solid #ff00ff;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    max-width: 600px;
    width: 100%;
    position: absolute;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    text-align: center;
  }

  .move-in {
    animation: moveIn 1s ease-out forwards;
  }

  @keyframes moveIn {
    0% {
      transform: translateX(-100%); /* Start from the left side */
    }
    100% {
      transform: translateX(0); /* End in its original position */
    }
  }

  .username {
    font-size: 4vw;
    display: flex;
    justify-content: center;
    gap: 0.2rem;
    cursor: pointer;
    text-transform: uppercase;
    flex-wrap: wrap;
  }

  .letter {
    display: inline-block;
    animation: bounce 0.8s infinite alternate;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .message {
    margin-top: 20px;
    font-size: 1.5em;
    font-weight: bold;
  }

  .go-back-button {
    margin-top: 30px;
    color: white;
    border-radius: 20px;
    font-size: 1.2em;
    padding: 10px 20px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  @media (max-width: 768px) {
    .container {
      max-width: 90%;
      padding: 15px;
    }

    .username {
      font-size: 10vw;
      gap: 0.1rem;
    }

    .message {
      font-size: 1.3em;
    }

    .go-back-button {
      font-size: 1.2em;
      padding: 10px 20px;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 10px;
    }

    .username {
      font-size: 12vw;
      gap: 0.1rem;
      flex-wrap: wrap;
      word-break: break-word;
    }

    .message {
      font-size: 1.2em;
    }

    .go-back-button {
      font-size: 1.1em;
      padding: 8px 15px;
    }
  }
</style>
