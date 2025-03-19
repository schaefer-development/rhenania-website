<script lang="ts">
	export let menuLabel: string;
	export let openMenu: string | null;
	export let toggleMenu: (menuLabel: string) => void;
</script>

<aside
	on:click={() => toggleMenu(menuLabel)}
	class="{openMenu === menuLabel
		? 'rc_menu_visible hidden lg:block'
		: 'rc_menu_hidden'} rc_menu fixed top-20 left-0 z-40 w-full transform overflow-auto shadow-md transition-all duration-300 ease-in-out"
>
	<slot />
</aside>
