<script lang="ts">
	import { mapPadding } from '$lib/helpers';
	import { base } from '$app/paths';
	import type { LinkOrderByInput, Text } from '$lib/graphql/generated/schema';
	export let module: Partial<Text> = {};
</script>

<div class="mod_text">
	<div class="relative w-full {mapPadding(module.paddingTop)}" />

	{#if module.link && module.link.target && module.link.target.page}
		<div class="relative z-10 max-w-screen-lg mx-auto px-10">
			{#if module.heading1}
				<h1 class="rc_h1 text-rc_darkblue">{module.heading1}</h1>
			{/if}
			<div class="grid grid-cols-12 lg:gap-x-10 gap-y-6 py-6">
				<div class="col-span-12 lg:col-span-6 ">
					{#if module.heading2}
						<h2 class="rc_h2 text-black py-2">{module.heading2}</h2>
					{/if}

					{#if module.heading3}
						<h3 class="rc_h3 py-2">{module.heading3}</h3>
					{/if}
				</div>

				<div class="col-span-12 lg:col-span-6 flex items-stretch justify-start lg:justify-end">
					<a
						href="{base}/{module.link.target.page.slug}#{module.link.target.id}"
						class="relative self-center pl-5 pr-3 py-2 md:mr-4 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
						>{module.link.label}</a
					>
				</div>
			</div>
			{#if module.text.html}
				<div class="py-4 rc_break_hyphens">
					{@html module.text.html}
				</div>
			{/if}
		</div>
	{:else}
		<div class="relative z-10 max-w-screen-lg mx-auto px-10">
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

	<div class="relative w-full {mapPadding(module.paddingBottom)}" />
</div>
