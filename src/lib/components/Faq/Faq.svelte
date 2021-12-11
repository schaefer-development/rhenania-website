<script>

	import Accordion from '$lib/components/Accordion/Accordion.svelte';

  </script>

<div class="relative bg-white py-12 shadow-md">
	<div class="relative z-10 max-w-screen-xl mx-auto px-10 ">
		<h1 class="rc_h1 text-rc_darkblue-darkest pb-8">FAQ - Häufig gestellte Fragen</h1>

		<Accordion id="1">
            <span slot="headline">Welche Arbeitsschritte kann F95 abwickeln?</span>
            <div slot="content">
				<p class="py-2">Mit F95 können Sendungen beim Betriebsdurchlauf und nach der Auslieferung
					verwaltet werden. Die Software steuert das Fertigmachen der Sendungen, die Einlieferung/Abholung,
					sowie die Verwaltung und Abwicklung mit den Frachtführern. [...]</p>
            </div>
          </Accordion>

		  <Accordion id="2">
            <span slot="headline">Wie lautet die zweite Frage?</span>
            <div slot="content">
				<p class="py-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </Accordion>


	</div>
</div>


