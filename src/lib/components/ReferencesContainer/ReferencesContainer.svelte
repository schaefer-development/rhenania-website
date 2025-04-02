<script lang="ts">
	import ReferenceItem from '$lib/components/ReferenceItem/ReferenceItem.svelte';
	import type { ReferencesContainer } from '$lib/graphql/generated/schema';
	export let module: Partial<ReferencesContainer> = {};
</script>

<div
	class="relative z-10 mx-auto grid max-w-screen-lg grid-cols-1 gap-10 px-10 pt-12 pb-12 md:pb-24 lg:grid-cols-8"
>
	<div class="col-span-full">
		<h1 class="rc_h1 text-rc_darkblue">Referenzen</h1>
		<h2 class="rc_h2 py-2">Hier finden Sie einen Auszug unserer Referenzkunden</h2>
	</div>
	<div class="col-span-full font-bold md:col-span-5">
		Gerne nennen wir Ihnen für Ihren konkreten Anwendungsfall weitere Referenzen – auch mit
		Ansprechpartner und Telefonnummer.
	</div>
	<div class="col-span-full md:col-span-3 lg:text-right">
		<a
			href="/de/kontakt"
			class="bg-rc_red hover:bg-rc_red-darker rc_button_corner relative py-2 pr-3 pl-5 text-sm font-bold tracking-widest text-white uppercase"
			>Jetzt Kontakt aufnehmen</a
		>
	</div>
</div>

<div
	class="relative z-10 mx-auto grid max-w-screen-lg grid-cols-3 gap-2 px-10 pb-24 sm:grid-cols-4 md:grid-cols-5"
>
	{#each module.referenceItems as referenceItem (referenceItem.id)}
		<div class="col-span-1 border bg-white">
			<ReferenceItem {referenceItem} />
		</div>
	{/each}
</div>
