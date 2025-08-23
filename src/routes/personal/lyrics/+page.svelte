<script>
  import "$lib/global.css";
  import { fade } from "svelte/transition";

  // Lyrics pieces
  const lyrics = {
    "ashes-fall": {
      title: "Ashes Fall"
    },
    "free-falling": {
      title: "Free-Falling for You"
    }
    // Add more pieces here as needed
  };
</script>

<svelte:head>
  <title>Lyrics & Poetry Corner</title>
</svelte:head>

<div class="divbody bg-cover bg-center min-h-screen flex flex-col justify-center items-center weird-background" transition:fade|global={{ duration: 250 }}>
  <div class="container">
    <div class="text-box-bg">
      <h1>Lyrics & Poetry Corner</h1>
      <p>Welcome! Here’s a collection of my lyrics and poetry pieces. Click any title to read the full piece.</p>
      <ul class="lyrics-list">
        {#each Object.entries(lyrics) as [slug, piece]}
          <li>
            <a href={`/personal/lyrics/${slug}`} class="lyrics-link">{piece.title}</a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="flex flex-col justify-center items-center mt-4">
      <a href="/personal">Back to Home</a>
      <p>Credit to @anasabdin for the background</p>
    </div>
  </div>
</div>

<style>
  .divbody {
    font-family: "Courier New", monospace;
    color: #e0e0e0;
    background: #111;
    overflow: hidden;
  }

  .weird-background {
    background-image: url(/goodone.gif);
    background-size: cover;
    background-position: center;
    animation: weirdAnimation 20s infinite, gentleFlicker 5s infinite;
  }

  @keyframes weirdAnimation {
    0% { background-color: #6b4226; }
    50% { background-color: #8b5e3c; }
    100% { background-color: #6b4226; }
  }

  @keyframes gentleFlicker {
    0% { opacity: 1; }
    10% { opacity: 0.95; }
    20% { opacity: 1; }
    30% { opacity: 0.98; }
    40% { opacity: 1; }
    50% { opacity: 0.97; }
    60% { opacity: 1; }
    100% { opacity: 1; }
  }

  .container {
    margin-top: 60px;
    margin-bottom: 60px;
    width: 90%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-box-bg {
    background-color: rgba(20, 20, 20, 0.85);
    padding: 20px 30px;
    border-radius: 12px;
    color: #f0f0f0;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0,0,0,0.5);
  }

  .text-box-bg h1 {
    margin-bottom: 15px;
    font-size: 2em;
    color: #ffdd99;
  }

  .text-box-bg p {
    margin-bottom: 20px;
    font-size: 1.1em;
    line-height: 1.5;
    color: #ddd;
  }

  .lyrics-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .lyrics-link {
    display: block;
    font-size: 1.3em;
    color: #ffd700;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.2s ease;
  }

  .lyrics-link:hover {
    color: #ffffff;
    transform: translateX(5px);
  }

  .back-home {
    margin-top: 10px;
    background-color: #444;
    padding: 8px 16px;
    border-radius: 999px;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s;
  }

  .back-home:hover {
    background-color: #666;
  }

  @media (max-width: 768px) {
    .text-box-bg {
      padding: 15px 20px;
    }
    .lyrics-link {
      font-size: 1.1em;
    }
  }

  @media (max-width: 480px) {
    .text-box-bg {
      padding: 12px 15px;
    }
    .lyrics-link {
      font-size: 1em;
    }
  }
</style>
