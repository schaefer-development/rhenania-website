<script lang="ts">
	import type { Text } from '$lib/graphql/generated/schema';
	export let module: Partial<Text> = {};
</script>

<div
	class="relative z-10 max-w-screen-md mx-auto px-10 pt-10 pt-{module.paddingTop} pb-10 pb-{module.paddingBottom}"
>
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
		<p class="py-4 rc_break_hyphens">
			{@html module.text.html}
		</p>
	{/if}
</div>
