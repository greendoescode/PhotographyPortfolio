<script>
    import "../app.css";
    import { onMount } from 'svelte';
    
    let collections = [
      {
        name: 'Mendip Ski',
        images: [
            'https://leohanney.com/images/mendipski/image1.avif',
            'https://leohanney.com/images/mendipski/image2.avif',
            'https://leohanney.com/images/mendipski/image3.avif',
            'https://leohanney.com/images/mendipski/image4.avif',
            'https://leohanney.com/images/mendipski/image5.avif',
            'https://leohanney.com/images/mendipski/image6.avif',
            'https://leohanney.com/images/mendipski/image7.avif',
            'https://leohanney.com/images/mendipski/image8.avif',
            'https://leohanney.com/images/mendipski/image9.avif',
            'https://leohanney.com/images/mendipski/image10.avif',
            'https://leohanney.com/images/mendipski/image11.avif',
            'https://leohanney.com/images/mendipski/image12.avif',
            'https://leohanney.com/images/mendipski/image13.avif',
            'https://leohanney.com/images/mendipski/image14.avif'
        ]
      }
    ];
    let backgroundImage = '';

    onMount(() => {
    const randomIndex = Math.floor(Math.random() * collections[0].images.length);
    backgroundImage = `url('${collections[0].images[randomIndex]}')`;
    
    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    });
    const year = new Date().getFullYear();
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weston-super-mare - Leo Hanney</title>
    <meta property="og:title" content="Mendip Ski - Leo Hanney" />
    <meta property="og:description" content="Some of my mendip ski work!" />
    <meta property="og:image" content="https://leohanney.com/images/_DSC2618.jpg" />
</svelte:head>

<div>
    <nav class="bg-opacity-75 text-white p-4 absolute top-0 w-full flex justify-center items-center">
        <a class="nav-link mr-5" href="/about" style="color: white;">About</a>
        <a class="navbar-brand text-2xl font-semibold" href="https://leohanney.com" style="color: white;">Leo Hanney</a>
        <a class="nav-link ml-5" href="https://leohanney.com/portfolio" style="color: white;">Portfolio</a>
    </nav>

    <section id="portfolio" class="py-5">
        <div class="container mx-auto mt-20 text-center">
            <h1 class="text-5xl font-bold text-white mb-4">Mendip Ski</h1>
            <p class="text-lg font-bold text-white mb-8">Some of my mendip ski work!</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {#each collections[0].images as image, index}
                    <div>
                        <img src={image} alt={`Image ${index + 1}`} class="w-full h-auto cursor-pointer" />
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <footer class="text-white text-center py-3">&copy; {year} Leo Hanney. All rights reserved.</footer>
</div>

