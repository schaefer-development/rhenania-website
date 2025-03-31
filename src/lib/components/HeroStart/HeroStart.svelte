<script lang="ts">
	import { base } from '$app/paths';
	//	import { _ } from 'svelte-i18n';

	let y: number;
	let paraEffect = 0.5;

	import Hero from '$lib/images/hero.jpg';
</script>

<svelte:window bind:scrollY={y} />

<div class="relative top-0 h-[60vh] w-full overflow-hidden border bg-blue-900">
	<div class="h-[60vh] w-full">
		<div class="absolute h-[60vh] w-full bg-cover" style="background-image: url({Hero})"></div>
		<div class="bg-rc_darkblue-darker/90 absolute top-0 left-0 h-[60vh] w-full"></div>

		<div
			class="absolute top-0 left-0 flex h-[60vh] w-full flex-col items-center justify-center"
			style="transform: translate(0, {y < 2 ? y * 1 : y * paraEffect}px)"
		>
			<h1
				class="rc_text_shadow pb-2 text-4xl font-bold tracking-wider text-white uppercase md:text-5xl lg:text-6xl"
			>
				Wir optimieren Ihren Versand
			</h1>
			<h2 class="rc_h2 text-rc_skyblue rc_text_shadow">Software und Systeme für Versandlogistik</h2>

			<a
				href="#Unser Leistungsangebot"
				title="Unser Leistungsangebot"
				class="bg-rc_red hover:bg-rc_red-darker rc_button_corner relative mt-8 py-2 pr-3 pl-5 text-sm font-bold tracking-widest text-white uppercase"
			>
				Mehr erfahren
			</a>
		</div>
	</div>
</div>
