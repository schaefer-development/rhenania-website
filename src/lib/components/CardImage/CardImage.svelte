<script lang="ts">
	import { base } from '$app/paths';
	import { linkTo } from '$lib/helpers';
	import type { CardImage } from '$lib/graphql/generated/schema';
	export let card: Partial<CardImage> = {};
</script>

<div
	class="mod_cardImage relative mx-5 my-5 grow overflow-hidden bg-white shadow-sm hover:shadow-lg duration-150 ease-in-out"
>
	{#if card?.link?.target}
		<a href={$linkTo(card.link.target.slug)} title={card.headline}>
			<div class="cardImageWrapper h-48 overflow-hidden">
				<div
					class="cardImage h-full bg-cover bg-center"
					style="background-image: url({card.image.url})"
				/>
			</div>
			<div class="text px-6 py-6 flex flex-col text-center">
				<div class="rc_h3 text-rc_darkblue mb-2">{card.headline}</div>
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
			</div>
		</a>
	{:else if card?.linkToId}
		<a href="{base}#{card.linkToId}" title={card.headline}>
			<div class="cardImageWrapper h-48 overflow-hidden">
				<div
					class="cardImage h-full bg-cover bg-center"
					style="background-image: url({card.image.url})"
				/>
			</div>
			<div class="text px-6 py-6 flex flex-col text-center">
				<div class="rc_h3 text-rc_darkblue mb-2">{card.headline}</div>
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
			</div>
		</a>
	{:else}
		<div class="cardImageWrapper h-48 overflow-hidden">
			<div
				class="cardImage h-full bg-cover bg-center"
				style="background-image: url({card.image.url})"
			/>
		</div>
		<div class="text px-6 py-6 flex flex-col text-center">
			<div class="rc_h3 text-rc_darkblue mb-2">{card.headline}</div>
		</div>
	{/if}
</div>

<style>
	.mod_cardImage .cardImageWrapper .cardImage {
		transform: scale(1);
		transition: all;
		transition-duration: 0.5s;
	}
	.mod_cardImage:hover .cardImageWrapper .cardImage {
		transform: scale(1.2);
	}

	.mod_cardImage .text span::after {
		background-color: #ea3336;
		bottom: -2px;
		content: '';
		display: block;
		height: 4px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	.mod_cardImage:hover .text span::after {
		width: 100%;
	}

	.mod_cardImage .text span svg {
		margin-left: 0.25em;
		margin-right: 0.5em;
		transition: all;
		transition-duration: 0.25s;
	}

	.mod_cardImage:hover .text span svg {
		margin-left: 0.5em;
		margin-right: 0.25em;
	}
</style>
