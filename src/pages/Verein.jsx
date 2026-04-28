import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Download, Eye } from 'lucide-react'

export default function Verein() {
  const documents = [
    {
      title: 'Vorstand',
      description: 'Offizielles Dokument zum Vorstand des Vereins',
      filename: 'vorstand.pdf',
      viewOnly: true,
      viewUrl: 'https://res.cloudinary.com/disaq3prz/image/upload/1._Auszug_aus_dem_Handelsregister_ycnsql.pdf'
    },
    {
      title: 'Satzung',
      description: 'Vereinssatzung und Regelwerk',
      filename: 'satzung.pdf',
      viewOnly: true,
      viewUrl: 'https://res.cloudinary.com/disaq3prz/image/upload/2._Satzung_des_Vereins_Vereinshaus_Nasira_e._V._znffwg.pdf'
    },
    {
      title: 'Konzeption',
      description: 'Konzept und Ausrichtung des Vereins',
      filename: 'konzeption.pdf',
      viewOnly: true,
      viewUrl: 'https://res.cloudinary.com/disaq3prz/image/upload/3._Konzeption_Vereinshaus_Nasira_e._V._pzuslj.pdf'
    },
    {
      title: 'Beitrittserklärung',
      description: 'Formular für die Mitgliedschaft',
      filename: 'beitrittserklaerung.pdf',
      downloadUrl: 'https://res.cloudinary.com/disaq3prz/image/upload/4._Mitgliedschaftsvereinbarung_Vereinshaus_Nasira_e._V._ovqhbj.pdf'
    },
    {
      title: 'Spendenkonto',
      description: 'Kontoinformationen für Spenden',
      filename: 'spendenkonto.pdf',
      downloadUrl: 'https://res.cloudinary.com/disaq3prz/image/upload/5._Spendenkonto_Vereinshaus_Nasira_e._V._y8ww2u.pdf'
    },
    {
      title: 'Datenschutzvereinbarung',
      description: 'Datenschutzerklärung und Vereinbarungen',
      filename: 'datenschutz.pdf',
      downloadUrl: 'https://res.cloudinary.com/disaq3prz/image/upload/6._Datenschutzklausel_Vereinshaus_Nasira_e._V._esibqj.pdf'
    }
  ]

  const handleDocumentAction = (doc) => {
    if (doc.viewOnly) {
      if (doc.viewUrl) {
        window.open(doc.viewUrl, '_blank', 'noopener,noreferrer')
      }
      return
    }

    if (doc.downloadUrl) {
      const link = document.createElement('a')
      link.href = doc.downloadUrl
      link.download = doc.filename
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
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
                    onClick={() => handleDocumentAction(doc)}
                    className="w-full bg-charity-gold hover:bg-charity-gold-dark text-white"
                  >
                    {doc.viewOnly ? (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        Ansehen
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Dokument herunterladen
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}