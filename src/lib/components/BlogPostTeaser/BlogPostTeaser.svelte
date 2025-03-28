<script lang="ts">
	import type { BlogPost } from '$lib/graphql/generated/schema';
	export let module: Partial<BlogPost> = {};
</script>

<div class="mod_blogEntry relative h-auto w-full overflow-hidden">
	<div
		class="bg_layer absolute h-full w-full bg-cover bg-center"
		style="background-image: url({module.heroBackgroundImage.url})"
	></div>
	<div
		class="relative z-2 mx-auto flex h-full max-w-screen-md items-center px-4 py-16 lg:px-10 lg:py-24"
	>
		<div class="bg-rc_darkblue-darker/90 w-full px-6 py-6 lg:px-10 lg:py-10">
			<h2 class="rc_h1 text-rc_skyblue">{module.teaserHeadline}</h2>
			<h3 class="rc_h3 w-full py-2 text-white md:w-10/12">{module.teaserSubheadline}</h3>
			<div class="bg-rc_darkblue-darkest my-4 block h-0.5"></div>
			<p class="w-full pt-2 pb-6 text-white md:w-10/12">
				{module.teaserText}
			</p>
			<a
				href={`/blog/${module.slug}`}
				class="bg-rc_red hover:bg-rc_red-darker rc_button_corner relative mt-6 py-2 pr-3 pl-5 text-xs font-bold tracking-widest text-white uppercase md:text-sm"
				>mehr erfahren</a
			>
		</div>
	</div>
</div>
