<script lang="ts">
	import type { HeroImage } from '$lib/graphql/generated/schema';
	export let module: Partial<HeroImage> = {};
	let y: number;
	let paraEffect = 0.5;
</script>

<svelte:window bind:scrollY={y} />
<div class="mod_heroImage relative">
	<div class="w-full h-30v mb-24 overflow-hidden">
		<div
			class="relative parallax h-60v"
			style="transform: translate(0, {y < 2 ? y * 1 : y * paraEffect}px)"
		>
			<div
				class="absolute w-full h-30v bg-cover bg-center scale-105 rc_blur"
				style="background-image: url({module.image.url}"
			/>
		</div>
	</div>
	<div class="absolute -bottom-3 w-full h-4" style="background-color:{module.strokeColor.hex}" />
	<div class="absolute -bottom-20 w-full h-36">
		<div class="max-w-screen-lg mx-auto h-full px-10">
			<img src={module.icon.url} alt="Rhenania Icon" class="w-36 h-36" />
		</div>
	</div>
</div>

<!--
<div
	class="absolute w-full h-30v bg-cover bg-center opacity-10 "
	style="background-color:{module.strokeColor.hex};"
/>-->
