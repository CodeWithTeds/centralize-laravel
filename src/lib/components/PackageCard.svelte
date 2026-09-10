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

  let copied = $state(false);
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let copyTimeout;

  async function copyCommand() {
    if (!command) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(command);
      } else {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = command;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      copied = true;
      clearTimeout(copyTimeout);
      copyTimeout = setTimeout(() => (copied = false), 2000);
    } catch {
      // silently ignore
    }
  }
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

  <div class="flex min-w-0 flex-col gap-3 pr-3 min-[861px]:pr-6 min-[1101px]:pr-8">
    <!-- Package name + meta -->
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

    <!-- Description (slightly inset from edge for consistency) -->
    <p
      class="m-0 max-w-[98%] text-left text-[17px] leading-[1.55] text-[#a1a1aa] min-[861px]:max-w-[96%] min-[1101px]:max-w-[94%]"
    >
      {description}
    </p>

    <!-- Command with quick-copy (fixed width for consistency) -->
    {#if command}
      <div
        class="group flex w-[440px] max-w-full items-center justify-between gap-3 self-start rounded-md border border-[#232326] bg-[#0f0f10] px-2.5 py-1.5 transition-colors hover:border-[#2a2a30] hover:bg-[#111113]"
      >
        <code
          class="min-w-0 flex-1 truncate font-mono text-[12.5px] leading-none tracking-[-0.015em] text-[#cbd5e1] select-all"
          title={command}
        >
          {command}
        </code>
        <button
          type="button"
          onclick={copyCommand}
          aria-label={copied ? 'Copied!' : 'Copy command'}
          title={copied ? 'Copied!' : 'Copy to clipboard'}
          class="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md border px-2 py-1 text-[12px] leading-none font-medium transition-all active:scale-[0.97]
            {copied
            ? 'border-[#1a3a2a] bg-[#14261d] text-[#4ade80]'
            : 'border-[#2a2a30] bg-[#1a1a1e] text-[#8b8b93] hover:border-[#3a3a40] hover:bg-[#232326] hover:text-[#e2e8f0]'}"
        >
          {#if copied}
            <!-- check icon -->
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Copied
          {:else}
            <!-- copy icon -->
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.9"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3" />
            </svg>
            Copy
          {/if}
        </button>
      </div>
    {/if}

    <!-- Links -->
    {#if links.length > 0}
      <div class="flex flex-wrap items-center gap-x-[22px] gap-y-2 pt-0.5">
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
    {/if}
  </div>
</article>
