import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Phone } from "lucide-react";

const PDF_URL =
  "https://res.cloudinary.com/disaq3prz/image/upload/v1778224888/Pra%CC%88sentation_Finale_Vereinshaus_Nasira_e._V._ylt7a6.pdf";

export default function JahresRuckblick() {
  return (
    <div className="bg-background min-h-screen">
      {/* ── Header ── */}
      <section className="py-16 bg-gradient-to-r from-charity-gold to-charity-gold-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-3">Jahres Rückblick</h1>
          <p className="body-lg text-white/85">
            Vereinshaus Nasira e.V. – Präsentation 2025
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-14 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Action bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-charity-dark">
                Präsentation 2025
              </h2>
              <p className="text-sm text-charity-gray mt-0.5">
                Vereinshaus Nasira e.V. – Jahresrückblick
              </p>
            </div>
            <div className="flex gap-3">
              <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-charity-gold/40 text-charity-dark hover:bg-charity-gold/5 hover:border-charity-gold hover:text-charity-dark gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Öffnen
                </Button>
              </a>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="rounded-2xl overflow-hidden border border-charity-gold/15 shadow-xl bg-white">
            {/* Viewer top bar */}
            <div className="bg-gradient-to-r from-charity-gold/8 to-charity-gold/4 border-b border-charity-gold/15 px-5 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-gray-200" />
                <span className="w-3 h-3 rounded-full bg-gray-200" />
                <span className="w-3 h-3 rounded-full bg-gray-200" />
              </div>
              <span className="text-xs text-charity-gray ml-2 truncate">
                Präsentation_Vereinshaus_Nasira_e._V..pdf
              </span>
            </div>

            {/* iframe */}
            <iframe
              src={PDF_URL}
              title="Jahresrückblick 2025 – Vereinshaus Nasira e.V."
              className="w-full"
              style={{ height: "780px", border: "none" }}
            />

            {/* Fallback bar (shown when iframe can't display) */}
            <noscript>
              <div className="p-6 text-center text-charity-gray text-sm">
                Ihr Browser unterstützt keine eingebetteten PDFs.{" "}
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charity-gold underline"
                >
                  Hier öffnen
                </a>
              </div>
            </noscript>
          </div>

          {/* Mobile fallback note */}
          <p className="text-xs text-charity-gray text-center mt-3">
            Falls die Vorschau nicht geladen wird,{" "}
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charity-gold underline underline-offset-2"
            >
              hier direkt öffnen
            </a>
            .
          </p>

          {/* ── Contact Card ── */}
          <div className="mt-14 bg-white rounded-2xl border border-charity-gold/15 shadow-sm p-8">
            <div className="text-center max-w-lg mx-auto">
              <h3 className="heading-sm text-charity-dark mb-2">
                Fragen zum Jahresrückblick?
              </h3>
              <p className="text-sm text-charity-gray mb-7">
                Für weitere Informationen oder Rückfragen zu unserer
                Präsentation stehen wir Ihnen gerne zur Verfügung.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:info@vh-nasira.de"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charity-gold/8 text-charity-dark hover:bg-charity-gold/15 transition-colors text-sm font-medium"
                >
                  <Mail className="w-4 h-4 text-charity-gold" />
                  info@vh-nasira.de
                </a>
                <a
                  href="tel:015752053347"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charity-gold/8 text-charity-dark hover:bg-charity-gold/15 transition-colors text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-charity-gold" />
                  015752053347
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
