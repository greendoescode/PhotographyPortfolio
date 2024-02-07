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

<main class="bg-cover bg-center" style="background-image: url('https://leohanney.com/images/_DSC3786.jpg');">

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
        <a href="mailto:me@leohanney.com?subject=Event Photography Enquiry"><div class="service-card bg-white rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-bold text-gray-800">Events Photography</h2>
          <p class="text-gray-600 mt-2">Capture the special moments of your events with our photography services.</p>
        </div></a>
        <a href="mailto:me@leohanney.com?subject=Wedding Photography Enquiry" style="pointer-events:none;"><div class="service-card bg-white rounded-lg p-4 shadow-md" style=" opacity: 0.6; filter: alpha(opacity = 60);">
          <h2 class="text-xl font-bold text-gray-800">Wedding Photography</h2>
          <p class="text-gray-600 mt-2">Preserve the memories of your special day with our wedding photography.</p>
        </div></a>
        <a href="mailto:me@leohanney.com?subject=Portraiture Photography Enquiry"><div class="service-card bg-white rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-bold text-gray-800">Portraiture</h2>
          <p class="text-gray-600 mt-2">Capture your personality and essence with our portraiture services.</p>
        </div></a>
      </div>
      <br>
      <p class="text-xl text-white mt-4">Click on the service you'd like to enquire about.</p>
    </div>
  </header> 
  <p class="text-white text-center py-3" style="margin-top:-3rem">&copy; {year} Leo Hanney. All rights reserved.</p>

</main>
