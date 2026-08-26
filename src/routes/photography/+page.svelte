<script>
  import "$lib/global.css";

  let loaded = $state(false);
  let isHovered = $state(false);
  const year = new Date().getFullYear();
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Leo Hanney - Photography</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet">
  <link rel="preload" href="/images/DSC_1344.avif" as="image" type="image/avif" />
</svelte:head>

<main class="font-['Poppins'] relative h-screen w-full bg-neutral-950 text-neutral-100 overflow-hidden flex flex-col justify-between p-8 md:p-14 select-none">
  <!-- Background Image with Scale Zoom Effect -->
  <div class="absolute inset-0 z-0 overflow-hidden">
    <img
      src="/images/DSC_1344.avif"
      alt="Featured Photograph"
      class="h-full w-full object-cover transition-all duration-1000 ease-out"
      class:opacity-0={!loaded}
      class:opacity-40={loaded && !isHovered}
      class:opacity-70={loaded && isHovered}
      class:scale-105={isHovered}
      onload={() => (loaded = true)}
    />
    <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/60"></div>
  </div>


  <header class="relative z-10 flex justify-between items-start">
    <a href="/" class="group flex flex-col text-left">
      <span class="text-xs uppercase tracking-[0.3em] font-medium text-white">Leo Hanney</span>
      <span class="text-[10px] tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors">Digital Portfolio</span>
    </a>

    <nav class="flex gap-8 text-xs tracking-[0.2em] font-light text-neutral-300">
      <a href="/about" class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">About</a>
      <a href="/portfolio" class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">Portfolio</a>
    </nav>
  </header>

  <section class="relative z-10 max-w-lg mb-4">
    <p class="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2">Featured Shot / Mary in the Alley</p>
    
    <a
      href="/portfolio"
      onmouseenter={() => (isHovered = true)}
      onmouseleave={() => (isHovered = false)}
      class="group inline-flex items-center gap-6"
    >
      <h1 class="text-4xl md:text-6xl font-extralight tracking-tight text-white group-hover:italic transition-all">
        Explore Work
      </h1>
      <span class="w-10 h-[1px] bg-white/40 group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
    </a>
  </section>

  <!-- Bottom Bar: Split Metadata -->
  <footer class="relative z-10 flex justify-between items-end text-[10px] tracking-[0.25em] text-neutral-400 font-light">
    <div>
      <span>Based in UK</span>
    </div>
    <div>
      &copy; {year} Leo Hanney
    </div>
  </footer>
</main>