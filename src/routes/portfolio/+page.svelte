<script>
  import { onMount } from 'svelte';
  import "./app.css";
  const collections = [
    {
      name: "Mendip Ski",
      link: "https://leohanney.com/portfolio/mendipski"
    },
    {
      name: "Whirlwind Band",
      link: "https://leohanney.com/portfolio/whirlwindband"
    },
    {
      name: "Twilight Toboganning",
      link: "https://leohanney.com/portfolio/twilightoboganning"
    },
    {
      name: "Weston-super-mare",
      link: "https://leohanney.com/portfolio/ghosts"
    }
  ];

  function getLastPartOfUrl(url) {
    const parts = url.split('/');
    return parts[parts.length - 1];
  }

  async function fetchFirstImage(link) {
    const portfolioName = getLastPartOfUrl(link);
    const response = await fetch(`https://leohanney.com/images/${portfolioName}/image1.avif`);
    return response.ok ? `https://leohanney.com/images/${portfolioName}/image1.avif` : null;
  }

  let collectionItems = [];

  onMount(async () => {
    collectionItems = await Promise.all(collections.map(async collection => {
      const thumbnailUrl = await fetchFirstImage(collection.link);
      return { ...collection, thumbnailUrl };
    }));
  });
  const year = new Date().getFullYear();
</script>

<svelte:head>
  <title>Leo Hanney - Photographer</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main class="bg-cover bg-center" style="background: #f00; position: relative; background-image: url('https://leohanney.com/images/_DSC3786.jpg');">

    <nav class="bg-opacity-75 text-white p-4 absolute top-0 w-full flex justify-center items-center">
        <a class="nav-link mr-5" href="https://leohanney.com/about" style="color: white;">About</a>
        <a class="navbar-brand text-2xl font-semibold" href="https://leohanney.com" style="color: white;">Leo Hanney</a>
        <a class="nav-link ml-5" href="https://leohanney.com/portfolio" style="color: white;">Portfolio</a>
    </nav>

  <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-cover bg-center min-h-screen">
    {#each collectionItems as { name, link, thumbnailUrl }, index}
      <div class="col-md-4" style="margin-top: 100px;">
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src={thumbnailUrl} alt={name} class="w-full h-64 object-cover" />
          <div class="p-4">
            <a href={link} class="block bg-gray-900 text-white text-center py-2 rounded mt-2 hover:bg-gray-700 transition duration-300 ease-in-out">{name}</a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <footer class="bg-dark text-white text-center py-3">
    <p class="text-white text-center py-3" style="margin-top:-3rem">&copy; {year} Leo Hanney. All rights reserved.</p>
  </footer>

</main>
