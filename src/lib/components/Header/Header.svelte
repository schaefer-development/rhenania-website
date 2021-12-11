<script lang="ts">
	import Logo from '$lib/components/Logo/Logo.svelte';
	import HeaderAccordion from '$lib/components/HeaderAccordion/HeaderAccordion.svelte';
	import { base } from '$app/paths';

	let openMenuProdukte = false;
	const toggleMenuProdukte = () => {
		openMenuProdukte = !openMenuProdukte;
	};

	let openMenuUnternehmen = false;
	const toggleMenuUnternehmen = () => {
		openMenuUnternehmen = !openMenuUnternehmen;
	};

	let openMenuService = false;
	const toggleMenuService = () => {
		openMenuService = !openMenuService;
	};


  let openMenuFull = false;
	const toggleMenuFull = () => {
		openMenuFull = !openMenuFull;
	};
</script>

<header class="sticky top-0 z-50 bg-white shadow-md flex space-between">
	<div class="w-full max-w-screen-2xl mx-auto flex flex-row items-center h-20 px-10">
		<a sveltekit:prefetch href="{base}/" class="text-rc_darkblue w-28 none"><Logo /></a>

		<div id="search" class="flex-grow flex justify-end">
			<div class="text-black px-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>

			<div id="menu" class="hidden md:inline-block">
				<a
					href="{base}/"
					class="font-medium uppercase py-1 mx-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
					>Start</a
				>
				<button on:click={toggleMenuProdukte}>
					<span
						class="{openMenuProdukte
							? 'border-b border-rc_red'
							: ''} font-medium uppercase py-1 mx-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Produkte</span
					>
				</button>
				<button on:click={toggleMenuUnternehmen}>
					<span
						class="{openMenuUnternehmen
							? 'border-b border-rc_red'
							: ''} font-medium uppercase py-1 mx-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Unternehmen</span
					>
				</button>
				<button on:click={toggleMenuService}>
					<span
						class="{openMenuService
							? 'border-b border-rc_red'
							: ''} font-medium uppercase py-1 mx-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Service</span
					>
				</button>
			</div>


      <div id="menu_mobil" class="visible md:hidden">
   
				<button on:click={toggleMenuFull}>
					<span
						class="{openMenuFull
							? 'border-b border-rc_red'
							: ''} font-medium uppercase py-1 mx-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Menu</span
					>
				</button>


      </div>




		</div>
	</div>
</header>

<!-- aside menu -->

<aside
	id="drawerProdukte"
	on:click={toggleMenuProdukte}
	class="{openMenuProdukte
		? 'rc_menu_visible'
		: 'rc_menu_hidden'} rc_menu left-0 top-20 w-full shadow-md fixed overflow-auto ease-in-out transform transition-all duration-300 z-40"
>
	<div class="flex flex-row w-full max-w-screen-2xl mx-auto ">
		<div class="w-full grid grid-cols-3 gap-10 px-10 py-10">
			<HeaderAccordion id="versandlogistiksystem">
				<span slot="headline">Versandlogistiksystem</span>
				<div slot="content">
					<a href="{base}/" class="rc_desktopmenu_subpoint">F95 - Paket und Palettenversand</a>
					<a href="{base}/" class="rc_desktopmenu_subpoint"
						>K04 - Kommissionieren, Kontrollieren, Packen</a
					>
					<a href="{base}/" class="rc_desktopmenu_subpoint"
						>VKA - Versandkostenkontrolle und Abrechnung</a
					>
				</div>
			</HeaderAccordion>
			<HeaderAccordion id="versandoptimierung">
				<span slot="headline">Versandoptimierung</span>
				<div slot="content">
					<a href="{base}/" class="rc_desktopmenu_subpoint">U12 - Umsatzbefreiung sichern</a>
					<a href="{base}/" class="rc_desktopmenu_subpoint">DUV - Dubletten vermeiden</a>
					<a href="{base}/" class="rc_desktopmenu_subpoint">APK - Adressprüfung und Korrektur</a>
					<a href="{base}/" class="rc_desktopmenu_subpoint">G10 - Gefahrgutversand</a>
				</div>
			</HeaderAccordion>
			<HeaderAccordion id="hardware">
				<span slot="headline">Hardware</span>
				<div slot="content">
					<a href="{base}/" class="rc_desktopmenu_subpoint">Etikettendrucker</a>
					<a href="{base}/" class="rc_desktopmenu_subpoint">Waagen</a>
					<a href="{base}/" class="rc_desktopmenu_subpoint">Barcodescanner</a>
				</div>
			</HeaderAccordion>
		</div>
	</div>
</aside>

<aside
	id="drawerUnternehmen"
	on:click={toggleMenuUnternehmen}
	class="{openMenuUnternehmen
		? 'rc_menu_visible'
		: 'rc_menu_hidden'} rc_menu left-0 top-20 w-full shadow-md fixed overflow-auto ease-in-out transform transition-all duration-300 z-40"
>
	<div class="flex flex-row w-full max-w-screen-2xl mx-auto ">
		<div class="w-full px-10 py-10 text-center flex flex-row">
			<a
				href="{base}/"
				class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>Kontakt und Anfahrt</a
			>
			<a
				href="{base}/"
				class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>Karriere</a
			>
			<a
				href="{base}/"
				class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>Termine</a
			>
			<a
				href="{base}/"
				class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>Partner</a
			>
			<a
				href="{base}/"
				class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>Referenzen</a
			>
		</div>
	</div>
</aside>

<aside
	id="drawerService"
	on:click={toggleMenuService}
	class="{openMenuService
		? 'rc_menu_visible'
		: 'rc_menu_hidden'} rc_menu left-0 top-20 w-full shadow-md fixed overflow-auto ease-in-out transform transition-all duration-300 z-40"
>
	<div class="flex flex-row w-full max-w-screen-2xl mx-auto ">
		<div class="w-full px-10 py-10 text-center flex flex-row">
			<a
				href="{base}/"
				class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>Cloudlösung</a
			>
			<a
				href="{base}/"
				class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>Online-Support</a
			>
			<a
				href="{base}/"
				class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>Download</a
			>
			<a
				href="{base}/"
				class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>FAQ</a
			>
		</div>
	</div>
</aside>


<aside
	id="drawerFull"
	on:click={toggleMenuFull}
	class="{openMenuFull
		? 'rc_menu_hidden'
		: 'rc_menu_visible'} rc_menu min-h-screen left-0 top-20 w-full shadow-md fixed overflow-auto ease-in-out transform transition-all duration-300 z-40"
>
	<div class="flex flex-row w-full max-w-screen-2xl mx-auto ">
		<div class="w-full px-10 py-10 grid grid-cols-2 gap-10 text-white ">

      <div class="left">
        <div class="w-full text-white flex font-medium text-sm tracking-widest uppercase hover:text-rc_red">Start

          
        </div>
        <div class="w-full text-white flex font-medium text-sm tracking-widest uppercase hover:text-rc_red">Produkte</div>


      </div>
      <div class="right">
        <div class="w-full  grid grid-cols-1 grid-rows-2 gap-10 text-white ">

          <div class="w-full text-white flex font-medium text-sm tracking-widest uppercase hover:text-rc_red">Unternehmen</div>
          </div>
          <div class="w-full  grid grid-cols-1 gap-10 text-white ">

            <div class="w-full text-white flex font-medium text-sm tracking-widest uppercase hover:text-rc_red">Service</div>
            </div>



        

      </div>



		</div>
	</div>
</aside>