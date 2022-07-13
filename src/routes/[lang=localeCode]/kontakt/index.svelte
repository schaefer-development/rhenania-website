<script context="module" lang="ts">
	export const prerender = true;
	import { linkTo } from '$lib/helpers';
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

<div class="contact_form col-span-2">
	<h1 class="rc_h1 text-rc_darkblue">Nutzen Sie das Kontaktformular</h1>
	<!-- contact form-->
	<form class="w-full pt-12" action={$linkTo(`/kontakt.json`)} method="post">
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3 mb-10">
				<label class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold ">
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
				<label class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold ">
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
				<label class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold ">
					<input
						class="appearance-none block w-full bg-white text-gray-700 text-lg border border-gray-400 py-3 px-3 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black"
						name="telefon"
						type="text"
						placeholder="0123456789"
					/>
					Telefon (Optional)
				</label>
			</div>
		</div>

		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label class="block uppercase tracking-widest text-gray-700 text-xs px-1 font-bold mb-1">
					<textarea
						class=" no-resize appearance-none block w-full bg-white text-gray-700 text-lg border border-gray-400 py-3 px-3 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-black h-48 resize-none"
						name="nachricht"
					/>
					Ihre Nachricht
				</label>
			</div>
		</div>
		<div class="pb-8 flex justify-center">
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

		<div class="mb-6 flex flex-row items-center">
			<div>
				<input type="checkbox" bind:checked={datapolicy} />
			</div>
			<div class="px-3">
				Ich habe die <a
					href={$linkTo('/datenschutz/')}
					class="font-bold py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					>Datenschutzerklärung</a
				>
				gelesen und stimme dieser zu.
			</div>
		</div>

		<div class="md:flex md:items-center">
			<div class="md:w-1/3">
				{#if browser}
					{#if valid && datapolicy}
						<button
							class="relative mt-4 pl-5 pr-3 py-2 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
							type="submit">Nachricht absenden</button
						>
					{:else}
						<button
							disabled
							class="relative mt-4 pl-5 pr-3 py-2 bg-gray-300 text-white text-sm font-bold uppercase tracking-widest rc_button_corner"
							type="submit">Nachricht absenden</button
						>
					{/if}
				{/if}
			</div>
			<div class="md:w-2/3" />
		</div>
	</form>
	<!-- -->
</div>
