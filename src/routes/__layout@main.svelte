<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { ReferencesContainer } from '$lib/graphql/generated/schema';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/footer');
		if (res.ok) {
			const { data } = await res.json();
			return {
				props: { data },
				stuff: {
					title: 'Rhenania Computer',
					description:
						'RC Rhenania Computer optimiert Ihren Versand. Softwarelösungen für die Versandlogistik und die Versandoptimierung seit mehr als 30 Jahren. Mehr erfahren'
				}
			};
		}

		const {
			errors: [error]
		} = await res.json();

		return {
			status: res.status,
			error: new Error(error.message)
		};
	};
</script>

<script lang="ts">
	import '../app.css';
	import '@fontsource/red-hat-text/400.css';
	import '@fontsource/red-hat-text/500.css';
	import '@fontsource/red-hat-text/700.css';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import LoadingIndicator from '$lib/components/LoadingIndicator/LoadingIndicator.svelte';
	import { navigating } from '$app/stores';
	import { page } from '$app/stores';
	import { TRACKING_CODE } from '$lib/env';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	beforeNavigate(() => {
		document.documentElement.style.scrollBehavior = 'auto';
	});
	afterNavigate(() => {
		document.documentElement.style.scrollBehavior = '';
		openMenu = null;
	});

	let openMenuFull = false;
	let openMenu = null;

	const toggleMenu = (menu: string) => {
		openMenu = openMenu === menu ? null : menu;
	};
	const toggleMenuFull = () => {
		openMenuFull = !openMenuFull;
	};
	export let data: { referencesContainers: ReferencesContainer[] } = {
		referencesContainers: undefined
	};

	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';

	let showBanner = true;
	let hasConsent = false;

	onMount(() => {
		hasConsent = localStorage.getItem('cookie_consent');
		showBanner = !hasConsent;
		initializeGoogleAnalytics();
	});

	afterUpdate(() => {
		if (hasConsent) {
			loadGoogleAnalytics();
		}
	});

	function acceptCookies() {
		localStorage.setItem('cookie_consent', 'true');
		hasConsent = true;
		showBanner = false;
	}

	function initializeGoogleAnalytics() {
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-HNKX3R4NPX');
	}

	function loadGoogleAnalytics() {
		const script = document.createElement('script');
		script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HNKX3R4NPX';
		script.async = true;
		document.head.appendChild(script);
	}
</script>

<svelte:head>
	<title>{$page.stuff['title'] ?? 'Rhenania Computer'}</title>
	<meta name="description" content={$page.stuff['description'] ?? ''} />
	{@html TRACKING_CODE ?? ''}
</svelte:head>

<div
	class="flex flex-col min-h-screen justify-between bg-gray-50"
	class:rc_menuIsOpen={openMenuFull}
	id="top"
>
	<Header {toggleMenuFull} {openMenuFull} {openMenu} {toggleMenu} />
	{#if $navigating}
		<LoadingIndicator />
	{:else}
		<main class="mb-auto">
			<slot />
		</main>
	{/if}
	<Footer {data} />

	{#if showBanner}
		<div
			class="cookie-banner fixed bg-rc_darkblue-darker text-white bottom-0 left-0 w-full p-8 text-center z-50"
		>
			<p class="py-4">
				Wir verwenden Cookies (Google Analytics), um Ihre Erfahrung zu verbessern. Durch die Nutzung
				unserer Website stimmen Sie der Verwendung von Cookies zu.
			</p>
			<button
				class="relative mt-2 pl-5 pr-3 py-2 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
				on:click={acceptCookies}>Akzeptieren</button
			>
		</div>
	{/if}
</div>

<style>
	.cookie-banner {
		box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.3);
	}
</style>
