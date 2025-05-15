<script>
  import "$lib/global.css";
  import { onMount } from "svelte";

  let bgImageLoaded = false;

  onMount(() => {
    const img = new Image();
    img.src = "/images/DSC_1344.avif";
    img.onload = () => (bgImageLoaded = true);
  });

  const year = new Date().getFullYear();
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Leo Hanney - Photographer</title>
  <meta name="description" content="Leo Hanney - Photographer" />
  <meta property="og:title" content="Leo Hanney - Photographer" />
  <meta property="og:description" content="Leo Hanney - Photographer" />
  <meta
    property="og:image"
    content="https://leohanney.com/images/DSC_1344.avif"
  />
  <link rel="preload" href="/images/DSC_1344.avif" as="image" />
</svelte:head>

<main
  class={`relative flex flex-col justify-center items-center h-screen w-screen text-white font-sans ${
    bgImageLoaded
      ? "bg-[url(/images/DSC_1344.avif)]"
      : "bg-[url(/images/low-quality.avif)] blur-sm"
  } bg-center bg-cover transition-filter duration-[1500ms] ease-in-out`}
>
  <nav
    class="bg-opacity-75 text-white p-4 absolute top-0 w-full flex justify-center items-center"
  >
    <a class="nav-link mr-5" href="/about" style="color: white;">About</a>
    <a
      class="navbar-brand text-2xl font-semibold"
      href="/photography"
      style="color: white;"
    >
      Leo Hanney
    </a>
    <a class="nav-link ml-5" href="/portfolio" style="color: white;">
      Portfolio
    </a>
  </nav>

  <section class="text-center max-w-xl px-4">
    <h1
      class="text-6xl md:text-7xl font-extrabold tracking-tight mb-12 select-none"
    >
      Leo Hanney
    </h1>
    <a
      href="/portfolio"
      class="inline-block px-14 py-4 rounded-full border border-white text-white font-semibold tracking-widest
         hover:bg-white hover:text-black hover:scale-105 transition transform duration-300
         focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
    >
      View Portfolio
    </a>
  </section>

  <footer
    class="absolute bottom-3 text-gray-400 text-xs tracking-widest font-light select-none"
  >
    &copy; {year} Leo Hanney. All rights reserved.
  </footer>
</main>
