<script lang="ts">
	import { base } from '$app/paths';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';


	
</script>

<div>
	<Splide
		options={{
			autoplay:true,
			rewind: true,
			perPage: 5,
			perMove: 1,
			gap: '1rem',
			autoScroll: {
    speed: 2,
  },
			classes: {
				arrows: 'splide__arrows your-class-arrows',
				arrow: 'splide__arrow your-class-arrow',
				prev: 'splide__arrow--prev your-class-prev',
				next: 'splide__arrow--next your-class-next'
			}
		}}
	>
    <SplideSlide data-splide-interval="1000">
			<img src="{base}/logo_clients/clients_jumo.png" alt="Jumo" class="w-10/12 mx-auto" />
		</SplideSlide>
	    <SplideSlide data-splide-interval="1000">
			<img src="{base}/logo_clients/clients_lamy.png" alt="Lamy" class="w-10/12 mx-auto" />
		</SplideSlide>

		<SplideSlide data-splide-interval="1000">
			<img src="{base}/logo_clients/clients_duravit.png" alt="Duravit" class="w-10/12 mx-auto" />
		</SplideSlide>

	    <SplideSlide data-splide-interval="1000">
			<img src="{base}/logo_clients/clients_abus.png" alt="Abus" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="1000">
			<img src="{base}/logo_clients/clients_fujifilm.png" alt="Fujifilm" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="1000">
			<img src="{base}/logo_clients/clients_vanlaack.png" alt="Fujifilm" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="1000">
			<img src="{base}/logo_clients/clients_igepa.png" alt="Fujifilm" class="w-10/12 mx-auto" />
		</SplideSlide>	
		<SplideSlide data-splide-interval="1000">
			<img src="{base}/logo_clients/clients_dom.png" alt="Fujifilm" class="w-10/12 mx-auto" />
		</SplideSlide>
	</Splide>
</div>
