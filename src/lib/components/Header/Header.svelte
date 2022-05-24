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
	import LanguageMenu from '$lib/components/LanguageMenu/LanguageMenu.svelte';

	import MobileDrawer from '$lib/components/Drawer/Mobile/MobileDrawer.svelte';

	let openMenu: string | null = null;
	const toggleMenu = (menu: string) => {
		openMenu = openMenu === menu ? null : menu;
	};

	export let openMenuFull: boolean;
	export let toggleMenuFull: () => void;

	const search =
		({ url, params }: { url: URL; params: Record<string, string> }) =>
		async ({ target }) => {
			const newUrl = new URL(url);
			newUrl.pathname = `/${params.lang}/suche`;
			newUrl.searchParams.set('q', target.query.value);
			await goto(newUrl.toString());
		};
</script>

<header class="sticky top-0 z-50 bg-white shadow-md flex space-between">
	<div class="w-full max-w-screen-2xl mx-auto flex flex-row items-center h-20 px-4 md:px-10 ">
		<a sveltekit:prefetch href={$linkTo('/')} class="text-rc_darkblue w-20 md:w-28 shrink-0"
			><Logo /></a
		>

		<div class="flex-grow flex justify-end items-center">
			<div class="flex-grow px-2 sm:px-6 md:px-10 lg:px-16 flex">
				<form
					class="input-group relative flex items-stretch w-full justify-end pl-4"
					on:submit|preventDefault={search($page)}
				>
					<input
						type="search"
						name="query"
						value={(!prerendering && $page.url.searchParams.get('q')) ?? ''}
						class="form-control relative flex-auto min-w-0 block w-full max-w-sm px-3 py-2 font-normal bg-white bg-clip-padding peer border-y border-l border-gray-400 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
						placeholder="Suchen"
						aria-label="Search"
						aria-describedby="button-addon"
					/>
					<button
						class="btn inline-block px-2 sm:px-4 py-2.5 text-black font-medium border-y border-r  text-xs leading-tight border-gray-400 peer-focus:border-black uppercase peer-focus:text-rc_red hover:text-rc_red focus:text-rc_red focus:outline-none focus:ring-0 active:text-rc_red transition duration-150 ease-in-out flex items-center"
						type="button"
						id="button-addon"
					>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="search"
							class="w-4"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
							/>
						</svg>
					</button>
				</form>
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

				<div class="pl-6">
					<LanguageMenu />
				</div>
			</div>

			<div id="menu_mobil" class="visible block lg:invisible lg:hidden flex">
				<div class="flex items-center px-2 sm:px-4 md:px-8">
					<LanguageMenu />
				</div>

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
