<script>
    import "../app.css";
    import { onMount } from 'svelte';
    onMount(() => {
    });
  </script>
  
  <svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Leo Hanney - Photographer</title>
    <meta property="og:title" content="Leo Hanney - Photographer" />
    <meta property="og:description" content="Hey! I'm Leo, a photographer with experience in Events, Landscape and Street!" />
    <meta property="og:image" content="https://leohanney.com/images/_DSC2618.jpg" />
  </svelte:head>
  
  <main class="bg-cover bg-center" style="position: relative; background-image: url('https://leohanney.com/images/_DSC2618.jpg');">
    <nav class="bg-opacity-75 text-white p-4 absolute top-0 w-full flex justify-center items-center">
      <a class="nav-link mr-5" href="/about" style="color: white;">About</a>
      <a class="navbar-brand text-2xl font-semibold" href="https://leohanney.com" style="color: white;">Leo Hanney</a>
      <a class="nav-link ml-5" href="https://leohanney.com/portfolio" style="color: white;">Portfolio</a>
    </nav>
  
    <header class="bg-cover bg-center min-h-screen flex flex-col justify-center items-center">
      <div class="container mx-auto text-center">
        <h1 class="text-5xl font-bold text-white">Leo Hanney</h1>
        <p class="text-xl text-white mt-4">Each frame tells a unique story.</p>
        <br />
        <a
          class="btn btn-primary btn-lg mt-4 px-8 py-2 text-white font-bold rounded-full bg-gray-700 hover:bg-gray-800 transition duration-300 ease-in-out"
          href="/portfolio"
        >
          Explore Portfolio
        </a>
      </div>
    </header>
    <p class="text-white text-center py-3">&copy; 2024 Leo Hanney. All rights reserved.</p>
  </main>
  