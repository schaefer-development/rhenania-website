<script lang="ts">
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import type { AccordionContainer } from '$lib/graphql/generated/schema';
	import { mapPadding } from '$lib/helpers';
	export let module: Partial<AccordionContainer> = {};
</script>

<div class="mod_accordionContainer relative">
	<div class="relative w-full {mapPadding(module.paddingTop)}" />
	<div class="relative bg-white py-12 shadow-md">
		<div class="relative z-10 max-w-screen-lg mx-auto px-10 ">
			<h1 class="rc_h1 text-rc_darkblue pb-8">{module.headline}</h1>
			{#each module.accordionItems as accordionItem (accordionItem.id)}
				{#if accordionItem.textImageOrientation === 'ImageLeftAndTextRight'}
					<Accordion id={accordionItem.id}>
						<span slot="headline" class="item_headline"
							>{accordionItem.heading1} ImageLeftAndTextRight</span
						>
						<div slot="content" class="item_content">
							<div
								class="flex items-center flex-col pb-8 md:pb-0 gap-y-10 gap-x md:gap-x-20 md:flex-row"
							>
								<div class="w-full md:w-6/12">
									{#if accordionItem.image}
										<img
											src={accordionItem.image.url}
											alt="Rhenania"
											class="w-auto mx-auto h-auto max-h-56 md:max-h-full"
										/>
									{/if}
								</div>
								<div class="w-full md:w-6/12">
									{#if accordionItem.heading1}
										<h2 class="rc_h2 text-black py-2">{accordionItem.heading1}</h2>
									{/if}
									{#if accordionItem.heading2}
										<h3 class="rc_h3 py-2">{accordionItem.heading2}</h3>
									{/if}
									{#if accordionItem.heading2}
										<h3 class="block font-bold py-2">{accordionItem.heading3}</h3>
									{/if}
									{@html accordionItem.content.html}
									{#if accordionItem.assetPicker}
										<div class="flex hyperlink py-4">
											<div class="relative flex-none text-rc_red font-bold pr-1">
												<a href={accordionItem.assetPicker.url} class="flex" target="_blank">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="h-6 w-6 mr-2 inline align-middle"
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
					</Accordion>
				{/if}

				{#if accordionItem.textImageOrientation === 'ImageRightAndTextLeft'}
				<Accordion id={accordionItem.id}>
					<span slot="headline" class="item_headline"
						>{accordionItem.heading1} ImageLeftAndTextRight</span
					>
					<div slot="content" class="item_content">
						<div
							class="flex items-center flex-col pb-8 md:pb-0 gap-y-10 gap-x md:gap-x-20 md:flex-row"
						>

							<div class="w-full md:w-6/12">
								{#if accordionItem.heading1}
									<h2 class="rc_h2 text-black py-2">{accordionItem.heading1}</h2>
								{/if}
								{#if accordionItem.heading2}
									<h3 class="rc_h3 py-2">{accordionItem.heading2}</h3>
								{/if}
								{#if accordionItem.heading2}
									<h3 class="block font-bold py-2">{accordionItem.heading3}</h3>
								{/if}
								{@html accordionItem.content.html}
								{#if accordionItem.assetPicker}
									<div class="flex hyperlink py-4">
										<div class="relative flex-none text-rc_red font-bold pr-1">
											<a href={accordionItem.assetPicker.url} class="flex" target="_blank">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-6 w-6 mr-2 inline align-middle"
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
										class="w-auto mx-auto h-auto max-h-56 md:max-h-full"
									/>
								{/if}
							</div>
						</div>
					</div>
				</Accordion>

				{/if}

				{#if accordionItem.textImageOrientation === 'OnlyText'}
					<Accordion id={accordionItem.id}>
						<span slot="headline" class="item_headline">{accordionItem.heading1}</span>
						<div slot="content" class="item_content">
							{#if accordionItem.heading1}
								<h2 class="rc_h2 text-black py-2">{accordionItem.heading1}</h2>
							{/if}
							{#if accordionItem.heading2}
								<h3 class="rc_h3 py-2">{accordionItem.heading2}</h3>
							{/if}
							{#if accordionItem.heading2}
								<h3 class="block font-bold py-2">{accordionItem.heading3}</h3>
							{/if}
							{@html accordionItem.content.html}
							{#if accordionItem.assetPicker}
								<div class="flex hyperlink py-4">
									<div class="relative flex-none text-rc_red font-bold pr-1">
										<a href={accordionItem.assetPicker.url} class="flex" target="_blank">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-6 w-6 mr-2 inline align-middle"
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
					</Accordion>
				{/if}
			{/each}
		</div>
	</div>
	<div class="relative w-full {mapPadding(module.paddingBottom)}" />
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
