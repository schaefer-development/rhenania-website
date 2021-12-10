<script lang="ts">
	import Logo from '$lib/components/Logo/Logo.svelte';
</script>

<footer class="text-white bg-rc_darkblue-darkest">
	<div class="bg-rc_darkblue">
		<div
			class="grid grid-cols-5 gap-4 mx-auto max-w-screen-2xl py-20 text-xs text-center text-rc_darkblue-darkest"
		>
			<div>
				<img src="/logo_clients/lamy.svg" alt="Lamy" />
			</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
		</div>
	</div>
	<div
		class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-auto max-w-screen-2xl px-10 py-20 text-xs "
	>
		<div class="col-span-full text-white">
			<div class="w-16">
				<Logo />
			</div>
		</div>
		<div class="col-span-full xl:col-span-1 pb-4">
			<p class="uppercase font-bold pb-2">RC Rhenania Computer</p>
			<p>
				Aegidiusplatz 15 b<br />
				53604 Bad Honnef
				<br /><br />
				Telefon: 02224 . 96 00 00<br />
				Telefax: 02224 . 960 00 96<br />
				E-Mail: info@rhenania.biz
			</p>
		</div>
		<div class="pb-4 hidden xl:block">
			<div class="border-r w-6/12 h-full rotate-45 ">
				x<span class="transform rotate-45">hallo</span>
			</div>
		</div>
		<div class="pb-4">
			<p class="uppercase font-bold pb-2">Produkte</p>
			<p>
				Versandlogistik<br />
				Versandoptimierung<br />
				Hardware<br />
			</p>
		</div>
		<div class="pb-4">
			<p class="uppercase font-bold pb-2">Unternehmen</p>
			<p>
				Kontakt und Anfahrt<br />
				Karriere<br />
				Termine<br />
				Partner<br />
				Referenzen<br />
			</p>
		</div>
		<div class="pb-4">
			<p class="uppercase font-bold pb-2">Service</p>
			<p>
				Cloudlösungen<br />
				Online-Support<br />
				Download<br />
				FAQ<br />
			</p>
		</div>
		<div class="pb-4">
			<p class="uppercase font-bold pb-2">Kontakt</p>
			<p>
				Impressum<br />
				Datenschutz<br />
				Copyright 2021<br />
			</p>
		</div>
	</div>
</footer>
