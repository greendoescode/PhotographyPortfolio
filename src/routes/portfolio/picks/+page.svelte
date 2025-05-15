<script>
  import "$lib/global.css";
  import { onMount } from "svelte";

  let collections = [
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
        "/images/picks/image1.avif",
      ],
    },
  ];

  let backgroundImage = "";
  let fullscreenImage = null;
  let fullscreenMetadata = null;
  let showFullscreen = false;
  let currentIndex = 0;

  onMount(async () => {
    const randomIndex = Math.floor(
      Math.random() * collections[0].images.length
    );
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

  const getImageMetadata = (imageUrl) => {
    const metadata = {
      "/images/picks/DSC_9327.avif": {
        caption: "Snow Covered Toboggan",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/200th",
          iso: "4000",
          dateTaken: "08-11-2024",
        },
      },
      "/images/picks/DSC_8717.avif": {
        caption: "View of Brean Down",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/400th",
          iso: "1800",
          dateTaken: "05-11-2024",
        },
      },
      "/images/picks/DSC_8556.avif": {
        caption: "The home of all - IKEA, a place to get lost in.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/400th",
          iso: "720",
          dateTaken: "05-11-2024",
        },
      },
      "/images/picks/DSC_7916-Enhanced-NR.avif": {
        caption: "I do love buses, but this stop is better.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/125th",
          iso: "2200",
          dateTaken: "12-05-2025",
        },
      },
      "/images/picks/DSC_7677.avif": {
        caption: "The dim hallways of Tyntesfield",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/250th",
          iso: "8000",
          dateTaken: "16-10-2024",
        },
      },
      "/images/picks/DSC_7283.avif": {
        caption:
          "The exterior of Tyntesfield, standing strong after all these years.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/1250th",
          iso: "180",
          dateTaken: "16-10-2024",
        },
      },
      "/images/picks/DSC_6995.avif": {
        caption: "Ahhh the mirror. Love the mirror.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/10",
          shutterSpeed: "1/100th",
          iso: "250",
          dateTaken: "01-04-2025",
        },
      },
      "/images/picks/DSC_4404.avif": {
        caption: "A Bus. I Love Bus.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/160th",
          iso: "125",
          dateTaken: "07-02-2025",
        },
      },
      "/images/picks/DSC_3916.avif": {
        caption: "The point of Sand Point, sometimes windy, sometimes serene.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/1250th",
          iso: "120",
          dateTaken: "04-02-2025",
        },
      },
      "/images/picks/DSC_3867.avif": {
        caption: "Symbolic Wedding Gift",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "?",
          shutterSpeed: "?",
          iso: "?",
          dateTaken: "20-04-2024",
        },
      },
      "/images/picks/DSC_3768.avif": {
        caption: "Hill to sea. I like birnbeck.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/1250th",
          iso: "100",
          dateTaken: "04-02-2025",
        },
      },
      "/images/picks/DSC_3674-Enhanced-NR.avif": {
        caption: "One windy day brought out this photo. Very Cool.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/100th",
          iso: "12800",
          dateTaken: "09-04-2024",
        },
      },
      "/images/picks/DSC_2554.avif": {
        caption: "The woods with a slightly bad edit at the end.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/200th",
          iso: "2500",
          dateTaken: "17-01-2025",
        },
      },
      "/images/picks/DSC_1344.avif": {
        textColor: "black",
        caption:
          "An interesting religious side of the people-less project I did for a while.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "4s",
          iso: "450",
          dateTaken: "11-12-2024",
        },
      },
      "/images/picks/DSC_1257.avif": {
        caption:
          "Fairy lights wrapped around a tree, on a even windier day then the beach. Storm Darragh I think.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "15s",
          iso: "140",
          dateTaken: "07-12-2024",
        },
      },
      "/images/picks/DSC_1254-Enhanced-NR.avif": {
        caption:
          "Another take on the fairy light tree, same day just further back.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "15s",
          iso: "320",
          dateTaken: "07-12-2024",
        },
      },
      "/images/picks/DSC_0108-2.avif": {
        caption:
          "I like shooting at mendip, I feel people actually want their photo taken.",
        exif: {
          camera: "Nikon Z6",
          lens: "40mm f/2",
          aperture: "f/2",
          shutterSpeed: "1/160th",
          iso: "9000",
          dateTaken: "08-11-2024",
        },
      },
      "/images/picks/20240119-DSC07166-Enhanced-NR.avif": {
        caption: "A wintery scene, with steepholm in the background.",
        exif: {
          camera: "Sony Alpha 77m2",
          lens: "24-75mm f/2.8",
          aperture: "f/2.8",
          shutterSpeed: "1/8000th",
          iso: "400",
          dateTaken: "19-01-2024",
        },
      },
      "/images/picks/20231030-_DSC5800-Enhanced-NR.avif": {
        caption: "Scary. Ghost on stairs. Tyntesfield",
        exif: {
          camera: "Sony Alpha 33",
          lens: "18-55mm F3.5-5.6",
          aperture: "f/5.6",
          shutterSpeed: "1/200th",
          iso: "400",
          dateTaken: "30-10-2023",
        },
      },
      "/images/picks/image1.avif": {
        caption: "Ghost staring through and old window, love it.",
        exif: {
          camera: "Sony Alpha 33",
          lens: "18-55mm F3.5-5.6",
          aperture: "f/5.6",
          shutterSpeed: "1/2000th",
          iso: "400",
          dateTaken: "30-10-2023",
        },
      },
    };

    return metadata[imageUrl] || { caption: "No caption", exif: {} };
  };

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
    currentIndex =
      (currentIndex - 1 + collections[0].images.length) %
      collections[0].images.length;
    toggleFullScreen(collections[0].images[currentIndex]);
  }

  const year = new Date().getFullYear();
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Top Picks - Leo Hanney</title>
  <meta property="og:title" content="Top Picks - Leo Hanney" />
  <meta
    property="og:description"
    content="My Top Picks for photos I've shot, including some never seen before."
  />
  <meta property="og:image" content="/images/_DSC2618.avif" />
</svelte:head>

<div>
  <nav
    class="bg-opacity-75 text-white p-4 absolute top-0 w-full flex justify-center items-center"
  >
    <a class="nav-link mr-5" href="/about" style="color: white;">About</a>
    <a
      class="navbar-brand text-2xl font-semibold"
      href="/photography"
      style="color: white;">Leo Hanney</a
    >
    <a class="nav-link ml-5" href="/portfolio" style="color: white;"
      >Portfolio</a
    >
  </nav>

  <section id="portfolio" class="py-5">
    <div class="container mx-auto mt-20 text-center">
      <h1 class="text-5xl font-bold text-white mb-4">Top Picks</h1>
      <p class="text-lg font-bold text-white mb-8">
        My Top Picks for photos I've shot, including some never seen before.
      </p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {#each collections[0].images as image, index}
          <div>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              title={getImageMetadata(image).caption}
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
    <div
      class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center"
      on:click={closeFullscreen}
    >
      <div class="relative w-full h-full p-4" on:click={closeFullscreen}>
        <img
          src={fullscreenImage}
          alt="Fullscreen Image"
          class="w-auto h-auto max-h-full max-w-full mx-auto"
        />
        <button
          class="absolute top-4 right-4 text-white text-3xl font-bold z-50"
          on:click|stopPropagation={closeFullscreen}
          aria-label="Close"
        >
          &times;
        </button>
        <button
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50"
          on:click|stopPropagation={showPreviousImage}
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50"
          on:click|stopPropagation={showNextImage}
          aria-label="Next image"
        >
          →
        </button>
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-{fullscreenMetadata.textColor ||
            'white'} bg-opacity-70 px-4 py-2 rounded-lg"
        >
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
