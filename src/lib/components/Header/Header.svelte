<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Logo from '$lib/components/Logo/Logo.svelte';
	import Drawer from '$lib/components/Drawer/Drawer.svelte';
	import ProductMenu from '$lib/components/Drawer/ProductMenu.svelte';
	import CompanyMenu from '$lib/components/Drawer/CompanyMenu.svelte';
	import ServiceMenu from '$lib/components/Drawer/ServiceMenu.svelte';

	import MobileDrawer from '$lib/components/Drawer/Mobile/MobileDrawer.svelte';

	let openMenu: string | null = null;
	const toggleMenu = (menu: string) => {
		openMenu = openMenu === menu ? null : menu;
	};

	let openMenuFull = false;
	const toggleMenuFull = () => {
		openMenuFull = !openMenuFull;
	};
</script>

<header class="sticky top-0 z-50 bg-white shadow-md flex space-between">
	<div class="w-full max-w-screen-2xl mx-auto flex flex-row items-center h-20 px-4 md:px-10 ">
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
				<a href="{base}/start">
					<span
						class="{$page.path === `${base}/start`
							? 'border-b-4 border-rc_red'
							: ''} font-medium uppercase py-1 mx-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Start</span
					>
				</a>

				<button on:click={() => toggleMenu('produkte')}>
					<span
						class="{openMenu === 'produkte'
							? 'border-b-4 border-rc_red'
							: ''} font-medium uppercase py-1 mx-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Produkte</span
					>
				</button>
				<button on:click={() => toggleMenu('unternehmen')}>
					<span
						class="{openMenu === 'unternehmen'
							? 'border-b-4 border-rc_red'
							: ''} font-medium uppercase py-1 mx-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Unternehmen</span
					>
				</button>
				<button on:click={() => toggleMenu('service')}>
					<span
						class="{openMenu === 'service'
							? 'border-b-4 border-rc_red'
							: ''} font-medium uppercase py-1 mx-4 text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Service</span
					>
				</button>
			</div>

			<div id="menu_mobil" class="visible md:hidden">
				<button
					on:click={toggleMenuFull}
					class="text-rc_red flex w-full items-center justify-end focus:border-0 uppercase font-medium tracking-wider hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red "
				>
					<span class="uppercase font-medium px-2">Menu</span>
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
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</header>

<!-- aside menu -->
<Drawer {openMenu} {toggleMenu} menuLabel={'produkte'}>
	<ProductMenu />
</Drawer>
<Drawer {openMenu} {toggleMenu} menuLabel={'unternehmen'}>
	<CompanyMenu />
</Drawer>
<Drawer {openMenu} {toggleMenu} menuLabel={'service'}>
	<ServiceMenu />
</Drawer>

<MobileDrawer {openMenuFull} {toggleMenuFull} />
