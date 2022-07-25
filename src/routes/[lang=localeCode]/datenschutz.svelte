<script context="module" lang="ts">
	export const prerender = true;
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async () => {
		const title = 'Datenschutz | Rhenania';
		const description = 'Uns sind Ihre Daten wichtig';
		return {
			stuff: { title, description }
		};
	};
</script>

<div
	class="relative z-10 max-w-screen-lg mx-auto px-10 pt-20 pb-48 grid grid-cols-1 md:grid-cols-2 gap-8"
>
	<div class="col-span-full">
		<h1 class="rc_h1 text-rc_darkblue">Datenschutz</h1>
		<h3 class="rc_h3 py-2">RC Rhenania Computer GmbH</h3>
	</div>
	<div class="col-span-1">
		<p class="py-2">
			Aegidiusplatz 15 b<br />
			53604 Bad Honnef
		</p>
		<p class="py-2">
			Telefon: 02224 - 96 00 00<br />
			Telefax: 02224 - 960 00 96<br />
			E-Mail:
			<a
				href="mailto:info@rhenania.biz"
				alt="Eine E-Mail mit Ihrem Standard Mailprogramm schreiben"
				class="w-full py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>info@rhenania.biz</a
			>
		</p>
	</div>
	<div>
		<h3 class="rc_h3 pt-2">Datenschutz</h3>
		<p class="py-2">
			Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder
			geschäftlicher Daten (Emailadressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe
			dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme und
			Bezahlung aller angebotenen Dienste ist - soweit technisch möglich und zumutbar - auch ohne
			Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet.
			Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten
			Kontaktdaten wie Postanschriften, Telefon- und Faxnummern sowie Emailadressen durch Dritte zur
			Übersendung von nicht ausdrücklich angeforderten Informationen ist nicht gestattet. Rechtliche
			Schritte gegen die Versender von sogenannten Spam-Mails bei Verstössen gegen dieses Verbot
			sind ausdrücklich vorbehalten.
		</p>
		<p class="py-2">
			Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“).
			Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert
			werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den
			Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen
			Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der
			IP-Anonymisierung auf dieser Webseite, wird Ihre IP-Adresse von Google jedoch innerhalb von
			Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den
			Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an
			einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers
			dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website
			auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der
			Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem
			Websitebetreiber zu erbringenDie im Rahmen von Google Analytics von Ihrem Browser übermittelte
			IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung
			der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen
			Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen
			dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung
			der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
			IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie
			das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren:

			<a
				href="http://tools.google.com/dlpage/gaoptout?hl=de"
				target="_blank"
				class="font-bold py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
				>http://tools.google.com/dlpage/gaoptout?hl=de</a
			>
		</p>
		<h3 class="rc_h3 pt-8">Rechtswirksamkeit dieses Haftungsausschlusses</h3>
		<p class="py-2">
			Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf
			diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der
			geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die
			übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
		</p>
	</div>
</div>
