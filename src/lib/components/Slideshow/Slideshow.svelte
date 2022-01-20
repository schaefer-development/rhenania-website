<script lang="ts">
	import { base } from '$app/paths';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';
</script>

<div>
	<Splide
		options={{
			rewind: true,
			perPage: 5,
			perMove: 1,
			gap: '1rem',

			classes: {
				arrows: 'splide__arrows your-class-arrows',
				arrow: 'splide__arrow your-class-arrow',
				prev: 'splide__arrow--prev your-class-prev',
				next: 'splide__arrow--next your-class-next'
			}
		}}
	>
		<SplideSlide>
			<img src="{base}/logo_clients/clients_jumo.svg" alt="Jumo" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide>
			<img src="{base}/logo_clients/clients_lamy.svg" alt="Lamy" class="w-10/12 mx-auto" />
		</SplideSlide>

		<SplideSlide>
			<img src="{base}/logo_clients/clients_duravit.svg" alt="Duravit" class="w-10/12 mx-auto" />
		</SplideSlide>

		<SplideSlide>
			<img src="{base}/logo_clients/clients_abus.svg" alt="Abus" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide>
			<img src="{base}/logo_clients/clients_fujifilm.svg" alt="Fujifilm" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide>
			<img
				src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg"
				alt="Bild 2"
			/>
		</SplideSlide>
		<SplideSlide>
			<img
				src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg"
				alt="Bild 2"
			/>
		</SplideSlide>
	</Splide>
</div>
