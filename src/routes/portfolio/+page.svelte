<script lang="ts">
  import "$lib/global.css";

  interface Collection {
    name: string;
    link: string;
    thumbnailUrl: string;
    lqipUrl: string;
  }

  const collections: Collection[] = [
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

  let bgLoaded = $state<boolean>(false);
  let loadedThumbnails = $state<Record<string, boolean>>({});
  const year: number = new Date().getFullYear();

  function handleBgDecode(node: HTMLImageElement) {
    const trigger = () => {
      node.decode()
        .then(() => (bgLoaded = true))
        .catch(() => (bgLoaded = true));
    };
    if (node.complete) trigger();
    else node.onload = trigger;
  }

  function handleThumbnailDecode(node: HTMLImageElement, url: string) {
    const trigger = () => {
      node.decode()
        .then(() => (loadedThumbnails[url] = true))
        .catch(() => (loadedThumbnails[url] = true));
    };
    if (node.complete) trigger();
    else node.onload = trigger;
  }
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Leo Hanney - Collections</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet" />

  <!-- Preload LCP Background Image -->
  <link rel="preload" href="/images/_DSC3786.avif" as="image" type="image/avif" fetchpriority="high" />
</svelte:head>

<main class="font-['Poppins'] relative min-h-screen w-full bg-neutral-950 text-neutral-100 flex flex-col justify-between p-8 md:p-14 select-none">
  <!-- Background Image Overlay -->
  <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <img
      src="/images/_DSC3786.avif"
      alt="Portfolio Background"
      decoding="async"
      fetchpriority="high"
      class="h-full w-full object-cover transform-gpu transition-all duration-1000 ease-in-out will-change-[opacity,filter]"
      class:opacity-0={!bgLoaded}
      class:blur-md={!bgLoaded}
      class:opacity-20={bgLoaded}
      class:blur-0={bgLoaded}
      use:handleBgDecode
    />
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
      {#each collections as { name, link, thumbnailUrl, lqipUrl }}
        {@const isLoaded = loadedThumbnails[thumbnailUrl]}
        
        <a
          href={link}
          data-sveltekit-preload-data="hover"
          class="group relative block overflow-hidden rounded-lg bg-neutral-900/50 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:-translate-y-1"
        >
          <!-- Thumbnail Aspect Container -->
          <div class="aspect-[4/3] w-full overflow-hidden bg-neutral-950 relative">
            
            <!-- 1. Low-Res Placeholder (Visually matches initial high-res blur) -->
            <img
              src={lqipUrl}
              alt=""
              aria-hidden="true"
              class="absolute inset-0 h-full w-full object-cover blur-md scale-105 transform-gpu opacity-60"
            />

            <!-- 2. High-Res Image (Decodes off-thread, then dissolves from blur-md -> blur-0) -->
            <img
              src={thumbnailUrl}
              alt={name}
              decoding="async"
              class="absolute inset-0 object-cover w-full h-full transform-gpu transition-all duration-1000 ease-in-out will-change-[opacity,filter,transform]"
              class:opacity-0={!isLoaded}
              class:blur-md={!isLoaded}
              class:opacity-80={isLoaded}
              class:blur-0={isLoaded}
              class:group-hover:scale-105={isLoaded}
              class:group-hover:opacity-100={isLoaded}
              use:handleThumbnailDecode={thumbnailUrl}
            />
          </div>

          <!-- Card Label -->
          <div class="p-4 flex justify-between items-center border-t border-white/5 bg-neutral-900/40">
            <h2 class="text-xs font-light tracking-wider text-neutral-200 group-hover:text-white transition-colors">
              {name}
            </h2>
            <span class="text-[10px] text-neutral-500 group-hover:text-neutral-300 transition-colors">&rarr;</span>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <!-- Footer -->
  <footer class="relative z-10 flex justify-between items-end text-[10px] tracking-[0.25em] text-neutral-400 font-light pt-12">
    <div>Based in UK</div>
    <div>&copy; {year} Leo Hanney</div>
  </footer>
</main>