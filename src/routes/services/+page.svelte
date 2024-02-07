<script>
  import "./app.css";
  const year = new Date().getFullYear();
</script>

<svelte:head>
  <title>Services - Leo Hanney</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:title" content="Leo Hanney - Photography Services" />
  <meta property="og:description" content="Discover the photography services offered by Leo Hanney, specializing in Events, Weddings, and Portraiture." />
  <meta property="og:image" content="https://leohanney.com/images/_DSC2618.jpg" />
</svelte:head>

<main class="bg-cover bg-center" style="background-image: url('https://leohanney.com/images/_DSC3786.jpg'); background: #f00;">

  <nav class="bg-opacity-75 text-white p-4 absolute top-0 w-full flex justify-center items-center">
    <a class="nav-link mr-5" href="https://leohanney.com/services" style="color: white;">Services</a>
    <a class="navbar-brand text-2xl font-semibold" href="https://leohanney.com" style="color: white;">Leo Hanney</a>
    <a class="nav-link ml-5" href="https://leohanney.com/portfolio" style="color: white;">Portfolio</a>
  </nav>

  <header class="bg-cover bg-center min-h-screen flex flex-col justify-center items-center">
    <div class="container mx-auto text-center">
      <h1 class="text-5xl font-bold text-white">My Services</h1>
      <p class="text-xl text-white mt-4">Discover my photography services.</p>
      <br>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="service-card bg-white rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-bold text-gray-800">Events Photography</h2>
          <p class="text-gray-600 mt-2">Capture the special moments of your events with our photography services.</p>
        </div>
        <div class="service-card bg-white rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-bold text-gray-800">Wedding Photography</h2>
          <p class="text-gray-600 mt-2">Preserve the memories of your special day with our wedding photography.</p>
        </div>
        <div class="service-card bg-white rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-bold text-gray-800">Portraiture</h2>
          <p class="text-gray-600 mt-2">Capture your personality and essence with our portraiture services.</p>
        </div>
      </div>
      <br>
      <a class="btn btn-primary btn-lg mt-4 px-8 py-2 text-white font-bold rounded-full bg-gray-700 hover:bg-gray-800 transition duration-300 ease-in-out"
        href="mailto:me@leohanney.com">Contact Me</a>
    </div>
  </header> 
  <p class="text-white text-center py-3">&copy; {year} Leo Hanney. All rights reserved.</p>

</main>
