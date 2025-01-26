<script>
    let invisibleArt = [
      { title: "Schrödinger's Painting", description: "A painting that only exists when you aren't looking at it." },
      { title: "The Void Sculpture", description: "A sculpture of pure nothingness. It's the absence that defines it." },
      { title: "Ethereal Brush Strokes", description: "An abstract piece that feels like wind, but you can never touch it." }
    ];
  </script>
  
  <svelte:head>
    <title>Invisible Art Gallery</title>
  </svelte:head>
  
  <body
    class="bg-cover bg-center min-h-screen flex flex-col justify-center items-center weird-background"
    transition:fade={{ duration: 250 }}
  >
    <div class="container justify-center weird-container">
      <h1
        class="relative w-full max-w-[800px] font-mono
              before:absolute before:inset-0 before:animate-typewriter
              before:bg-black
              after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
              after:bg-stone-700 flicker-text heading-align-left"
      >
        Welcome to the Invisible Art Gallery
      </h1>
  
      <section class="art-gallery">
        {#each invisibleArt as art}
          <div class="art-piece p-4 border-2 border-dashed border-gray-500 mb-4">
            <h2 class="text-xl font-semibold">{art.title}</h2>
            <p class="text-gray-300">{art.description}</p>
          </div>
        {/each}
      </section>
  
      <button class="mt-8 px-6 py-2 bg-purple-500 text-white rounded-full">
        Generate Your Own Invisible Art
      </button>
    </div>
  </body>
  
  <style>
    html, body {
      font-family: "Courier New", monospace;
      color: #e0e0e0;
      background: #000;
      overflow: hidden;
    }
  
    .weird-background {
      background: url("/giphy.gif") no-repeat center center fixed;
      background-size: cover;
      animation: weirdAnimation 20s infinite, gentleFlicker 5s infinite;
    }
  
    .art-gallery {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 600px;
      width: 100%;
    }
  
    .art-piece {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      margin-bottom: 1.5rem;
      border-radius: 8px;
      transition: transform 0.2s ease;
    }
  
    .art-piece:hover {
      transform: scale(1.05);
    }
  
    button:hover {
      background-color: #6b4f9c;
    }
  
    @keyframes weirdAnimation {
      0% { background-color: #ff00ff; }
      50% { background-color: #00ffff; }
      100% { background-color: #ff00ff; }
    }
  
    @keyframes gentleFlicker {
      0% { opacity: 1; }
      10% { opacity: 0.95; }
      20% { opacity: 1; }
      30% { opacity: 0.98; }
      40% { opacity: 1; }
      50% { opacity: 0.97; }
      60% { opacity: 1; }
      100% { opacity: 1; }
    }
  </style>
  