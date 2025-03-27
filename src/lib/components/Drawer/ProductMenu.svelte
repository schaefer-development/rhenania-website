<script lang="ts">
	import DrawerAccordion from '$lib/components/Drawer/DrawerAccordion.svelte';

	const accordionData = [
		{
			id: 'versandlogistiksystem',
			title: 'Versandlogistiksystem',
			links: [
				{ href: '/k04', label: 'K04 - Kommissionieren, Kontrollieren, Packen' },
				{ href: '/f95', label: 'F95 - Paket- und Palettenversand' },
				{ href: '/vka', label: 'VKA - Versandkostenkontrolle und Abrechnung' }
			]
		},
		{
			id: 'versandoptimierung',
			title: 'Versandoptimierung',
			links: [
				{ href: '/u12', label: 'U12 - Umsatzsteuer Befreiung sichern' },
				{ href: '/apk', label: 'APK - Adressprüfung und Korrektur' },
				{ href: '/duv', label: 'DUV - Dubletten vermeiden' },
				{ href: '/g10', label: 'G10 - Gefahrgutversand' }
			]
		},
		{
			id: 'hardware',
			title: 'Hardware',
			links: [
				{ href: '/etikettendrucker', label: 'Etikettendrucker' },
				{ href: '/waagen', label: 'Waagen' },
				{ href: '/barcodescanner', label: 'Barcodescanner' }
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
