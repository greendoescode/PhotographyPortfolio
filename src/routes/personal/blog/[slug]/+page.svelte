<script>
  import "$lib/global.css";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";

  const posts = {
    1: {
      title: "My First Tales",
      date: "2025-08-24",
      content: [
        {
          type: "text",
          value:
            "Honestly, I wasn't sure what to do with this page. I've been meaning to make it work for ages but never got around to it.",
        },
        {
          type: "text",
          value:
            "But here it is, the amazing words you definitely wanted, with equally amazing background colors (or not, I still can't decide).",
        },
        {
          type: "text",
          value:
            "I've been trying to add vocals to my track 'Sentimental Man,' but let's be real, I can't sing, and writing lyrics isn't my strong suit either. Makes it tricky when you want something for the common folk on top of the track.",
        },
        {
          type: "text",
          value:
            "I say 'common folk' like I'm not part of that group, but hey, support your own kind! On another note, my lights just turned on.",
        },
        {
          type: "text",
          value:
            "Something that bugs me is that my brother wants an aggressive red color scheme with the lights when I'm leaning towards a chill green and purple setup.",
        },
        {
          type: "text",
          value:
            "By the way, If the flow sucks, it's because I'm writing in separate JSON parts for each new line. It's not ideal for flow, but it works for now.",
        },
        {
          type: "link",
          href: "https://youtube.com/watch?v=HsW_axA_8JQ",
          text: "Listen to 'Clear Skies' by The Strokes",
        },
      ],
    },
    2: {
      title: "How Music Helps Me",
      date: "2025-08-23",
      content: [
        {
          type: "text",
          value:
            "Over the last year and a half, music has become a central part of my life. It even became the final piece in my photography exam, where I used Pixelsynth to create something that was definitely not photography.",
        },
        {
          type: "text",
          value:
            "Music is meant to make me happy, and sometimes it does. But more often, it acts as background music to whatever mood I'm in at the moment. Even so, it inspires me and helps me focus, even if slightly.",
        },
        {
          type: "text",
          value:
            "I listen to music while doing everything. It's basically the soundtrack to my life.",
        },
        {
          type: "text",
          value:
            "It helps keep my sadder thoughts at bay, though it never fully suppresses them. Music doesn't solve problems, but it makes them slightly easier to face.",
        },
        {
          type: "text",
          value:
            "It can also change how I approach social situations. Sometimes I'll have one AirPod in, a song playing, and it gives me a little boost of confidence or making me unsociable. Bad luck if you get to me when Human Sadness is playing.",
        },
        {
          type: "text",
          value:
            "Lately, I've been experimenting with jazz. 'Autumn Leaves' by Cannonball Adderley is a recent favourite.",
        },
        {
          type: "text",
          value:
            "I don't really find songs that reflect me personally, they're not written for me in the end, but I still enjoy the experience of listening to the music.",
        },
        {
          type: "text",
          value:
            "Music inspires my photography, especially during editing when I'm setting the mood of a photo. It gives me slight ideas about tone and emotion.",
        },
        {
          type: "text",
          value:
            "Sharing music with people is my favourite way to socialise. It might bore some, but I love it. There's something magical about introducing someone to a track and seeing their reaction.",
        },
        {
          type: "text",
          value:
            "If my life had a soundtrack right now, it would include The Strokes, Will Wood, and anything with that same kind of energy.",
        },
        {
          type: "text",
          value:
            "Music has taught me a lot over the past year and a half, dmostly to not care so much about what others think and just enjoy the moment.",
        },
        {
          type: "text",
          value:
            "One of the more memorable moments was when I was hiding from some people who thought I stole from them (to be clear, I hadn't, but I was high on adrenaline and they'd confused me with someone else). I came out of hiding, taking a layer off (it was cold, I had two on), singing 'Juicebox' by The Strokes.",
        },
        {
          type: "link",
          href: "www.youtube.com/watch?v=U2tt7W6MNG8",
          text: "Listen to Juicebox by The Strokes",
        },
        {
          type: "text",
          value:
            "There's a line about standing in the lightfield that made me chuckle because I was literally walking past the people looking for me while singing it. It did make me think, music made this really tense moment into something that in the end was funny.",
        },
        {
          type: "text",
          value:
            "Well thank you for reading, this was a bit indulgent and a bit strange but who caaaaaaaareeeeeeees!",
        },
        {
          type: "image",
          src: "/images/willywood2.jpeg",
          alt: "willywood meme",
        },
      ],
    },
    3: {
      title: "Albums That Changed Me",
      date: "2025-08-24",
      content: [
        {
          type: "text",
          value:
            "Honestly, growing up with the internet meant I never really listened to albums properly. I'd just pick random tracks, download dodgy MP3s, throw them into a playlist, and call it a day. The first song I actually remember loving was 'Spanish Train' by Chris de Burgh. Weird choice, I know. It used to scare me so much as a kid that it basically knocked me out to sleep.",
        },
        {
          type: "link",
          href: "https://www.youtube.com/watch?v=wRIr6HVgXp4",
          text: "Listen to Spanish Train",
        },
        {
          type: "text",
          value:
            "I've never felt like albums (or any art really) got me. They're not about me, they're about how the artist felt. But sometimes I get little bits of myself in songs. Like Someday by The Strokes. It makes me think about the tiny bit of nostalgia I actually have, even though I haven't really grown up much.",
        },
        {
          type: "link",
          href: "https://www.youtube.com/watch?v=knU9gRUWCno",
          text: "Someday by The Strokes",
        },
        {
          type: "text",
          value:
            "If I had to pick a timeless album, it's Is This It. No debate and DEFINITELY no bias. Every track feels connected but still has its own thing going on. It's one of those albums that just… doesn't age, unlike the nu-metal that came out around the same time (yuck icl).",
        },
        {
          type: "text",
          value:
            "The first album that actually made me listen differently was The Rise and Fall of Ziggy Stardust. That was the first time I properly sat down and listened to an album as a whole, instead of just skipping around tracks. Totally changed how I thought about music and what I listened to after.",
        },
        {
          type: "text",
          value:
            "Will Wood's music isn't really tied to one album for me — it's more about the person I listened to it with. Because of that, it'll always hold a special spot, even if it's less about the songs themselves and more about the moments and people around them.",
        },
        {
          type: "text",
          value:
            "Right now, the album that probably represents me best is First Impressions of Earth by The Strokes. It's got that monotone, detached delivery, but underneath there's all this chaos and detail. Pretty much how my brain works.",
        },
        {
          type: "text",
          value:
            "And yeah my guilty pleasure for music. French Exit by TV Girl. Love it, but wouldn't admit it casually because of the whole male manipulator music thing. Not a great look. But hey, music is music.",
        },
        {
          type: "text",
          value:
            "So yeah, that's a few albums that changed how I listen. They didn't exactly change my life, but they shaped it in small ways. That's enough for me.",
        },
        {
          type: "image",
          src: "/images/willywood3.png",
          alt: "will wood me me",
        },
      ],
    },
  };

  let slug = $page.params.slug;
  let post = posts[slug] || {
    title: "Post Not Found",
    content: [{ type: "text", value: "This post doesn't exist." }],
  };

  const gifs = [
    "/giphy.gif",
    "/giphy2.gif",
    "/giphy3.gif",
    "/giphy4.gif",
    "/giphy5.gif",
    "/giphy6.gif",
    "/giphy7.gif",
  ];
  let backgroundGif = gifs[Math.floor(Math.random() * gifs.length)];
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div
  class="divbody bg-cover bg-center min-h-screen flex flex-col justify-center items-center weird-background"
  style="background-image: url({backgroundGif});"
  transition:fade|global={{ duration: 250 }}
>
  <div class="container justify-center weird-container">
    <div class="text-box-bg">
      <h1>{post.title}</h1>
      {#if post.date}
        <p class="post-date">{post.date}</p>
      {/if}
      {#each post.content as item}
        {#if item.type === "text"}
          <p class="game-theory">{item.value}</p>
        {:else if item.type === "image"}
          <img src={item.src} alt={item.alt} class="post-image" />
        {:else if item.type === "link"}
          <a href={item.href} target="_blank" rel="noopener" class="post-link">
            {item.text}
          </a>
        {/if}
      {/each}
    </div>

    <div class="flex flex-col justify-center items-center mt-4">
      <a href="/personal/blog">Back to Blog Index</a>
      <a href="/personal" class="mt-2">Back to Home</a>
    </div>
  </div>
</div>

<style>
  .post-date {
    font-size: 0.9em;
    color: #cccccc;
    margin-bottom: 15px;
  }

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

  .game-theory {
    font-size: 1.2em;
    text-align: left;
    max-width: 700px;
    margin: 0 auto 15px auto;
    line-height: 1.6;
    word-wrap: break-word;
  }

  .post-image {
    max-width: 700px;
    width: 100%;
    margin: 15px auto;
    display: block;
    border-radius: 8px;
  }

  .post-link {
    display: inline-block;
    color: #00ff00;
    text-decoration: underline;
    margin: 10px 0;
  }

  .container {
    margin-top: 60px;
  }

  .container {
    margin-bottom: 60px;
  }

  .post-link:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    .text-box-bg {
      padding: 10px 15px;
    }
    .game-theory {
      max-width: 90%;
      font-size: 1.1em;
    }
    .post-image {
      max-width: 90%;
    }
  }

  @media (max-width: 480px) {
    .text-box-bg {
      padding: 8px 12px;
    }
    .game-theory {
      font-size: 1em;
    }
    .post-image {
      max-width: 100%;
    }
  }
</style>
