<script lang="ts">
	import { base } from '$app/paths';
	import { _ } from 'svelte-i18n';

	let y: number;
	let paraEffect = 0.5;
</script>

<svelte:window bind:scrollY={y} />

<div class="mod_heroStart h-60v relative w-full overflow-hidden">
	<div
		class="parallax h-60v relative"
		style="transform: translate(0, {y < 2 ? y * 1 : y * paraEffect}px)"
	>
		<div
			class="bg_layer h-60v absolute w-full bg-cover bg-center"
			style="background-image: url({base}/hero_example.jpg)"
		/>
		<div class="bg_layer h-60v bg-rc_darkblue-darker absolute w-full opacity-90" />
		<div class="bg_layer h-60v rc_background_triangle absolute w-full" />
		<div
			class="content relative z-2 mx-auto flex h-full w-full max-w-screen-2xl flex-col items-center justify-center px-16 text-center"
		>
			<h1
				class="rc_text_shadow pb-2 text-4xl font-bold tracking-wider text-white uppercase md:text-5xl lg:text-6xl"
			>
				{$_('components.HeroStart.headline')}
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
