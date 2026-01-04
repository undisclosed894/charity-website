import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Mail, ExternalLink } from 'lucide-react'

export default function AktuelleProjekte() {
  const projects = [
    {
      title: 'Integrationslotsen',
      description: 'Unterstützung bei der Integration in die deutsche Gesellschaft durch persönliche Begleitung und Beratung.',
      type: 'flyer',
      flyerPath: '/flyers/Interkulturelle Integrationslotsen-Flyer Vereinshaus Nasira e. V..pdf',
      image: {
        url: 'https://pixabay.com/get/g57071cfba6d1565d3c365f123673b2facd2a8c07a6f9d2aef2f8140d77c71a8e266b4266acbfc26c0e5b30116ebc00e5.jpg',
        alt: 'hands-cohesion-together-people-support-help-community by cocoparisienne on Pixabay'
      }
    },
    {
      title: 'Gesundheitslotsen',
      description: 'Begleitung und Unterstützung bei der Navigation im deutschen Gesundheitssystem.',
      type: 'flyer',
      flyerPath: '/flyers/gesundheitslotsen.pdf',
      image: {
        url: 'https://images.pexels.com/photos/7653323/pexels-photo-7653323.jpeg',
        alt: 'A-mother-and-daughter-discuss-health-options-with-a-female-doctor by Pavel Danilyuk on Pexels'
      }
    },
    {
      title: 'Frauentreff International',
      description: 'Begegnungsraum für Frauen aus verschiedenen Kulturen zum Austausch und zur Vernetzung.',
      type: 'flyer',
      flyerPath: '/flyers/frauentreff-international.pdf',
      image: {
        url: 'https://images.pexels.com/photos/7951752/pexels-photo-7951752.jpeg',
        alt: 'A-diverse-group-of-women-standing-together by RDNE Stock project on Pexels'
      }
    },
    {
      title: 'Rechtsberatung',
      description: 'Professionelle rechtliche Beratung und Unterstützung in verschiedenen Rechtsfragen.',
      type: 'email',
      email: 'recht@vh-nasira.de',
      image: {
        url: 'https://images.pexels.com/photos/7876150/pexels-photo-7876150.jpeg',
        alt: 'A-serious-legal-consultation-in-a-professional-office by Karola G on Pexels'
      }
    },
    {
      title: 'Formularhilfe',
      description: 'Hilfe beim Ausfüllen von Formularen, Anträgen und behördlichen Dokumenten.',
      type: 'flyer',
      flyerPath: '/flyers/formularhilfe.pdf',
      image: {
        url: 'https://images.pexels.com/photos/7551637/pexels-photo-7551637.jpeg',
        alt: 'Young-man-helps-elderly-man-with-documents by Kampus Production on Pexels'
      }
    },
    {
      title: 'Unabhängige Migrations-, Asyl und Pflegeberatung',
      description: 'Umfassende Beratung zu Migrations-, Asyl- und Pflegefragen durch qualifizierte Fachkräfte.',
      type: 'flyer',
      flyerPath: '/flyers/migrations-asyl-pflegeberatung.pdf',
      image: {
        url: 'https://images.pexels.com/photos/7699526/pexels-photo-7699526.jpeg',
        alt: 'A-therapist-taking-notes-during-a-consultation by MART PRODUCTION on Pexels'
      }
    },
    {
      title: 'Mediationsangebote',
      description: 'Professionelle Vermittlung und Konfliktlösung in verschiedenen Lebensbereichen.',
      type: 'flyer',
      flyerPath: '/flyers/mediationsangebote.pdf',
      image: {
        url: 'https://images.pexels.com/photos/7579120/pexels-photo-7579120.jpeg',
        alt: 'Therapist-mediating-a-counseling-session-for-a-couple by Antoni Shkraba Studio on Pexels'
      }
    },
    {
      title: 'Beratungsstelle Diskriminierung und antimuslimischer Rassismus',
      description: 'Anlaufstelle für Betroffene von Diskriminierung mit Beratung und Unterstützung.',
      type: 'flyer',
      flyerPath: '/flyers/beratungsstelle-diskriminierung.pdf',
      image: {
        url: 'https://images.unsplash.com/photo-1741615331533-2360157c55aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxM3x8YW50aSUyMGRpc2NyaW1pbmF0aW9uJTIwYW50aSUyMHJhY2lzbSUyMHN1cHBvcnQlMjBjb3Vuc2VsaW5nJTIwc29saWRhcml0eSUyMGVxdWFsaXR5JTIwZGl2ZXJzaXR5JTIwZGl2ZXJzaXR5JTIwZXF1YWxpdHklMjBzdXBwb3J0JTIwc29saWRhcml0eXxlbnwwfDB8fHwxNzY3NTEwODgxfDA&ixlib=rb-4.1.0&q=85',
        alt: 'diverse-hands-bump-fists-in-solidarity by Arturo Añez on Unsplash'
      }
    },
    {
      title: 'Obdachlosenversorgung',
      description: 'Unterstützung und Versorgung von obdachlosen Menschen mit Lebensmitteln und Beratung.',
      type: 'flyer',
      flyerPath: '/flyers/obdachlosenversorgung.pdf',
      image: {
        url: 'https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg',
        alt: 'Group-of-volunteers-providing-food-and-aid by RDNE Stock project on Pexels'
      }
    }
  ]

  const handleViewFlyer = (project) => {
    if (project.type === 'email') {
      window.location.href = `mailto:${project.email}`
    } else {
      window.open(project.flyerPath, '_blank')
    }
  }

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-charity-gold to-charity-gold-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-4">Aktuelle Projekte</h1>
          <p className="body-lg text-white/90">
            Unsere laufenden Projekte zur Unterstützung und Integration in der Gemeinschaft
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Text */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="body-base text-gray-700">
              Entdecken Sie unsere vielfältigen Projekte, die Menschen in verschiedenen Lebensbereichen unterstützen. 
              Von Integration über Gesundheit bis hin zu rechtlicher Beratung – wir sind für Sie da.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-md"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image.url}
                    alt={project.image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="heading-sm text-charity-dark mb-3 line-clamp-2 min-h-[3.5rem]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Action Button */}
                  <div>
                    {project.type === 'email' ? (
                      <Button 
                        onClick={() => handleViewFlyer(project)}
                        className="w-full bg-charity-gold hover:bg-charity-gold-dark text-white"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Kontakt per E-Mail
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => handleViewFlyer(project)}
                        className="w-full bg-charity-gold hover:bg-charity-gold-dark text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Flyer ansehen
                      </Button>
                    )}
                  </div>

                  {/* Email display for email type */}
                  {project.type === 'email' && (
                    <p className="text-xs text-center text-charity-gray mt-3">
                      {project.email}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Info Card */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="border-charity-gold/30 bg-gradient-to-br from-white to-charity-gold/5 shadow-md">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-charity-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-charity-gold" />
                </div>
                <h3 className="heading-sm text-charity-dark mb-3">
                  Weitere Informationen benötigt?
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Für detaillierte Informationen zu unseren Projekten stehen wir Ihnen gerne zur Verfügung. 
                  Laden Sie die verfügbaren Flyer herunter oder kontaktieren Sie uns direkt.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <a 
                    href="mailto:info@vh-nasira.de" 
                    className="inline-flex items-center text-charity-gold hover:text-charity-gold-dark transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    info@vh-nasira.de
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