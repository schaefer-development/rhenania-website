<script lang="ts">
	import { base } from '$app/paths';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
</script>

<div id="custom_splide">
	<Splide
		options={{
			autoplay: true,
			rewind: true,
			perPage: 5,
			perMove: 1,
			gap: '1rem',
			autoScroll: {
				speed: 2
			}
		}}
	>
		<div class="splide__arrows" slot="before-track">
			<button
				class="splide__arrow splide__arrow--prev text-white ease-in-out transition-all duration-300"
				type="button"
				aria-controls="splide01-track"
				aria-label="Go to last slide"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"
					><path
						fill="currentcolor"
						d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
					/></svg
				>
			</button>

			<button
				class="splide__arrow splide__arrow--next text-white  right-0 ease-in-out transition-all duration-300"
				type="button"
				aria-controls="splide01-track"
				aria-label="Next slide"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"
					><path
						fill="currentcolor"
						d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
					/></svg
				></button
			>
		</div>

		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_jumo.svg" alt="Jumo" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_lamy.svg" alt="Lamy" class="w-10/12 mx-auto" />
		</SplideSlide>

		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_duravit.svg" alt="Duravit" class="w-10/12 mx-auto" />
		</SplideSlide>

		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_abus.svg" alt="Abus" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_fujifilm.svg" alt="Fujifilm" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_vanlaack.svg" alt="Fujifilm" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_igepa.svg" alt="Fujifilm" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_dom.svg" alt="Fujifilm" class="w-10/12 mx-auto" />
		</SplideSlide>
	</Splide>
</div>
