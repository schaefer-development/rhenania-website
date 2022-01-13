<script>
	export let id;
</script>

<div class="mod_accordion tab w-full overflow-hidden">
	<input class="absolute opacity-0 " {id} type="checkbox" name="tabs" />
	<label class="cursor-pointer " for={id}>
		<div class="w-full"><slot name="headline" /></div>
	</label>
	<div class="tab-content overflow-hidden">
		<div class=""><slot name="content" /></div>
	</div>
</div>

<style>
	.tab-content {
		max-height: 0;
		-webkit-transition: max-height 0.5s;
		-o-transition: max-height 0.5s;
		transition: max-height 0.5s;
	}
	/* :checked - resize to full height */
	.tab input:checked ~ .tab-content {
		max-height: 100vh;
	}
</style>
