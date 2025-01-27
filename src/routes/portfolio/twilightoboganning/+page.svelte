<script>
    import '$lib/global.css';
    import { onMount } from 'svelte';
    
    let collections = [
      {
        name: 'Mendip Ski Toboganning',
        images: [
            '/images/twilightoboganning/image1.avif',
            '/images/twilightoboganning/image2.avif',
            '/images/twilightoboganning/image3.avif',
            '/images/twilightoboganning/image4.avif',
            '/images/twilightoboganning/image5.avif',
            '/images/twilightoboganning/image6.avif',
            '/images/twilightoboganning/image7.avif',
            '/images/twilightoboganning/image8.avif',
            '/images/twilightoboganning/image9.avif',
            '/images/twilightoboganning/image10.avif',
            '/images/twilightoboganning/image11.avif',
            '/images/twilightoboganning/image12.avif',
            '/images/twilightoboganning/image13.avif',
            '/images/twilightoboganning/image14.avif',
            '/images/twilightoboganning/image15.avif',
            '/images/twilightoboganning/image16.avif',
            '/images/twilightoboganning/image17.avif',
            '/images/twilightoboganning/image18.avif',
            '/images/twilightoboganning/image19.avif',
            '/images/twilightoboganning/image20.avif',
            '/images/twilightoboganning/image21.avif',
            '/images/twilightoboganning/image22.avif',
            '/images/twilightoboganning/image23.avif',
            '/images/twilightoboganning/image24.avif',
            '/images/twilightoboganning/image25.avif',
            '/images/twilightoboganning/image26.avif',
            '/images/twilightoboganning/image27.avif',
            '/images/twilightoboganning/image28.avif',
            '/images/twilightoboganning/image29.avif',
            '/images/twilightoboganning/image30.avif',
            '/images/twilightoboganning/image31.avif'
        ]
      }
    ];
    let backgroundImage = '';
    let fullscreen = false;
    let imgElement;

    onMount(() => {
    const randomIndex = Math.floor(Math.random() * collections[0].images.length);
    backgroundImage = `url('${collections[0].images[randomIndex]}')`;

    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    });
    const year = new Date().getFullYear();
    function toggleFullScreen(imageUrl) {
        if (!fullscreen) {
            imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.style.position = 'fixed';
            imgElement.style.top = '0';
            imgElement.style.left = '0';
            imgElement.style.width = '100%';
            imgElement.style.height = '100%';
            imgElement.style.zIndex = '9999';
            imgElement.style.cursor = 'zoom-out';
            imgElement.addEventListener('click', exitFullScreen);

            document.body.appendChild(imgElement);

            if (imgElement.requestFullscreen) {
                imgElement.requestFullscreen();
            } else if (imgElement.webkitRequestFullscreen) {
                imgElement.webkitRequestFullscreen();
            } else if (imgElement.msRequestFullscreen) {
                imgElement.msRequestFullscreen();
            }

            fullscreen = true;
        } else {
            exitFullScreen();
        }
    }

    function exitFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }

        imgElement.parentNode.removeChild(imgElement);
        fullscreen = false;
    }
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Twilight Toboganning - Leo Hanney</title>
    <meta property="og:title" content="Twilight Toboganning - Leo Hanney" />
    <meta property="og:description" content="Shoot for Mendip Activity Centers Twilight Toboganning" />
    <meta property="og:image" content="/images/_DSC2618.avif" />
</svelte:head>

<div>
    <nav class="bg-opacity-75 text-white p-4 absolute top-0 w-full flex justify-center items-center">
        <a class="nav-link mr-5" href="/about" style="color: white;">About</a>
        <a class="navbar-brand text-2xl font-semibold" href="/photography" style="color: white;">Leo Hanney</a>
        <a class="nav-link ml-5" href="/portfolio" style="color: white;">Portfolio</a>
    </nav>

    <section id="portfolio" class="py-5">
        <div class="container mx-auto mt-20 text-center">
            <h1 class="text-5xl font-bold text-white mb-4">Twilight Toboganning</h1>
            <p class="text-lg font-bold text-white mb-8">Shoot for Mendip Activity Centers Twilight Toboganning.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {#each collections[0].images as image, index}
                    <div>
                        <img src={image} alt={`Image ${index + 1}`} class="w-full h-auto cursor-pointer" onclick={() => toggleFullScreen(image)} />
                    </div>
                {/each}
            </div>
        </div>
    </section>


    <footer class="text-white text-center py-3">&copy; {year} Leo Hanney. All rights reserved.</footer>
</div>


