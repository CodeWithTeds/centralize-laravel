<script>
  let {
    video,
    videoAlt = 'Package preview animation',
    title,
    titleUrl,
    meta = '',
    command = '',
    description,
    links = []
  } = $props();
</script>

<article
  class="grid grid-cols-1 items-center gap-4 px-4 min-[861px]:grid-cols-[190px_1fr] min-[861px]:px-0 min-[1101px]:grid-cols-[220px_1fr] min-[1101px]:gap-5"
>
  <div class="grid place-items-center">
    <video
      src={video}
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      aria-label={videoAlt}
      class="block h-[220px] w-[220px] object-contain [filter:drop-shadow(0_0_14px_rgba(255,255,255,0.08))] [image-rendering:pixelated] min-[861px]:h-[190px] min-[861px]:w-[190px] min-[1101px]:h-[220px] min-[1101px]:w-[220px]"
    ></video>
  </div>

  <div class="flex min-w-0 flex-col gap-3">
    <div class="flex flex-wrap items-baseline gap-x-3.5 gap-y-2.5">
      <a
        class="text-[22px] leading-[1.2] font-semibold text-[#FF2D20] underline decoration-[1.5px] underline-offset-[3px] transition-colors hover:text-[#ff4d3a]"
        href={titleUrl}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
      {#if meta}
        <span class="text-[13px] font-normal whitespace-nowrap text-[#7a7a85]">
          {meta}
        </span>
      {/if}
    </div>

    <p class="m-0 text-left text-[17px] leading-[1.55] text-[#a1a1aa]">
      {#if command}
        <span class="font-medium text-[#cbd5e1]">{command}</span>
      {/if}
      {description}
    </p>

    {#if links.length > 0}
      <div class="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-3.5">
        <div class="flex flex-wrap items-center gap-x-[22px] gap-y-[18px]">
          {#each links as link (link.url)}
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              class="text-[14px] text-[#8b8b93] underline decoration-[#3a3a3f] underline-offset-[3px] transition-colors duration-150 hover:text-[#cbd5e1] hover:decoration-[#cbd5e1]"
            >
              {link.label}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</article>
