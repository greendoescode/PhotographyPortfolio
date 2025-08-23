<script>
  import "$lib/global.css";
  import { fade } from "svelte/transition";

  const posts = {
    1: { title: "My First Tales" },
    2: { title: "How Music Helps Me" },
  };

  const postEntries = Object.entries(posts);
</script>

<svelte:head>
  <title>Blog Index</title>
</svelte:head>

<div
  class="divbody bg-cover bg-center min-h-screen flex flex-col justify-center items-center weird-background"
  transition:fade|global={{ duration: 250 }}
>
  <div class="container justify-center weird-container">
    <div class="text-box-bg">
      <h1>Blog Posts</h1>
      <ul class="blog-list">
        {#each postEntries as [id, post]}
          <li>
            <a class="blog-link" href={`/personal/blog/${id}`}>{post.title}</a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="flex flex-col justify-center items-center mt-4">
      <a href="/personal">Back to Home</a>
    </div>
  </div>
</div>

<style>
  .text-box-bg {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }

  .divbody {
    font-family: "Courier New", monospace;
    color: #e0e0e0;
    background: #000;
    overflow: hidden;
  }

  .weird-background {
    background-image: url(/giphy9.gif);
    background-size: cover;
    background-position: center;
    animation:
      weirdAnimation 20s infinite,
      gentleFlicker 5s infinite;
  }

  @keyframes weirdAnimation {
    0% {
      background-color: #ff00ff;
    }
    50% {
      background-color: #00ffff;
    }
    100% {
      background-color: #ff00ff;
    }
  }

  @keyframes gentleFlicker {
    0% {
      opacity: 1;
    }
    10% {
      opacity: 0.95;
    }
    20% {
      opacity: 1;
    }
    30% {
      opacity: 0.98;
    }
    40% {
      opacity: 1;
    }
    50% {
      opacity: 0.97;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  .blog-list {
    list-style: none;
    padding: 0;
    margin-top: 15px;
  }

  .blog-list li {
    margin: 10px 0;
  }

  .blog-link {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
    transition:
      color 0.3s,
      transform 0.2s;
  }

  .blog-link:hover {
    color: #00ff00;
    transform: scale(1.05);
  }


  @media (max-width: 768px) {
    .text-box-bg {
      padding: 10px 15px;
    }

    .blog-link {
      font-size: 1.1em;
    }
  }

  @media (max-width: 480px) {
    .text-box-bg {
      padding: 8px 12px;
    }

    .blog-link {
      font-size: 1em;
    }
  }
</style>
