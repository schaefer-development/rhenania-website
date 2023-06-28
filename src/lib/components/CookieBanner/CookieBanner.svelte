<script lang="ts">
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

<style>
	.cookie-banner {
		box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.3);
	}
</style>
