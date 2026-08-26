<script lang="ts">
  import { onMount } from "svelte";
  import "$lib/global.css";

  interface ExifData {
    camera?: string;
    lens?: string;
    aperture?: string;
    shutterSpeed?: string;
    iso?: string;
    dateTaken?: string;
  }

  interface ImageMeta {
    caption: string;
    textColor?: string;
    exif: ExifData;
  }

  interface Collection {
    name: string;
    images: string[];
  }

  const collections: Collection[] = [
    {
      name: "Picks",
      images: [
        "/images/picks/DSC_9327.avif",
        "/images/picks/DSC_8717.avif",
        "/images/picks/DSC_8556.avif",
        "/images/picks/DSC_7916-Enhanced-NR.avif",
        "/images/picks/DSC_7677.avif",
        "/images/picks/DSC_7283.avif",
        "/images/picks/DSC_6995.avif",
        "/images/picks/DSC_4404.avif",
        "/images/picks/DSC_3916.avif",
        "/images/picks/DSC_3867.avif",
        "/images/picks/DSC_3768.avif",
        "/images/picks/DSC_3674-Enhanced-NR.avif",
        "/images/picks/DSC_2554.avif",
        "/images/picks/DSC_1344.avif",
        "/images/picks/DSC_1257.avif",
        "/images/picks/DSC_1254-Enhanced-NR.avif",
        "/images/picks/DSC_0108-2.avif",
        "/images/picks/20240119-DSC07166-Enhanced-NR.avif",
        "/images/picks/20231030-_DSC5800-Enhanced-NR.avif",
        "/images/picks/image1.avif"
      ]
    }
  ];

  const imageMetadataMap: Record<string, ImageMeta> = {
    "/images/picks/DSC_9327.avif": {
      caption: "Snow Covered Toboggan",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/200th", iso: "4000", dateTaken: "08-11-2024" }
    },
    "/images/picks/DSC_8717.avif": {
      caption: "View of Brean Down",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/400th", iso: "1800", dateTaken: "05-11-2024" }
    },
    "/images/picks/DSC_8556.avif": {
      caption: "The home of all - IKEA, a place to get lost in.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/400th", iso: "720", dateTaken: "05-11-2024" }
    },
    "/images/picks/DSC_7916-Enhanced-NR.avif": {
      caption: "I do love buses, but this stop is better.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/125th", iso: "2200", dateTaken: "12-05-2025" }
    },
    "/images/picks/DSC_7677.avif": {
      caption: "The dim hallways of Tyntesfield",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/250th", iso: "8000", dateTaken: "16-10-2024" }
    },
    "/images/picks/DSC_7283.avif": {
      caption: "The exterior of Tyntesfield, standing strong after all these years.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/1250th", iso: "180", dateTaken: "16-10-2024" }
    },
    "/images/picks/DSC_6995.avif": {
      caption: "Ahhh the mirror. Love the mirror.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/10", shutterSpeed: "1/100th", iso: "250", dateTaken: "01-04-2025" }
    },
    "/images/picks/DSC_4404.avif": {
      caption: "A Bus. I Love Bus.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/160th", iso: "125", dateTaken: "07-02-2025" }
    },
    "/images/picks/DSC_3916.avif": {
      caption: "The point of Sand Point, sometimes windy, sometimes serene.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/1250th", iso: "120", dateTaken: "04-02-2025" }
    },
    "/images/picks/DSC_3867.avif": {
      caption: "Symbolic Wedding Gift",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "?", shutterSpeed: "?", iso: "?", dateTaken: "20-04-2024" }
    },
    "/images/picks/DSC_3768.avif": {
      caption: "Hill to sea. I like birnbeck.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/1250th", iso: "100", dateTaken: "04-02-2025" }
    },
    "/images/picks/DSC_3674-Enhanced-NR.avif": {
      caption: "One windy day brought out this photo. Very Cool.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/100th", iso: "12800", dateTaken: "09-04-2024" }
    },
    "/images/picks/DSC_2554.avif": {
      caption: "The woods with a slightly bad edit at the end.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/200th", iso: "2500", dateTaken: "17-01-2025" }
    },
    "/images/picks/DSC_1344.avif": {
      textColor: "black",
      caption: "An interesting religious side of the people-less project I did for a while.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "4s", iso: "450", dateTaken: "11-12-2024" }
    },
    "/images/picks/DSC_1257.avif": {
      caption: "Fairy lights wrapped around a tree, on a even windier day then the beach. Storm Darragh I think.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "15s", iso: "140", dateTaken: "07-12-2024" }
    },
    "/images/picks/DSC_1254-Enhanced-NR.avif": {
      caption: "Another take on the fairy light tree, same day just further back.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "15s", iso: "320", dateTaken: "07-12-2024" }
    },
    "/images/picks/DSC_0108-2.avif": {
      caption: "I like shooting at mendip, I feel people actually want their photo taken.",
      exif: { camera: "Nikon Z6", lens: "40mm f/2", aperture: "f/2", shutterSpeed: "1/160th", iso: "9000", dateTaken: "08-11-2024" }
    },
    "/images/picks/20240119-DSC07166-Enhanced-NR.avif": {
      caption: "A wintery scene, with steepholm in the background.",
      exif: { camera: "Sony Alpha 77m2", lens: "24-75mm f/2.8", aperture: "f/2.8", shutterSpeed: "1/8000th", iso: "400", dateTaken: "19-01-2024" }
    },
    "/images/picks/20231030-_DSC5800-Enhanced-NR.avif": {
      caption: "Scary. Ghost on stairs. Tyntesfield",
      exif: { camera: "Sony Alpha 33", lens: "18-55mm F3.5-5.6", aperture: "f/5.6", shutterSpeed: "1/200th", iso: "400", dateTaken: "30-10-2023" }
    },
    "/images/picks/image1.avif": {
      caption: "Ghost staring through and old window, love it.",
      exif: { camera: "Sony Alpha 33", lens: "18-55mm F3.5-5.6", aperture: "f/5.6", shutterSpeed: "1/2000th", iso: "400", dateTaken: "30-10-2023" }
    }
  };

  let imageList = $state<string[]>([...collections[0].images]);
  let bgImage = $state<string>("");
  let bgLoaded = $state<boolean>(false);
  let showFullscreen = $state<boolean>(false);
  let currentIndex = $state<number>(0);
  let showExif = $state<boolean>(true);

  const year: number = new Date().getFullYear();

  function getImageMetadata(imageUrl: string): ImageMeta {
    return imageMetadataMap[imageUrl] || { caption: "No caption", exif: {} };
  }

  let currentMetadata = $derived<ImageMeta>(getImageMetadata(imageList[currentIndex]));

  onMount(async () => {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    bgImage = imageList[randomIndex];

    // Calculate aspect ratios to organize portraits first
    const metadataList = await Promise.all(
      imageList.map(
        (src) =>
          new Promise<{ src: string; height: number; isPortrait: boolean }>((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve({
                src,
                height: img.naturalHeight,
                isPortrait: img.naturalHeight > img.naturalWidth
              });
            };
            img.src = src;
          })
      )
    );

    const portraits = metadataList.filter((img) => img.isPortrait).sort((a, b) => b.height - a.height);
    const landscapes = metadataList.filter((img) => !img.isPortrait);
    imageList = [...portraits, ...landscapes].map((img) => img.src);
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
  <title>Top Picks - Leo Hanney</title>
  <meta property="og:title" content="Top Picks - Leo Hanney" />
  <meta property="og:description" content="My Top Picks for photos I've shot, including some never seen before." />
  <meta property="og:image" content="/images/_DSC2618.avif" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet">
</svelte:head>

<main class="font-['Poppins'] relative min-h-screen w-full bg-neutral-950 text-neutral-100 flex flex-col justify-between p-8 md:p-14 select-none">
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
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/50"></div>
    </div>
  {/if}

  <!-- Header -->
  <header class="relative z-10 flex justify-between items-start mb-12">
    <a href="/" class="group flex flex-col text-left">
      <span class="text-xs uppercase tracking-[0.3em] font-medium text-white">Leo Hanney</span>
      <span class="text-[10px] tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors">Top Picks</span>
    </a>

    <nav class="flex gap-8 text-xs tracking-[0.2em] font-light text-neutral-300">
      <a href="/about" class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">About</a>
      <a href="/photography" class="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">Photography</a>
  </header>

  <!-- Collection Section -->
  <section class="relative z-10 max-w-7xl mx-auto w-full my-auto py-6">
    <!-- Back Button Bar -->
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
        <span class="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-1">Featured Works</span>
        <h1 class="text-3xl md:text-5xl font-extralight tracking-tight text-white">Top Picks</h1>
      </div>
      <p class="text-xs tracking-wider font-light text-neutral-400 max-w-md">
        My top picks for photos I've shot, including some never seen before.
      </p>
    </div>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each imageList as image, index}
        <button
          type="button"
          onclick={() => toggleFullScreen(index)}
          class="group relative block w-full aspect-[3/2] overflow-hidden rounded-md bg-neutral-900/40 border border-white/5 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-white/40"
        >
          <img
            src={image}
            alt={getImageMetadata(image).caption}
            title={getImageMetadata(image).caption}
            loading="lazy"
            class="object-cover w-full h-full transition duration-500 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        </button>
      {/each}
    </div>
  </section>

  <!-- Lightbox Modal with EXIF Drawer -->
  {#if showFullscreen}
    <div
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      onclick={closeFullscreen}
      onkeydown={(e) => e.key === "Enter" && closeFullscreen()}
      class="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
    >
      <!-- Main Lightbox Image -->
      <img
        src={imageList[currentIndex]}
        alt={currentMetadata.caption}
        class="max-w-full max-h-[85vh] object-contain rounded shadow-2xl transition-all duration-300"
      />

      <!-- Navigation & Close Controls -->
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

      <!-- Overlay EXIF Metadata Box -->
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
            {#if currentMetadata.exif.camera}
              <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">Camera</span>{currentMetadata.exif.camera}</div>
            {/if}
            {#if currentMetadata.exif.lens}
              <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">Lens</span>{currentMetadata.exif.lens}</div>
            {/if}
            {#if currentMetadata.exif.aperture}
              <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">Aperture</span>{currentMetadata.exif.aperture}</div>
            {/if}
            {#if currentMetadata.exif.shutterSpeed}
              <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">Shutter</span>{currentMetadata.exif.shutterSpeed}</div>
            {/if}
            {#if currentMetadata.exif.iso}
              <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">ISO</span>{currentMetadata.exif.iso}</div>
            {/if}
            {#if currentMetadata.exif.dateTaken}
              <div><span class="text-neutral-500 block text-[9px] uppercase tracking-wider">Date</span>{currentMetadata.exif.dateTaken}</div>
            {/if}
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