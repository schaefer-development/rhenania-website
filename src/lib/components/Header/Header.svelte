<script lang="ts">
  import Logo from '$lib/components/Logo/Logo.svelte';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { browser } from '$app/env';

  const linkClass = (path, pge) => {
    const defaults = 'inline-block no-underline py-2 px-4';
    const active = 'text-white';
    const inactive = 'text-white';
    return `${pge.path === path ? active : inactive} ${defaults}`;
  };

  let links = [
    { path: `${base}/start`, label: 'Start' },
    { path: `${base}/produkte`, label: 'Produkte' },
    { path: `${base}/kontakt`, label: 'Kontakt' }
  ];
  let open = false;
  const toggleMenu = () => {
    open = !open;
  };

  $: styledLinks = links.map((link) => {
    return { ...link, class: linkClass(link.path, $page) };
  });
</script>

<header class="sticky top-0 z-50 bg-white shadow-md flex space-between">
<div class="inner w-full max-w-screen-2xl mx-auto flex flex-row items-center h-20 ">


  <a sveltekit:prefetch href="{base}/" class="text-rc_darkblue w-32 none"><Logo /></a>

  <div class="flex-grow flex justify-end">
    <div class="text-black px-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <div class="font-medium uppercase px-4 text-sm tracking-wider">start</div>
    <div class="font-medium uppercase px-4 text-sm tracking-wider">produkte</div>
    <div class="font-medium uppercase px-4 text-sm tracking-wider">unternehmen</div>
    <div class="font-medium uppercase px-4 text-sm tracking-wider">service</div>
  </div>
</div>
</header>
<!--

  <div class="w-full max-w-xl border">
  <a sveltekit:prefetch href="{base}/" class="text-rc_darkblue w-32 flex items-stretch"><Logo /></a>

<nav class="flex justify-end max-w-screen-2xl mx-auto w-full">

<div class="menu">menu 12 34 56</div>
</nav>
</div>
  <a sveltekit:prefetch href="{base}/" class="text-rc_darkblue w-32 flex items-stretch"><Logo /></a>

  <nav class="container flex items-center justify-end flex-wrap px-6 py-4 mx-auto w-full">
    <div class="block self-align-end">
      <button on:click={toggleMenu} class="flex items-center px-2 py-2 focus:border-0 text-rc_red tracking-wider hover:text-ti_blue_accent focus:ring-0 focus:outline-none focus:text-ti_blue_accent ">
        <span class="uppercase font-bold px-2 ">Menu</span>
        <svg class="fill-current h-6 w-6 text-rc_red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
  </nav>



-->

<!-- aside menu -->
<aside id="drawer" style="opacity:1;" on:click={toggleMenu} class="{open ? 'translate-x-0' : 'translate-x-full'} transform bg-rc_darkblue-darkest top-0 left-0 w-full fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50">
  <div class="container flex flex-col flex-wrap px-6 py-4 mx-auto w-full menu_points">
    <div class="flex justify-end w-full block">
      <button class="flex items-center px-2 py-2 focus:border-0 text-white uppercase font-bold tracking-wider hover:text-ti_blue_accent focus:ring-0 focus:outline-none focus:text-ti_blue_accent ">
        <span class="uppercase font-bold px-2">Schliessen</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-6 w-6 text-ti_blue_accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="animated flex flex-col">
      <hr class="border-black my-4" />

      <a sveltekit:prefetch href="{base}/" class="text-white hover:text-ti_blue_accent  py-1 md:py-0 text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent md:py-0">Start</a>

      <hr class="border-black my-4" />
      <h3 class="text-xs text-ti_blue_accent font-bold uppercase tracking-widest pb-2">Tanzpädagogik</h3>

      <a sveltekit:prefetch href="{base}/ausbildungen" class="text-white hover:text-ti_blue_accent  py-1 md:py-0 text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent md:py-0">Ausbildungen</a>
    </div>
  </div>
</aside>
