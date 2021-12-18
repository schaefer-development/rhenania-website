<script lang="ts">
	import type { ArticleHeroTeaser } from '$lib/graphql/generated/schema';
	export let module: Partial<ArticleHeroTeaser> = {};
</script>

<div class=" w-full overflow-hidden h-50v">
	<div
		class="bg_layer absolute w-full h-50v bg-cover bg-center "
		style="background-image: url({module.heroBackgroundImage.url})"
	/>
	<div class="relative z-2 h-full flex items-center max-w-screen-md mx-auto px-10">
		<div class="blogteaserbg px-10 py-10">
			<h2 class="rc_h1 text-rc_skyblue">{module.headline}</h2>
			<h3 class="text-white text-lg font-medium">{module.subheadline}</h3>
			<hr class="border-rc_darkblue-darkest my-4" />
			<p class="text-white w-10/12">
				{module.teaserText}
			</p>
			<button
				class="relative mt-8 pl-5 pr-3 py-2 bg-rc_red text-white text-sm font-bold uppercase tracking-widest hover:bg-rc_red-darker rc_button_corner"
				>mehr erfahren</button
			>
		</div>
	</div>
</div>
