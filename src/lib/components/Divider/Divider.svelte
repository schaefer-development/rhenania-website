<script lang="ts">
	import { mapPadding } from '$lib/helpers';
	import type { Divider } from '$lib/graphql/generated/schema';
	export let module: Partial<Divider> = {};
</script>

<div class="mod_divider relative">
	<div class="w-full {mapPadding(module.padding)}"></div>
	<div class="mod_divider w-full">
		<div class="h-1 w-full border-b-4 border-gray-300" ></div>
		<div class="flew-row mx-auto -mt-1 flex h-1 w-full max-w-screen-2xl">
			<div class="bg-gray-300" style="width:50%;"></div>
			<div class="bg-gray-50" style="width:6%;"></div>
			<div class="bg-gray-300" style="width:5%;"></div>
			<div class="bg-gray-50" style="width:6%;"></div>
			<div class="bg-gray-300" style="width:7%;"></div>
			<div class="bg-gray-50" style="width:8%;"></div>
			<div class="bg-gray-300" style="width:8%;"></div>
			<div class="bg-gray-50" style="width:4%;"></div>
			<div class="bg-gray-300" style="width:6%;"></div>
		</div>
	</div>
	<div class="relative w-full {mapPadding(module.padding)}"></div>
</div>
