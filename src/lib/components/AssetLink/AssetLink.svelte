<script lang="ts">
	import type { AssetLink } from '$lib/graphql/generated/schema';
	export let module: Partial<AssetLink> = {};
</script>

<div class="mod_assetlink relative">
	<div class="relative z-10 mx-auto max-w-screen-lg px-10 py-2">
		{#if module?.headline}
			<h2 class="rc_h2 text-rc_red pb-6">{module.headline}</h2>
		{/if}

		<div class="hyperlink flex">
			<div class="text-rc_red relative flex-none pr-1 font-bold">
				<a href={module.assetPicker.url} class="flex" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-6 w-6"
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
					{module.downloadlinkLabel}
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.mod_assetlink div.hyperlink div a::after {
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

	.mod_assetlink div.hyperlink:hover div a::after {
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

	.mod_assetlink:last-child {
		padding-bottom: 5em;
	}
</style>
