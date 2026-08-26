<script lang="ts">
  import { onMount } from "svelte";
  import "$lib/global.css";

  interface Collection {
    name: string;
    description: string;
    images: string[];
  }

  const collection: Collection = {
    name: "Mendip Ski",
    description: "The first shoot I did at Mendip Ski",
    images: Array.from(
      { length: 12 },
      (_, i) => `/images/mendipski/image${i + 1}.avif`,
    ),
  };

  let bgImage = $state<string>("");
  let selectedImage = $state<string | null>(null);
  let bgLoaded = $state<boolean>(false);
  const year: number = new Date().getFullYear();

  onMount(() => {
    const randomIndex = Math.floor(Math.random() * collection.images.length);
    bgImage = collection.images[randomIndex];
  });

  function openLightbox(imageUrl: string): void {
    selectedImage = imageUrl;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox(): void {
    selectedImage = null;
    document.body.style.overflow = "auto";
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (event.key === "Escape") closeLightbox();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{collection.name} - Leo Hanney</title>
  <meta property="og:title" content="{collection.name} - Leo Hanney" />
  <meta property="og:description" content={collection.description} />
  <meta property="og:image" content={collection.images[0]} />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main
  class="font-['Poppins'] relative min-h-screen w-full bg-neutral-950 text-neutral-100 flex flex-col justify-between p-8 md:p-14 select-none"
>
  <!-- Dynamic Background Photo -->
  {#if bgImage}
    <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <img
        src={bgImage}
        alt="Collection background"
        class="h-full w-full object-cover transition-opacity duration-1000 ease-out opacity-15"
        class:opacity-0={!bgLoaded}
        class:opacity-15={bgLoaded}
        onload={() => (bgLoaded = true)}
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/50"
      ></div>
    </div>
  {/if}

  <!-- Header -->
  <header class="relative z-10 flex justify-between items-start mb-12">
    <a href="/" class="group flex flex-col text-left">
      <span class="text-xs uppercase tracking-[0.3em] font-medium text-white"
        >Leo Hanney</span
      >
      <span
        class="text-[10px] tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors"
        >Collection View</span
      >
    </a>

    <nav
      class="flex gap-8 text-xs tracking-[0.2em] font-light text-neutral-300"
    >
      <a
        href="/about"
        class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
        >About</a
      >
      <a
        href="/photography"
        class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
        >Photography</a
      >
      <a
        href="/portfolio"
        class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
        >Portfolio</a
      >
    </nav>
  </header>

  <!-- Collection Section -->
  <section class="relative z-10 max-w-7xl mx-auto w-full my-auto py-6">
    <!-- Back Button Bar -->
    <div class="mb-6">
      <a
        href="/portfolio"
        class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors group"
      >
        <span
          class="transition-transform duration-200 group-hover:-translate-x-1"
          >&larr;</span
        > Back to Collections
      </a>
    </div>
    <div
      class="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6"
    >
      <div>
        <span
          class="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-1"
          >Gallery</span
        >
        <h1
          class="text-3xl md:text-5xl font-extralight tracking-tight text-white"
        >
          {collection.name}
        </h1>
      </div>
      <p class="text-xs tracking-wider font-light text-neutral-400 max-w-md">
        {collection.description}
      </p>
    </div>

    <!-- Masonry/Flexible Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {#each collection.images as image, index}
        <button
          type="button"
          onclick={() => openLightbox(image)}
          class="group relative block w-full aspect-[3/2] overflow-hidden rounded-md bg-neutral-900/40 border border-white/5 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-white/40"
        >
          <img
            src={image}
            alt={`${collection.name} photo ${index + 1}`}
            loading="lazy"
            class="object-cover w-full h-full transition duration-500 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        </button>
      {/each}
    </div>
  </section>

  <!-- Lightbox Modal -->
  {#if selectedImage}
    <div
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      onclick={closeLightbox}
      onkeydown={(e) => e.key === "Enter" && closeLightbox()}
      class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
    >
      <img
        src={selectedImage}
        alt="Expanded view"
        class="max-w-full max-h-[90vh] object-contain rounded shadow-2xl transition-all duration-300"
      />
      <button
        type="button"
        onclick={closeLightbox}
        class="absolute top-6 right-8 text-neutral-400 hover:text-white text-xs uppercase tracking-[0.3em]"
      >
        Close [Esc]
      </button>
    </div>
  {/if}

  <!-- Footer -->
  <footer
    class="relative z-10 flex justify-between items-end text-[10px] tracking-[0.25em] text-neutral-400 font-light pt-12"
  >
    <div>Based in UK</div>
    <div>&copy; {year} Leo Hanney</div>
  </footer>
</main>
