<script lang="ts">
	import EmbedText from '$lib/components/EmbedText/EmbedText.svelte';
	import AccordionItem from '$lib/components/AccordionItem/AccordionItem.svelte';
	import type { AccordionContainer } from '$lib/graphql/generated/schema';
	import { mapPadding } from '$lib/helpers';
	export let module: Partial<AccordionContainer> = {};

	import { accordionContainerToJsonLd } from '$lib/jsonLd';
</script>

<svelte:head>
	{@html accordionContainerToJsonLd(module)}
</svelte:head>

<div class="mod_accordionContainer relative">
	<div class="relative w-full {mapPadding(module.paddingTop)}"></div>
	<div class="relative bg-white py-12 shadow-md">
		<div class="relative z-10 mx-auto max-w-screen-lg px-10">
			<div class="accordionHeader pb-8">
				<h2 class="rc_h1 text-rc_darkblue">{module.headline}</h2>
				{#if module.introOptional}
					<div class="py-6">
						<EmbedText text={module.introOptional}></EmbedText>
					</div>
				{/if}
			</div>

			{#each module.accordionItems as accordionItem (accordionItem.id)}
				{#if accordionItem.textImageOrientation === 'ImageLeftAndTextRight'}
					<AccordionItem {accordionItem}>
						<span slot="headline" class="item_headline">{accordionItem.headline}</span>
						<div slot="content" class="item_content">
							<div
								class="gap-x flex flex-col items-center gap-y-10 pb-8 md:flex-row md:gap-x-20 md:pb-0"
							>
								<div class="w-full md:w-6/12">
									{#if accordionItem.image}
										<img
											src={accordionItem.image.url}
											alt="Rhenania"
											class="mx-auto h-auto max-h-56 w-auto md:max-h-full"
										/>
									{/if}
								</div>
								<div class="w-full md:w-6/12">
									{#if accordionItem.heading1}
										<h2 class="rc_h2 py-2 text-black">{accordionItem.heading1}</h2>
									{/if}
									{#if accordionItem.heading2}
										<h3 class="rc_h3 py-2">{accordionItem.heading2}</h3>
									{/if}
									{#if accordionItem.heading2}
										<h3 class="block py-2 font-bold">{accordionItem.heading3}</h3>
									{/if}
									{@html accordionItem.content.html}
									{#if accordionItem.assetPicker}
										<div class="hyperlink flex py-4">
											<div class="text-rc_red relative flex-none pr-1 font-bold">
												<a href={accordionItem.assetPicker.url} class="flex" target="_blank">
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
														{accordionItem.downloadLabel}
													</span>
												</a>
											</div>
										</div>
									{/if}
								</div>
							</div>
						</div>
					</AccordionItem>
				{/if}

				{#if accordionItem.textImageOrientation === 'ImageRightAndTextLeft'}
					<AccordionItem {accordionItem}>
						<span slot="headline" class="item_headline">{accordionItem.headline}</span>
						<div slot="content" class="item_content">
							<div
								class="gap-x flex flex-col flex-col-reverse items-center gap-y-10 pb-8 md:flex-row md:gap-x-20 md:pb-0"
							>
								<div class="w-full md:w-6/12">
									{#if accordionItem.heading1}
										<h2 class="rc_h2 py-2 text-black">{accordionItem.heading1}</h2>
									{/if}
									{#if accordionItem.heading2}
										<h3 class="rc_h3 py-2">{accordionItem.heading2}</h3>
									{/if}
									{#if accordionItem.heading2}
										<h3 class="block py-2 font-bold">{accordionItem.heading3}</h3>
									{/if}
									{@html accordionItem.content.html}
									{#if accordionItem.assetPicker}
										<div class="hyperlink flex py-4">
											<div class="text-rc_red relative flex-none pr-1 font-bold">
												<a href={accordionItem.assetPicker.url} class="flex" target="_blank">
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
														{accordionItem.downloadLabel}
													</span>
												</a>
											</div>
										</div>
									{/if}
								</div>
								<div class="w-full md:w-6/12">
									{#if accordionItem.image}
										<img
											src={accordionItem.image.url}
											alt="Rhenania"
											class="mx-auto h-auto max-h-56 w-auto md:max-h-full"
										/>
									{/if}
								</div>
							</div>
						</div>
					</AccordionItem>
				{/if}

				{#if accordionItem.textImageOrientation === 'OnlyText'}
					<AccordionItem {accordionItem}>
						<span slot="headline" class="item_headline">{accordionItem.headline}</span>
						<div slot="content" class="item_content">
							{#if accordionItem.heading1}
								<h2 class="rc_h2 py-2 text-black">{accordionItem.heading1}</h2>
							{/if}
							{#if accordionItem.heading2}
								<h3 class="rc_h3 py-2">{accordionItem.heading2}</h3>
							{/if}
							{#if accordionItem.heading2}
								<h3 class="block py-2 font-bold">{accordionItem.heading3}</h3>
							{/if}
							{@html accordionItem.content.html}
							{#if accordionItem.assetPicker}
								<div class="hyperlink flex py-4">
									<div class="text-rc_red relative flex-none pr-1 font-bold">
										<a href={accordionItem.assetPicker.url} class="flex" target="_blank">
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
												{accordionItem.downloadLabel}
											</span>
										</a>
									</div>
								</div>
							{/if}
						</div>
					</AccordionItem>
				{/if}
			{/each}
		</div>
	</div>
	<div class="relative w-full {mapPadding(module.paddingBottom)}"></div>
</div>

<style>
	:global(.item_headline a) {
		color: #ea3336;
		font-weight: 600;
		font-size: 0.875rem;
		line-height: 1.25rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	:global(.item_content a:hover) {
		text-decoration: underline;
	}
</style>
