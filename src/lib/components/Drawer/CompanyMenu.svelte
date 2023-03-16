<script lang="ts">
	import { linkTo } from '$lib/helpers';
</script>

<div class="flex flex-col w-full max-w-screen-2xl mx-auto">
	<div class="w-full grid grid-cols-1 px-10 pt-10 max-w-screen-2xl mx-auto">
		<button
			class="flex w-full items-center justify-end focus:border-0 text-rc_red uppercase font-medium tracking-wider hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red "
		>
			<span class="uppercase font-medium px-2">Schliessen</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="fill-current h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
		<div class="block bg-rc_red h-0.5 my-2" />
	</div>

	<div class="flex flex-row w-full max-w-screen-2xl mx-auto">
		<div class="w-full px-10 pt-4 pb-10 text-center flex flex-row">
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
				href={$linkTo('/versandlogistik-info')}
				class="w-full text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>Neues</a
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
</div>
