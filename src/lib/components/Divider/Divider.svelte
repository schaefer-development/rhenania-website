<script lang="ts">
	import type { Divider } from '$lib/graphql/generated/schema';
	export let module: Partial<Divider> = { padding: 0 };
</script>

<div class="divider w-full pt-10 pt-{module.paddingTop} pb-10 pb-{module.paddingBottom}">
	<div class="h-1/2 w-full border-gray-300 border-b-4" />
	<div class="mx-auto max-w-screen-2xl w-full border border-rc_red flex flew-row">
		<div class="bg-gray-300 w-3/12" />
		<div class="w-1/12" />
		<div class="bg-gray-300 w-1/12" />
		<div class="w-1/12" />
		<div class="bg-gray-300 w-1/12" />
		<div class="w-1/12" />
		<div class="bg-gray-300 w-1/12" />
		<div class="w-1/12" />
	</div>
</div>
