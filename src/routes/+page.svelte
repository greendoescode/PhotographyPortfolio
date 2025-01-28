<script>
  import "$lib/global.css";
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <title>Leo Hanney</title>
  <meta charset="UTF-8" />
</svelte:head>

<div
  class="divbody bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
  transition:fade|global={{ duration: 250 }}
>
  <div class="container justify-center">
    <h1
      class="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-stone-700"
    >
      Welcome to My Page
    </h1>
    <a
      href="https://volaris.leohanney.com"
      target="_blank"
      rel="noopener noreferrer">Volaris</a
    >
    <a href="/photography" target="_blank" rel="noopener noreferrer"
      >Photography</a
    >
    <a href="/personal" target="_blank" rel="noopener noreferrer">Personal</a>
    <a
      href="https://github.com/greendoescode"
      target="_blank"
      rel="noopener noreferrer">Github</a
    >
  </div>
</div>

<style>
  .divbody {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: Arial, sans-serif;
    color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 2px solid #00ff00;
    background: #000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
  }

  h1 {
    padding-left: 10px;
    font-size: 2em;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #00ff00;
    text-shadow: 0 0 5px #00ff00;
  }

  a {
    color: #00ff00;
    text-decoration: none;
    margin: 5px 10px;
    padding: 5px 10px;
    border: 1px solid #00ff00;
    border-radius: 4px;
    font-size: 1em;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  a:hover {
    background-color: #00ff00;
    color: #000;
  }
</style>
