<script lang="ts">
	import { base } from '$app/paths';
	import type { CardIcon } from '$lib/graphql/generated/schema';
	export let card: Partial<CardIcon> = {};
</script>

<div
	class="mod_cardIcon mx-5 my-5 grow relative overflow-hidden bg-white shadow-sm hover:shadow-lg duration-150 ease-in-out"
>
	{#if card?.link?.target}
		<a href="{base}/{card.link.target.slug}" title="{base}/{card.link.target.slug}">
			<div
				class="cardIcon h-48 bg-red flex items-center justify-center"
				style="background-color:{card.backgroundColor.hex}"
			>
				<img src={card.icon.url} alt="Rhenania Icon" />
			</div>
			<div class="text px-6 py-6 flex flex-col text-center">
				<div class="rc_h3 text-rc_darkblue mb-2">{card.headline}</div>
				{#if card.subheadline}
					<div class="mb-2">{card.subheadline}</div>
				{/if}
				{#if card.link}
					<span class="relative flex flex-row items-center mx-auto text-rc_red">
						<span class="uppercase tracking-wider text-sm font-medium">Mehr</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</span>
				{/if}
			</div>
		</a>
	{:else}
		<div
			class="cardIcon h-48 bg-red flex items-center justify-center"
			style="background-color:{card.backgroundColor.hex}"
		>
			<img src={card.icon.url} alt="Rhenania Icon" />
		</div>
		<div class="text px-6 py-6 flex flex-col text-center">
			<div class="rc_h3 text-rc_darkblue mb-2">{card.headline}</div>
			{#if card.subheadline}
				<div class="mb-2">{card.subheadline}</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.mod_cardIcon .cardIcon img {
		width: 9rem;
		height: 9rem;
		transition: all;
		transition-duration: 0.5s;
	}
	.mod_cardIcon:hover .cardIcon img {
		width: 11rem;
		height: 11rem;
	}

	.mod_cardIcon .text span::after {
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

	.mod_cardIcon:hover .text span::after {
		width: 100%;
	}
	.mod_cardIcon .text span svg {
		margin-left: 0.25em;
		margin-right: 0.5em;
		transition: all;
		transition-duration: 0.25s;
	}

	.mod_cardIcon:hover .text span svg {
		margin-left: 0.5em;
		margin-right: 0.25em;
	}
</style>
