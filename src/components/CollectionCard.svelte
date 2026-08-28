<script lang="ts">
  interface Collection {
    name: string;
    link: string;
    thumbnailUrl: string;
    lqipUrl: string;
  }

  let { name, link, thumbnailUrl, lqipUrl }: Collection = $props();
  let isLoaded = $state(false);
</script>

<a
  href={link}
  data-sveltekit-preload-data="hover"
  class="group relative block overflow-hidden rounded-lg bg-neutral-900 border border-white/10 transition-transform duration-200 hover:border-white/40 hover:-translate-y-1"
>
  <!-- Card image container -->
  <div class="aspect-[4/3] w-full overflow-hidden bg-neutral-950 relative">
    
    <!-- 1. Low-Res Placeholder: Loads instantly, blurred & scaled 110% to prevent border gaps -->
    <img
      src={lqipUrl}
      alt=""
      aria-hidden="true"
      loading="eager"
      class="absolute inset-0 h-full w-full object-cover blur-md scale-110 pointer-events-none transition-opacity duration-700 ease-out"
      class:opacity-0={isLoaded}
    />

    <!-- 2. High-Res Image: Unseen until loaded, then smoothly fades over the blur -->
    <img
      src={thumbnailUrl}
      alt={name}
      loading="lazy"
      decoding="async"
      onload={() => (isLoaded = true)}
      class="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out"
      class:opacity-100={isLoaded}
      class:group-hover:scale-105={isLoaded}
    />
  </div>

  <!-- Label -->
  <div class="p-4 flex justify-between items-center border-t border-white/5 bg-neutral-900/60">
    <h2 class="text-xs font-light tracking-wider text-neutral-200 group-hover:text-white transition-colors">
      {name}
    </h2>
    <span class="text-[10px] text-neutral-500 group-hover:text-neutral-300 transition-colors">&rarr;</span>
  </div>
</a>