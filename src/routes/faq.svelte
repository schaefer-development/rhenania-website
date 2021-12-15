<script lang="ts">
	import Faq from '$lib/components/Faq/Faq.svelte';
</script>

<svelte:head>
	<title>FAQ</title>
</svelte:head>

<section>
	<div class="relative z-10 max-w-screen-xl mx-auto px-10 pt-20 pb-32">
		<h1 class="rc_h1 text-rc_darkblue">Page FAQ</h1>
		<p class="py-4">
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
			invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
			justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
			ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
			eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
			et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
			sanctus est Lorem ipsum dolor sit amet.
		</p>

		<h1>Ich bin die Page componente für /{page.slug}</h1>
		<div class="relative">
			{#each page.modules as module (module.id)}
				{#if module.__typename === 'Faq'}
					<Faq {module} />
				{/if}
			{/each}
		</div>
	</div>
</section>
