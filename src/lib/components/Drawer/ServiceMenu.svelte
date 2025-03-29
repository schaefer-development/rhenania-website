<script lang="ts">
	const links = [
		{ href: '/de/cloudloesung', label: 'Cloudlösung' },
		{ href: '/de/onlinesupport', label: 'Online-Support' },
		{ href: '/de/download', label: 'Download' }
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
