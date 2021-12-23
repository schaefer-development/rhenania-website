<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="mod_heroStart w-full overflow-hidden h-60v">
	<div
		class="bg_layer absolute w-full h-60v bg-cover bg-center "
		style="background-image: url({base}/hero_example.jpg)"
	/>
	<div class="bg_layer absolute w-full h-60v bg-rc_darkblue-darker opacity-90" />
	<div class="bg_layer absolute w-full h-60v rc_background_triangle" />
	<div
		class="content relative z-2 w-full h-full max-w-screen-2xl mx-auto px-16 flex flex-col items-center justify-center text-center"
	>
		<h1
			class="font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider text-white pb-2 rc_text_shadow"
		>
			Wir optimieren Ihren Versand
		</h1>
		<h2 class="rc_h2 text-rc_skyblue rc_text_shadow">Software und Systeme für Versandlogistik</h2>
		<button
			class="relative mt-8 pl-5 pr-3 py-2 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
			>mehr erfahren</button
		>
	</div>
</div>
