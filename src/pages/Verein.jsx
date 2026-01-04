import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Download, FileCheck } from 'lucide-react'

export default function Verein() {
  const documents = [
    {
      title: 'Vorstand',
      description: 'Offizielles Dokument zum Vorstand des Vereins',
      filename: 'vorstand.pdf'
    },
    {
      title: 'Satzung',
      description: 'Vereinssatzung und Regelwerk',
      filename: 'satzung.pdf'
    },
    {
      title: 'Konzeption',
      description: 'Konzept und Ausrichtung des Vereins',
      filename: 'konzeption.pdf'
    },
    {
      title: 'Beitrittserklärung',
      description: 'Formular für die Mitgliedschaft',
      filename: 'beitrittserklaerung.pdf'
    },
    {
      title: 'Spendenkonto',
      description: 'Kontoinformationen für Spenden',
      filename: 'spendenkonto.pdf'
    },
    {
      title: 'Datenschutzvereinbarung',
      description: 'Datenschutzerklärung und Vereinbarungen',
      filename: 'datenschutz.pdf'
    }
  ]

  const handleDownload = (filename) => {
    // Placeholder for PDF download
    alert(`PDF "${filename}" wird bereitgestellt. Bitte laden Sie die Datei hoch.`)
  }

  return (
    <div className="bg-white">
      {/* Page Header - Centered */}
      <section className="py-16 bg-gradient-to-r from-charity-gold to-charity-gold-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-4">Verein</h1>
          <p className="body-lg text-white/90">
            Offizielle Dokumente und Informationen zur Organisation unseres Vereins
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-charity-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-charity-gold" />
                      </div>
                      <div>
                        <CardTitle className="text-charity-dark">{doc.title}</CardTitle>
                        <p className="text-sm text-charity-gray mt-1">{doc.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => handleDownload(doc.filename)}
                    className="w-full bg-charity-gold hover:bg-charity-gold-dark text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Dokument herunterladen
                  </Button>
                  <p className="text-xs text-charity-gray mt-2 text-center">
                    PDF-Datei: {doc.filename}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Card */}
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="border-charity-gold/20 bg-white">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-charity-gray">
                  <strong className="text-charity-dark">Hinweis:</strong> Alle Dokumente stehen als PDF zum Download bereit. Bei Fragen wenden Sie sich bitte an{' '}
                  <a 
                    href="mailto:info@vh-nasira.de" 
                    className="text-charity-gold hover:text-charity-gold-dark transition-colors"
                  >
                    info@vh-nasira.de
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}