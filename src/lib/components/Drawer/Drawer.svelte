<script lang="ts">
	export let menuLabel;
	export let openMenu;
</script>

<aside
	on:click={() => toggleMenu(menuLabel)}
	class="{openMenu === menuLabel
		? 'rc_menu_visible'
		: 'rc_menu_hidden'} hidden md:inline-block rc_menu left-0 top-20 w-full shadow-md fixed overflow-auto ease-in-out transform transition-all duration-300 z-40"
>
	<slot />
</aside>
