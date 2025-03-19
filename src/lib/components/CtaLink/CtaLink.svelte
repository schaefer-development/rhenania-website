<script lang="ts">
	import { mapPadding } from '$lib/helpers';
	import { linkTo } from '$lib/helpers';
	import type { CtaLink } from '$lib/graphql/generated/schema';
	export let module: Partial<CtaLink> = {};
</script>

<div class="mod_ctalink relative">
	<div class="w-full {mapPadding(module.padding)}" />
	<div class="mx-auto block w-full max-w-screen-lg px-4 py-6 lg:px-10 lg:py-12">
		<h2 class="rc_h2 pb-6 text-black">{module.headline}</h2>

		<a
			sveltekit:prefetch
			href={$linkTo('/kontakt')}
			class="bg-rc_red hover:bg-rc_red-darker rc_button_corner relative py-2 pr-3 pl-5 text-sm font-bold tracking-widest text-white uppercase"
			>Jetzt Kontakt aufnehmen</a
		>
	</div>
	<div class="relative w-full {mapPadding(module.padding)}" />
</div>
