<script lang="ts">
	// to do import { prerendering } from '$app/env';
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
	import MobileDrawer from '$lib/components/Drawer/Mobile/MobileDrawer.svelte';

	const appId = ALGOLIA_APP_ID;
	const searchKey = ALGOLIA_SEARCH_KEY;
	let searchEverFocused = false;

	export let openMenu: string | null;
	export let toggleMenu: (menu: string) => void;

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

<header class="space-between sticky top-0 z-50 flex flex-col bg-white shadow-md">
	<div class="mx-auto flex h-20 w-full max-w-screen-2xl flex-row items-center px-4 md:px-10">
		<a href={$linkTo('/')} class="text-rc_darkblue w-20 shrink-0 md:w-28"><Logo /></a>

		<div class="flex flex-grow items-center justify-end">
			<div class="flex hidden flex-grow justify-end px-6 sm:block md:px-10">
				<form
					class="input-group relative flex w-full items-stretch justify-end pl-4"
					on:submit|preventDefault={search($page)}
				>
					<input
						type="search"
						name="query"
						value={$page.url.searchParams.get('q') || ''}
						class="form-control peer relative m-0 block w-full max-w-sm min-w-0 flex-auto rounded-none border-y border-l border-gray-400 bg-white bg-clip-padding px-3 py-2 font-normal transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
						placeholder="Suchen"
						aria-label="Search"
						aria-describedby="button-addon"
					/>

					<!--to-do urspruenglicher wert oben value={(!prerendering && $page.url.searchParams.get('q')) || ''}
					-->
					<button
						class="btn peer-focus:text-rc_red hover:text-rc_red focus:text-rc_red active:text-rc_red flex inline-block items-center rounded-none border-y border-r border-gray-400 px-2 py-2.5 text-xs leading-tight font-medium text-black uppercase transition duration-150 ease-in-out peer-focus:border-black focus:ring-0 focus:outline-none sm:px-4"
						id="button-addon"
						type="submit"
						aria-label="Suchen"
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

			<div class="invisible hidden grow items-center justify-end lg:visible lg:flex lg:grow-0">
				<!-- menu points -->

				<a href={$linkTo('/')} class="relative mx-2 lg:mx-3">
					<span
						class="{$page.url.pathname === ''
							? 'menupoint_underline'
							: ''}  menupoint hover:text-rc_red focus:text-rc_red relative py-0.5 text-sm font-medium tracking-wider text-black uppercase focus:ring-0 focus:outline-none"
						>Start</span
					>
				</a>

				<button on:click={() => toggleMenu('produkte')} class="menupoint relative mx-2 lg:mx-3">
					<span
						class="{openMenu === 'produkte'
							? 'menupoint_underline text-rc_red'
							: ''} hover:text-rc_red focus:text-rc_red text-sm font-medium tracking-wider uppercase focus:ring-0 focus:outline-none"
						>Produkte</span
					>
				</button>

				<button on:click={() => toggleMenu('unternehmen')} class="menupoint relative mx-2 lg:mx-3">
					<span
						class="{openMenu === 'unternehmen'
							? 'menupoint_underline text-rc_red'
							: ''} hover:text-rc_red focus:text-rc_red text-sm font-medium tracking-wider uppercase focus:ring-0 focus:outline-none"
						>Unternehmen</span
					>
				</button>
				<button on:click={() => toggleMenu('service')} class="menupoint relative mx-2 lg:mx-3">
					<span
						class="{openMenu === 'service'
							? 'menupoint_underline text-rc_red'
							: ''} hover:text-rc_red focus:text-rc_red text-sm font-medium tracking-wider uppercase focus:ring-0 focus:outline-none"
						>Service</span
					>
				</button>

				<!-- end of menu points -->
			</div>

			<div class="flex grow justify-end pl-0 lg:grow-0 lg:pl-4">
				<a
					href={$linkTo('/kontakt')}
					class="bg-rc_red hover:bg-rc_red-darker flex h-9 items-center justify-center px-2 text-sm font-medium tracking-wider text-white uppercase uppercase hover:text-white"
					title="Nehmen Sie Kontakt auf">Kontakt</a
				>
				<a
					href="tel:+492224960000"
					class="hover:bg-rc_red-darker border-rc_red hover:border-rc_red-darker text-rc_red ml-4 flex items-center justify-center border-2 bg-white p-1 px-2 font-medium uppercase hover:text-white"
					aria-label="Rufen Sie jetzt die Nummer 02224 - 96 00 00 an"
					title="Rufen Sie jetzt die Nummer 02224 - 96 00 00 an"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
						/>
					</svg>
				</a>
			</div>

			<div id="menu_mobil" class="visible block flex pl-4 md:pl-8 lg:invisible lg:hidden">
				<button
					on:click={toggleMenuFull}
					class="text-rc_red hover:text-rc_red focus:text-rc_red flex w-full items-center justify-end font-medium tracking-wider uppercase focus:border-0 focus:ring-0 focus:outline-none"
				>
					<!--<span class="uppercase font-medium px-1">Menu</span>-->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w- h-8"
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
	<div class="block flex w-full pb-4 sm:hidden">
		<div class="mx-4 h-10 w-full">
			<!-- second row -->

			<form class="input-group relative flex w-full" on:submit|preventDefault={search($page)}>
				<input
					type="search"
					name="query"
					value={$page.url.searchParams.get('q') || ''}
					class="form-control peer relative m-0 block w-full min-w-0 flex-auto rounded-none border-y border-l border-gray-400 bg-white bg-clip-padding px-3 py-2 font-normal transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
					placeholder="Suchen"
					aria-label="Search"
					aria-describedby="button-addon"
				/>
				<!-- to do urspruenglicher wert value={(!prerendering && $page.url.searchParams.get('q')) || ''}
			-->

				<button
					class="btn peer-focus:text-rc_red hover:text-rc_red focus:text-rc_red active:text-rc_red flex inline-block items-center rounded-none border-y border-r border-gray-400 px-2 py-2.5 text-xs leading-tight font-medium text-black uppercase transition duration-150 ease-in-out peer-focus:border-black focus:ring-0 focus:outline-none sm:px-4"
					id="button-addon"
					aria-label="Suchen"
					type="submit"
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
			<!-- end of second row -->
		</div>
	</div>
</header>

<!-- aside menu -->
<Drawer {openMenu} {toggleMenu} menuLabel={'produkte'}>
	<ProductMenu></ProductMenu>
</Drawer>
<Drawer {openMenu} {toggleMenu} menuLabel={'unternehmen'}>
	<CompanyMenu></CompanyMenu>
</Drawer>
<Drawer {openMenu} {toggleMenu} menuLabel={'service'}>
	<ServiceMenu></ServiceMenu>
</Drawer>

<MobileDrawer {openMenuFull} {toggleMenuFull} />

<style>
	.menupoint::after {
		background-color: #ea3336;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	.menupoint_underline::after {
		background-color: #ea3336;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 100%;
		transition: all;
		transition-duration: 0.25s;
	}
	.menupoint:hover::after {
		width: 100%;
	}
</style>
