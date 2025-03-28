<script lang="ts">
	import type { LayoutProps } from './$types';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import '../app.css';

	let { children, data }: LayoutProps = $props();
</script>

<div id="top" class="flex min-h-screen flex-col justify-between bg-gray-50">
	<Header />

	<main class="mb-auto">
		{@render children()}
	</main>

	<Footer {data}></Footer>
	<!--	<Footer {data} />-->
</div>

<!--

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
</div>

-->
