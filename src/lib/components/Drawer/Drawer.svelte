<script lang="ts">
	export let menuLabel: string;
	export let openMenu: string | null;
	export let toggleMenu: (menuLabel: string) => void;
</script>

<aside
	on:click={() => toggleMenu(menuLabel)}
	class="{openMenu === menuLabel
		? 'rc_menu_visible'
		: 'rc_menu_hidden'} flex flex-col items-end rc_menu left-0 top-20 w-full shadow-md fixed overflow-auto ease-in-out transform transition-all duration-300 z-40"
>
	<slot />
	<button
		class="px-6 py-3 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker"
		>X</button
	>
</aside>
