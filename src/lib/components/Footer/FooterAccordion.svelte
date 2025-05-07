<script lang="ts">
	export let items: {
		title: string;
		subpoints: { name: string; href: string }[];
	}[] = [];

	let openItems = new Set<number>();

	function toggleItem(index: number) {
		openItems.has(index) ? openItems.delete(index) : openItems.add(index);
		openItems = new Set(openItems); // reactivity
	}
</script>

<div class="w-10/12">
	{#each items as item, index (item)}
		<div class="">
			<button
				class="hover:text-rc_red flex w-full cursor-pointer items-center justify-between text-left tracking-wider transition"
				on:click={() => toggleItem(index)}
			>
				<span class="grow">{item.title}</span>

				<span>
					{#if openItems.has(index)}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="aspect-square w-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="aspect-square w-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					{/if}
				</span>
			</button>

			{#if openItems.has(index)}
				<ul class="pb-4 text-white">
					{#each item.subpoints as sub (sub)}
						<li class="ml-2 list-disc">
							<a href={sub.href} class="hover:text-rc_red block pb-1 pl-1 text-white">
								{sub.name}
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</div>
