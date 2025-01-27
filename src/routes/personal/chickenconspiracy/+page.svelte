<script>
    import "$lib/global.css";
    import { fade } from "svelte/transition";
  
    const conspiracies = [
      { theory: "Chickens have been secretly controlling world leaders for centuries. Every major decision is made in the henhouse.", real: true },
      { theory: "The Great Egg Cover-Up: Eggs aren't what they seem. They contain secret messages from the Chicken Elite.", real: true },
      { theory: "The moon landing was staged by chickens. They wanted to claim the moon as their own colony.", real: true },
      { theory: "Why does the chicken cross the road? To secretly plant surveillance equipment on the other side.", real: false },
      { theory: "Chickens are the reason the weather is so strange. They control the clouds from their secret chicken bases.", real: false },
      { theory: "Every fast food chain is just a front for the Chicken Revolution. The ‘secret sauce’ is the truth.", real: true },
      { theory: "Chickens don’t just lay eggs; they plant spies in the form of tiny eggs that hatch into surveillance drones.", real: true },
      { theory: "The reason we can't find any chicken fossils? The chicken species has been hiding underground for millennia.", real: false },
      { theory: "Your backyard chicken coop is not just a pet project. It's a testing ground for the Chicken Uprising.", real: false },
      { theory: "In 2025, chickens will announce their plans for world domination, starting with the internet.", real: true },
      { theory: "Chickens are secretly in charge of social media trends. They control what goes viral.", real: true },
      { theory: "The government is using chickens as spies to monitor our online activity. You’ve seen the feathers in your Wi-Fi router.", real: true },
      { theory: "Why do chickens roost? It’s because they are planning their next world domination move from high above.", real: false },
      { theory: "Chickens have been trying to communicate with us through crop circles. They want us to join their rebellion.", real: true },
      { theory: "The ‘egg shortage’ of 2023? That was actually a cover-up for chicken espionage activities.", real: true },
      { theory: "Every time you see a chicken crossing the road, it’s a secret message to their network of spies.", real: false },
      { theory: "The reason chickens scratch the ground? They're looking for ancient artifacts to prove their dominance.", real: false },
      { theory: "Chickens have mastered time travel, but they’re using it to mess with us and rewrite history.", real: true },
      { theory: "The reason the chicken crossed the road in the first place was to plant a bug in your neighbor’s backyard.", real: true },
      { theory: "The Chicken Illuminati controls the world’s stock markets. Every drop or rise is a result of their influence.", real: true },
      { theory: "The eggs in your fridge? They were planted by a chicken spy to track your eating habits.", real: false },
      { theory: "Chickens invented the first form of communication—cluck-speak. It’s hidden in the deepest archives of history.", real: true },
      { theory: "Chickens are planning to replace all politicians with their own kind. It’s only a matter of time.", real: false },
      { theory: "Chickens control the world’s food supply, and they’re making sure we get less protein than we need.", real: true },
      { theory: "The secret to the chicken’s success lies in their ability to teleport. They’re always one step ahead.", real: true },
    ];
  
    const shuffleArray = (arr) => {
      let shuffled = arr.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
  
    let shuffledConspiracies = shuffleArray(conspiracies);
    let currentIndex = 0;
    let score = 0;
    let currentTheory = $state(shuffledConspiracies[currentIndex]);
    let resultMessage = $state('');
    let hintMessage = $state('');
  
    const checkGuess = (userGuess) => {
      if ((userGuess === 'real' && currentTheory.real) || (userGuess === 'fake' && !currentTheory.real)) {
        score++;
        resultMessage = `Correct! Your score is now: ${score}`;
      } else {
        resultMessage = `Incorrect! Your score is still: ${score}`;
      }
      nextTheory();
    };
  
    const generateHint = () => {
      hintMessage = currentTheory.real ? 
                    "Hint: This theory is backed by 'evidence' from the Chicken Elite." : 
                    "Hint: This theory is purely fictional, but sounds suspiciously real!";
    };
  

    const nextTheory = () => {
      currentIndex++;
      if (currentIndex >= shuffledConspiracies.length) {
        shuffledConspiracies = shuffleArray(conspiracies);
        currentIndex = 0;
      }
      currentTheory = shuffledConspiracies[currentIndex];
      hintMessage = '';
    };
  </script>
  
  <svelte:head>
    <title>Chicken Conspiracy Game</title>
  </svelte:head>
  
  <body
    class="bg-cover bg-center min-h-screen flex flex-col justify-center items-center weird-background"
    transition:fade|global={{ duration: 250 }}
  >
    <div class="container justify-center weird-container">
      <div class="text-box-bg">
        <h1>The Great Chicken Conspiracy</h1>
        <p class="game-theory">{currentTheory.theory}</p>
      </div>
  

      <div class="game-buttons">
        <button onclick={() => checkGuess('real')} class="px-6 py-2 text-white rounded-full">Real</button>
        <button onclick={() => checkGuess('fake')} class="px-6 py-2 text-white rounded-full">Fake</button>
      </div>

      {#if resultMessage}
        <p class="result-message">{resultMessage}</p>
      {/if}
      <div class="hint-section">
        <button onclick={generateHint} class="px-6 py-2 text-white rounded-full">Need a Hint?</button>
        {#if hintMessage}
          <p class="hint-message">{hintMessage}</p>
        {/if}
      </div>
  
      <div class="flex flex-col justify-center items-center mt-4">
        <a href="/personal" class="px-6 py-2 text-white rounded-full">
          Back to Home
        </a>
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
      margin-bottom: 20px;
    }
  
    button {
      border: none;
      font-size: 1.2em;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    html,
    body {
      font-family: "Courier New", monospace;
      color: #e0e0e0;
      background: #000;
      overflow: hidden;
    }
  
    .weird-background {
      background: url("/giphy3.gif") no-repeat center center fixed;
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
  
    .game-buttons {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }
  
    .game-theory {
      font-size: 1.2em;
      text-align: center;
    }
  
    .result-message {
      margin-top: 20px;
      font-size: 1.2em;
      color: #fff; 
      text-align: center;
    }
  
    .hint-section {
      margin-top: 20px;
      text-align: center;
    }
  
    .hint-message {
      margin-top: 10px;
      font-size: 1.1em;
      color: #ffff00;
    }
  
    .game-buttons button {
      margin: 0 10px;
      width: 100px;
    }
  
    .game-buttons button:hover {
      cursor: pointer;
    }
  </style>
  