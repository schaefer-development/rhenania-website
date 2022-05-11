<script>
	export let id;
</script>

<div class="mod_accordion relative tab w-full overflow-hidden pb-4">
	<input class="absolute opacity-0 " {id} type="checkbox" name="tabs" />
	<label class="cursor-pointer flex border-b-2 py-2" for={id}>
		<div class="w-full font-bold"><slot name="headline" /></div>
		<div class="icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8"
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
	<div class="tab-content">
		<div class="pt-4 pb-8"><slot name="content" /></div>
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
		color: #6e7071;
	}

	:global(.item_content a) {
		position: relative;
		display: inline-block;
		font-weight: bold;
		color: #ea3336;
		text-decoration: none !important;
	}

	:global(.item_content a:hover) {
		text-decoration: none;
	}

	:global(.item_content a::after) {
		background-color: #ea3336;
		bottom: -7px;
		content: '';
		display: block;
		height: 4px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	:global(.item_content a:hover::after) {
		background-color: #ea3336;
		bottom: -7px;
		content: '';
		display: block;
		height: 4px;
		position: absolute;
		width: 100%;
		transition: all;
		transition-duration: 0.25s;
	}
</style>
