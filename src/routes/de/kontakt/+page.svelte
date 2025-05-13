<script lang="ts">
	import type { PageProps } from './$types';
	import HCaptcha from '$lib/components/HCaptcha/HCaptcha.svelte';
	import { HCAPTCHA_SITEKEY } from '$lib/env';
	import { browser } from '$app/environment';
	import Map from '$lib/components/Map/Map.svelte';

	let captcha: HCaptcha;
	let valid = $state(false);
	let datapolicy = $state(false);
	const handleError = () => {
		captcha.reset();
	};
	const handleSuccess = () => {
		valid = true;
	};

	let { form }: PageProps = $props();
	const mapAttributes = {
		class: '',
		style: 'width: 100%; height: 100%; min-height:500px; max-height:40vh;'
	};
</script>

<svelte:head>
	<title>Kontakt - Nutzen Sie unser Kontaktformular bei Fragen</title>
	<meta
		name="description"
		content="Sie haben Fragen zu einem unserer Produkte oder unserem Unternehmen? Füllen Sie einfach das Formular aus und wir melden uns ✓ | rhenania-computer.de"
	/>
</svelte:head>

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
		<div class="col-span-2">
			{#if form?.success}
				<div class="col-span-2">
					<h1 class="rc_h1 text-rc_darkblue">Vielen Dank für Ihre Anfrage.</h1>
					<p class="py-6">
						Wir werden uns schnellstmöglich um Ihr Anliegen kümmern und mit Ihnen Kontakt aufnehmen.
					</p>
					<p>
						Freundliche Grüße<br />
						Ihr Team der RC Rhenania Computer GmbH
					</p>
				</div>
			{:else}
				<h2 class="rc_h1 text-rc_darkblue headlinelink pb-3">Kontaktieren Sie uns per E-Mail</h2>
				<div class="relative flex justify-center">
					<a
						class="bg-rc_red hover:bg-rc_red-darker rc_button_corner relative mt-2 py-2 pr-3 pl-5 text-sm font-bold tracking-widest text-white uppercase"
						href="mailto:info@rhenania.biz">info@rhenania.biz</a
					>
				</div>
				<div class="mod_divider relative">
					<div class="mod_divider w-full py-12">
						<div class="h-1 w-full border-b-4 border-gray-300"></div>
						<div class="flew-row mx-auto -mt-1 flex h-1 w-full max-w-screen-2xl">
							<div class="bg-gray-300" style="width:50%;"></div>
							<div class="bg-gray-50" style="width:6%;"></div>
							<div class="bg-gray-300" style="width:5%;"></div>
							<div class="bg-gray-50" style="width:6%;"></div>
							<div class="bg-gray-300" style="width:7%;"></div>
							<div class="bg-gray-50" style="width:8%;"></div>
							<div class="bg-gray-300" style="width:8%;"></div>
							<div class="bg-gray-50" style="width:4%;"></div>
							<div class="bg-gray-300" style="width:6%;"></div>
						</div>
					</div>
				</div>
				<div class="mod_contactFormAccordion relative">
					<div class="relative w-full"></div>
					<div class="mod_accordion tab relative block h-auto w-full overflow-hidden pb-4">
						<input class="absolute opacity-0" id="contactform" type="checkbox" name="tabs" />
						<label class="flex cursor-pointer border-b-2 py-2" for="contactform">
							<h3 class="w-full font-bold">Oder Sie nutzen unser Kontaktformular</h3>
							<div class="icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-8 w-8"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
						</label>
						<div class="tab-content h-auto">
							<div class="pt-4 pb-8">
								<form class="w-full pt-4" method="post">
									<div class="mb-6 flex flex-wrap">
										<div class="mt-5 mb-10 w-full px-3">
											<label
												class="block px-1 text-xs font-bold tracking-widest text-gray-700 uppercase"
											>
												<input
													class="mb-2 block w-full appearance-none border border-gray-400 bg-white px-3 py-3 text-lg leading-tight font-normal text-gray-700 focus:border-black focus:bg-white focus:outline-none"
													name="firma"
													type="text"
													placeholder="Musterfirma"
												/>
												Firma (Optional)
											</label>
										</div>

										<div class="mb-10 w-full px-3">
											<label
												class="block px-1 text-xs font-bold tracking-widest text-gray-700 uppercase"
											>
												<input
													class="mb-2 block w-full appearance-none border border-gray-400 bg-white px-3 py-3 text-lg leading-tight font-normal text-gray-700 focus:border-black focus:bg-white focus:outline-none"
													name="name"
													type="text"
													placeholder="Max Mustermann"
												/>
												Name
											</label>
										</div>

										<div class="mb-10 w-full px-3">
											<label
												class="block px-1 text-xs font-bold tracking-widest text-gray-700 uppercase"
											>
												<input
													class="mb-2 block w-full appearance-none border border-gray-400 bg-white px-3 py-3 text-lg leading-tight font-normal text-gray-700 focus:border-black focus:bg-white focus:outline-none"
													name="emailAdresse"
													type="email"
													placeholder="mail@beispiel.de"
												/>
												E-Mail
											</label>
										</div>

										<div class="mb-4 w-full px-3">
											<label
												class="block px-1 text-xs font-bold tracking-widest text-gray-700 uppercase"
											>
												<input
													class="mb-2 block w-full appearance-none border border-gray-400 bg-white px-3 py-3 text-lg leading-tight font-normal text-gray-700 focus:border-black focus:bg-white focus:outline-none"
													name="telefon"
													type="text"
													placeholder="0123456789"
												/>
												Telefon (Optional)
											</label>
										</div>

										<div class="w-full px-3">
											<label
												class="mb-1 block px-1 text-xs font-bold tracking-widest text-gray-700 uppercase"
											>
												<textarea
													class="no-resize mb-2 block h-48 w-full resize-none appearance-none border border-gray-400 bg-white px-3 py-3 text-lg leading-tight font-normal text-gray-700 focus:border-black focus:bg-white focus:outline-none"
													name="nachricht"
												></textarea>
												Ihre Nachricht
											</label>
										</div>
										<!-- hcaptcha -->
										<div class="relative flex w-full justify-center py-6">
											<HCaptcha
												sitekey={HCAPTCHA_SITEKEY}
												hl="de"
												bind:this={captcha}
												on:error={handleError}
												on:success={handleSuccess}
											/>
											<noscript>
												Sie benötigen einen JavaScript-fähigen Browser für die Kontaktanfrage per
												Browser. Alternativ können Sie uns auch gerne eine E-Mail senden.
											</noscript>
										</div>
										<!-- end hcaptcha  -->
										<div class="flex w-full flex-row items-center p-3">
											<div>
												<input type="checkbox" bind:checked={datapolicy} />
											</div>
											<div class="dataprivacy px-3">
												Ich habe die <a
													href="/datenschutz/"
													class=" text-rc_red hover:text-rc_red focus:text-rc_red font-bold focus:ring-0 focus:outline-none"
													>Datenschutzerklärung</a
												>
												gelesen und stimme dieser zu.
											</div>
										</div>

										<div class="w-full px-3 md:flex md:items-center">
											<div class="w-full">
												{#if browser}
													{#if valid && datapolicy}
														<button
															class="bg-rc_red hover:bg-rc_red-darker rc_button_corner relative mt-4 inline-block py-2 pr-3 pl-5 text-sm font-bold tracking-widest text-white uppercase"
															type="submit">Nachricht absenden</button
														>
													{:else}
														<button
															disabled
															class="rc_button_corner relative mt-4 inline-block bg-gray-300 py-2 pr-3 pl-5 text-sm font-bold tracking-widest text-white uppercase"
															type="submit">Nachricht absenden</button
														>
													{/if}
												{/if}
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.tab-content {
		max-height: 0;
		-webkit-transition: max-height 0.5s;
		-o-transition: max-height 0.5s;
		transition: max-height 0.5s;
	}
	/* :checked - resize to full height */
	.tab input:checked ~ .tab-content {
		max-height: 1000vh;
	}

	.tab input[type='checkbox'] + label .icon {
		color: #ea3336;
		-webkit-transition: all 0.25s;
		-o-transition: all 0.25s;
		transition: all 0.25s;
	}
	.tab input[type='checkbox']:checked + label .icon {
		color: #6e7071;
	}

	:global(.dataprivacy a) {
		position: relative;
		display: inline-block;
		font-weight: bold;
		color: #ea3336;
	}

	:global(.dataprivacy a::after) {
		background-color: #ea3336;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	:global(.dataprivacy a:hover::after) {
		background-color: #ea3336;
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
