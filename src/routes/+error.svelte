<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Fehler {page.status}</title>
</svelte:head>

<div class="relative w-full">
	<div class="mx-auto w-full max-w-4xl py-12 text-center">
		{#if page.status === 404}
			<h1 class="rc_h1 text-rc_darkblue pb-2">Fehler 404</h1>
			{#if page.error}
				<p>Hm, wir können diese Seite leider nicht finden.</p>
			{/if}
		{:else}
			<h1 class="rc_h1 text-rc_darkblue pb-2">Upsi, da ist was schief gelaufen</h1>
			{#if page.error}
				<p>{page.error.message}</p>
			{/if}
		{/if}
		<div class="hyperlink mt-12 flex">
			<div class="text-rc_red relative mx-auto flex-none pr-1 font-bold">
				<a
					href="/"
					class="text-rc_red focus:text-rc_red flex w-full focus:ring-0 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
					Zur Startseite
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	div.hyperlink div a::after {
		background-color: #ea3336;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	div.hyperlink:hover div a::after {
		background-color: #ea3336;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 100%;
		transition: all;
		transition-duration: 0.25s;
	}
</style>
