<script>
    import "../app.css";
    import { onMount } from 'svelte';
    
    let collections = [
      {
        name: 'Mendip Ski Toboganning',
        images: [
            'https://leohanney.com/images/twilightoboganning/image1.avif',
            'https://leohanney.com/images/twilightoboganning/image2.avif',
            'https://leohanney.com/images/twilightoboganning/image3.avif',
            'https://leohanney.com/images/twilightoboganning/image4.avif',
            'https://leohanney.com/images/twilightoboganning/image5.avif',
            'https://leohanney.com/images/twilightoboganning/image6.avif',
            'https://leohanney.com/images/twilightoboganning/image7.avif',
            'https://leohanney.com/images/twilightoboganning/image8.avif',
            'https://leohanney.com/images/twilightoboganning/image9.avif',
            'https://leohanney.com/images/twilightoboganning/image10.avif',
            'https://leohanney.com/images/twilightoboganning/image11.avif',
            'https://leohanney.com/images/twilightoboganning/image12.avif',
            'https://leohanney.com/images/twilightoboganning/image13.avif',
            'https://leohanney.com/images/twilightoboganning/image14.avif',
            'https://leohanney.com/images/twilightoboganning/image15.avif',
            'https://leohanney.com/images/twilightoboganning/image16.avif',
            'https://leohanney.com/images/twilightoboganning/image17.avif',
            'https://leohanney.com/images/twilightoboganning/image18.avif',
            'https://leohanney.com/images/twilightoboganning/image19.avif',
            'https://leohanney.com/images/twilightoboganning/image20.avif',
            'https://leohanney.com/images/twilightoboganning/image21.avif',
            'https://leohanney.com/images/twilightoboganning/image22.avif',
            'https://leohanney.com/images/twilightoboganning/image23.avif',
            'https://leohanney.com/images/twilightoboganning/image24.avif',
            'https://leohanney.com/images/twilightoboganning/image25.avif',
            'https://leohanney.com/images/twilightoboganning/image26.avif',
            'https://leohanney.com/images/twilightoboganning/image27.avif',
            'https://leohanney.com/images/twilightoboganning/image28.avif',
            'https://leohanney.com/images/twilightoboganning/image29.avif',
            'https://leohanney.com/images/twilightoboganning/image30.avif',
            'https://leohanney.com/images/twilightoboganning/image31.avif'
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
    <title>Twilight Toboganning - Leo Hanney</title>
    <meta property="og:title" content="Twilight Toboganning - Leo Hanney" />
    <meta property="og:description" content="Shoot for Mendip Activity Centers Twilight Toboganning" />
    <meta property="og:image" content="https://leohanney.com/images/_DSC2618.jpg" />
</svelte:head>

<div>
    <nav class="bg-opacity-75 text-white p-4 absolute top-0 w-full flex justify-center items-center">
        <a class="nav-link mr-5" href="https://leohanney.com/services" style="color: white;">Services</a>
        <a class="navbar-brand text-2xl font-semibold" href="https://leohanney.com" style="color: white;">Leo Hanney</a>
        <a class="nav-link ml-5" href="https://leohanney.com/portfolio" style="color: white;">Portfolio</a>
    </nav>

    <section id="portfolio" class="py-5">
        <div class="container mx-auto mt-20 text-center">
            <h1 class="text-5xl font-bold text-white mb-4">Twilight Toboganning</h1>
            <p class="text-lg font-bold text-white mb-8">Shoot for Mendip Activity Centers Twilight Toboganning.</p>
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


