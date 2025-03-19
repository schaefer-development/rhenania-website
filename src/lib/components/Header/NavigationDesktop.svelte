<script>
	let openMenu = '';
	const toggleMenu = (menu) => {
		openMenu = openMenu === menu ? '' : menu;
	};

	const menuItems = [
		{ name: 'Start', link: '/', isLink: true },
		{ name: 'Produkte', key: 'produkte' },
		{ name: 'Unternehmen', key: 'unternehmen' },
		{ name: 'Service', key: 'service' }
	];
</script>

{#each menuItems as item}
	{#if item.isLink}
		<a href="(item.link)" class="menupoint relative mx-2 lg:mx-3">
			<span
				class="focus:text-rc_red text-sm font-medium tracking-wider uppercase focus:ring-0 focus:outline-none"
			>
				{item.name}
			</span>
		</a>
	{:else}
		<button on:click={() => toggleMenu(item.key)} class="menupoint relative mx-2 lg:mx-3">
			<span
				class="{openMenu === item.key
					? 'menupoint_underline text-rc_red'
					: ''} hover:text-rc_red focus:text-rc_red text-sm font-medium tracking-wider uppercase focus:ring-0 focus:outline-none"
			>
				{item.name}
			</span>
		</button>
	{/if}
{/each}
