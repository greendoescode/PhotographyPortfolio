<script>
	import '$lib/global.css';
	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>About Me - Leo Hanney</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content="Leo Hanney - About Me" />
	<meta property="og:description" content="Learn more about Leo Hanney, a passionate photographer specializing in Events, Weddings, and Portraiture." />
	<meta property="og:image" content="/images/_DSC2618.avif" />
</svelte:head>

<main class="bg-cover bg-center" style="background-image: url('/images/_DSC3786.avif');">
	<nav class="bg-opacity-75 text-white p-4 absolute top-0 w-full flex justify-center items-center">
    <a class="nav-link mr-5" href="/about" style="color: white;">About</a>
    <a class="navbar-brand text-2xl font-semibold" href="/photography" style="color: white;">Leo Hanney</a>
    <a class="nav-link ml-5" href="/portfolio" style="color: white;">Portfolio</a>
  </nav>

	<header class="bg-cover bg-center min-h-screen flex flex-col justify-center items-center">
		<div class="container mx-auto text-center">
			<br />
			<div class="bg-white bg-opacity-90 rounded-lg p-8 shadow-md max-w-3xl mx-auto">
				<div class="flex justify-center">
					<img src="/images/profile.avif" alt="Leo Hanney" class="w-40 h-40 rounded-full object-cover mx-auto mb-4 shadow-lg" />
				</div>
				<h2 class="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
				<p class="text-gray-700 text-lg leading-relaxed mb-4">
					Hello! I'm Leo Hanney, a passionate photographer based in Weston-super-mare, with only under a year or two of experience. My journey into photography began with a deep admiration for the incredible images others created, sparking my curiosity and driving me to explore this art form.
				</p>
				<p class="text-gray-700 text-lg leading-relaxed mb-4">
					One moment in my journey was when I had the opportunity to borrow someone else's camera. It opened up a new world for me, allowing me to create my own images and develop my style. Since then, I've immersed myself in various genres, from landscape photography to documenting events and capturing sports.
				</p>
				<p class="text-gray-700 text-lg leading-relaxed mb-4">
					While I don't follow a strict approach to photography, I find joy in the spontaneity and diversity of shooting events. It's thrilling to interact with different people and capture their emotions and interactions, creating a different story with every image.
				</p>
				<p class="text-gray-700 text-lg leading-relaxed mb-4">
					Besides photography, music is another passion of mine. The thought of drumming brings me immense joy as an outlet outside of my other hobbies.
				</p>
				<p class="text-gray-700 text-lg leading-relaxed">
					Thank you for visiting my website :D
				</p>
			</div>
			<br />
		</div>
	</header>
	<p class="text-white text-center py-3" style="margin-top:-3rem">
		&copy; {year} Leo Hanney. All rights reserved.
	</p>
</main>
