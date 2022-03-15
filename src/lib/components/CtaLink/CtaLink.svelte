<script lang="ts">
	import { base } from '$app/paths';
	import { mapPadding } from '$lib/helpers';
	import type { CtaLink } from '$lib/graphql/generated/schema';
	export let module: Partial<CtaLink> = {};
</script>

<div class="mod_ctalink relative">
	<div class="w-full {mapPadding(module.padding)}" />
	<div class="mod_divider w-full max-w-screen-lg px-4 lg:px-10 mx-auto py-6 lg:py-12">
		<h2 class="rc_h2 text-black pb-10">{module.headline}</h2>

		<a
			sveltekit:prefetch
			href="{base}/kontakt"
			class="relative mt-8 pl-5 pr-3 py-2 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
			>Jetzt Kontakt aufnehmen</a
		>
	</div>
	<div class="relative w-full {mapPadding(module.padding)}" />
</div>
