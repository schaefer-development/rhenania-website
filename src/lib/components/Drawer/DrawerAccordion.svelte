<script lang="ts">
	export let id: string;
</script>

<div class="tab w-full overflow-hidden">
	<input class="absolute opacity-0 " {id} type="checkbox" name="tabs" />
	<label
		class="cursor-pointer flex items-stretch  border-b-2 border-rc_darkblue py-2 flex "
		for={id}
	>
		<div
			class="w-full self-center text-white font-medium text-sm tracking-widest uppercase hover:text-rc_red"
		>
			<slot name="headline" />
		</div>
		<div class="icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</div>
	</label>
	<div class="tab-content overflow-hidden">
		<slot name="content" />
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

	.tab input[type='checkbox'] + label .icon {
		color: #ea3336;
		-webkit-transition: all 0.25s;
		-o-transition: all 0.25s;
		transition: all 0.25s;
	}
	.tab input[type='checkbox']:checked + label .icon {
		color: #fff;
	}
</style>
