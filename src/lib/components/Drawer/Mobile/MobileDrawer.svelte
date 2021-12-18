<script lang="ts">
	import { base } from '$app/paths';
	import DrawerAccordion from '$lib/components/Drawer/DrawerAccordion.svelte';
	export let toggleMenuFull: () => void;
	export let openMenuFull: boolean;
</script>

<aside
	id="drawerFull"
	on:click={toggleMenuFull}
	class="{openMenuFull
		? 'rc_menu_visible'
		: 'rc_menu_hidden'} visible md:hidden rc_menu min-h-screen left-0 top-20 w-full shadow-md fixed overflow-auto ease-in-out transform transition-all duration-300 z-40"
>
	<div class="flex flex-row w-full max-w-screen-2xl mx-auto ">
		<div
			class="w-full px-4 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 text-white "
		>
			<div class="col-span-1 sm:col-span-2">
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
				<hr class="my-4 border-rc_red" />
			</div>
			<div class="left">
				<!-- left start -->
				<a href="{base}/start" class="rc_h1 text-rc_skyblue">Start</a>
				<hr class="my-4 border-rc_darkblue" />
				<p class="rc_h1 text-rc_skyblue">Produkte</p>
				<DrawerAccordion id="versandlogistiksystem_drawer_full">
					<span slot="headline">Versandlogistiksystem</span>
					<div slot="content">
						<a href="{base}/produkte/f95/" class="rc_desktopmenu_subpoint"
							>F95 - Paket und Palettenversand</a
						>
						<a href="{base}/produkte/k04" class="rc_desktopmenu_subpoint"
							>K04 - Kommissionieren, Kontrollieren, Packen</a
						>
						<a href="{base}/produkte/vka" class="rc_desktopmenu_subpoint"
							>VKA - Versandkostenkontrolle und Abrechnung</a
						>
					</div>
				</DrawerAccordion>
				<DrawerAccordion id="versandoptimierung_drawer_full">
					<span slot="headline">Versandoptimierung</span>
					<div slot="content">
						<a href="{base}/produkte/u12/" class="rc_desktopmenu_subpoint"
							>U12 - Umsatzbefreiung sichern</a
						>
						<a href="{base}/produkte/duv/" class="rc_desktopmenu_subpoint"
							>DUV - Dubletten vermeiden</a
						>
						<a href="{base}/produkte/apk/" class="rc_desktopmenu_subpoint"
							>APK - Adressprüfung und Korrektur</a
						>
						<a href="{base}/produkte/g10/" class="rc_desktopmenu_subpoint">G10 - Gefahrgutversand</a
						>
					</div>
				</DrawerAccordion>
				<DrawerAccordion id="hardware_drawer_full">
					<span slot="headline">Hardware</span>
					<div slot="content">
						<a href="{base}/produkte/etikettendrucker/" class="rc_desktopmenu_subpoint"
							>Etikettendrucker</a
						>
						<a href="{base}/produkte/waagen/" class="rc_desktopmenu_subpoint">Waagen</a>
						<a href="{base}/produkte/barcodescanner/" class="rc_desktopmenu_subpoint"
							>Barcodescanner</a
						>
					</div>
				</DrawerAccordion>

				<!-- left end -->
			</div>
			<div class="right">
				<!-- right start -->
				<p class="rc_h1 text-rc_skyblue">Unternehmen</p>

				<a
					href="{base}/unternehmen/kontakt/"
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Kontakt und Anfahrt</a
				>
				<a
					href="{base}/unternehmen/karriere/"
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Karriere</a
				>
				<a
					href="{base}/unternehmen/termine/"
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Termine</a
				>
				<a
					href="{base}/unternehmen/partner/"
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Partner</a
				>
				<a
					href="{base}/unternehmen/referenzen"
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Referenzen</a
				>
				<hr class="my-4 border-rc_darkblue" />
				<!---  -->
				<p class="rc_h1 text-rc_skyblue">Service</p>

				<a
					href="{base}/service/cloudloesung/"
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Cloudlösung</a
				>
				<a
					href="{base}/service/onlinesupport"
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Online-Support</a
				>
				<a
					href="{base}/service/download/"
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Download</a
				>
				<a
					href="{base}/service/faq/"
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>FAQ</a
				>
				<!-- right end -->
			</div>
		</div>
	</div>
</aside>
