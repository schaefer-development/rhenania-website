<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/components/Logo/Logo.svelte';
	import FooterAccordion from '$lib/components/Footer/FooterAccordion.svelte';

	import Slideshow from '$lib/components/Slideshow/Slideshow.svelte';
	import type { ReferencesItem } from '$lib/graphql/generated/schema';

	let date = new Date().getFullYear();
	export let referenceItems: ReferencesItem[];
</script>

<footer class="text-white bg-rc_darkblue-darkest relative">
	<div class="bg-rc_darkblue w-full">
		<div class="mx-auto max-w-screen-2xl px-10 text-rc_darkblue-darkest flex items-center">
			<Slideshow {referenceItems} />
		</div>
	</div>

	<div
		class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-auto max-w-screen-2xl px-10 pt-20 pb-10 text-xs "
	>
		<div class="col-span-full text-white grid">
			<div class="w-16 justify-self-center sm:justify-self-start">
				<Logo />
			</div>
		</div>
		<div class="col-span-full xl:col-span-1 pb-8">
			<p class="uppercase font-bold text-center sm:text-left tracking-wider pb-2">
				RC Rhenania Computer
			</p>
			<p class="text-center sm:text-left tracking-wide">
				Aegidiusplatz 15 b<br />
				53604 Bad Honnef
				<br /><br />
				Telefon: 02224 - 96 00 00<br />
				Telefax: 02224 - 960 00 96<br />
				E-Mail:

				<a
					href="mailto:info@rhenania.biz"
					alt="Eine E-Mail mit Ihrem Standard Mailprogramm schreiben"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>info@rhenania.biz</a
				>
			</p>
		</div>
		<div class="pb-8 hidden xl:block w-full">
			<div class="w-full aspect-square flex justify-center  ">
				<div class="border-r h-32 rc_rotate" />
			</div>
		</div>
		<div class="pb-8">
			<p class="uppercase font-bold text-center sm:text-left tracking-wider pb-2">Produkte</p>
			<p class="text-center sm:text-left tracking-wide">
				<FooterAccordion id="FooterVersandlogistiksystem">
					<span
						slot="headline"
						class="block text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
						>Versandlogistiksystem</span
					>
					<div slot="content" class="pb-2">
						<a
							href="{base}/f95/"
							class="block pl-2 text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
							>– F95</a
						>
						<a
							href="{base}/k04/"
							class="block pl-2 text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
							>– K04</a
						>
						<a
							href="{base}/vka/"
							class="block pl-2 text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
							>– VKA</a
						>
					</div>
				</FooterAccordion>

				<FooterAccordion id="FooterVersandoptimierung">
					<span
						slot="headline"
						class="block text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
						>Versandlogistiksystem</span
					>
					<div slot="content" class="pb-2">
						<a
							href="{base}/u12/"
							class="block pl-2 text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
							>– U12</a
						>
						<a
							href="{base}/apk/"
							class="block pl-2 text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
							>– APK</a
						>
						<a
							href="{base}/duv/"
							class="block pl-2 text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
							>– DUV</a
						>
						<a
							href="{base}/g10/"
							class="block pl-2 text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
							>– G10</a
						>
					</div>
				</FooterAccordion>

				<FooterAccordion id="FooterHardware">
					<span
						slot="headline"
						class="block text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
						>Hardware</span
					>
					<div slot="content" class="pb-2">
						<a
							href="{base}/etikettendrucker/"
							class="block pl-2 text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
							>– Etikettendrucker</a
						>
						<a
							href="{base}/waagen/"
							class="block pl-2 text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
							>– Waagen</a
						>
						<a
							href="{base}/barcodescanner/"
							class="block pl-2 text-white hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
							>– Barcodescanner</a
						>
					</div>
				</FooterAccordion>
			</p>
		</div>
		<div class="pb-8">
			<p class="uppercase font-bold text-center sm:text-left tracking-wider pb-2">Unternehmen</p>
			<p class="text-center sm:text-left tracking-wide">
				<a
					href="{base}/ueberuns/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Über uns</a
				><br />
				<a
					href="{base}/kontakt/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Kontakt und Anfahrt</a
				><br />

				<a
					href="{base}/karriere/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Karriere</a
				><br />

				<a
					href="{base}/termine/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Termine</a
				><br />

				<a
					href="{base}/partner/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Partner</a
				><br />

				<a
					href="{base}/referenzen/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Referenzen</a
				><br />
			</p>
		</div>
		<div class="pb-8">
			<p class="uppercase font-bold text-center sm:text-left tracking-wider pb-2">Service</p>
			<p class="text-center sm:text-left tracking-wide">
				<a
					href="{base}/cloudloesung/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Cloudlösung</a
				><br />
				<a
					href="{base}/onlinesupport/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Online-Support</a
				><br />

				<a
					href="{base}/download/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Download</a
				><br />

				<a
					href="{base}/faq/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>FAQ</a
				><br />
			</p>
		</div>
		<div class="pb-8">
			<p class="uppercase font-bold text-center sm:text-left tracking-wider pb-2">Kontakt</p>
			<p class="text-center sm:text-left tracking-wide">
				<a
					href="{base}/impressum/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Impressum</a
				>
				<br />

				<a
					href="{base}/datenschutz/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Datenschutz</a
				>
				<br />
				Copyright {date}<br />
				<a
					href="{base}/sandbox/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Sandbox</a
				>
			</p>
		</div>
	</div>
</footer>
