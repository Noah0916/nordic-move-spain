export const metadata = {
  title: "Sicheres Kundenportal | Nordic Move Spain",
  description:
    "Ein sicheres Kundenportal für Kaufunterlagen, Berichte, Fristen und nächste Schritte beim Immobilienkauf in Spanien.",
};

export default function SecureClientPortalPage() {
  return (
    <>
      {/* DETAIL SICHERES KUNDENPORTAL */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[520px] bg-[#e9dfd2]">
              <img
                src="/images/soft-landing-card.png"
                alt="Sicheres Kundenportal für Kaufunterlagen in Spanien"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Sicheres Kundenportal
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Ein sicherer Ort für Dokumente, Fristen und nächste Schritte.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Beim Kauf einer Immobilie in Spanien kommen viele Parteien,
                Dokumente und Fristen zusammen. Dazu gehören der Anwalt, der
                Notar, der Gestor, der technische Spezialist, der Bankkontakt,
                der Makler und der Käufer. Ohne klare Struktur werden wichtige
                Unterlagen schnell über einzelne E-Mails, WhatsApp-Nachrichten,
                Screenshots und weitergeleitete PDFs verstreut.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Deshalb arbeitet Nordic Move Spain mit einem sicheren
                Kundenportal, in dem alle wichtigen Kaufunterlagen, Berichte,
                offenen Fragen, Fristen und Verantwortlichkeiten übersichtlich
                gesammelt werden. Der Kunde sieht an einem zentralen Ort, welche
                Dokumente bereits eingereicht wurden, welche Prüfungen noch
                laufen und welche Parteien noch liefern müssen.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                  <h3 className="font-serif text-2xl text-[#1e2a3a]">
                    Zwei-Faktor-Authentifizierung
                  </h3>

                  <p className="mt-4 leading-relaxed text-stone-600">
                    Der Zugang zum Portal wird zusätzlich durch
                    Zwei-Faktor-Authentifizierung geschützt. So bleiben sensible
                    Kaufunterlagen besser abgeschirmt, als wenn sie über
                    einzelne Nachrichten oder ungesicherte E-Mails geteilt
                    werden.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                  <h3 className="font-serif text-2xl text-[#1e2a3a]">
                    Rollenbasierter Zugriff
                  </h3>

                  <p className="mt-4 leading-relaxed text-stone-600">
                    Jeder Professional erhält nur Zugang zu den Dokumenten, die
                    für seine oder ihre Rolle relevant sind. Anwalt, Notar,
                    Gestor und technischer Spezialist arbeiten dadurch
                    strukturiert innerhalb ihrer eigenen Dossierbereiche.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                  <h3 className="font-serif text-2xl text-[#1e2a3a]">
                    Uploads durch Spezialisten
                  </h3>

                  <p className="mt-4 leading-relaxed text-stone-600">
                    Berichte, juristische Dokumente, technische Befunde,
                    administrative Unterlagen und zusätzliche Prüfungen können
                    von der jeweiligen Partei hinzugefügt werden. So muss der
                    Kunde nicht selbst nach der neuesten Version suchen.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                  <h3 className="font-serif text-2xl text-[#1e2a3a]">
                    Fristen und Status
                  </h3>

                  <p className="mt-4 leading-relaxed text-stone-600">
                    Der Kunde sieht klar, welche Schritte abgeschlossen sind,
                    welche Dokumente noch fehlen und welche Partei noch liefern
                    muss. Das gibt Ruhe, Übersicht und Kontrolle während eines
                    komplexen Kaufprozesses.
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-[32px] bg-[#1e2a3a] p-8 text-white">
                <h3 className="font-serif text-3xl">
                  Auch nach dem Kauf den Überblick behalten.
                </h3>

                <p className="mt-5 leading-relaxed text-white/80">
                  Nach der notariellen Übertragung bleibt das Dossier für einen
                  vereinbarten Zeitraum als Nachschlagewerk für den Kunden
                  verfügbar. Dazu gehören Eigentumsunterlagen, technische
                  Berichte, Versicherungsinformationen, praktische Kontaktdaten,
                  Garantie- oder Wartungsdokumente und wichtige nächste
                  Schritte.
                </p>

                <p className="mt-5 leading-relaxed text-white/70">
                  Danach werden Dokumente gemäß der Datenschutzrichtlinie, den
                  geltenden Aufbewahrungsfristen und etwaigen gesetzlichen
                  Verpflichtungen aufbewahrt, archiviert oder gelöscht. So
                  bleibt das Portal übersichtlich, sicher und zielgerichtet.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/de/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Planen Sie ein Kennenlernen
                </a>

                <a
                  href="/de/services/secure-client-portal"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Mehr über das Kundenportal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}