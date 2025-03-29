<script lang="ts">
	import DrawerAccordion from '$lib/components/Drawer/DrawerAccordion.svelte';
	export let toggleMenuFull: () => void;
	export let openMenuFull: boolean;
</script>

<aside
	class="{openMenuFull
		? ' open translate-y'
		: 'close -translate-y-full border-4'} bg-rc_darkblue-darkest/98 rc_menu visible absolute top-32 left-0 z-40 block min-h-screen w-full transform overflow-auto transition-all duration-300 ease-in-out sm:top-20 lg:hidden lg:hidden"
>
	<div class="relative mx-auto flex w-full max-w-screen-2xl flex-row">
		<div
			class="grid w-full grid-cols-1 gap-x-10 gap-y-4 px-4 py-10 text-white sm:grid-cols-2 md:gap-x-20 md:px-10"
		>
			<div class="col-span-1 sm:col-span-2">
				<button
					on:click={toggleMenuFull}
					class="text-rc_red hover:text-rc_red focus:text-rc_red flex w-full cursor-pointer items-center justify-end font-medium tracking-wider uppercase focus:border-0 focus:ring-0 focus:outline-none"
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
				<div class="bg-rc_red my-2 block h-0.5"></div>
			</div>
			<div class="left">
				<!-- left start -->
				<a
					href="#"
					class="text-rc_skyblue text-rc_skyblue text-xl font-medium tracking-wider break-words uppercase"
					>Start</a
				>

				<div class="bg-rc_darkblue my-4 block h-0.5"></div>
				<p class="text-rc_skyblue text-xl font-medium tracking-wider break-words uppercase">
					Produkte
				</p>
				<DrawerAccordion id="versandlogistiksystem_drawer_full">
					<span slot="headline">Versandlogistiksystem</span>
					<div slot="content" class="flex flex-col">
						<a
							href="/de/k04"
							class="text-rc_skyblue upppercase border-b border-blue-700 py-2 font-medium"
							>K04 - Kommissionieren, Kontrollieren, Packen</a
						>
						<a
							href="/de/f95"
							class="text-rc_skyblue upppercase border-b border-blue-700 py-2 font-medium"
							>F95 - Paket- und Palettenversand</a
						>

						<a
							href="/de/vka"
							class="text-rc_skyblue upppercase border-b border-blue-700 py-2 font-medium"
							>VKA - Versandkostenkontrolle und Abrechnung</a
						>
					</div>
				</DrawerAccordion>
				<DrawerAccordion id="versandoptimierung_drawer_full">
					<span slot="headline">Versandoptimierung</span>
					<div slot="content" class="flex flex-col">
						<a
							href="/de/u12"
							class="text-rc_skyblue upppercase border-b border-blue-700 py-2 font-medium"
							>U12 - Umsatzsteuer Befreiung sichern</a
						>
						<a
							href="/de/duv"
							class="text-rc_skyblue upppercase border-b border-blue-700 py-2 font-medium"
							>DUV - Dubletten vermeiden</a
						>
						<a
							href="/de/apk"
							class="text-rc_skyblue upppercase border-b border-blue-700 py-2 font-medium"
							>APK - Adressprüfung und Korrektur</a
						>
						<a
							href="/de/g10"
							class="text-rc_skyblue upppercase border-b border-blue-700 py-2 font-medium"
							>G10 - Gefahrgutversand</a
						>
					</div>
				</DrawerAccordion>
				<DrawerAccordion id="hardware_drawer_full">
					<span slot="headline">Hardware</span>
					<div slot="content" class="flex flex-col">
						<a
							href="/de/etikettendrucker"
							class="text-rc_skyblue upppercase border-b border-blue-700 py-2 font-medium"
							>Etikettendrucker</a
						>
						<a
							href="/de/waagen"
							class="text-rc_skyblue upppercase border-b border-blue-700 py-2 font-medium">Waagen</a
						>
						<a
							href="/de/barcodescanner"
							class="text-rc_skyblue upppercase border-b border-blue-700 py-2 font-medium"
							>Barcodescanner</a
						>
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
					href="/de/ueberuns"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Über uns</a
				>
				<a
					href="/de/kontakt"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Kontakt und Anfahrt</a
				>
				<a
					href="/de/karriere"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Karriere</a
				>
				<a
					href="/de/versandlogistik-info"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Neues</a
				>
				<a
					href="/de/partner"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Partner</a
				>
				<a
					href="/de/referenzen"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Referenzen</a
				>
				<div class="bg-rc_darkblue my-4 block h-0.5"></div>
				<!---  -->
				<p
					class="text-rc_skyblue text-rc_skyblue text-xl font-medium tracking-wider break-words uppercase"
				>
					Service
				</p>

				<a
					href="/de/cloudloesung"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Cloudlösung</a
				>
				<a
					href="/de/onlinesupport"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Online-Support</a
				>
				<a
					href="/de/download"
					class="hover:text-rc_red focus:text-rc_red block py-2 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
					>Download</a
				>
				<!-- right end -->
			</div>
		</div>
	</div>
</aside>
