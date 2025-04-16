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
				class="hover:text-rc_red flex w-full cursor-pointer items-center justify-between text-left tracking-wider uppercase transition"
				on:click={() => toggleItem(index)}
			>
				{item.title}
				<span>{openItems.has(index) ? '−' : '+'}</span>
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
