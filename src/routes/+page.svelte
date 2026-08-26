<script>
  import "$lib/global.css";
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <title>Leo Hanney</title>
  <meta charset="UTF-8" />
</svelte:head>

<main
  class="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-center items-center px-6"
  transition:fade={{ duration: 200 }}
>
  <div class="max-w-md w-full flex flex-col items-center gap-8">
    <h1 class="text-xl font-light tracking-wide text-neutral-200">
      Leo Hanney
    </h1>

    <nav class="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm">
      <a href="https://volaris.leohanney.com" class="nav-link">Volaris</a>
      <a href="/photography" class="nav-link">Photography</a>
      <a href="/personal" class="nav-link">Personal</a>
      <a
        href="https://github.com/greendoescode"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-link"
      >
        GitHub
      </a>
    </nav>
  </div>
</main>

<style>
  .nav-link {
    color: #a3a3a3;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .nav-link:hover {
    color: #ffffff;
  }
</style>