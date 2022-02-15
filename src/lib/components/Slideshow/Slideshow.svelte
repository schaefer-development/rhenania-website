<script lang="ts">
	import { base } from '$app/paths';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
</script>

<div id="custom_splide" class="w-full relative">
	<Splide
		options={{
			autoplay: true,
			rewind: true,
			perPage: 5,
			perMove: 1,
			pagination: false,
			autoScroll: {
				speed: 2
			}
		}}
	>
		<div class="splide__arrows" slot="before-track">
			<button
				class="splide__arrow splide__arrow--prev text-white opacity-100 ease-in-out transition-all duration-300 -ml-8"
				type="button"
				aria-controls="splide01-track"
				aria-label="Go to last slide"
			>
				<!-- Generator: Adobe Illustrator 24.2.0, SVG Export Plug-In  -->
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					width="21.1px"
					height="39.4px"
					viewBox="0 0 21.1 39.4"
					style="overflow:visible;enable-background:new 0 0 21.1 39.4;"
					xml:space="preserve"
				>
					<style type="text/css">
						.arrow {
							fill: #ffffff;
						}
					</style>
					<defs />
					<polygon class="arrow" points="1.4,39.4 0,38.1 18.3,19.7 0,1.4 1.4,0 21.1,19.7 " />
				</svg>
			</button>

			<button
				class="splide__arrow splide__arrow--next text-white opacity-100 right-0 -mr-6 ease-in-out transition-all duration-300"
				type="button"
				aria-controls="splide01-track"
				aria-label="Next slide"
			>
				<!-- Generator: Adobe Illustrator 24.2.0, SVG Export Plug-In  -->
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					width="21.1px"
					height="39.4px"
					viewBox="0 0 21.1 39.4"
					style="overflow:visible;enable-background:new 0 0 21.1 39.4;"
					xml:space="preserve"
				>
					<style type="text/css">
						.arrow {
							fill: #ffffff;
						}
					</style>
					<defs />
					<polygon class="arrow" points="1.4,39.4 0,38.1 18.3,19.7 0,1.4 1.4,0 21.1,19.7 " />
				</svg>
			</button>
		</div>

		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_abus.svg" alt="Abus" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img
				src="{base}/logo_clients/clients_aokverlag.svg"
				alt="AOK Verlag"
				class="w-10/12 mx-auto"
			/>
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_aperam.svg" alt="Aperam" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img
				src="{base}/logo_clients/clients_bernstein.svg"
				alt="Bernstein"
				class="w-10/12 mx-auto"
			/>
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_damstahl.svg" alt="Damstahl" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_detax.svg" alt="Detax" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_dom.svg" alt="DOM" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_dometic.svg" alt="Dometic" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img
				src="{base}/logo_clients/clients_drittewelt.svg"
				alt="Dritte Welt Shop"
				class="w-10/12 mx-auto"
			/>
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_duravit.svg" alt="Duravit" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img
				src="{base}/logo_clients/clients_duttenhofer.svg"
				alt="Duttenhofer"
				class="w-10/12 mx-auto"
			/>
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_ekz.svg" alt="EKZ" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_eska.svg" alt="ESKA" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_esv.svg" alt="ESV" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img
				src="{base}/logo_clients/clients_fahrenberger.svg"
				alt="Fahrenberger"
				class="w-10/12 mx-auto"
			/>
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_flintec.svg" alt="Flintec" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_fujifilm.svg" alt="Fujifilm" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_gewa.svg" alt="Gewa" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_gondrom.svg" alt="Gondrom" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_hagesued.svg" alt="HageSüd" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_hoermann.svg" alt="Hörmann" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_igepa.svg" alt="IGEPA" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_intenso.svg" alt="Intenso" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_jordan.svg" alt="Jordan" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_jumo.svg" alt="Jumo" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_kindundco.svg" alt="Kind&Co" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img
				src="{base}/logo_clients/clients_labothene.svg"
				alt="Labothene"
				class="w-10/12 mx-auto"
			/>
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_lamy.svg" alt="Lamy" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_lr.svg" alt="LR" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_marbach.svg" alt="Marbach" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_meindl.svg" alt="Meindl" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_noegel.svg" alt="Nögel" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_oui.svg" alt="Oui" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img
				src="{base}/logo_clients/clients_perschmann.svg"
				alt="Perschmann"
				class="w-10/12 mx-auto"
			/>
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_picard.svg" alt="Picard" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_rrteam.svg" alt="RR Team" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img
				src="{base}/logo_clients/clients_schlengermann.svg"
				alt="Schlengermann"
				class="w-10/12 mx-auto"
			/>
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_techem.svg" alt="Techem" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_troeber.svg" alt="Tröber" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_tucker.svg" alt="Tucker" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_vanlaack.svg" alt="van Laack" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_volz.svg" alt="Volz" class="w-10/12 mx-auto" />
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img
				src="{base}/logo_clients/clients_westaflex.svg"
				alt="Westaflex"
				class="w-10/12 mx-auto"
			/>
		</SplideSlide>
		<SplideSlide data-splide-interval="9000">
			<img src="{base}/logo_clients/clients_wundw.svg" alt="W und W" class="w-10/12 mx-auto" />
		</SplideSlide>
	</Splide>
</div>
