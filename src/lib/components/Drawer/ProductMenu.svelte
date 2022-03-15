<script lang="ts">
	import DrawerAccordion from '$lib/components/Drawer/DrawerAccordion.svelte';
	import { base } from '$app/paths';
</script>

<div class="flex flex-row w-full max-w-screen-2xl mx-auto">
	<div class="w-full grid grid-cols-3 gap-24 px-10 py-10">
		<DrawerAccordion id="versandlogistiksystem">
			<span slot="headline" class="breakwords">Versandlogistiksystem</span>
			<div slot="content">
				<a href="{base}/k04/" class="rc_desktopmenu_subpoint"
					>K04 - Kommissionieren, Kontrollieren, Packen</a
				>
				<a href="{base}/f95/" class="rc_desktopmenu_subpoint">F95 - Paket- und Palettenversand</a>

				<a href="{base}/vka/" class="rc_desktopmenu_subpoint"
					>VKA - Versandkostenkontrolle und Abrechnung</a
				>
			</div>
		</DrawerAccordion>
		<DrawerAccordion id="versandoptimierung">
			<span slot="headline">Versandoptimierung</span>
			<div slot="content">
				<a href="{base}/u12/" class="rc_desktopmenu_subpoint"
					>U12 - Umsatzsteuer Befreiung sichern</a
				>
				<a href="{base}/apk/" class="rc_desktopmenu_subpoint">APK - Adressprüfung und Korrektur</a>
				<a href="{base}/duv/" class="rc_desktopmenu_subpoint">DUV - Dubletten vermeiden</a>
				<a href="{base}/g10/" class="rc_desktopmenu_subpoint">G10 - Gefahrgutversand</a>
			</div>
		</DrawerAccordion>
		<DrawerAccordion id="hardware">
			<span slot="headline">Hardware</span>
			<div slot="content">
				<a href="{base}/etikettendrucker/" class="rc_desktopmenu_subpoint">Etikettendrucker</a>
				<a href="{base}/waagen/" class="rc_desktopmenu_subpoint">Waagen</a>
				<a href="{base}/barcodescanner/" class="rc_desktopmenu_subpoint">Barcodescanner</a>
			</div>
		</DrawerAccordion>
	</div>
</div>
