<script lang="ts">
	import type { HeroImage } from '$lib/graphql/generated/schema';
	export let module: Partial<HeroImage> = {};

	let y;
	let paraEffect = 0.5;
</script>

<div class="mod_heroImage relative w-full h-30v mb-24">
	<div
		class="absolute w-full h-30v bg-cover bg-center rc_blur"
		style="background-image: url({module.image.url}"
	/>
	<div
		class="absolute w-full h-30v bg-cover bg-center opacity-10 "
		style="background-color:{module.strokeColor.hex};"
	/>
	<div class="absolute -bottom-3 w-full h-4" style="background-color:{module.strokeColor.hex}" />
	<div class="absolute -bottom-20 w-full h-36">
		<div class="max-w-screen-lg mx-auto h-full px-10">
			<img src={module.icon.url} alt="Rhenania Icon" class="w-36 h-36" />
		</div>
	</div>
</div>
