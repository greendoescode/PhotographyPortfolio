<script>
  import "$lib/global.css";
  import { onMount } from "svelte";

  let collections = [
    {
      name: "Windy Tree",
      images: Array.from({ length: 10 }, (_, i) => 
        `/images/windytree/image${i + 1}.avif`
      ),
    },
  ];

  let backgroundImage = "";
  let fullscreenImage = null;
  let fullscreenMetadata = null;
  let showFullscreen = false;
  let currentIndex = 0;

  onMount(async () => {
    const randomIndex = Math.floor(Math.random() * collections[0].images.length);
    const imageToLoad = collections[0].images[randomIndex];

    const img = new Image();
    img.onload = () => {
      backgroundImage = `url('${imageToLoad}')`;
      document.body.style.backgroundImage = backgroundImage;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
    };
    img.src = imageToLoad;

    const metadata = await Promise.all(
      collections[0].images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve({
                src,
                width: img.naturalWidth,
                height: img.naturalHeight,
                isPortrait: img.naturalHeight > img.naturalWidth,
              });
            };
            img.src = src;
          })
      )
    );

    const portraits = metadata
      .filter((img) => img.isPortrait)
      .sort((a, b) => b.height - a.height);
    const landscapes = metadata.filter((img) => !img.isPortrait);
    collections[0].images = [...portraits, ...landscapes].map((img) => img.src);

    window.addEventListener("keydown", handleKey);
  });

  function handleKey(e) {
    if (!showFullscreen) return;
    if (e.key === "Escape") closeFullscreen();
    if (e.key === "ArrowRight") showNextImage();
    if (e.key === "ArrowLeft") showPreviousImage();
  }

  function getImageMetadata(imageUrl) {
    return {
      caption: "Windy Tree",
      exif: {
        camera: "Nikon Z6",
        lens: "40mm f/2",
        aperture: "F2",
        shutterSpeed: "Average of 12.11 second",
        iso: "Average of 400",
        dateTaken: "07-12-2024",
      },
    };
  }

  function toggleFullScreen(imageUrl) {
    currentIndex = collections[0].images.findIndex((img) => img === imageUrl);
    const metadata = getImageMetadata(imageUrl);
    fullscreenImage = imageUrl;
    fullscreenMetadata = {
      ...metadata,
      textColor: metadata.textColor || "white",
    };
    showFullscreen = true;
  }

  function closeFullscreen() {
    showFullscreen = false;
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % collections[0].images.length;
    toggleFullScreen(collections[0].images[currentIndex]);
  }

  function showPreviousImage() {
    currentIndex = (currentIndex - 1 + collections[0].images.length) % collections[0].images.length;
    toggleFullScreen(collections[0].images[currentIndex]);
  }

  const year = new Date().getFullYear();
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Windy Tree - Leo Hanney</title>
  <meta property="og:title" content="Windy Tree - Leo Hanney" />
  <meta property="og:description" content="A Windy Tree covered in fairy lights from Storm Darragh" />
  <meta property="og:image" content="/images/windytree/image1.avif" />
</svelte:head>

<div>
  <nav class="bg-opacity-75 text-white p-4 absolute top-0 w-full flex justify-center items-center">
    <a class="nav-link mr-5" href="/about" style="color: white;">About</a>
    <a class="navbar-brand text-2xl font-semibold" href="/photography" style="color: white;">Leo Hanney</a>
    <a class="nav-link ml-5" href="/portfolio" style="color: white;">Portfolio</a>
  </nav>

  <section id="portfolio" class="py-5">
    <div class="container mx-auto mt-20 text-center">
      <h1 class="text-5xl font-bold text-white mb-4">Windy Tree</h1>
      <p class="text-lg font-bold text-white mb-8">
        A Windy Tree covered in fairy lights from Storm Darragh
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each collections[0].images as image, index}
          <div>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              title="Mendip Ski Tobogganing"
              loading="lazy"
              class="w-full h-auto cursor-pointer"
              on:click={() => toggleFullScreen(image)}
            />
          </div>
        {/each}
      </div>
    </div>
  </section>

  {#if showFullscreen}
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center" on:click={closeFullscreen}>
      <div class="relative w-full h-full p-4" on:click={closeFullscreen}>
        <img
          src={fullscreenImage}
          alt="Fullscreen Image"
          class="w-auto h-auto max-h-full max-w-full mx-auto"
        />
        <button class="absolute top-4 right-4 text-white text-3xl font-bold z-50" on:click|stopPropagation={closeFullscreen}>
          &times;
        </button>
        <button class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50" on:click|stopPropagation={showPreviousImage}>
          ←
        </button>
        <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50" on:click|stopPropagation={showNextImage}>
          →
        </button>
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white bg-opacity-70 px-4 py-2 rounded-lg">
          <h3 class="text-lg font-semibold">{fullscreenMetadata.caption}</h3>
          <p>{`Camera: ${fullscreenMetadata.exif.camera}`}</p>
          <p>{`Lens: ${fullscreenMetadata.exif.lens}`}</p>
          <p>{`Aperture: ${fullscreenMetadata.exif.aperture}`}</p>
          <p>{`Shutter Speed: ${fullscreenMetadata.exif.shutterSpeed}`}</p>
          <p>{`ISO: ${fullscreenMetadata.exif.iso}`}</p>
          <p>{`Date Taken: ${fullscreenMetadata.exif.dateTaken}`}</p>
        </div>
      </div>
    </div>
  {/if}

  <footer class="text-white text-center py-3">
    &copy; {year} Leo Hanney. All rights reserved.
  </footer>
</div>

<style>
  img[loading="lazy"] {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  img[loading="lazy"]:not([src=""]) {
    opacity: 1;
  }
</style>
