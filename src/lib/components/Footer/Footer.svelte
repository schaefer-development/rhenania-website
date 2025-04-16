<script lang="ts">
	import Logo from '$lib/components/Logo/Logo.svelte';
	import FooterAccordion from '$lib/components/Footer/FooterAccordion.svelte';

	const accordionItems = [
		{
			title: 'Versandlogistiksystem',
			subpoints: [
				{ name: 'K04', href: '/de/k04' },
				{ name: 'F95', href: '/de/f95' },
				{ name: 'VKA', href: '/de/vka' }
			]
		},
		{
			title: 'Versandoptimierung',
			subpoints: [
				{ name: 'U12', href: '/de/u12' },
				{ name: 'APK', href: '/de/apk' },
				{ name: 'DUV', href: '/de/duv' },
				{ name: 'G10', href: '/de/g10' }
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

	import type { ReferencesItem } from '$lib/graphql/generated/schema';
	export let referenceItems: ReferencesItem[] = [];

	import type { ReferencesContainer } from '$lib/graphql/generated/schema';

	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	let date = new Date().getFullYear();
	export let data: { referencesContainers: ReferencesContainer[] };
</script>

<footer class="bg-rc_darkblue-darkest relative text-white">
	<div class="bg-rc_darkblue w-full">
		<div class="text-rc_darkblue-darkest mx-auto flex max-w-screen-2xl items-center px-10">
			<Splide
				aria-label="Kundenlogos von Rhenania Computer GmbH"
				class="relative w-full"
				options={{
					autoplay: true,
					rewind: true,
					perPage: 5,
					perMove: 1,
					pagination: false,
					autoScroll: {
						speed: 1
					}
				}}
			>
				{#each data.referencesContainers?.[0].referenceItems as referenceItem (referenceItem.id)}
					{#if referenceItem.referenceLogo}
						<SplideSlide data-splide-interval="1401">
							<img
								src={referenceItem.referenceLogo.url}
								alt="Kundenlogo von Rhenania Computer"
								class="mx-auto w-9/12"
							/>
						</SplideSlide>
					{/if}
				{/each}
			</Splide>

			<hr />
		</div>
	</div>

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
