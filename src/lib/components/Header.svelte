<script>
  // Header component with responsive navigation
</script>

<header
  class="sticky top-0 z-50 flex h-[56px] min-h-[56px] items-center border-b border-[#161616] bg-black"
>
  <div
    class="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-6 px-4 min-[861px]:px-6"
  >
    <a
      class="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em] whitespace-nowrap text-white no-underline"
      href="/"
      aria-label="Home"
    >
      <span
        class="font-mono text-[18px] leading-none text-[#FF2D20] [text-shadow:0_0_8px_#FF2D20,0_0_14px_rgba(255,45,32,0.6)]"
        >*</span
      >
      <span class="text-white">laravel-packages</span>
    </a>
    <nav class="flex items-center gap-[14px] min-[861px]:gap-[22px]" aria-label="Main navigation">
      <a
        href="#packages"
        class="hidden text-[13px] font-normal whitespace-nowrap text-[#a1a1aa] no-underline transition-colors duration-150 hover:text-white min-[861px]:inline min-[861px]:text-[14px]"
      >
        Packages
      </a>
      <a
        href="https://packagist.org"
        target="_blank"
        rel="noreferrer"
        class="hidden text-[13px] font-normal whitespace-nowrap text-[#a1a1aa] no-underline transition-colors duration-150 hover:text-white min-[861px]:inline min-[861px]:text-[14px]"
      >
        Packagist
      </a>
      <a
        href="https://github.com/CodeWithTeds"
        target="_blank"
        rel="noreferrer"
        class="hidden text-[13px] font-normal whitespace-nowrap text-[#a1a1aa] no-underline transition-colors duration-150 hover:text-white min-[861px]:inline min-[861px]:text-[14px]"
      >
        GitHub
      </a>
      <a
        class="inline-flex items-center justify-center rounded-full border border-[#FF2D20] bg-[#FF2D20] px-4 py-[7px] text-[13px] leading-none font-medium whitespace-nowrap text-white no-underline transition-[background,border-color,opacity] duration-150 hover:border-[#ff4d3a] hover:bg-[#ff4d3a]"
        href="https://github.com/CodeWithTeds/meehh"
        target="_blank"
        rel="noreferrer"
      >
        Get Started
      </a>
    </nav>
  </div>
</header>
