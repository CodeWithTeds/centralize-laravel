<script>
  import Header from '$lib/components/Header.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import PackageList from '$lib/components/PackageList.svelte';
</script>

<Header />

<div class="flex h-auto min-h-[calc(100svh-56px)] flex-col bg-black min-[861px]:h-[calc(100svh-56px)] min-[861px]:flex-row">
  <Sidebar />
  <PackageList />
</div>
