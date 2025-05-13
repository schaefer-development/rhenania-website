<script lang="ts">
	const links = [
		{ href: '/de/ueberuns', label: 'Über uns' },
		{ href: '/de/kontakt', label: 'Kontakt und Anfahrt' },
		{ href: '/de/karriere', label: 'Karriere' },
		{ href: '/de/versandlogistik-info', label: 'Neues' },
		{ href: '/de/partner', label: 'Partner' },
		{ href: '/de/referenzen', label: 'Referenzen' }
	];
</script>

<div class="flex w-full flex-row">
	{#each links as { href, label } (href)}
		<a
			{href}
			class="hover:text-rc_red focus:text-rc_red grow py-6 text-center text-sm font-medium tracking-widest text-white uppercase focus:ring-0 focus:outline-none"
			>{label}</a
		>
	{/each}
</div>
