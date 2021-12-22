<script lang="ts">
	import { mapPadding } from '$lib/helpers';
	import type { Text } from '$lib/graphql/generated/schema';
	export let module: Partial<Text> = {};
</script>

<div class="mod_text">
	<div class="relative w-full {mapPadding(module.paddingTop)}" />
	<div class="relative z-10 max-w-screen-md mx-auto px-10">
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
	<div class="relative w-full {mapPadding(module.paddingBottom)}" />
</div>
