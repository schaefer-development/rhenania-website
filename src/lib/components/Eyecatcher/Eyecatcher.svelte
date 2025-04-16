<script lang="ts">
	import type { Eyecatcher } from '$lib/graphql/generated/schema';
	import { mapPadding } from '$lib/helpers';
	export let module: Partial<Eyecatcher> = {};
</script>

<div class="mod_eyecatcher relative">
	<div class="relative w-full {mapPadding(module.paddingTop)}"></div>
	<div class="bg-rc_darkblue relative overflow-hidden py-10 lg:py-20">
		<div class="rc_background_triangle absolute -mt-10 h-full w-full lg:-mt-20"></div>
		<div
			class="relative z-10 mx-auto grid max-w-screen-lg grid-cols-1 gap-x-8 px-10 md:grid-cols-5"
		>
			<div class="col-span-full flex items-center md:col-span-1">
				<img
					src={module.image.url}
					alt="Nächster Termin | Upcoming event"
					class="mx-auto w-5/12 rounded-full md:w-full"
				/>
			</div>
			<div class="col-span-full flex items-stretch md:col-span-1">
				<span class="mx-auto inline-block w-px rotate-45 transform border-r"></span>
			</div>
			<div class="col-span-full md:col-span-3">
				<div class="self-center pt-10 pb-5">
					<h2 class="rc_h1 text-white">{module.headline}</h2>
					<h3 class="text-rc_skyblue rc_h3 pb-4">{module.subheadline}</h3>
					<div class="bg-rc_darkblue-darkest my-4 block h-0.5"></div>
				</div>
				<a
					class="bg-rc_red hover:bg-rc_red-darker rc_button_corner relative mt-8 py-2 pr-3 pl-5 text-sm font-bold tracking-widest text-white uppercase"
					href="/de/{module.link?.target.slug}"
					title={module.headline}>{module.link?.label}</a
				>
			</div>
		</div>
	</div>
	<div class="relative w-full {mapPadding(module.paddingBottom)}"></div>
</div>
