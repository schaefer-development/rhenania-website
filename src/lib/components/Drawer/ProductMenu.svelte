<script lang="ts">
	import DrawerAccordion from '$lib/components/Drawer/DrawerAccordion.svelte';

	const accordionData = [
		{
			id: 'versandlogistiksystem',
			title: 'Versandlogistiksystem',
			links: [
				{
					href: '/de/beleglose-kommissionierung-software',
					label: 'K04 - Kommissionieren, Kontrollieren, Packen'
				},
				{ href: '/de/multi-carrier-versandsoftware', label: 'F95 - Paket- und Palettenversand' },
				{
					href: '/de/versandkosten-frachtkosten-software',
					label: 'VKA - Versandkostenkontrolle und Abrechnung'
				}
			]
		},
		{
			id: 'versandoptimierung',
			title: 'Versandoptimierung',
			links: [
				{
					href: '/de/gelangensbestaetigung-software',
					label: 'U12 - Umsatzsteuer Befreiung sichern'
				},
				{ href: '/de/adresspruefung-software', label: 'APK - Adressprüfung und Korrektur' },
				{ href: '/de/dublettenpruefung-software', label: 'DUV - Dubletten vermeiden' },
				{ href: '/de/gefahrgut-versand-software', label: 'G10 - Gefahrgutversand' }
			]
		},
		{
			id: 'hardware',
			title: 'Hardware',
			links: [
				{ href: '/de/etikettendrucker', label: 'Etikettendrucker' },
				{ href: '/de/waagen', label: 'Waagen' },
				{ href: '/de/barcodescanner', label: 'Barcodescanner' }
			]
		}
	];
</script>

<!-- Akkordeons -->
<div class="grid grid-cols-1 gap-x-18 md:grid-cols-3">
	{#each accordionData as section (section.id)}
		<DrawerAccordion id={section.id}>
			<span slot="headline" class="breakwords font-medium tracking-widest">{section.title}</span>
			<div slot="content" class="flex flex-col">
				{#each section.links as link (link.href)}
					<a
						href={link.href}
						class="text-rc_skyblue hover:text-rc_red upppercase border-b border-blue-800 py-2 font-medium"
						>{link.label}</a
					>
				{/each}
			</div>
		</DrawerAccordion>
	{/each}
</div>
