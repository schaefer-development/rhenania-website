<script lang="ts">
	import type { Eyecatcher } from '$lib/graphql/generated/schema';
	import Triangle from '$lib/components/Triangle/Triangle.svelte';
	export let module: Partial<Eyecatcher> = {};
</script>



<div class="relative bg-rc_darkblue py-12 ">
	<div class="absolute border rc_background_triangle w-full h-full -mt-12"></div>
	<div class="max-w-screen-lg mx-auto grid grid-cols-5 gap-8 px-10 ">
		<div class="col-span-1 flex items-center">
			<img src={module.image.url} class="rounded-full mx-auto w-full"/>
		</div>
		<div class="col-span-1 flex items-stretch ">
			<span class="w-px border-r border-white mx-auto inline-block transform rc_rotate"></span>
		</div>
		<div class="col-span-3 flex flex-stretch">
			<div class="self-center">
				<h1 class="text-white rc_h1">{module.headline}</h1>
				<h2 class="text-rc_skyblue rc_h3 pb-4">{module.subheadline}</h2>
				<hr class="border-b-1 border-rc_darkblue-darkest k">
			</div>
		</div>		
	</div>
</div>	