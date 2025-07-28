<script lang="ts">
	import Logo from '$lib/components/Logo/Logo.svelte';
	import FooterAccordion from '$lib/components/Footer/FooterAccordion.svelte';
	import type { Snippet } from 'svelte';

	const accordionItems = [
		{
			title: 'Versandlogistiksystem',
			subpoints: [
				{
					name: 'K04 - Kommissionieren, Kontrollieren, Packen',
					href: '/de/beleglose-kommissionierung-software'
				},
				{ name: 'F95 - Paket- und Palettenversand', href: '/de/multi-carrier-versandsoftware' },
				{
					name: 'VKA - Versandkostenkontrolle und Abrechnung',
					href: '/de/versandkosten-frachtkosten-software'
				}
			]
		},
		{
			title: 'Versandoptimierung',
			subpoints: [
				{
					name: 'U12 - Umsatzsteuer Befreiung sichern',
					href: '/de/gelangensbestaetigung-software'
				},
				{ name: 'APK - Adressprüfung und Korrektur', href: '/de/adresspruefung-software' },
				{ name: 'DUV - Dubletten vermeiden', href: '/de/dublettenpruefung-software' },
				{ name: 'G10 - Gefahrgutversand', href: '/de/gefahrgut-versand-software' }
			]
		},
		{
			title: 'Hardware',
			subpoints: [
				{ name: 'Etikettendrucker', href: '/de/etikettendrucker' },
				{ name: 'Waagen', href: '/de/waagen' },
				{ name: 'Barcodescanner', href: '/de/barcodescanner' }
			]
		}
	];

	let date = new Date().getFullYear();
	let { children }: { children?: Snippet } = $props();
</script>

<footer class="bg-rc_darkblue-darkest relative text-white">
	{@render children?.()}

	<div
		class="mx-auto grid max-w-screen-2xl grid-cols-1 gap-4 px-10 pt-20 pb-10 text-xs sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"
	>
		<div class="col-span-full grid text-white">
			<div class="w-16 justify-self-center sm:justify-self-start">
				<Logo />
			</div>
		</div>
		<div class="col-span-full pb-8 xl:col-span-1">
			<p class="pb-2 text-center leading-relaxed font-bold tracking-wider uppercase sm:text-left">
				RC Rhenania Computer
			</p>
			<p class="text-center leading-relaxed tracking-wide sm:text-left">
				Aegidiusplatz 15 b<br />
				53604 Bad Honnef
				<br /><br />
				Telefon: 02224 - 96 00 00<br />
				Telefax: 02224 - 960 00 96<br />
				E-Mail:

				<a
					href="mailto:info@rhenania.biz"
					title="Eine E-Mail mit Ihrem Standard Mailprogramm schreiben"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>info@rhenania.biz</a
				>
			</p>
		</div>
		<div class="hidden w-full pb-8 xl:block">
			<div class="flex aspect-square w-full justify-center">
				<div class="h-32 rotate-45 border-r"></div>
			</div>
		</div>
		<div class="pb-8">
			<p class="pb-2 text-center font-bold tracking-wider uppercase sm:text-left">Produkte</p>
			<div class="text-center leading-relaxed tracking-wide sm:text-left">
				<FooterAccordion items={accordionItems} />
			</div>
		</div>
		<div class="pb-8">
			<p class="pb-2 text-center font-bold tracking-wider uppercase sm:text-left">Unternehmen</p>
			<p class="text-center leading-relaxed tracking-wide sm:text-left">
				<a
					href="/de/ueberuns"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Über uns</a
				><br />
				<a
					href="/de/kontakt"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Kontakt und Anfahrt</a
				><br />

				<a
					href="/de/karriere"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Karriere</a
				><br />

				<a
					href="/de/versandlogistik-info"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Neues</a
				><br />

				<a
					href="/de/partner"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Partner</a
				><br />

				<a
					href="/de/referenzen"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Referenzen</a
				><br />
			</p>
		</div>
		<div class="pb-8">
			<p class="pb-2 text-center font-bold tracking-wider uppercase sm:text-left">Service</p>
			<p class="text-center leading-relaxed tracking-wide sm:text-left">
				<a
					href="/de/cloudloesung"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Cloudlösung</a
				><br />
				<a
					href="/de/onlinesupport"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Online-Support</a
				><br />
				<a
					href="/de/download"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Download</a
				><br />
			</p>
		</div>
		<div class="pb-8">
			<p class="pb-2 text-center font-bold tracking-wider uppercase sm:text-left">Kontakt</p>
			<p class="text-center leading-relaxed tracking-wide sm:text-left">
				<a
					href="/de/impressum"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Impressum</a
				>
				<br />
				<a
					href="/de/datenschutz"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Datenschutz</a
				>
				<br />
				Copyright {date}
			</p>
		</div>
	</div>
</footer>
