<script lang="ts">
	import TextAndImage from '$lib/components/TextAndImage/TextAndImage.svelte';
	import type { AccordionItem } from '$lib/graphql/generated/schema';
	export let accordionItem: Partial<AccordionItem>;
</script>

<div class="mod_accordion relative tab w-full overflow-hidden h-auto pb-4 block">
	<input class="absolute opacity-0 " id={accordionItem.id} type="checkbox" name="tabs" />
	<label class="cursor-pointer flex border-b-2 py-2" for={accordionItem.id}>
		<div class="w-full font-bold"><slot name="headline" /></div>
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
			<slot name="content" />
		</div>
		<!-- -->
		{#each accordionItem.textAndImages as textAndImage (textAndImage.id)}
			<TextAndImage module={textAndImage} />
		{/each}
		<!-- -->
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

	:global(.item_content a) {
		position: relative;
		display: inline-block;
		font-weight: bold;
		color: #ea3336;
		text-decoration: none !important;
	}

	:global(.item_content a:hover) {
		text-decoration: none;
	}

	:global(.item_content a::after) {
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

	:global(.item_content a:hover::after) {
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
