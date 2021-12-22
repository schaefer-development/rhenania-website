<script lang="ts">
	import { mapPadding } from '$lib/helpers';
	import type { Divider } from '$lib/graphql/generated/schema';
	export let module: Partial<Divider> = {};
</script>

<div class="mod_divider">
	<div class="w-full {mapPadding(module.padding)}" />
	<div class="mod_divider w-full">
		<div class="h-1 w-full border-gray-300 border-b-4" />
		<div class="mx-auto max-w-screen-2xl w-full h-1 -mt-1 flex flew-row">
			<div class="bg-gray-300" style="width:50%;" />
			<div class="bg-gray-50" style="width:6%;" />
			<div class="bg-gray-300" style="width:5%;" />
			<div class="bg-gray-50" style="width:6%;" />
			<div class="bg-gray-300" style="width:7%;" />
			<div class="bg-gray-50" style="width:8%;" />
			<div class="bg-gray-300" style="width:8%;" />
			<div class="bg-gray-50" style="width:4%;" />
			<div class="bg-gray-300" style="width:6%;" />
		</div>
	</div>
	<div class="relative w-full {mapPadding(module.padding)}" />
</div>
