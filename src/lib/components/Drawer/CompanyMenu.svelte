<script lang="ts">
	const links = [
		{ href: '/ueberuns', label: 'Über uns' },
		{ href: '/kontakt', label: 'Kontakt und Anfahrt' },
		{ href: '/karriere', label: 'Karriere' },
		{ href: '/versandlogistik-info', label: 'Neues' },
		{ href: '/partner', label: 'Partner' },
		{ href: '/referenzen', label: 'Referenzen' }
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
