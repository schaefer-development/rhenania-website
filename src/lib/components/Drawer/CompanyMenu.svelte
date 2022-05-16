<script lang="ts">
	import { linkTo } from '$lib/helpers';
</script>

<div class="flex flex-row w-full max-w-screen-2xl mx-auto">
	<div class="w-full px-10 py-10 text-center flex flex-row">
		<a
			href={$linkTo('/ueberuns/')}
			class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
			>Über uns</a
		>
		<a
			href={$linkTo('/kontakt/')}
			class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
			>Kontakt und Anfahrt</a
		>
		<a
			href={$linkTo('/karriere')}
			class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
			>Karriere</a
		>
		<a
			href={$linkTo('/termine')}
			class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
			>Termine</a
		>
		<a
			href={$linkTo('/partner')}
			class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
			>Partner</a
		>
		<a
			href={$linkTo('/referenzen')}
			class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
			>Referenzen</a
		>
	</div>
</div>
