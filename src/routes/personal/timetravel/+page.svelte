<script>
  import "$lib/global.css";
  import { fade } from "svelte/transition";

  let predictions = [
    "In 3000, humans will have perfected the art of time travel, but only use it to skip traffic.",
    "By 2300, time travel will be the new tourist attraction. People will vacation in ancient Egypt.",
    "In 500 years, robots will travel back to 2025 to remind us to water our plants.",
    "Time travel will be so common that you’ll accidentally bump into yourself at the supermarket.",
    "By 2154, time travel will be so normal that we’ll complain about it being 'too mainstream.'",
    "In 400 years, time-traveling will be an Olympic sport, but no one will remember who won.",
    "By 2200, historians will be replaced by time travelers who simply go to the past and take notes.",
    "In 300 years, time tourists will have ‘past resorts’ where they vacation in prehistoric times.",
    "By 2075, time travel will be used to fix spelling mistakes in historical documents.",
    "In 500 years, people will time travel just to get fresh pastries from the past.",
    "In 250 years, you’ll be able to get a time-traveling app on your phone for a quick jaunt to the 1990s.",
    "Time travelers will visit ancient civilizations just to give them advanced technology and confuse them even more.",
    "By 2099, we’ll have time machines that fit in your pocket, but the battery will only last 5 minutes.",
    "In 1000 years, time travelers will argue about the best historical era to vacation in—probably medieval Europe.",
    "In 3000, AI will be the ones to send us back in time to fix our mistakes (whether we want them to or not).",
    "Time-traveling 101: How to avoid meeting your younger self and causing a paradox (taught by time tourists).",
    "By 2300, traveling to the Renaissance will be like booking a trip to a five-star hotel, complete with guided tours.",
    "In 350 years, all the best fashion trends will be from the future, and we’ll start wearing them now to look cool.",
    "By 2100, it will be normal to visit your great-great-great-grandchildren in the future for family reunions.",
    "In 500 years, the most popular hobby will be collecting old, outdated versions of yourself.",
    "By 2200, people will be able to vacation in the future, but only if they’re really good at avoiding paradoxes.",
    "By 2105, humans will time travel to ancient civilizations just to give them coffee and pizza.",
    "In 100 years, time travel will be used mainly for delivering last-minute presents to loved ones on Christmas.",
    "Time travel will be integrated into social media, and you’ll see real-time pictures from your future self on your feed.",
    "By 2800, there will be tourist traps in the past where you can buy souvenirs from ancient Egypt.",
    "In 900 years, people will get sent back in time to ‘fix’ their Instagram accounts.",
    "By 2200, there will be time travel resorts where you can live a life you always dreamed of... but in an alternate timeline.",
    "In 600 years, you’ll be able to do time travel guided tours of important historical events... from the safety of your living room.",
    "By 2700, your favorite time-travel destination will be a bustling 'Prehistoric Disneyland' in the Cretaceous period.",
    "In 1000 years, there will be automated time travel service desks where you can book trips to the future and past.",
    "By 2040, time travel will be available for educational purposes, and schools will be running field trips to the medieval period.",
    "In 500 years, people will be able to send ‘care packages’ to their ancestors from the future to help them out.",
    "In 300 years, time travel will be the most common form of transportation—move over, flying cars!",
    "By 2050, people will use time travel to fix their past mistakes—especially when it comes to choosing what to eat for lunch.",
    "In 1000 years, people will spend their vacations in a future utopia, only to discover that it’s full of paradoxes and glitches.",
    "By 2200, time travel will be as easy as stepping through a revolving door into a different time period.",
    "In 400 years, people will time travel just to listen to vintage music from the 21st century, like an old-school Spotify playlist.",
    "By 2205, the first time travel agency will open, and it will offer ‘paradox insurance’ as an upsell.",
    "In 600 years, time travel will be used to visit your past selves, but they won’t recognize you because you look cooler now.",
    "By 2300, the most popular destinations in the past will be ancient Rome, Victorian London, and prehistoric caves.",
    "In 700 years, time travel will be so routine that it will be common for people to visit their great-great-grandchildren.",
    "In 150 years, time travel will be the preferred way to attend a concert by your favorite historical musician (alive or dead).",
    "By 2100, everyone will have a time-traveling pet, but the pets will often cause chaos in different centuries.",
    "By 2100, the first ‘Time Travel Olympics’ will take place, with competitors racing to get to the past or future the quickest.",
    "In 350 years, time travelers will specialize in going back to the 21st century to take selfies with historical figures.",
    "By 2700, the most famous time traveler will be a mysterious figure who just keeps returning to the same event, over and over.",
    "In 500 years, people will use time travel just to go back to yesterday and relive the perfect sunset again.",
    "By 2200, the ‘time tourism’ industry will employ guides who ensure that no one accidentally ruins the timeline.",
    "By 2200, time travel will be an essential part of scientific research, and most future historians will be from the future.",
    "By 4000, people will go back to the year 2025 to visit the ‘Golden Age of Humanity’ and wonder how we made it through.",
    "In 100 years, the most common time travel destination will be to ‘fix’ moments in history that we now regret.",
    "In 700 years, people will go back to visit ancient Athens just to drink coffee and have intellectual conversations.",
    "By 2500, time travel will be a sport, with teams competing to change history in the least dramatic way possible.",
    "In 800 years, the most popular vacation spots will be the Renaissance and the far future—talk about a wide range of choices!",
    "By 2050, time travel will be a tool for solving historical mysteries, and we'll find out how the pyramids were really built.",
    "In 1000 years, people will be able to visit the past but are limited to only watching, like interactive documentaries in real-time.",
    "By 2300, you’ll be able to schedule ‘time travel weekends’ where you visit different centuries and experience them firsthand.",
  ];

  let randomPrediction = $state(
    predictions[Math.floor(Math.random() * predictions.length)]
  );

  function generatePrediction() {
    randomPrediction =
      predictions[Math.floor(Math.random() * predictions.length)];
  }
</script>

<svelte:head>
  <title>Time Travel Predictions</title>
</svelte:head>

<body
  class="bg-cover bg-center min-h-screen flex flex-col justify-center items-center weird-background"
  transition:fade|global={{ duration: 250 }}
>
  <div class="container justify-center weird-container">
    <div class="text-box-bg">
      <h1 class="">Time Travel Predictions</h1>
      <p class="text-xl mb-4">{randomPrediction}</p>
    </div>
    <div class="flex flex-col justify-center items-center">
      <button
        class="px-6 py-2 text-white rounded-full justify-center"
        onclick={generatePrediction}
      >
        Get Another Prediction
      </button>
      <a href="/personal">Go Back</a>
    </div>
  </div>
</body>

<style>
  .text-box-bg {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
    text-align: center;
  }

  button {
    border: none;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  body {
    font-family: "Courier New", monospace;
    color: #e0e0e0;
    background: #000;
    overflow: hidden;
  }

  .weird-background {
    background: url("/giphy2.gif") no-repeat center center fixed;
    background-size: cover;
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
</style>
