<script lang="ts">
	import { prerendering } from '$app/env';
	import { goto } from '$app/navigation';
	import { linkTo } from '$lib/helpers';
	import { page } from '$app/stores';
	import Logo from '$lib/components/Logo/Logo.svelte';
	import Drawer from '$lib/components/Drawer/Drawer.svelte';
	import ProductMenu from '$lib/components/Drawer/ProductMenu.svelte';
	import CompanyMenu from '$lib/components/Drawer/CompanyMenu.svelte';
	import ServiceMenu from '$lib/components/Drawer/ServiceMenu.svelte';
	import { ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY } from '$lib/env';
	import SearchResult from '$lib/components/SearchResult/SearchResult.svelte';
	import Search from '$lib/components/Search/Search.svelte';
	import MobileDrawer from '$lib/components/Drawer/Mobile/MobileDrawer.svelte';

	const appId = ALGOLIA_APP_ID;
	const searchKey = ALGOLIA_SEARCH_KEY;
	let searchEverFocused = false;

	let openMenu: string | null = null;
	const toggleMenu = (menu: string) => {
		openMenu = openMenu === menu ? null : menu;
	};

	export let openMenuFull: boolean;
	export let toggleMenuFull: () => void;
</script>

<header class="sticky top-0 z-50 bg-white shadow-md flex space-between">
	<div class="w-full max-w-screen-2xl mx-auto flex flex-row items-center h-20 px-4 md:px-10 ">
		<a sveltekit:prefetch href={$linkTo('/')} class="text-rc_darkblue w-20 md:w-28 shrink-0"
			><Logo /></a
		>

		<div class="flex-grow flex justify-end items-center">
			<div class="flex-grow px-6 md:px-10 flex justify-end">
				<Search
					{appId}
					{searchKey}
					indices={{ rhenania: SearchResult }}
					on:focus={() => (searchEverFocused = true)}
					placeholder="Suchbegriff"
				/>
			</div>

			<div class="grow lg:grow-0 justify-end items-center hidden lg:flex invisible lg:visible">
				<!-- menu points -->

				<a href={$linkTo('/')} class="relative mx-2 lg:mx-3">
					<span
						class="{$page.url.pathname === '/'
							? 'menupoint_underline'
							: ''}  relative menupoint font-medium uppercase text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Start</span
					>
				</a>

				<button on:click={() => toggleMenu('produkte')} class="relative menupoint mx-2 lg:mx-3">
					<span
						class="{openMenu === 'produkte'
							? 'menupoint_underline text-rc_red'
							: ''} font-medium uppercase py-1 hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Produkte</span
					>
				</button>

				<button on:click={() => toggleMenu('unternehmen')} class="relative menupoint mx-2 lg:mx-3">
					<span
						class="{openMenu === 'unternehmen'
							? 'menupoint_underline text-rc_red'
							: ''} font-medium uppercase py-1 hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Unternehmen</span
					>
				</button>
				<button on:click={() => toggleMenu('service')} class="relative menupoint mx-2 lg:mx-3">
					<span
						class="{openMenu === 'service'
							? 'menupoint_underline text-rc_red'
							: ''} font-medium uppercase py-1 hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
						>Service</span
					>
				</button>

				<!-- end of menu points -->
			</div>

			<div id="menu_mobil" class="visible block lg:invisible lg:hidden flex">
				<button
					on:click={toggleMenuFull}
					class="text-rc_red flex w-full items-center justify-end focus:border-0 uppercase font-medium tracking-wider hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red "
				>
					<span class="uppercase font-medium px-1">Menu</span>
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

<style>
	.menupoint::after {
		background-color: #ea3336;
		bottom: -7px;
		content: '';
		display: block;
		height: 4px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	.menupoint_underline::after {
		background-color: #ea3336;
		bottom: -7px;
		content: '';
		display: block;
		height: 4px;
		position: absolute;
		width: 100%;
		transition: all;
		transition-duration: 0.25s;
	}
	.menupoint:hover::after {
		width: 100%;
	}
</style>
