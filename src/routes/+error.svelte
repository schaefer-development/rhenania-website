<script lang="ts">
	import { page } from '$app/state';
</script>

{#if page.status === 404}
	<h1>404</h1>
	{#if page.error}
		<p>Hm, wir können diese Seite leider nicht finden.</p>
	{/if}
{:else}
	<h1>Upsi, da ist was schief gelaufen</h1>
	{#if page.error}
		<p>{page.error.message}</p>
	{/if}
{/if}
