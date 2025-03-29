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
		class="relative z-10 mx-auto grid max-w-screen-xl grid-cols-1 gap-x-0 gap-y-16 px-10 pt-20 pb-32 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-0"
	>
		<div class="contact_box col-span-1 -mt-32 flex items-start text-white">
			<div class="bg-rc_darkblue h-auto px-8 py-8 lg:w-full">
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
						Telefon: <a
							href="tel:+492224960000"
							title="Rufen Sie jetzt die Nummer 02224 - 96 00 00 an"
						>
							0 222 4 - 96 00 00</a
						><br />
						Fax: 0 222 4 - 960 00 96<br />
						E-Mail:
						<a
							href="mailto:info@rhenania.biz"
							title="Schreiben Sie jetzt eine E-Mail an info@rhenania.biz">info@rhenania.biz</a
						><br />
					</p>
				</div>
			</div>
		</div>
		<slot />
	</div>
</section>

<style>
	:global(.contact_box a) {
		position: relative;
		display: inline-block;
		font-weight: normal;
		color: #fff;
	}

	:global(.contact_box a::after) {
		background-color: #fff;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	:global(.contact_box a:hover::after) {
		background-color: #fff;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 100%;
		transition: all;
		transition-duration: 0.25s;
	}
</style>
