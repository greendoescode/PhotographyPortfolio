<script>
	import '../app.css';
	import { onMount } from 'svelte';

	let collections = [
		{
			name: 'Ghosts',
			images: [
				'https://leohanney.com/images/ghosts/image1.avif',
				'https://leohanney.com/images/ghosts/image2.avif',
				'https://leohanney.com/images/ghosts/image3.avif',
				'https://leohanney.com/images/ghosts/image4.avif',
				'https://leohanney.com/images/ghosts/image5.avif',
				'https://leohanney.com/images/ghosts/image6.avif',
				'https://leohanney.com/images/ghosts/image7.avif',
				'https://leohanney.com/images/ghosts/image8.avif',
				'https://leohanney.com/images/ghosts/image9.avif',
				'https://leohanney.com/images/ghosts/image10.avif',
				'https://leohanney.com/images/ghosts/image11.avif',
				'https://leohanney.com/images/ghosts/image12.avif',
				'https://leohanney.com/images/ghosts/image15.avif',
				'https://leohanney.com/images/ghosts/image16.avif',
				'https://leohanney.com/images/ghosts/image17.avif',
				'https://leohanney.com/images/ghosts/image19.avif',
				'https://leohanney.com/images/ghosts/image20.avif',
				'https://leohanney.com/images/ghosts/image21.avif',
				'https://leohanney.com/images/ghosts/image22.avif',
				'https://leohanney.com/images/ghosts/image23.avif',
				'https://leohanney.com/images/ghosts/image24.avif',
				'https://leohanney.com/images/ghosts/image25.avif',
				'https://leohanney.com/images/ghosts/image26.avif',
				'https://leohanney.com/images/ghosts/image27.avif',
				'https://leohanney.com/images/ghosts/image28.avif',
				'https://leohanney.com/images/ghosts/image18.avif'
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
	<title>Ghosts! - Leo Hanney</title>
	<meta property="og:title" content="Ghosts - Leo Hanney" />
	<meta
		property="og:description"
		content="Some of the halloweeny photos I took of my brothers in sheets."
	/>
	<meta property="og:image" content="https://leohanney.com/images/_DSC2618.jpg" />
</svelte:head>

<div>
	<nav class="bg-opacity-75 text-white p-4 absolute top-0 w-full flex justify-center items-center">
		<a class="nav-link mr-5" href="https://leohanney.com/services" style="color: white;">Services</a
		>
		<a
			class="navbar-brand text-2xl font-semibold"
			href="https://leohanney.com"
			style="color: white;">Leo Hanney</a
		>
		<a class="nav-link ml-5" href="https://leohanney.com/portfolio" style="color: white;"
			>Portfolio</a
		>
	</nav>

	<section id="portfolio" class="py-5">
		<div class="container mx-auto mt-20 text-center">
			<h1 class="text-5xl font-bold text-white mb-4">Ghosts</h1>
			<p class="text-lg font-bold text-white mb-8">
				Some of the halloweeny photos I took of my brothers in sheets.
			</p>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{#each collections[0].images as image, index}
					<div>
						<button on:click={() => toggleFullScreen(image)}
							><img
								src={image}
								alt={`Image ${index + 1}`}
								class="w-full h-auto cursor-pointer"
							/></button
						>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<footer class="text-white text-center py-3">
		&copy; {year} Leo Hanney. All rights reserved.
	</footer>
</div>
