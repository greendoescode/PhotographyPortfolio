<script>
    import "../app.css";
    import { onMount } from 'svelte';
    
    let collections = [
      {
        name: 'Mendip Ski',
        images: [
            'https://leohanney.com/images/whirlwindband/image1.avif',
            'https://leohanney.com/images/whirlwindband/image2.avif',
            'https://leohanney.com/images/whirlwindband/image3.avif',
            'https://leohanney.com/images/whirlwindband/image4.avif',
            'https://leohanney.com/images/whirlwindband/image5.avif',
            'https://leohanney.com/images/whirlwindband/image6.avif',
            'https://leohanney.com/images/whirlwindband/image7.avif',
            'https://leohanney.com/images/whirlwindband/image8.avif',
            'https://leohanney.com/images/whirlwindband/image9.avif',
            'https://leohanney.com/images/whirlwindband/image10.avif',
            'https://leohanney.com/images/whirlwindband/image11.avif',
            'https://leohanney.com/images/whirlwindband/image12.avif',
            'https://leohanney.com/images/whirlwindband/image13.avif',
            'https://leohanney.com/images/whirlwindband/image14.avif',
            'https://leohanney.com/images/whirlwindband/image15.avif',
            'https://leohanney.com/images/whirlwindband/image16.avif',
            'https://leohanney.com/images/whirlwindband/image17.avif',
            'https://leohanney.com/images/whirlwindband/image18.avif',
            'https://leohanney.com/images/whirlwindband/image19.avif',
            'https://leohanney.com/images/whirlwindband/image21.avif',
            'https://leohanney.com/images/whirlwindband/image22.avif',
            'https://leohanney.com/images/whirlwindband/image23.avif',
            'https://leohanney.com/images/whirlwindband/image24.avif',
            'https://leohanney.com/images/whirlwindband/image25.avif',
            'https://leohanney.com/images/whirlwindband/image26.avif',
            'https://leohanney.com/images/whirlwindband/image27.avif'
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
    <title>Whirlwind Band - Leo Hanney</title>
    <meta property="og:title" content="Whirlwind Band - Leo Hanney" />
    <meta property="og:description" content="I took these photos completely randomly, as always the WB is funny but its a nice look at these people practising. Sounded very nice :D" />
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
            <h1 class="text-5xl font-bold text-white mb-4">Whirlwind Band</h1>
            <p class="text-lg font-bold text-white mb-8">I took these photos completely randomly, as always the WB is funny but its a nice look at these people practising. Sounded very nice :D</p>
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


