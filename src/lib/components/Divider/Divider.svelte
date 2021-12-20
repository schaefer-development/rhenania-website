<script lang="ts">
	import type { Divider } from '$lib/graphql/generated/schema';
	export let module: Partial<Divider> = { padding: 0 };
</script>

<div class="divider w-full pt-{module.paddingTop} pb-{module.paddingBottom}">
	<div class="h-1/2 w-full border-gray-300 border-b-4" />
	<div class="mx-auto max-w-screen-2xl w-full rc_hr" />
</div>
