<script lang="ts">
	import type { Eyecatcher } from '$lib/graphql/generated/schema';
	import { mapPadding } from '$lib/helpers';
	export let module: Partial<Eyecatcher> = {};
</script>

<div class="mod_eyecatcher">
	<div class="relative w-full {mapPadding(module.paddingTop)}" />
	<div class="relative bg-rc_darkblue overflow-hidden">
		<div class="absolute rc_background_triangle w-full h-full -mt-12" />
		<div
			class="relative z-10 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-5 gap-x-8 px-10 "
		>
			<div class="col-span-full md:col-span-1 flex items-center">
				<img
					src={module.image.url}
					alt="Nächster Termin | Upcoming event"
					class="rounded-full mx-auto w-5/12 md:w-full"
				/>
			</div>
			<div class="col-span-full md:col-span-1 flex items-stretch ">
				<span class="w-px border-r mx-auto inline-block transform rc_rotate" />
			</div>
			<div class="col-span-full md:col-span-3">
				<div class="self-center py-10">
					<h1 class="text-white rc_h1">{module.headline}</h1>
					<h2 class="text-rc_skyblue rc_h3 pb-4">{module.subheadline}</h2>
					<hr class="border-b-1 border-rc_darkblue-darkest" />
					<button
						class="relative mt-8 pl-5 pr-3 py-2 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
						>mehr erfahren</button
					>
				</div>
			</div>
		</div>
	</div>
	<div class="relative w-full {mapPadding(module.paddingBottom)}" />
</div>
