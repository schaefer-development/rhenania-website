<script lang="ts">
	import type { ReferencesItem } from '$lib/graphql/generated/schema';
	export let referenceItem: Partial<ReferencesItem> = {};
</script>

<img src={referenceItem.referenceLogo.url} alt="Rhenania Referenzen" class="mx-auto w-full" />
