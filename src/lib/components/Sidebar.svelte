<script>
  import Scale from '@lucide/svelte/icons/scale';
  import { siGithub, siPackagist } from 'simple-icons';
  import LaravelLogo from './LaravelLogo.svelte';
</script>

<aside
  class="flex w-full min-w-0 flex-col items-center justify-center gap-6 border-b border-[#161616] bg-black px-8 py-9 text-center min-[861px]:w-[30%] min-[861px]:min-w-[320px] min-[861px]:border-r min-[861px]:border-b-0 min-[861px]:border-[#111]"
>
  <LaravelLogo cols={36} />

  <h1 class="m-0 text-center text-[34px] leading-[1.15] font-normal tracking-[-0.02em] text-white">
    This website is for devs and contains packages that they need.
  </h1>

  <p class="m-0 text-center text-[18px] leading-[1.6] font-normal text-white/62">
    Curated Laravel packages, tools and resources — built for developers, by developers. Find,
    compare and install the packages you need.
  </p>

  <div class="mt-1 flex flex-wrap items-center justify-center gap-2.5">
    <a
      href="https://packagist.org/"
      target="_blank"
      rel="noreferrer"
      class="grid h-16 w-16 place-items-center bg-transparent text-white no-underline"
      aria-label="Packagist.org"
    >
      <svg viewBox="0 0 24 24" class="h-10 w-10 fill-white" aria-hidden="true">
        <path d={siPackagist.path} />
      </svg>
    </a>
    <a
      href="https://github.com/"
      target="_blank"
      rel="noreferrer"
      class="grid h-16 w-16 place-items-center bg-transparent text-white no-underline"
      aria-label="GitHub"
    >
      <svg viewBox="0 0 24 24" class="h-10 w-10 fill-white" aria-hidden="true">
        <path d={siGithub.path} />
      </svg>
    </a>
    <a
      href="https://opensource.org/license/mit"
      target="_blank"
      rel="noreferrer"
      class="grid h-16 w-16 place-items-center bg-transparent text-white no-underline"
      aria-label="MIT License"
    >
      <Scale class="h-10 w-10 text-white" />
    </a>
  </div>
</aside>
