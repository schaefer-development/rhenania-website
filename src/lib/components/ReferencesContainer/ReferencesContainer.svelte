<script lang="ts">
	import ReferenceItem from '$lib/components/ReferenceItem/ReferenceItem.svelte';
	import type { ReferencesContainer } from '$lib/graphql/generated/schema';
	import { linkTo } from '$lib/helpers';
	export let module: Partial<ReferencesContainer> = {};
</script>

<div
	class="relative z-10 max-w-screen-lg mx-auto px-10 pt-12 pb-12 md:pb-24 grid grid-cols-1 lg:grid-cols-8 gap-10"
>
	<div class="col-span-full">
		<h1 class="rc_h1 text-rc_darkblue">Referenzen</h1>
		<h2 class="rc_h2 py-2">Hier finden Sie einen Auszug unserer Referenzkunden</h2>
	</div>
	<div class="col-span-full md:col-span-5 font-bold">
		Gerne nennen wir Ihnen für Ihren konkreten Anwendungsfall weitere Referenzen – auch mit
		Ansprechpartner und Telefonnummer.
	</div>
	<div class="col-span-full md:col-span-3 lg:text-right">
		<a
			href={$linkTo('/kontakt')}
			class="relative pl-5 pr-3 py-2 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
			>Jetzt Kontakt aufnehmen</a
		>
	</div>
</div>

<div
	class="relative z-10 max-w-screen-lg mx-auto px-10 pb-24 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2"
>
	{#each module.referenceItems as referenceItem (referenceItem.id)}
		<div class="col-span-1 border bg-white">
			<ReferenceItem {referenceItem} />
		</div>
	{/each}
</div>
