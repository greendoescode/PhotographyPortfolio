<script>
  import { onMount } from "svelte";
  import "$lib/global.css";

  const collections = [
    {
      name: "Twilight Toboganning",
      link: "/portfolio/twilightoboganning",
    },
    {
      name: "Top Picks",
      link: "/portfolio/picks",
    },
    {
      name: "Mendip Ski",
      link: "/portfolio/mendipski",
    },
    {
      name: "Windy Tree",
      link: "/portfolio/windytree",
    },
  ];

  function getLastPartOfUrl(url) {
    const parts = url.split("/");
    return parts[parts.length - 1];
  }

  async function fetchFirstImage(link) {
    const portfolioName = getLastPartOfUrl(link);
    const response = await fetch(`images/${portfolioName}/image1.avif`);
    return response.ok ? `images/${portfolioName}/image1.avif` : null;
  }

  let collectionItems = [];

  onMount(async () => {
    collectionItems = await Promise.all(
      collections.map(async (collection) => {
        const thumbnailUrl = await fetchFirstImage(collection.link);
        return { ...collection, thumbnailUrl };
      })
    );
  });

  const year = new Date().getFullYear();
</script>

<svelte:head>
  <title>Leo Hanney - Photographer</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main
  class="bg-cover bg-center min-h-screen flex flex-col"
  style="background-image: url('images/_DSC3786.avif');"
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

  <section class="pt-32 pb-16 px-4 max-w-screen-xl mx-auto w-full flex-grow">
    <div
      class="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {#each collectionItems as { name, link, thumbnailUrl }}
        <a
          href={link}
          class="group block overflow-hidden rounded-2xl shadow-lg bg-white transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="aspect-w-4 aspect-h-3">
            <img
              src={thumbnailUrl}
              alt={name}
              loading="lazy"
              class="object-contain w-full h-full transition duration-300 group-hover:scale-105"
            />
          </div>
          <div class="p-4 text-center">
            <h2
              class="text-lg font-semibold text-gray-800 group-hover:text-gray-600 transition"
            >
              {name}
            </h2>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <footer class="text-white text-center py-6">
    &copy; {year} Leo Hanney. All rights reserved.
  </footer>
</main>
