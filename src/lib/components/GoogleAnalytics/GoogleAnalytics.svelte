<script lang="ts">
	import { page } from '$app/stores';

	let showBanner = true;
	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-HNKX3R4NPX', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-HNKX3R4NPX">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-HNKX3R4NPX');
	</script>
</svelte:head>
