<script lang="ts">
  import Logo from '$lib/components/Logo/Logo.svelte';
  import { page } from '$app/stores';
  import { base } from '$app/paths';


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




<div class="w-full max-w-screen-2xl mx-auto flex flex-row items-center h-20 px-10">


  <a sveltekit:prefetch href="{base}/" class="text-rc_darkblue w-28 none"><Logo /></a>

  <div class="flex-grow flex justify-end">
    <div class="text-black px-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
 
      

    <button on:click={toggleMenu} class="">
      <span class="font-medium uppercase px-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider">Produkte</span>
    </button>


      <!--
      <a sveltekit:prefetch href="{base}/" class="font-medium uppercase px-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider">Start</a>
 

      <a sveltekit:prefetch href="{base}/" class="font-medium uppercase px-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider">Produkte</a>


      <button on:click={toggleMenu} class="flex items-center px-2 py-2 focus:border-0 text-rc_red tracking-wider hover:text-ti_blue_accent focus:ring-0 focus:outline-none focus:text-ti_blue_accent ">
        <span class="uppercase font-bold px-2 ">Menu</span>
        <svg class="fill-current h-6 w-6 text-rc_red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>-->
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
<aside id="drawer" on:click={toggleMenu} class="{open ? 'top-20 ' : 'rc_hidden_position'} transform bg-rc_darkblue-darkest h-1/2 left-0 w-full fixed overflow-auto ease-in-out transition-all duration-300 z-40">
  



  
  <div class="flex items-stretch h-full max-w-screen-2xl mx-auto">


    <div class="flex flex-row w-full max-w-screen-2xl mx-auto ">
      <div class="border flex flex-grow items-center">
        <div class="flex-grow">1</div>
        <div class="flex-grow">1</div>
        <div class="flex-grow">1</div>

      </div>


  
    </div>




  
  </div>
  
  

</aside>
