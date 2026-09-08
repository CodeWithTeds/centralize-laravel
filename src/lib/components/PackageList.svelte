<script>
  import PackageCard from './PackageCard.svelte';
  import { packages } from '$lib/data';
</script>

<main
  class="flex w-full flex-col overflow-visible bg-[#050507] py-7 min-[861px]:w-[70%] min-[861px]:overflow-y-auto min-[861px]:border-l min-[861px]:border-[#161616] min-[861px]:py-10 min-[1101px]:py-14"
>
  <div id="packages" class="flex w-full flex-col gap-0">
    {#each packages as pkg (pkg.id)}
      <PackageCard
        video={pkg.video}
        videoAlt={pkg.videoAlt}
        title={pkg.title}
        titleUrl={pkg.titleUrl}
        meta={pkg.meta}
        command={pkg.command}
        description={pkg.description}
        links={pkg.links}
      />
    {/each}
  </div>
</main>
