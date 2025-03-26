<script lang="ts">
	export let menuLabel: string;
	export let openMenu: string | null;
	export let toggleMenu: (menuLabel: string) => void;
</script>

<aside
	on:click={() => toggleMenu(menuLabel)}
	class="{openMenu === menuLabel
		? 'top-12 '
		: 'top-24'} fixed left-0 z-40 w-full transform overflow-auto shadow-md transition-all duration-300 ease-in-out"
>
	<slot />
</aside>
