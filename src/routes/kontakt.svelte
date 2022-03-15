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
		<div class="contact_form col-span-2">
			<h1 class="rc_h1 text-rc_darkblue">Nutzen Sie das Kontaktformular</h1>
			<!-- contact form-->
			<form class="w-full pt-12">
				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full px-3 mb-10">
						<input
							class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 py-4 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black"
							id="company"
							type="text"
							placeholder="Musterfirma"
						/>
						<label
							class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold "
							for="company"
						>
							Firma (Optional)
						</label>
					</div>

					<div class="w-full px-3 mb-10">
						<input
							class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 py-4 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black"
							id="name"
							type="text"
							placeholder="Max Mustermann"
						/>
						<label
							class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold"
							for="name"
						>
							Name
						</label>
					</div>

					<div class="w-full px-3 mb-10">
						<input
							class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 py-4 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black"
							id="mail"
							type="text"
							placeholder="mail@beispiel.de"
						/>
						<label
							class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold "
							for="mail"
						>
							E-Mail
						</label>
					</div>

					<div class="w-full px-3 mb-4">
						<input
							class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 py-4 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black"
							id="phone"
							type="text"
							placeholder="0123456789"
						/>
						<label
							class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold "
							for="phone"
						>
							Telefon (Optional)
						</label>
					</div>
				</div>

				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full px-3">
						<textarea
							class=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-300 py-4 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black h-48 resize-none"
							id="message"
						/>
						<label
							class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold mb-1"
							for="grid-password"
						>
							Ihre Nachricht
						</label>
					</div>
				</div>
				<div class="md:flex md:items-center">
					<div class="md:w-1/3">
						<button
							class="relative mt-4 pl-5 pr-3 py-2 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
							type="button">Nachricht absenden</button
						>
					</div>
					<div class="md:w-2/3" />
				</div>
			</form>
			<!-- -->
		</div>
	</div>
</section>
