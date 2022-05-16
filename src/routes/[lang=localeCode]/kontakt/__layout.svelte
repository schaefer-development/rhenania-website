<script context="module" lang="ts">
	import Map from '$lib/components/Map/Map.svelte';

	const mapAttributes = {
		class: '',
		style: 'width: 100%; height: 100%; min-height:500px; max-height:40vh;'
	};
	export const prerender = true;
</script>

<section>
	<Map {mapAttributes} />

	<div
		class="relative z-10 max-w-screen-xl mx-auto px-10 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-3 gap-x-0 gap-y-16 lg:gap-x-20 lg:gap-y-0"
	>
		<div class="col-span-1 -mt-32 text-white flex items-start">
			<div class="bg-rc_darkblue px-8 py-8 h-auto lg:w-full">
				<div>
					<h1 class="rc_h1">Kontakt</h1>
					<h3 class="rc_h3 text-rc_skyblue py-2">RC Rhenania<br />Computer GmbH</h3>
				</div>
				<div>
					<p class="py-2">
						Aegidiusplatz 15 b<br />
						53604 Bad Honnef
					</p>
					<p class="pt-2 pb-4">
						Telefon: 0 222 4 - 96 00 00<br />
						Fax: 0 222 4 - 960 00 96<br />
						E-Mail: info@rhenania.biz<br />
					</p>
				</div>
			</div>
		</div>
		<slot />
	</div>
</section>
