<script lang="ts">
	import { linkTo } from '$lib/helpers';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics/GoogleAnalytics.svelte';

	let showBanner = true;
	let hasConsent = false;

	function cookieSettings() {
		showBanner = true;
	}

	function rejectCookies() {
		showBanner = false;
		hasConsent = false;
	}

	function acceptCookies() {
		showBanner = false;
		hasConsent = true;
	}
</script>

<div
	class="cookie-settings fixed bottom-4 left-4 w-14 h-14 rounded-full bg-rc_darkblue-darker z-50 flex justify-center items-center"
>
	<button
		on:click={cookieSettings}
		class="text-white scale-75 hover:scale-90 transition ease-in-out"
	>
		<svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-10 h-10" viewBox="0 0 24.22 24.5"
			><path
				d="m24.18,11.4c-1.18.63-2.69.45-3.69-.55-.27-.27-.48-.59-.64-.92-1.48.77-3.34.54-4.58-.7s-1.47-3.11-.7-4.58c-.33-.15-.65-.36-.92-.64-1-1-1.18-2.51-.55-3.69C9.68.04,6.17,1.2,3.55,3.82c-4.73,4.73-4.73,12.4,0,17.13,4.73,4.73,12.4,4.73,17.13,0,2.62-2.62,3.78-6.14,3.5-9.56Zm-13.45-4.97c.43.43.43,1.13,0,1.56s-1.13.43-1.56,0-.43-1.13,0-1.56,1.13-.43,1.56,0Zm-5.8,6.22c-.73-.73-.73-1.92,0-2.66s1.92-.73,2.66,0,.73,1.92,0,2.66c-.73.73-1.92.73-2.66,0Zm7.56-.66c.43.43.43,1.13,0,1.56s-1.13.43-1.56,0-.43-1.13,0-1.56,1.13-.43,1.56,0Zm-6.22,6.11c-.55-.55-.55-1.44,0-1.99s1.44-.55,1.99,0,.55,1.44,0,1.99-1.44.55-1.99,0Zm7.93,1.38c-.73-.73-.73-1.92,0-2.66s1.92-.73,2.66,0,.73,1.92,0,2.66-1.92.73-2.66,0Z"
			/><circle cx="19.04" cy="5.71" r="1.1" /><circle cx="19.85" cy="1.1" r="1.1" /></svg
		>
	</button>
</div>

{#if showBanner}
	<div
		class="cookie-banner fixed bg-rc_darkblue-darker text-white bottom-0 left-0 w-full px-8 py-4 text-center z-50"
	>
		<div class="flex flex-col lg:flex-row justify-center items-center gap-x-8 ">
			<p>
				Wir verwenden auf unserer Website (GoogleAnalytics), um Ihre Erfahrung zu verbessern.
				Weitere Informationen finden Sie in unserer

				<a href={$linkTo('/datenschutz')} class="font-bold">Datenschutzerklärung</a>.
			</p>

			<div class="flex gap-4 pt-4 lg:pt-0">
				<button
					class="relative px-3 py-1 bg-rc_red border-2 border-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker hover:border-rc_red-darker"
					on:click={acceptCookies}>Akzeptieren</button
				>
				<button
					class="relative px-3 py-1 border-2 text-white text-sm font-bold uppercase tracking-widest hover:text-rc_skyblue hover:border-rc_skyblue"
					on:click={rejectCookies}>Ablehnen</button
				>
			</div>
		</div>
	</div>
{/if}

{#if hasConsent}
	<GoogleAnalytics />
{/if}

<style>
	.cookie-settings {
		box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
	}

	.cookie-banner {
		box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.3);
	}

	:global(.cookie-banner a) {
		position: relative;
		display: inline-block;
		font-weight: bold;
	}

	:global(.cookie-banner a::after) {
		background-color: #fff;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	:global(.cookie-banner a:hover::after) {
		background-color: #fff;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 100%;
		transition: all;
		transition-duration: 0.25s;
	}
</style>
