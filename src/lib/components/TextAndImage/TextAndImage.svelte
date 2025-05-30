<script lang="ts">
	import { mapPadding } from '$lib/helpers';
	import type { TextAndImage } from '$lib/graphql/generated/schema';
	export let module: Partial<TextAndImage> = {};
</script>

<div class="mod_textAndImage relative">
	<div class="relative w-full {mapPadding(module.paddingTop)}"></div>
	<div class="relative z-10 mx-auto max-w-screen-lg px-4 md:px-10">
		{#if module.textImageOrientation == 'ImageLeftAndTextRight'}
			<div class="gap-x flex flex-col items-center gap-y-10 pb-8 md:flex-row md:gap-x-20 md:pb-0">
				<div class="w-full md:w-6/12">
					{#if module.image}
						<img
							src={module.image.url}
							alt="Rhenania"
							class="mx-auto h-auto max-h-56 w-auto md:max-h-full"
						/>
					{/if}
				</div>
				<div class="w-full md:w-6/12">
					{#if module.heading1}
						<h1 class="rc_h1 text-rc_darkblue">{module.heading1}</h1>
					{/if}

					{#if module.heading2}
						<h2 class="rc_h2 py-2 text-black">{module.heading2}</h2>
					{/if}
					{#if module.heading3}
						<h3 class="rc_h3 py-2">{module.heading3}</h3>
					{/if}
					{#if module.text.html}
						<div class="rc_break_hyphens py-4">
							{@html module.text.html}
						</div>
					{/if}

					{#if module.assetPicker}
						<div class="hyperlink flex">
							<div class="text-rc_red relative flex-none pr-1 font-bold">
								<a href={module.assetPicker.url} class="flex" target="_blank">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="mr-2 inline h-6 w-6 align-middle"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									<span class="align-middle">
										{module.downloadLabel}
									</span>
								</a>
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/if}

		{#if module.textImageOrientation == 'ImageRightAndTextLeft'}
			<div
				class="gap-x flex flex-col flex-col-reverse items-center gap-y-10 pb-8 md:flex-row md:gap-x-20 md:pb-0"
			>
				<div class="w-full md:w-6/12">
					{#if module.heading1}
						<h1 class="rc_h1 text-rc_darkblue">{module.heading1}</h1>
					{/if}

					{#if module.heading2}
						<h2 class="rc_h2 py-2 text-black">{module.heading2}</h2>
					{/if}
					{#if module.heading3}
						<h3 class="rc_h3 py-2">{module.heading3}</h3>
					{/if}
					{#if module.text.html}
						<div class="rc_break_hyphens py-4">
							{@html module.text.html}
						</div>
					{/if}

					{#if module.assetPicker}
						<div class="hyperlink flex">
							<div class="text-rc_red relative flex-none pr-1 font-bold">
								<a href={module.assetPicker.url} class="flex" target="_blank">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="mr-2 inline h-6 w-6 align-middle"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									<span class="align-middle">
										{module.downloadLabel}
									</span>
								</a>
							</div>
						</div>
					{/if}
				</div>
				<div class="w-full md:w-6/12">
					{#if module.image}
						<img
							src={module.image.url}
							alt="Rhenania"
							class="mx-auto h-auto max-h-56 w-auto md:max-h-full"
						/>
					{/if}
				</div>
			</div>
		{/if}
	</div>
	<div class="relative w-full {mapPadding(module.paddingBottom)}"></div>
</div>

<style>
	:global(.mod_textAndImage ul) {
		padding: 1.5em 0;
		margin-left: 2em;
	}

	:global(.mod_textAndImage ul li) {
		list-style-type: none;
		padding: 0.25em 1em 0.5em 0.25em;
	}

	:global(.mod_textAndImage ul li:before) {
		position: absolute;
		content: '■';
		color: rgba(42, 73, 157, 1);
		margin-left: -2em;
	}

	:global(.mod_textAndImage ol) {
		padding: 1.5em 0;
		counter-reset: item;
	}

	:global(.mod_textAndImage ol li) {
		list-style-type: numeric;
		padding: 0.25em 1em 0.5em 0.25em;
		text-indent: 1em;
		display: block;
	}

	:global(.mod_textAndImage ol li:before) {
		position: absolute;
		content: counter(item) '. ';
		counter-increment: item;
		color: rgba(42, 73, 157, 1);
		margin-left: -3em;
		font-weight: bold;
	}

	:global(.mod_textAndImage .highlight_blue) {
		background-color: #2a499d;
		color: #fff;
		padding: 1em;
		margin: 1em 0;
	}

	:global(.mod_textAndImage a) {
		position: relative;
		display: inline-block;
		font-weight: bold;
		color: #ea3336;
	}

	:global(.mod_textAndImage a::after) {
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

	:global(.mod_textAndImage a:hover::after) {
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
