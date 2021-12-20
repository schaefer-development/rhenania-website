<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/components/Logo/Logo.svelte';
</script>

<footer class="text-white bg-rc_darkblue-darkest">
	<div class="bg-rc_darkblue">
		<div
			class="grid grid-cols-3 sm:grid-cols-5 gap-4 mx-auto max-w-screen-2xl px-10 text-xs text-rc_darkblue-darkest flex items-center"
		>
			<div>
				<img src="{base}/logo_clients/clients_jumo.svg" alt="Jumo" class="w-10/12 mx-auto" />
			</div>
			<div>
				<img src="{base}/logo_clients/clients_lamy.svg" alt="Lamy" class="w-10/12 mx-auto" />
			</div>
			<div>
				<img src="{base}/logo_clients/clients_duravit.svg" alt="Duravit" class="w-10/12 mx-auto" />
			</div>
			<div>
				<img src="{base}/logo_clients/clients_abus.svg" alt="Abus" class="w-10/12 mx-auto" />
			</div>
			<div>
				<img
					src="{base}/logo_clients/clients_fujifilm.svg"
					alt="Fujifilm"
					class="w-10/12 mx-auto"
				/>
			</div>
		</div>
	</div>
	<div
		class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-auto max-w-screen-2xl px-10 py-20 text-xs "
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
			<div class="h-full flex items-stretch ">
				<span class="w-px border-r border-white mx-auto inline-block transform rc_rotate" />
			</div>
		</div>
		<div class="pb-8">
			<p class="uppercase font-bold text-center sm:text-left tracking-wider pb-2">Produkte</p>
			<p class="text-center sm:text-left tracking-wide">
				<a
					href="{base}/#Versandlogistik/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Versandlogistik</a
				><br />

				<a
					href="{base}/#Versandoptimierung/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Versandoptimierung</a
				><br />

				<a
					href="{base}/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Hardware</a
				><br />
			</p>
		</div>
		<div class="pb-8">
			<p class="uppercase font-bold text-center sm:text-left tracking-wider pb-2">Unternehmen</p>
			<p class="text-center sm:text-left tracking-wide">
				<a
					href="{base}/unternehmen/kontakt/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Kontakt und Anfahrt</a
				><br />

				<a
					href="{base}/unternehmen/karriere/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Karriere</a
				><br />

				<a
					href="{base}/unternehmen/termine/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Termine</a
				><br />

				<a
					href="{base}/unternehmen/partner/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Partner</a
				><br />

				<a
					href="{base}/unternehmen/referenzen/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Referenzen</a
				><br />
			</p>
		</div>
		<div class="pb-8">
			<p class="uppercase font-bold text-center sm:text-left tracking-wider pb-2">Service</p>
			<p class="text-center sm:text-left tracking-wide">
				<a
					href="{base}/service/cloudloesung/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Cloudlösung</a
				><br />
				<a
					href="{base}/service/onlinesupport/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Online-Support</a
				><br />

				<a
					href="{base}/service/download/"
					class="w-full text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Download</a
				><br />

				<a
					href="{base}/service/faq/"
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
				Copyright 2021<br />
			</p>
		</div>
	</div>
</footer>
