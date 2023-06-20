<script context="module" lang="ts">
	export const prerender = true;
	import { linkTo } from '$lib/helpers';

	let title = 'Kontakt - Nutzen Sie unser Kontaktformular bei Fragen';
	let description =
		'Sie haben Fragen zu einem unserer Produkte oder unserem Unternehmen ? Füllen Sie einfach das Formular aus und wir melden uns ✓ | rhenania-computer.de';
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async () => {
		return {
			stuff: { title, description }
		};
	};
</script>

<script lang="ts">
	import HCaptcha from 'svelte-hcaptcha';
	import { HCAPTCHA_SITEKEY } from '$lib/env';
	import { browser } from '$app/env';

	let captcha;
	let valid = false;
	let datapolicy = false;
	const handleError = () => {
		captcha.reset();
	};
	const handleSuccess = () => {
		valid = true;
	};
</script>

<div class="col-span-2">
	<h2 class="rc_h1 text-rc_darkblue headlinelink pb-3">Kontaktieren Sie uns per E-Mail</h2>

	<div class="relative flex justify-center">
		<a
			class="relative mt-2 pl-5 pr-3 py-2 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
			href="mailto:info@rhenania.biz">info@rhenania.biz</a
		>
	</div>
	<div class="mod_divider relative">
		<div class="mod_divider w-full py-12">
			<div class="h-1 w-full border-gray-300 border-b-4" />
			<div class="mx-auto max-w-screen-2xl w-full h-1 -mt-1 flex flew-row">
				<div class="bg-gray-300" style="width:50%;" />
				<div class="bg-gray-50" style="width:6%;" />
				<div class="bg-gray-300" style="width:5%;" />
				<div class="bg-gray-50" style="width:6%;" />
				<div class="bg-gray-300" style="width:7%;" />
				<div class="bg-gray-50" style="width:8%;" />
				<div class="bg-gray-300" style="width:8%;" />
				<div class="bg-gray-50" style="width:4%;" />
				<div class="bg-gray-300" style="width:6%;" />
			</div>
		</div>
	</div>

	<div class="mod_contactFormAccordion relative">
		<div class="relative w-full" />
		<div class="mod_accordion relative tab w-full overflow-hidden h-auto pb-4 block">
			<input class="absolute opacity-0 " id="contactform" type="checkbox" name="tabs" />
			<label class="cursor-pointer flex border-b-2 py-2" for="contactform">
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
					<form class="w-full pt-4" action={$linkTo(`/kontakt.json`)} method="post">
						<div class="flex flex-wrap mb-6">
							<div class="w-full px-3 mt-5 mb-10">
								<label
									class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold "
								>
									<input
										class="appearance-none block w-full bg-white text-gray-700 text-lg border border-gray-400 py-3 px-3 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black"
										name="firma"
										type="text"
										placeholder="Musterfirma"
									/>
									Firma (Optional)
								</label>
							</div>

							<div class="w-full px-3 mb-10">
								<label class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold">
									<input
										class="appearance-none block w-full bg-white text-gray-700 text-lg border border-gray-400 py-3 px-3 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black"
										name="name"
										type="text"
										placeholder="Max Mustermann"
									/>
									Name
								</label>
							</div>

							<div class="w-full px-3 mb-10">
								<label
									class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold "
								>
									<input
										class="appearance-none block w-full bg-white text-gray-700 text-lg border border-gray-400 py-3 px-3 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black"
										name="emailAdresse"
										type="email"
										placeholder="mail@beispiel.de"
									/>
									E-Mail
								</label>
							</div>

							<div class="w-full px-3 mb-4">
								<label
									class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold "
								>
									<input
										class="appearance-none block w-full bg-white text-gray-700 text-lg border border-gray-400 py-3 px-3 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black"
										name="telefon"
										type="text"
										placeholder="0123456789"
									/>
									Telefon (Optional)
								</label>
							</div>

							<div class="w-full px-3">
								<label
									class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold mb-1"
								>
									<textarea
										class=" no-resize appearance-none block w-full bg-white text-gray-700 text-lg border border-gray-400 py-3 px-3 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black h-48 resize-none"
										name="nachricht"
									/>
									Ihre Nachricht
								</label>
							</div>
							<!-- hcaptcha -->
							<div class="py-6 flex justify-center relative w-full">
								<HCaptcha
									sitekey={HCAPTCHA_SITEKEY}
									hl="de"
									bind:this={captcha}
									on:error={handleError}
									on:success={handleSuccess}
								/>
								<noscript>
									Sie benötigen einen JavaScript-fähigen Browser für die Kontaktanfrage per Browser.
									Alternativ können Sie uns auch gerne eine E-Mail senden.
								</noscript>
							</div>
							<!-- end hcaptcha  -->
							<div class="p-3 flex flex-row items-center w-full">
								<div>
									<input type="checkbox" bind:checked={datapolicy} />
								</div>
								<div class="px-3 dataprivacy">
									Ich habe die <a
										href={$linkTo('/datenschutz/')}
										class=" font-bold text-rc_red hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
										>Datenschutzerklärung</a
									>
									gelesen und stimme dieser zu.
								</div>
							</div>

							<div class="md:flex md:items-center w-full px-3">
								<div class="w-full">
									{#if browser}
										{#if valid && datapolicy}
											<button
												class="inline-block relative mt-4 pl-5 pr-3 py-2 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
												type="submit">Nachricht absenden</button
											>
										{:else}
											<button
												disabled
												class="inline-block relative mt-4 pl-5 pr-3 py-2 bg-gray-300 text-white text-sm font-bold uppercase tracking-widest rc_button_corner"
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
</div>

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
