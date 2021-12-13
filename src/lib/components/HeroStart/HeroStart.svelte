<script lang="ts">
	import { base, assets } from '$app/paths';
</script>

<div class="heroStart w-full overflow-hidden h-50v">
	<div class="bg_layer absolute w-full h-50v bg-cover bg-center " style="background-image: url({base}/hero_example.jpg)"> </div>
	<div class="bg_layer absolute w-full h-50v bg-rc_darkblue-darker opacity-90"></div>
	<div class="bg_layer absolute w-full h-50v rc_background_triangle"></div>
	<div class="content relative z-2 w-full h-full max-w-screen-2xl mx-auto px-16 flex flex-col items-center justify-center text-center">
		<h1 class="font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider text-white pb-2 rc_text_shadow">Wir optimieren Ihren Versand</h1>
		<h2 class="rc_h2 text-rc_skyblue rc_text_shadow">Software und Systeme für Versandlogistik</h2>
		<button class="relative mt-8 pl-6 pr-2 py-2 bg-rc_red text-white text-sm font-bold uppercase tracking-widest rc_button_corner">mehr erfahren</button>
	</div>
</div>


