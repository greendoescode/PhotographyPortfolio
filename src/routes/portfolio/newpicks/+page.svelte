<script lang="ts">
  import { onMount } from "svelte";
  import "$lib/global.css";

  interface ExifData {
    camera: string;
    lens: string;
    aperture: string;
    shutterSpeed: string;
    iso: string;
    dateTaken: string;
  }

  interface ImageMeta {
    caption: string;
    exif: ExifData;
  }

  interface ImageItem {
    src: string;
    filename: string;
    exif: ExifData;
  }

  const rawImageData = [
    { filename: "DSC_2719.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/640", iso: "140", dateTaken: "2025:11:26 15:44" },
    { filename: "DSC_2818.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/400", iso: "800", dateTaken: "2025:11:29 11:45" },
    { filename: "DSC_3228.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/125", iso: "2500", dateTaken: "2026:01:19 22:47" },
    { filename: "DSC_3241.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/50", iso: "12800", dateTaken: "2026:01:19 22:58" },
    { filename: "DSC_4356.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/200", iso: "100", dateTaken: "2026:03:31 12:35" },
    { filename: "DSC_4643.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/1000", iso: "100", dateTaken: "2026:05:09 17:22" },
    { filename: "DSC_4803.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/8000", iso: "100", dateTaken: "2026:05:12 11:12" },
    { filename: "DSC_4943.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/1600", iso: "100", dateTaken: "2026:05:23 10:27" },
    { filename: "DSC_5058.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/2500", iso: "100", dateTaken: "2026:05:23 18:08" },
    { filename: "DSC_5116.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/100", iso: "12800", dateTaken: "2026:05:23 18:21" },
    { filename: "DSC_5483.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/60", iso: "3200", dateTaken: "2026:05:24 02:37" },
    { filename: "DSC_5915.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/800", iso: "100", dateTaken: "2026:06:17 16:05" },
    { filename: "DSC_5988.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/8000", iso: "110", dateTaken: "2025:02:22 12:38" },
    { filename: "DSC_6489.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/1250", iso: "8000", dateTaken: "2026:08:07 19:56" },
    { filename: "DSC_8759.avif", camera: "Nikon Z6", lens: "NIKKOR Z 40mm f/2", aperture: "f/2.0", shutterSpeed: "1/8000", iso: "100", dateTaken: "2025:05:31 11:55" }
  ];

  const images: ImageItem[] = rawImageData.map((item) => ({
    src: `/images/newpicks/${item.filename}`,
    filename: item.filename,
    exif: {
      camera: item.camera,
      lens: item.lens,
      aperture: item.aperture,
      shutterSpeed: item.shutterSpeed,
      iso: item.iso,
      dateTaken: item.dateTaken
    }
  }));

  let imageList = $state<ImageItem[]>([...images]);
  let bgImage = $state<string>("");
  let bgLoaded = $state<boolean>(false);
  let showFullscreen = $state<boolean>(false);
  let currentIndex = $state<number>(0);
  let showExif = $state<boolean>(true);

  const year: number = new Date().getFullYear();

  let currentMetadata = $derived<ImageMeta>({
    caption: `${imageList[currentIndex]?.filename ?? ""}`,
    exif: imageList[currentIndex]?.exif ?? {
      camera: "Nikon Z6",
      lens: "NIKKOR Z 40mm f/2",
      aperture: "f/2.0",
      shutterSpeed: "?",
      iso: "?",
      dateTaken: "?"
    }
  });

  onMount(async () => {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    bgImage = imageList[randomIndex].src;

    // Aspect ratio calculation to place portraits first
    const metadataList = await Promise.all(
      imageList.map(
        (item) =>
          new Promise<{ item: ImageItem; height: number; isPortrait: boolean }>((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve({
                item,
                height: img.naturalHeight,
                isPortrait: img.naturalHeight > img.naturalWidth
              });
            };
            img.src = item.src;
          })
      )
    );

    const portraits = metadataList.filter((img) => img.isPortrait).sort((a, b) => b.height - a.height);
    const landscapes = metadataList.filter((img) => !img.isPortrait);
    imageList = [...portraits, ...landscapes].map((entry) => entry.item);
  });

  function toggleFullScreen(index: number): void {
    currentIndex = index;
    showFullscreen = true;
    document.body.style.overflow = "hidden";
  }

  function closeFullscreen(): void {
    showFullscreen = false;
    document.body.style.overflow = "auto";
  }

  function showNextImage(): void {
    currentIndex = (currentIndex + 1) % imageList.length;
  }

  function showPreviousImage(): void {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (!showFullscreen) return;
    if (event.key === "Escape") closeFullscreen();
    if (event.key === "ArrowRight") showNextImage();
    if (event.key === "ArrowLeft") showPreviousImage();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Picks — Leo Hanney</title>
  <meta property="og:title" content="New Picks — Leo Hanney" />
  <meta property="og:description" content="A fresh selection of photos captured with the Nikon Z6 and 40mm f/2." />
  <meta property="og:image" content="/images/newpicks/DSC_2719.avif" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet" />
</svelte:head>

<main class="font-['Poppins'] relative min-h-screen w-full bg-neutral-950 text-neutral-100 flex flex-col justify-between p-8 md:p-14 select-none">
  <!-- Dynamic Background Overlay -->
  {#if bgImage}
    <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <img
        src={bgImage}
        alt="Collection background"
        loading="eager"
        decoding="async"
        class="h-full w-full object-cover transition-opacity duration-1000 ease-out opacity-15"
        class:opacity-0={!bgLoaded}
        class:opacity-15={bgLoaded}
        onload={() => (bgLoaded = true)}
      />
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/50"></div>
    </div>
  {/if}

  <!-- Header -->
  <header class="relative z-10 flex justify-between items-start mb-12">
    <a href="/" class="group flex flex-col text-left">
      <span class="text-xs uppercase tracking-[0.3em] font-medium text-white">Leo Hanney</span>
      <span class="text-[10px] tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors">New Picks</span>
    </a>

    <nav class="flex gap-8 text-xs tracking-[0.2em] font-light text-neutral-300">
      <a href="/about" data-sveltekit-preload-data="hover" class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">About</a>
      <a href="/photography" data-sveltekit-preload-data="hover" class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">Photography</a>
      <a href="/portfolio" data-sveltekit-preload-data="hover" class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">Portfolio</a>
    </nav>
  </header>

  <!-- Main Section -->
  <section class="relative z-10 max-w-7xl mx-auto w-full my-auto py-6">
    <div class="mb-6">
      <a
        href="/portfolio"
        class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors group"
      >
        <span class="transition-transform duration-200 group-hover:-translate-x-1">&larr;</span> Back to Collections
      </a>
    </div>

    <div class="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
      <div>
        <span class="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-1">Gallery</span>
        <h1 class="text-3xl md:text-5xl font-extralight tracking-tight text-white">New Picks</h1>
      </div>
      <p class="text-xs tracking-wider font-light text-neutral-400 max-w-md">
        My year so far.
    </div>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each imageList as item, index}
        <button
          type="button"
          onclick={() => toggleFullScreen(index)}
          class="group relative block w-full aspect-[3/2] overflow-hidden rounded-md bg-neutral-900/40 border border-white/5 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-white/40"
        >
          <img
            src={item.src}
            alt={`New Picks photo ${item.filename}`}
            title="New Picks"
            loading="eager"
            decoding="async"
            class="object-cover w-full h-full transition duration-500 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        </button>
      {/each}
    </div>
  </section>

  <!-- Lightbox Modal -->
  {#if showFullscreen}
    <div
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      onclick={closeFullscreen}
      onkeydown={(e) => e.key === "Enter" && closeFullscreen()}
      class="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
    >
      <img
        src={imageList[currentIndex].src}
        alt={currentMetadata.caption}
        class="max-w-full max-h-[85vh] object-contain rounded shadow-2xl transition-all duration-300"
      />

      <a
        href="/portfolio"
        onclick={(e) => e.stopPropagation()}
        class="absolute top-6 left-8 text-neutral-400 hover:text-white text-xs uppercase tracking-[0.3em] z-50 flex items-center gap-1 group"
      >
        <span class="transition-transform duration-200 group-hover:-translate-x-1">&larr;</span> Back
      </a>

      <button
        type="button"
        onclick={closeFullscreen}
        class="absolute top-6 right-8 text-neutral-400 hover:text-white text-xs uppercase tracking-[0.3em] z-50"
      >
        Close [Esc]
      </button>

      <button
        type="button"
        onclick={(e) => { e.stopPropagation(); showPreviousImage(); }}
        class="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-2xl p-4 transition-colors z-50"
        aria-label="Previous image"
      >
        &#8592;
      </button>

      <button
        type="button"
        onclick={(e) => { e.stopPropagation(); showNextImage(); }}
        class="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-2xl p-4 transition-colors z-50"
        aria-label="Next image"
      >
        &#8594;
      </button>

      <!-- EXIF Drawer Card -->
      <div
        role="presentation"
        onclick={(e) => e.stopPropagation()}
        onkeydown={(e) => e.stopPropagation()}
        class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900/80 border border-white/10 backdrop-blur-md px-6 py-4 rounded-xl text-center max-w-lg w-[90%] shadow-2xl transition-all duration-300 z-50"
      >
        <div class="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
          <h3 class="text-sm font-medium text-white tracking-wide">{currentMetadata.caption}</h3>
          <button
            type="button"
            onclick={() => (showExif = !showExif)}
            class="text-[10px] uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            {showExif ? "Hide EXIF" : "Show EXIF"}
          </button>
        </div>

        {#if showExif && currentMetadata.exif}
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-[11px] font-light text-neutral-300 text-left">
            <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">Camera</span>{currentMetadata.exif.camera}</div>
            <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">Lens</span>{currentMetadata.exif.lens}</div>
            <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">Aperture</span>{currentMetadata.exif.aperture}</div>
            <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">Shutter</span>{currentMetadata.exif.shutterSpeed}</div>
            <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">ISO</span>{currentMetadata.exif.iso}</div>
            <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">Date</span>{currentMetadata.exif.dateTaken}</div>
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <!-- Footer -->
  <footer class="relative z-10 flex justify-between items-end text-[10px] tracking-[0.25em] text-neutral-400 font-light pt-12">
    <div>Based in UK</div>
    <div>&copy; {year} Leo Hanney</div>
  </footer>
</main>