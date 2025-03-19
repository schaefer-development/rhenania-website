<script>
	let open = true;
	const toggleMenu = () => (open = !open);

	const menuItems = [
		{ title: 'Start', link: '/' },
		{ title: 'Produkte', link: '/' }
	];

	const company = ['Über uns', 'Kontakt und Anfahrt', 'Karriere', 'Neues', 'Partner', 'Referenzen'];

	const service = ['Cloudlösung', 'Online-Support', 'Download'];

	const accordionItems = [
		{
			title: 'Versandlogistiksystem',
			links: [
				{ title: 'Über uns', link: '#' },
				{ title: 'Kontakt und Anfahrt', link: '#' }
			]
		}
	];

	function toggleAccordion(index) {
		openIndex = openIndex === index ? null : index;
	}

	let openIndex = null;
</script>

<div class="flex pl-4">
	<button
		on:click={toggleMenu}
		aria-label="Navigation öffnen"
		class="text-red-500 focus:ring-0 focus:outline-none"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-8"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>
</div>

<div
	class="absolute top-20 left-0 z-50 h-screen w-full bg-blue-950 transition-transform duration-300 ease-in-out {open
		? 'translate-x-0'
		: 'translate-x-full'}"
>
	<div class="flex flex-col p-12">
		<div class="flex w-full justify-end">
			<button
				aria-label="Navigation schließen"
				on:click={toggleMenu}
				class="flex cursor-pointer text-red-500 focus:ring-0 focus:outline-none"
			>
				<span class="px-2 font-medium uppercase">Schließen</span>
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
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>

		<hr class="my-3 h-0.75 w-full bg-red-500" />

		<div class="flex gap-x-12 py-4">
			<div
				class="text-rc_skyblue flex grow flex-col space-y-2 text-xl font-medium tracking-wider uppercase"
			>
				<a href="/" class="text-sky-200">Start</a>
				<a href="/" class="text-sky-200">Produkte</a>

				<div class="flex grow flex-col">
					<!-- Unternehmen Accordion -->
					<button
						class="text-rc_skyblue flex w-full items-center justify-between text-left text-xl font-medium tracking-wider uppercase focus:outline-none"
						on:click={() => toggleAccordion(0)}
					>
						<span
							class="w-full self-center text-sm font-medium tracking-widest text-white uppercase"
							>Versandlogistiksystem</span
						>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="{openIndex === 0 ? 'text-white' : 'text-red-500'} h-6 w-6"
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
					</button>
					<div
						class="overflow-hidden transition-all duration-300 ease-in-out"
						style="max-height: {openIndex === 0 ? '500px' : '0'}"
					>
						<div class="py-4 text-gray-700">
							<a
								href="#"
								class="focus:text-rc_red block py-1 text-sm font-medium tracking-widest text-sky-200 text-white uppercase focus:ring-0 focus:outline-none"
								>sdsdf</a
							>
							<a
								href="#"
								class="block py-1 text-sm font-medium tracking-widest text-white uppercase"
								>Kontakt und Anfahrt</a
							>
						</div>
					</div>
					<!-- -->
				</div>
			</div>

			<div class="flex grow flex-col space-y-2">
				<p class="text-xl font-medium tracking-wider text-sky-200 uppercase">Unternehmen</p>
				{#each company as item}
					<a
						href="#"
						class="hover:text-rc_red focus:text-rc_red block py-1 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
						>{item}</a
					>
				{/each}

				<hr class="mt-3 mb-6 h-0.75 w-full bg-blue-700" />
				<p class="text-xl font-medium tracking-wider text-sky-200 uppercase">Service</p>
				{#each service as item}
					<a
						href="#"
						class="hover:text-rc_red focus:text-rc_red block py-1 text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
						>{item}</a
					>
				{/each}
			</div>
		</div>
	</div>
</div>
