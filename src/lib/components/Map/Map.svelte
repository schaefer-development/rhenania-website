<script lang="ts">
	import { onMount } from 'svelte';
	import mapMarker from '$lib/images/mapmarker.png';
	import type { IconOptions, LatLngTuple } from 'leaflet';
	export let iconOptions: IconOptions = {
		iconUrl: mapMarker,
		iconSize: [40, 50],
		iconAnchor: [20, 50]
	};
	export let layerOptions = [
		'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ',
		{
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
			maxZoom: 19
		}
	];
	export let zoom = 13;
	export let coordinates: LatLngTuple = [50.6630751, 7.3039274];

	export let mapAttributes = {
		style: 'width: 100%; height: 300px;'
	};

	onMount(async () => {
		const L = await import('leaflet');
		const icon = L.icon(iconOptions);
		const map = L.map('map', { scrollWheelZoom: false }).setView(coordinates, zoom);
		L.tileLayer.apply(null, layerOptions).addTo(map);
		L.marker(coordinates, { icon }).addTo(map);

		return () => map && map.remove();
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
		integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
		crossorigin=""
	/>
</svelte:head>

<div id="map" {...mapAttributes} class="mod_map z-10"></div>
