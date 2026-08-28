<script lang="ts">
  import "$lib/global.css";
  import CollectionCard from "../../components/CollectionCard.svelte";

  const collections = [
    {
      name: "New Picks",
      link: "/portfolio/newpicks",
      thumbnailUrl: "/images/newpicks/DSC_2719.avif",
      lqipUrl: "/images/newpicks/DSC_2719_lq.avif"
    },
    {
      name: "Twilight Toboganning",
      link: "/portfolio/twilightoboganning",
      thumbnailUrl: "/images/twilightoboganning/image1.avif",
      lqipUrl: "/images/twilightoboganning/image1_lq.avif"
    },
    {
      name: "Top Picks",
      link: "/portfolio/picks",
      thumbnailUrl: "/images/picks/image1.avif",
      lqipUrl: "/images/picks/image1_lq.avif"
    },
    {
      name: "Mendip Ski",
      link: "/portfolio/mendipski",
      thumbnailUrl: "/images/mendipski/image1.avif",
      lqipUrl: "/images/mendipski/image1_lq.avif"
    },
    {
      name: "Windy Tree",
      link: "/portfolio/windytree",
      thumbnailUrl: "/images/windytree/image1.avif",
      lqipUrl: "/images/windytree/image1_lq.avif"
    }
  ];

  let bgLoaded = $state(false);
  const year = new Date().getFullYear();

  function setupBg(node: HTMLImageElement) {
    if (node.complete && node.naturalWidth > 0) {
      bgLoaded = true;
    }
  }
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Leo Hanney - Collections</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet" />
</svelte:head>

<main class="font-['Poppins'] relative min-h-screen w-full bg-neutral-950 text-neutral-100 flex flex-col justify-between p-8 md:p-14 select-none">
  <!-- Background Image Overlay -->
  <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    
    <!-- Image Wrapper: Locks the total brightness to 20% -->
    <div class="absolute inset-0 opacity-20">
      
      <!-- 1. Background LQIP: Highest priority, loads instantly -->
      <img
        src="/images/DSC3786_lq.avif"
        alt=""
        aria-hidden="true"
        fetchpriority="high"
        decoding="async"
        class="absolute inset-0 h-full w-full object-cover blur-xl scale-110"
      />
      
      <!-- 2. Background High-Res: Fades in to 100% (of the 20% wrapper) -->
      <img
        use:setupBg
        src="/images/_DSC3786.avif"
        alt="Portfolio Background"
        loading="eager"
        decoding="async"
        onload={() => (bgLoaded = true)}
        class="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out opacity-0"
        class:opacity-100={bgLoaded}
      />
      
    </div>

    <!-- Gradient sits on top of the images -->
    <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40"></div>
  </div>

  <!-- Header -->
  <header class="relative z-10 flex justify-between items-start mb-12">
    <a href="/" class="group flex flex-col text-left">
      <span class="text-xs uppercase tracking-[0.3em] font-medium text-white">Leo Hanney</span>
      <span class="text-[10px] tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors">Digital Portfolio</span>
    </a>

    <nav class="flex gap-8 text-xs tracking-[0.2em] font-light text-neutral-300">
      <a href="/about" data-sveltekit-preload-data="hover" class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">About</a>
      <a href="/photography" data-sveltekit-preload-data="hover" class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">Photography</a>
    </nav>
  </header>

  <!-- Gallery Section -->
  <section class="relative z-10 max-w-7xl mx-auto w-full my-auto py-6">
    <div class="mb-8">
      <span class="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-1">Index</span>
      <h1 class="text-3xl md:text-4xl font-extralight tracking-tight text-white">Selected Works</h1>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each collections as collection}
        <CollectionCard {...collection} />
      {/each}
    </div>
  </section>

  <!-- Footer -->
  <footer class="relative z-10 flex justify-between items-end text-[10px] tracking-[0.25em] text-neutral-400 font-light pt-12">
    <div>Based in UK</div>
    <div>&copy; {year} Leo Hanney</div>
  </footer>
</main>