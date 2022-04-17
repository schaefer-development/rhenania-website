<script lang="ts">
	import { linkTo } from '$lib/helpers';
	import DrawerAccordion from '$lib/components/Drawer/DrawerAccordion.svelte';
	export let toggleMenuFull: () => void;
	export let openMenuFull: boolean;
</script>

<aside
	id="drawerFull"
	on:click={toggleMenuFull}
	class="{openMenuFull
		? 'rc_menu_visible'
		: 'rc_menu_hidden'} absolute visible lg:hidden rc_menu left-0 top-20 w-full min-h-screen overflow-auto ease-in-out transform duration-300 transition-all z-40"
>
	<div class="relative flex flex-row w-full max-w-screen-2xl mx-auto">
		<div
			class="w-full px-4 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-20 gap-y-4 text-white "
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
				<div class="block bg-rc_red h-0.5 my-2" />
			</div>
			<div class="left">
				<!-- left start -->
				<a
					href={$linkTo('/start')}
					class="font-medium text-xl uppercase tracking-wider break-words text-rc_skyblue text-rc_skyblue"
					>Start</a
				>

				<div class="block bg-rc_darkblue h-0.5 my-4" />
				<p class="font-medium text-xl uppercase tracking-wider break-words text-rc_skyblue">
					Produkte
				</p>
				<DrawerAccordion id="versandlogistiksystem_drawer_full">
					<span slot="headline">Versandlogistiksystem</span>
					<div slot="content">
						<a href={$linkTo('/k04')} class="rc_desktopmenu_subpoint"
							>K04 - Kommissionieren, Kontrollieren, Packen</a
						>
						<a href={$linkTo('/f95/')} class="rc_desktopmenu_subpoint"
							>F95 - Paket- und Palettenversand</a
						>

						<a href={$linkTo('/vka')} class="rc_desktopmenu_subpoint"
							>VKA - Versandkostenkontrolle und Abrechnung</a
						>
					</div>
				</DrawerAccordion>
				<DrawerAccordion id="versandoptimierung_drawer_full">
					<span slot="headline">Versandoptimierung</span>
					<div slot="content">
						<a href={$linkTo('/u12/')} class="rc_desktopmenu_subpoint"
							>U12 - Umsatzsteuer Befreiung sichern</a
						>
						<a href={$linkTo('/duv/')} class="rc_desktopmenu_subpoint">DUV - Dubletten vermeiden</a>
						<a href={$linkTo('/apk/')} class="rc_desktopmenu_subpoint"
							>APK - Adressprüfung und Korrektur</a
						>
						<a href={$linkTo('/g10/')} class="rc_desktopmenu_subpoint">G10 - Gefahrgutversand</a>
					</div>
				</DrawerAccordion>
				<DrawerAccordion id="hardware_drawer_full">
					<span slot="headline">Hardware</span>
					<div slot="content">
						<a href={$linkTo('/etikettendrucker/')} class="rc_desktopmenu_subpoint"
							>Etikettendrucker</a
						>
						<a href={$linkTo('/waagen/')} class="rc_desktopmenu_subpoint">Waagen</a>
						<a href={$linkTo('/barcodescanner/')} class="rc_desktopmenu_subpoint">Barcodescanner</a>
					</div>
				</DrawerAccordion>

				<!-- left end -->
			</div>
			<div class="right">
				<!-- right start -->
				<p
					class="font-medium text-xl uppercase tracking-wider break-words text-rc_skyblue text-rc_skyblue"
				>
					Unternehmen
				</p>

				<a
					href={$linkTo('/ueberuns/')}
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Über uns</a
				>
				<a
					href={$linkTo('/kontakt/')}
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Kontakt und Anfahrt</a
				>
				<a
					href={$linkTo('/karriere/')}
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Karriere</a
				>
				<a
					href={$linkTo('/termine/')}
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Termine</a
				>
				<a
					href={$linkTo('/partner/')}
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Partner</a
				>
				<a
					href={$linkTo('/referenzen')}
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Referenzen</a
				>
				<div class="block bg-rc_darkblue h-0.5 my-4" />
				<!---  -->
				<p
					class="font-medium text-xl uppercase tracking-wider break-words text-rc_skyblue text-rc_skyblue"
				>
					Service
				</p>

				<a
					href={$linkTo('/cloudloesung/')}
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Cloudlösung</a
				>
				<a
					href={$linkTo('/onlinesupport')}
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Online-Support</a
				>
				<a
					href={$linkTo('/download/')}
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Download</a
				>
				<a
					href={$linkTo('/faq/')}
					class="block text-white font-medium text-sm tracking-widest uppercase py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>FAQ</a
				>
				<!-- right end -->
			</div>
		</div>
	</div>
</aside>
