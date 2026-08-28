<script lang="ts">
  interface Props {
    name: string;
    link: string;
    thumbnailUrl: string;
    lqipUrl: string;
  }

  let { name, link, thumbnailUrl, lqipUrl }: Props = $props();
  let isLoaded = $state(false);

  // Solves the cached vs. uncached race condition on frame 1
  function setupImage(node: HTMLImageElement) {
    if (node.complete && node.naturalWidth > 0) {
      isLoaded = true;
    }
  }
</script>

<a
  href={link}
  data-sveltekit-preload-data="hover"
  class="group relative block overflow-hidden rounded-lg bg-neutral-900 border border-white/10 transition-transform duration-200 hover:border-white/40 hover:-translate-y-1"
>
  <div class="aspect-[4/3] w-full overflow-hidden bg-neutral-900 relative">
    
    <!-- 1. Low-Res Placeholder: Permanently visible in layer 0 -->
    <img
      src={lqipUrl}
      alt=""
      aria-hidden="true"
      loading="eager"
      decoding="async"
      class="absolute inset-0 h-full w-full object-cover blur-md scale-110 pointer-events-none"
    />

    <!-- 2. High-Res Image: Fades smoothly over layer 0 once ready -->
    <img
      use:setupImage
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

  <div class="p-4 flex justify-between items-center border-t border-white/5 bg-neutral-900/60">
    <h2 class="text-xs font-light tracking-wider text-neutral-200 group-hover:text-white transition-colors">
      {name}
    </h2>
    <span class="text-[10px] text-neutral-500 group-hover:text-neutral-300 transition-colors">&rarr;</span>
  </div>
</a>