<script lang="ts">
	import DrawerAccordion from '$lib/components/Drawer/DrawerAccordion.svelte';
	import { linkTo } from '$lib/helpers';
</script>

<div class="flex flex-row w-full max-w-screen-2xl mx-auto">
	<div class="w-full grid grid-cols-3 gap-24 px-10 py-10">
		<DrawerAccordion id="versandlogistiksystem">
			<span slot="headline" class="breakwords">Versandlogistiksystem</span>
			<div slot="content">
				<a href={$linkTo('/k04/')} class="rc_desktopmenu_subpoint"
					>K04 - Kommissionieren, Kontrollieren, Packen</a
				>
				<a href={$linkTo('/f95/')} class="rc_desktopmenu_subpoint"
					>F95 - Paket- und Palettenversand</a
				>

				<a href={$linkTo('/vka/')} class="rc_desktopmenu_subpoint"
					>VKA - Versandkostenkontrolle und Abrechnung</a
				>
			</div>
		</DrawerAccordion>
		<DrawerAccordion id="versandoptimierung">
			<span slot="headline">Versandoptimierung</span>
			<div slot="content">
				<a href={$linkTo('/u12/')} class="rc_desktopmenu_subpoint"
					>U12 - Umsatzsteuer Befreiung sichern</a
				>
				<a href={$linkTo('/apk/')} class="rc_desktopmenu_subpoint"
					>APK - Adressprüfung und Korrektur</a
				>
				<a href={$linkTo('/duv/')} class="rc_desktopmenu_subpoint">DUV - Dubletten vermeiden</a>
				<a href={$linkTo('/g10/')} class="rc_desktopmenu_subpoint">G10 - Gefahrgutversand</a>
			</div>
		</DrawerAccordion>
		<DrawerAccordion id="hardware">
			<span slot="headline">Hardware</span>
			<div slot="content">
				<a href={$linkTo('/etikettendrucker/')} class="rc_desktopmenu_subpoint">Etikettendrucker</a>
				<a href={$linkTo('/waagen/')} class="rc_desktopmenu_subpoint">Waagen</a>
				<a href={$linkTo('/barcodescanner/')} class="rc_desktopmenu_subpoint">Barcodescanner</a>
			</div>
		</DrawerAccordion>
	</div>
</div>
