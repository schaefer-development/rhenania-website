<script lang="ts">
	import type { BlogPost } from '$lib/graphql/generated/schema';
	import { base } from '$app/paths';
	export let module: Partial<BlogPost> = {};
</script>

<div class="mod_blogEntry relative w-full overflow-hidden h-auto">
	<div
		class="bg_layer absolute w-full h-full bg-cover bg-center "
		style="background-image: url({module.heroBackgroundImage.url})"
	/>
	<div
		class="relative z-2 h-full flex items-center max-w-screen-md mx-auto px-4 lg:px-10 py-16 lg:py-24"
	>
		<div class="blogteaserbg px-6 lg:px-10 py-6 lg:py-10">
			<h2 class="rc_h1 text-rc_skyblue">{module.teaserHeadline}</h2>
			<h3 class="rc_h3 text-white py-2 w-full md:w-10/12">{module.teaserSubheadline}</h3>
			<div class="block bg-rc_darkblue-darkest h-0.5 my-4" />
			<p class="text-white w-full md:w-10/12">
				{module.teaserText}
			</p>
			<a
				href="{base}/blog/{module.slug}"
				class="relative mt-6 pl-5 pr-3 py-2 bg-rc_red text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
				>mehr erfahren</a
			>
		</div>
	</div>
</div>
