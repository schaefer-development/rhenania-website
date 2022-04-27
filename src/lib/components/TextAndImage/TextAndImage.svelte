<script lang="ts">
	import { mapPadding } from '$lib/helpers';
	import { linkTo } from '$lib/helpers';
	import type { TextAndImage } from '$lib/graphql/generated/schema';
	export let module: Partial<TextAndImage> = {};
</script>

<div class="mod_textAndImage relative">
	<div class="relative w-full {mapPadding(module.paddingTop)}" />
	<div class="relative z-10 max-w-screen-lg mx-auto px-10">
		<div class="flex flex-col lg:flex-row gap-12">
			{#if module.textImageOrientation == 'ImageLeftAndTextRight'}
				<div class="w-6/12">
					<img src={module.image.url} alt="Rhenania" class="w-full mx-auto h-auto" />
				</div>
				<div class="w-6/12">
					{#if module.heading1}
						<h1 class="rc_h1 text-rc_darkblue">{module.heading1}</h1>
					{/if}

					{#if module.heading2}
						<h2 class="rc_h2 text-black py-2">{module.heading2}</h2>
					{/if}
					{#if module.heading3}
						<h3 class="rc_h3 py-2">{module.heading3}</h3>
					{/if}
					{#if module.text.html}
						<div class="py-4 rc_break_hyphens">
							{@html module.text.html}
						</div>
					{/if}
				</div>
			{/if}
			{#if module.textImageOrientation == 'ImageRightAndTextLeft'}
				<div class="w-6/12">
					{#if module.heading1}
						<h1 class="rc_h1 text-rc_darkblue">{module.heading1}</h1>
					{/if}

					{#if module.heading2}
						<h2 class="rc_h2 text-black py-2">{module.heading2}</h2>
					{/if}
					{#if module.heading3}
						<h3 class="rc_h3 py-2">{module.heading3}</h3>
					{/if}
					{#if module.text.html}
						<div class="py-4 rc_break_hyphens">
							{@html module.text.html}
						</div>
					{/if}
				</div>
				<div class="w-6/12">
					<img src={module.image.url} alt="Rhenania" class="w-full mx-auto h-auto" />
				</div>
			{/if}
		</div>
	</div>
	<div class="relative w-full {mapPadding(module.paddingBottom)}" />
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
		bottom: -7px;
		content: '';
		display: block;
		height: 4px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	:global(.mod_textAndImage a:hover::after) {
		background-color: #ea3336;
		bottom: -7px;
		content: '';
		display: block;
		height: 4px;
		position: absolute;
		width: 100%;
		transition: all;
		transition-duration: 0.25s;
	}
</style>
