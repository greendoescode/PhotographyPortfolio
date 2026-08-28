<script>
  import { page } from "$app/state";
  import "$lib/global.css";

  let audio;
  if (typeof window !== "undefined") {
    audio = new Audio("/beep.mp3");
    audio.volume = 0.2;
  }

  const playHoverSound = () => {
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  };

  const getRandomPage = () => {
    const pages = [
      "/personal/timetravel",
      "/personal/chickenconspiracy",
      "/personal/halorat"
    ];
    return pages[Math.floor(Math.random() * pages.length)];
  };

  // Dynamic error descriptions based on HTTP status code
  const getErrorMeta = (status) => {
    switch (status) {
      case 404:
        return {
          title: "YOU ARE LOST",
          desc: "It seems you've wandered too far into the unknown void. No worries, though!"
        };
      case 500:
        return {
          title: "SERVER MELTDOWN",
          desc: "Our internal servers ran into a glitch in the matrix. Something broke on our end."
        };
      case 403:
        return {
          title: "ACCESS DENIED",
          desc: "You don't have the cyber clearance required to enter this sector."
        };
      default:
        return {
          title: "SYSTEM ANOMALY",
          desc: "An unexpected glitch occurred in the system timeline."
        };
    }
  };

  const currentError = $derived(getErrorMeta(page.status));
</script>

<svelte:head>
  <title>{page.status} - {currentError.title}</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="divbody weird-background">
  <div class="cyber-card">
    <div class="scanlines"></div>

    <div class="card-header">
      <span class="status-indicator"></span>
      <span class="system-tag">SYSTEM_ALERT // STATUS_{page.status}</span>
    </div>

    <!-- Dynamic Status Title -->
    <h1 class="glow-title">
      {page.status} <span class="highlight">- {currentError.title}</span>
    </h1>

    <!-- Shows custom message if thrown via error(), otherwise uses preset description -->
    <p class="description">
      {page.error?.message && page.error.message !== 'Not Found' 
        ? page.error.message 
        : currentError.desc}
    </p>

    <div class="options-section">
      <p class="section-title">SELECT_NAVIGATION_PATH:</p>
      <div class="button-group">
        <a 
          href="/" 
          onmouseenter={playHoverSound} 
          class="cyber-btn"
        >
          <span class="btn-arrow">&gt;</span> Return to Safety (Home)
        </a>
        
        <a
          href={getRandomPage()}
          onmouseenter={playHoverSound}
          onclick={playHoverSound}
          class="cyber-btn primary"
        >
          <span class="btn-arrow">&gt;</span> Explore Random Anomaly
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .divbody {
    margin: 0;
    padding: 1.5rem;
    min-height: 100vh;
    width: 100%;
    font-family: "Courier New", Courier, monospace;
    color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    overflow: hidden;
    box-sizing: border-box;
  }

  .weird-background {
    background: url("/giphy4.gif") no-repeat center center fixed;
    background-size: cover;
  }

  .cyber-card {
    position: relative;
    width: 100%;
    max-width: 680px;
    padding: 2.5rem;
    background: rgba(12, 6, 24, 0.85);
    border: 1px solid rgba(255, 0, 255, 0.6);
    border-radius: 12px;
    box-shadow: 
      0 0 30px rgba(255, 0, 255, 0.3),
      inset 0 0 20px rgba(255, 0, 255, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    overflow: hidden;
  }

  .scanlines {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(255,255,255,0),
      rgba(255,255,255,0) 50%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.3)
    );
    background-size: 100% 4px;
    pointer-events: none;
    opacity: 0.7;
    z-index: 1;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 1.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    color: #00ffff;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.6);
  }

  .status-indicator {
    width: 8px;
    height: 8px;
    background-color: #ff00ff;
    border-radius: 50%;
    box-shadow: 0 0 10px #ff00ff;
    animation: pulse 1.5s infinite alternate;
  }

  @keyframes pulse {
    from { opacity: 0.4; }
    to { opacity: 1; }
  }

  .glow-title {
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 1rem 0;
    color: #ffffff;
  }

  .highlight {
    color: #ff00ff;
    text-shadow: 0 0 12px #ff00ff, 0 0 25px rgba(255, 0, 255, 0.6);
  }

  .description {
    font-size: 1rem;
    line-height: 1.6;
    color: #d1d5db;
    margin-bottom: 2rem;
  }

  .options-section {
    position: relative;
    z-index: 2;
  }

  .section-title {
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    color: #9ca3af;
    margin-bottom: 1rem;
  }

  .button-group {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .cyber-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.85rem 1.25rem;
    background: rgba(255, 0, 255, 0.05);
    border: 1px solid rgba(255, 0, 255, 0.4);
    border-radius: 6px;
    color: #ffffff;
    text-decoration: none;
    font-size: 0.95rem;
    letter-spacing: 0.05em;
    transition: all 0.2s ease-in-out;
  }

  .cyber-btn.primary {
    border-color: rgba(0, 255, 255, 0.4);
    background: rgba(0, 255, 255, 0.05);
  }

  .cyber-btn:hover {
    background: rgba(255, 0, 255, 0.25);
    border-color: #ff00ff;
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
    transform: translateX(6px);
  }

  .cyber-btn.primary:hover {
    background: rgba(0, 255, 255, 0.25);
    border-color: #00ffff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
    color: #00ffff;
  }

  .btn-arrow {
    color: #ff00ff;
    font-weight: bold;
  }

  .cyber-btn.primary .btn-arrow {
    color: #00ffff;
  }

  @media (max-width: 640px) {
    .cyber-card {
      padding: 1.5rem;
    }

    .glow-title {
      font-size: 1.3rem;
    }
  }
</style>