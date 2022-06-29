<script lang="ts">
	import DrawerAccordion from '$lib/components/Drawer/DrawerAccordion.svelte';
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
		<div class="w-full grid grid-cols-3 gap-x-24 px-10 pt-4 pb-10">
			<DrawerAccordion id="versandlogistiksystem">
				<span slot="headline" class="breakwords">Versandlogistiksystem</span>
				<div slot="content">
					<a href={$linkTo('/k04/')} class="rc_desktopmenu_subpoint"
						>K04 - Kommissionieren, Kontrollieren, Packen</a
					>
					<a href={$linkTo('/f95/')} class="rc_desktopmenu_subpoint"
						>F95 - Paket- und Palettenversand</a
					>

					<a href={$linkTo('/vka/')} class="rc_desktopmenu_subpoint"
						>VKA - Versandkostenkontrolle und Abrechnung</a
					>
				</div>
			</DrawerAccordion>
			<DrawerAccordion id="versandoptimierung">
				<span slot="headline">Versandoptimierung</span>
				<div slot="content">
					<a href={$linkTo('/u12/')} class="rc_desktopmenu_subpoint"
						>U12 - Umsatzsteuer Befreiung sichern</a
					>
					<a href={$linkTo('/apk/')} class="rc_desktopmenu_subpoint"
						>APK - Adressprüfung und Korrektur</a
					>
					<a href={$linkTo('/duv/')} class="rc_desktopmenu_subpoint">DUV - Dubletten vermeiden</a>
					<a href={$linkTo('/g10/')} class="rc_desktopmenu_subpoint">G10 - Gefahrgutversand</a>
				</div>
			</DrawerAccordion>
			<DrawerAccordion id="hardware">
				<span slot="headline">Hardware</span>
				<div slot="content">
					<a href={$linkTo('/etikettendrucker/')} class="rc_desktopmenu_subpoint"
						>Etikettendrucker</a
					>
					<a href={$linkTo('/waagen/')} class="rc_desktopmenu_subpoint">Waagen</a>
					<a href={$linkTo('/barcodescanner/')} class="rc_desktopmenu_subpoint">Barcodescanner</a>
				</div>
			</DrawerAccordion>
		</div>
	</div>
</div>
