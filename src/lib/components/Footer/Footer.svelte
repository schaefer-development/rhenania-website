<script lang="ts">
	import Logo from '$lib/components/Logo/Logo.svelte';
	import { linkTo } from '$lib/helpers';
	import FooterAccordion from '$lib/components/Footer/FooterAccordion.svelte';

	import Slideshow from '$lib/components/Slideshow/Slideshow.svelte';
	import type { ReferencesContainer } from '$lib/graphql/generated/schema';

	let date = new Date().getFullYear();
	export let data: { referencesContainers: ReferencesContainer[] };
</script>

<footer class="bg-rc_darkblue-darkest relative text-white">
	<div class="bg-rc_darkblue w-full">
		<div class="text-rc_darkblue-darkest mx-auto flex max-w-screen-2xl items-center px-10">
			<Slideshow referenceItems={data?.referencesContainers?.[0].referenceItems} />
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
					alt="Eine E-Mail mit Ihrem Standard Mailprogramm schreiben"
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>info@rhenania.biz</a
				>
			</p>
		</div>
		<div class="hidden w-full pb-8 xl:block">
			<div class="flex aspect-square w-full justify-center">
				<div class="rc_rotate h-32 border-r"></div>
			</div>
		</div>
		<div class="pb-8">
			<p class="pb-2 text-center font-bold tracking-wider uppercase sm:text-left">Produkte</p>
			<p class="text-center leading-relaxed tracking-wide sm:text-left">
				<FooterAccordion id="FooterVersandlogistiksystem">
					<span
						slot="headline"
						class="hover:text-rc_red focus:text-rc_red block text-white focus:ring-0 focus:outline-none"
						>Versandlogistiksystem</span
					>
					<div slot="content" class="pb-2">
						<a
							href={$linkTo('/k04')}
							class="hover:text-rc_red focus:text-rc_red block pl-2 text-white focus:ring-0 focus:outline-none"
							>– K04</a
						>
						<a
							href={$linkTo('/f95')}
							class="hover:text-rc_red focus:text-rc_red block pl-2 text-white focus:ring-0 focus:outline-none"
							>– F95</a
						>

						<a
							href={$linkTo('/vka')}
							class="hover:text-rc_red focus:text-rc_red block pl-2 text-white focus:ring-0 focus:outline-none"
							>– VKA</a
						>
					</div>
				</FooterAccordion>

				<FooterAccordion id="FooterVersandoptimierung">
					<span
						slot="headline"
						class="hover:text-rc_red focus:text-rc_red block text-white focus:ring-0 focus:outline-none"
						>Versandlogistiksystem</span
					>
					<div slot="content" class="pb-2">
						<a
							href={$linkTo('/u12')}
							class="hover:text-rc_red focus:text-rc_red block pl-2 text-white focus:ring-0 focus:outline-none"
							>– U12</a
						>
						<a
							href={$linkTo('/apk')}
							class="hover:text-rc_red focus:text-rc_red block pl-2 text-white focus:ring-0 focus:outline-none"
							>– APK</a
						>
						<a
							href={$linkTo('/duv')}
							class="hover:text-rc_red focus:text-rc_red block pl-2 text-white focus:ring-0 focus:outline-none"
							>– DUV</a
						>
						<a
							href={$linkTo('/g10')}
							class="hover:text-rc_red focus:text-rc_red block pl-2 text-white focus:ring-0 focus:outline-none"
							>– G10</a
						>
					</div>
				</FooterAccordion>

				<FooterAccordion id="FooterHardware">
					<span
						slot="headline"
						class="hover:text-rc_red focus:text-rc_red block text-white focus:ring-0 focus:outline-none"
						>Hardware</span
					>
					<div slot="content" class="pb-2">
						<a
							href={$linkTo('/etikettendrucker')}
							class="hover:text-rc_red focus:text-rc_red block pl-2 text-white focus:ring-0 focus:outline-none"
							>– Etikettendrucker</a
						>
						<a
							href={$linkTo('/waagen')}
							class="hover:text-rc_red focus:text-rc_red block pl-2 text-white focus:ring-0 focus:outline-none"
							>– Waagen</a
						>
						<a
							href={$linkTo('/barcodescanner')}
							class="hover:text-rc_red focus:text-rc_red block pl-2 text-white focus:ring-0 focus:outline-none"
							>– Barcodescanner</a
						>
					</div>
				</FooterAccordion>
			</p>
		</div>
		<div class="pb-8">
			<p class="pb-2 text-center font-bold tracking-wider uppercase sm:text-left">Unternehmen</p>
			<p class="text-center leading-relaxed tracking-wide sm:text-left">
				<a
					href={$linkTo('/ueberuns')}
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Über uns</a
				><br />
				<a
					href={$linkTo('/kontakt')}
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Kontakt und Anfahrt</a
				><br />

				<a
					href={$linkTo('/karriere')}
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Karriere</a
				><br />

				<a
					href={$linkTo('/versandlogistik-info')}
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Neues</a
				><br />

				<a
					href={$linkTo('/partner')}
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Partner</a
				><br />

				<a
					href={$linkTo('/referenzen')}
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Referenzen</a
				><br />
			</p>
		</div>
		<div class="pb-8">
			<p class="pb-2 text-center font-bold tracking-wider uppercase sm:text-left">Service</p>
			<p class="text-center leading-relaxed tracking-wide sm:text-left">
				<a
					href={$linkTo('/cloudloesung')}
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Cloudlösung</a
				><br />
				<a
					href={$linkTo('/onlinesupport')}
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Online-Support</a
				><br />

				<a
					href={$linkTo('/download')}
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Download</a
				><br />
			</p>
		</div>
		<div class="pb-8">
			<p class="pb-2 text-center font-bold tracking-wider uppercase sm:text-left">Kontakt</p>
			<p class="text-center leading-relaxed tracking-wide sm:text-left">
				<a
					href={$linkTo('/impressum')}
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Impressum</a
				>
				<br />

				<a
					href={$linkTo('/datenschutz')}
					class="hover:text-rc_red focus:text-rc_red w-full py-2 text-white focus:ring-0 focus:outline-none"
					>Datenschutz</a
				>
				<br />
				Copyright {date}
			</p>
		</div>
	</div>
</footer>
