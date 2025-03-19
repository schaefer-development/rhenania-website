<script lang="ts">
	import DrawerAccordion from '$lib/components/Drawer/DrawerAccordion.svelte';
	export let toggleMenuFull: () => void;
	export let openMenuFull: boolean;
</script>

<aside
	id="drawerFull"
	on:click={toggleMenuFull}
	class="{openMenuFull
		? 'rc_menu_visible'
		: 'rc_menu_hidden'} rc_menu visible absolute top-32 left-0 z-40 min-h-screen w-full transform overflow-auto transition-all duration-300 ease-in-out sm:top-20 lg:hidden"
>
	<div class="relative mx-auto flex w-full max-w-screen-2xl flex-row">
		<div
			class="grid w-full grid-cols-1 gap-x-10 gap-y-4 px-4 py-10 text-white sm:grid-cols-2 md:gap-x-20 md:px-10"
		>
			<div class="col-span-1 sm:col-span-2">
				<button
					class="text-rc_red hover:text-rc_red focus:text-rc_red flex w-full items-center justify-end font-medium tracking-wider uppercase focus:border-0 focus:ring-0 focus:outline-none"
				>
					<span class="px-2 font-medium uppercase">Schliessen</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 fill-current"
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
				<div class="bg-rc_red my-2 block h-0.5" />
			</div>
			<div class="left">
				<!-- left start -->
				<a
					href="#"
					class="text-rc_skyblue text-rc_skyblue text-xl font-medium tracking-wider break-words uppercase"
					>Start</a
				>

				<div class="bg-rc_darkblue my-4 block h-0.5" />
				<p class="text-rc_skyblue text-xl font-medium tracking-wider break-words uppercase">
					Produkte
				</p>
				<DrawerAccordion id="versandlogistiksystem_drawer_full">
					<span slot="headline">Versandlogistiksystem</span>
					<div slot="content">
						<a href="/k04" class="rc_desktopmenu_subpoint"
							>K04 - Kommissionieren, Kontrollieren, Packen</a
						>
						<a href="/f95" class="rc_desktopmenu_subpoint">F95 - Paket- und Palettenversand</a>

						<a href="/vka" class="rc_desktopmenu_subpoint"
							>VKA - Versandkostenkontrolle und Abrechnung</a
						>
					</div>
				</DrawerAccordion>
				<DrawerAccordion id="versandoptimierung_drawer_full">
					<span slot="headline">Versandoptimierung</span>
					<div slot="content">
						<a href="/u12" class="rc_desktopmenu_subpoint">U12 - Umsatzsteuer Befreiung sichern</a>
						<a href="/duv" class="rc_desktopmenu_subpoint">DUV - Dubletten vermeiden</a>
						<a href="/apk" class="rc_desktopmenu_subpoint">APK - Adressprüfung und Korrektur</a>
						<a href="/g10" class="rc_desktopmenu_subpoint">G10 - Gefahrgutversand</a>
					</div>
				</DrawerAccordion>
				<DrawerAccordion id="hardware_drawer_full">
					<span slot="headline">Hardware</span>
					<div slot="content">
						<a href="/etikettendrucker" class="rc_desktopmenu_subpoint">Etikettendrucker</a>
						<a href="/waagen" class="rc_desktopmenu_subpoint">Waagen</a>
						<a href="/barcodescanner" class="rc_desktopmenu_subpoint">Barcodescanner</a>
					</div>
				</DrawerAccordion>

				<!-- left end -->
			</div>
			<div class="right">
				<!-- right start -->
				<p
					class="text-rc_skyblue text-rc_skyblue text-xl font-medium tracking-wider break-words uppercase"
				>
					Unternehmen
				</p>

				<a
					href="/ueberuns"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Über uns</a
				>
				<a
					href="/kontakt"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Kontakt und Anfahrt</a
				>
				<a
					href="/karriere"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Karriere</a
				>
				<a
					href="/versandlogistik-info"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Neues</a
				>
				<a
					href="/partner"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Partner</a
				>
				<a
					href="/referenzen"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Referenzen</a
				>
				<div class="bg-rc_darkblue my-4 block h-0.5" />
				<!---  -->
				<p
					class="text-rc_skyblue text-rc_skyblue text-xl font-medium tracking-wider break-words uppercase"
				>
					Service
				</p>

				<a
					href="/cloudloesung"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Cloudlösung</a
				>
				<a
					href="/onlinesupport"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Online-Support</a
				>
				<a
					href="/download"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Download</a
				>
				<!-- right end -->
			</div>
		</div>
	</div>
</aside>
