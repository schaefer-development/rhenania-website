<script lang="ts">
	export let menuLabel: string;
	export let openMenu: string | null;
	export let toggleMenu: (menuLabel: string) => void;
</script>

<aside
	class="{openMenu === menuLabel
		? 'open top-20'
		: 'closed -top-[50vh]'} bg-rc_darkblue-darkest/98 fixed left-0 z-40 hidden w-full overflow-auto shadow-md transition-all duration-300 ease-in-out lg:block"
>
	<div class="mx-auto flex w-full max-w-7xl flex-col p-10">
		<div class="close_section">
			<button
				on:click={toggleMenu}
				class="text-rc_red hover:text-rc_red flex w-full cursor-pointer items-center justify-end font-medium tracking-wider uppercase focus:outline-none"
			>
				<span class="px-2">Schliessen</span>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 24 24">
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<div class="bg-rc_red my-2 h-0.5"></div>
		</div>

		<slot />
	</div>
</aside>
