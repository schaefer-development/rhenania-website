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
	class="relative z-10 max-w-screen-lg mx-auto px-10 pt-20 pb-48 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8"
>
	<div class="col-span-full">
		<h1 class="rc_h1 text-rc_darkblue">Datenschutz</h1>
	</div>
	<div class="col-span-1">
		<h3 class="rc_h3 py-2">RC Rhenania Computer GmbH</h3>
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
		<h3 class="rc_h3 py-2">1. Datenschutz auf einen Blick</h3>
		<p class="font-bold pt-2">1.1 Allgemeine Hinweise</p>
		<p class="pb-2">
			Die folgenden Hinweise sollen die Nutzer dieser Website über die Art, den Umfang und den Zweck
			der Erhebung und Verarbeitung personenbezogener Daten durch den Websitebetreiber informieren.
			Bezüglich der Definition der verwendeten Begriffen „personenbezogene Daten“ oder
			„Verarbeitung“ verweisen wir auf Art. 4 DSGVO.
		</p>
		<p class="py-2">
			Wir als Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
			behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
			Datenschutzvorschriften sowie dieser Datenschutzerklärung.
		</p>
		<p class="py-2">
			Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per
			E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
			durch Dritte ist nicht möglich.
		</p>
		<p class="font-bold pt-2">1.2 Verantwortliche Stelle für die Datenverarbeitung</p>
		<p class="pb-2">
			Wir sind als Anbieter unserer Website die für die Datenverarbeitung verantwortliche Stelle.
			Sie erreichen uns unter den nachfolgend angegebenen Kontaktdaten:
		</p>
		<p class="py-2">
			RC Rhenania Computer GmbH
			<br />
			Aegidiusplatz 15 b
			<br />
			53604 Bad Honnef
			<br />
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
		<p class="py-2">
			Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
			mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B.
			Namen, E-Mail-Adressen o. ä.) entscheidet.
		</p>
		<p class="font-bold pt-2">1.3 Wie erfassen wir Ihre Daten?</p>
		<p class="pb-2">
			Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
			sich z.B. um Daten handeln, die Sie in das Kontaktformular eingeben. Andere Daten werden
			automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
			technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
			Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
		</p>
		<p class="font-bold pt-2">1.4 Wofür nutzen wir Ihre Daten?</p>
		<p class="pb-2">
			Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
			gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
		</p>
		<p class="font-bold pt-2">1.5 Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
		<p class="pb-2">
			Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
			gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
			Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Des Weiteren steht Ihnen ein
			Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.<br />
			Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der in Abschnitt
			1.2 angegebenen Adresse an uns wenden.
		</p>
		<p class="font-bold pt-2">1.6 Analyse-Tools und Tools von Drittanbietern</p>
		<p class="pb-2">
			Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das
			geschieht ohne Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres
			Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
			zurückverfolgt werden. Detaillierte Informationen dazu finden Sie in Abschnitt 3.3 dieser
			Datenschutzerklärung.
		</p>

		<h3 class="rc_h3 pt-8">2. Pflichtinformationen</h3>
		<p class="font-bold pt-2">2.1 Widerruf Ihrer Einwilligung zur Datenverarbeitung</p>
		<p class="pb-2">
			Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
			können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
			Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
			Datenverarbeitung bleibt vom Widerruf unberührt.
		</p>
		<p class="font-bold pt-2">2.2 Beschwerderecht bei der zuständigen Aufsichtsbehörde</p>
		<p class="pb-2">
			Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der
			zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen
			ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz
			hat.
		</p>
		<p class="font-bold pt-2">2.3 Recht auf Datenübertragbarkeit</p>
		<p class="pb-2">
			Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
			Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
			maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
			an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
			ist.
		</p>
	</div>
</div>
