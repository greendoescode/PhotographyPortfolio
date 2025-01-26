<script>
  import "$lib/global.css";
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <title>Leo Hanney</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-green-950 bg-[length:1200%_1200%] animate-gradient-animate z-[-1]" transition:fade={{ duration: 250 }}></div>

<div
  class="flex items-center justify-center min-h-screen px-4 py-12 bg-black bg-opacity-50"
  transition:fade={{ duration: 250 }}
>
  <div class="text-center max-w-3xl w-full">
    <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-8">
      Welcome!
    </h1>
    <p
      class="text-base sm:text-lg text-white mb-8 sm:mb-12"
      transition:fade={{ duration: 250 }}
    >
      This page acts as a forwarder for my websites
    </p>
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <a
        href="https://volaris.leohanney.com"
        class="bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        transition:fade={{ duration: 250 }}
      >
        Volaris
      </a>
      <a
        href="/photography"
        class="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-500 transition duration-300"
        transition:fade={{ duration: 250 }}
      >
        Photography
      </a>
    </div>
    <p
      class="text-base sm:text-lg text-white mb-6"
      transition:fade={{ duration: 250 }}
    >
      <a
        href="https://github.com/greendoescode"
        class="text-green-400 hover:underline">Github</a
      >
      or
      <a href="https://github.com/volar-is" class="text-green-400 hover:underline">Volaris Github</a> for
      the latest updates.
    </p>
  </div>
</div>

<!-- Tailwind CSS Custom Animation -->
<style>
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animate-gradient-animate {
    animation: gradientAnimation 15s ease infinite;
  }
</style>