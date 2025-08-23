<script>
  import "$lib/global.css";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";

  // Lyrics pieces
  const lyrics = {
    "ashes-fall": {
      title: "Ashes Fall",
      content: [
        { type: "text", value: "Verse 1:\nDust on the floor, and my hands won’t heal\nStatic on the radio, nothing feels real\nYou left your boots by the backdoor light\nSaid you’d be gone by Friday night" },
        { type: "text", value: "Verse 2:\nCigarette ash in the windowsill\nDrunk on dreams I can’t sit still\nBroken glass on the basement floor\nI can’t remember what I’m fighting for" },
        { type: "text", value: "Verse 3:\nMidnight call — I let it ring\nBurnt-out words don’t mean a thing\nYou get high, I fade to black\nStill chasing what I can’t get back" },
        { type: "text", value: "Bridge:\nEmpty bed and a static screen\nI chase ghosts in every scene\nThe house still smells like your goodbye\nI light a match and let it die" },
        { type: "text", value: "Ending:\nAshes fall where love once grew\nYour echo fades behind my door\nLetting go, I’m moving on\nFinding peace where I belong" }
      ]
    },
    "free-falling": {
      title: "Free-Falling for You",
      content: [
        { type: "text", value: "Free-falling for you\nI'm not gonna make\nthe same mistake" },
        { type: "text", value: "I breathe all the same\nbut I don't know\nwhat I live for" }
      ]
    }
  };

  // Get slug from URL
  let slug = $page.params.slug;
  let piece = lyrics[slug] || {
    title: "Lyrics Not Found",
    content: [{ type: "text", value: "This piece doesn't exist." }]
  };

  // Random background GIF
  const gifs = [
    "/giphy.gif",
    "/giphy2.gif",
    "/giphy3.gif",
    "/giphy4.gif",
    "/giphy5.gif",
    "/giphy6.gif",
    "/giphy7.gif",
    "/giphy9.gif"
  ];
  let backgroundGif = gifs[Math.floor(Math.random() * gifs.length)];
</script>

<svelte:head>
  <title>{piece.title}</title>
</svelte:head>

<div
  class="divbody bg-cover bg-center min-h-screen flex flex-col justify-center items-center weird-background"
  style="background-image: url({backgroundGif});"
  transition:fade|global={{ duration: 250 }}
>
  <div class="container justify-center weird-container">
    <div class="text-box-bg">
      <h1>{piece.title}</h1>
      {#each piece.content as item}
        {#if item.type === "text"}
          <p class="game-theory">{item.value}</p>
        {:else if item.type === "image"}
          <img src={item.src} alt={item.alt} class="post-image" />
        {:else if item.type === "link"}
          <a href={item.href} target="_blank" rel="noopener" class="post-link">{item.text}</a>
        {/if}
      {/each}
    </div>

    <div class="flex flex-col justify-center items-center mt-4">
      <a href="/personal/lyrics">Back to Lyrics Index</a>
      <a href="/personal" class="mt-2">Back to Home</a>
    </div>
  </div>
</div>

<style>
  .text-box-bg {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
    text-align: left;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .divbody {
    font-family: "Courier New", monospace;
    color: #e0e0e0;
    background: #000;
    overflow: hidden;
  }

  .weird-background {
    background-size: cover;
    background-position: center;
    animation: weirdAnimation 20s infinite, gentleFlicker 5s infinite;
  }

  @keyframes weirdAnimation {
    0% { background-color: #ff00ff; }
    50% { background-color: #00ffff; }
    100% { background-color: #ff00ff; }
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

  .game-theory {
    font-size: 1.2em;
    text-align: left;
    max-width: 700px;
    margin: 0 auto 15px auto;
    line-height: 1.6;
    white-space: pre-line;
    word-wrap: break-word;
  }

  .post-image {
    max-width: 700px;
    width: 100%;
    margin: 15px auto;
    display: block;
    border-radius: 8px;
  }

  .post-link {
    display: inline-block;
    color: #00ff00;
    text-decoration: underline;
    margin: 10px 0;
  }

  .post-link:hover { color: #ffffff; }

  @media (max-width: 768px) {
    .text-box-bg { padding: 10px 15px; }
    .game-theory { max-width: 90%; font-size: 1.1em; }
    .post-image { max-width: 90%; }
  }

  @media (max-width: 480px) {
    .text-box-bg { padding: 8px 12px; }
    .game-theory { font-size: 1em; }
    .post-image { max-width: 100%; }
  }
</style>
