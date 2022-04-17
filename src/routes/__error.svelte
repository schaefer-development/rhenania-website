<script context="module" lang="ts">
	import { linkTo } from '$lib/helpers';
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`,
				status,
				error
			}
		};
	}
</script>

<script lang="ts">
	export let title: string;
	export let status: number;
	export let error: { message: string };
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="w-full m-auto flex items-center justify-center">
	<div class="p-24 overflow-hidden text-center">
		<h1 class="rc_h1 text-rc_darkblue pb-2">Error {status}</h1>
		<p class="font-bold pb-4">{error.message}</p>
		<div class="flex hyperlink">
			<div class="relative flex-none text-rc_red font-bold pr-1 mx-auto">
				<a
					href="/"
					class="flex w-full text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 mr-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
					Start
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	div.hyperlink div a::after {
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

	div.hyperlink:hover div a::after {
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
