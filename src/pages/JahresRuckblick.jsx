import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, ExternalLink } from 'lucide-react'

export default function JahresRuckblick() {
  const handleViewPresentation = () => {
    window.open('/flyers/jahres-ruckblick-2025.pdf', '_blank')
  }

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-charity-gold to-charity-gold-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-4">Jahres Rückblick</h1>
          <p className="body-lg text-white/90">
            Unser Jahresrückblick 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Presentation Card */}
          <Card className="border-charity-gold/30 bg-gradient-to-br from-white to-charity-gold/5 shadow-lg overflow-hidden">
            <div className="p-12 text-center">
              <div className="w-24 h-24 bg-charity-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-charity-gold" />
              </div>
              
              <h2 className="heading-lg text-charity-dark mb-4">
                2025 Präsentation
              </h2>
              
              <p className="body-base text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                Entdecken Sie unsere Arbeit und Erfolge des Jahres 2025 in unserer ausführlichen Präsentation.
              </p>

              <Button 
                onClick={handleViewPresentation}
                className="bg-charity-gold hover:bg-charity-gold-dark text-white px-8 py-6 text-base"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Präsentation ansehen
              </Button>
            </div>
          </Card>

          {/* Contact Info Card */}
          <div className="mt-12">
            <Card className="border-charity-gold/20 bg-white shadow-md">
              <div className="p-8 text-center">
                <h3 className="heading-sm text-charity-dark mb-3">
                  Fragen zum Jahresrückblick?
                </h3>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  Für weitere Informationen oder Rückfragen zu unserem Jahresrückblick 2025 
                  kontaktieren Sie uns gerne.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a 
                    href="mailto:info@vh-nasira.de" 
                    className="inline-flex items-center text-charity-gold hover:text-charity-gold-dark transition-colors font-medium"
                  >
                    📧 info@vh-nasira.de
                  </a>
                  <span className="text-gray-300">|</span>
                  <a 
                    href="tel:015752053347" 
                    className="inline-flex items-center text-charity-gold hover:text-charity-gold-dark transition-colors font-medium"
                  >
                    📞 015752053347
                  </a>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </section>
    </div>
  )
}