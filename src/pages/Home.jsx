import saquibLogo from '@/assets/Logo Saquib u. Shaheen Consulting.jpg'
import freiwilligeLogo from '@/assets/logo-freiwillg-bgr.png'
import { Heart, Users, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-charity-gold to-charity-gold-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwdjJoLTYweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Heart className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="heading-xl mb-6">Vereinshaus Nasira (Die Helferin) e.V.</h1>
          
          <p className="body-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Eine interkulturelle, interreligiöse und internationale Initiative für die gesamte Gesellschaft
          </p>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-16 bg-white -mt-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-charity-gold/10 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-charity-gold/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-charity-gold" />
              </div>
              <h3 className="font-semibold text-charity-dark mb-2">Integration</h3>
              <p className="text-sm text-gray-600">Förderung von Integration und gesellschaftlicher Teilhabe</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-charity-gold/10 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-charity-gold/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-charity-gold" />
              </div>
              <h3 className="font-semibold text-charity-dark mb-2">Unterstützung</h3>
              <p className="text-sm text-gray-600">Hilfe für alle Menschen unabhängig von Herkunft</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-charity-gold/10 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-charity-gold/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-charity-gold" />
              </div>
              <h3 className="font-semibold text-charity-dark mb-2">Gemeinschaft</h3>
              <p className="text-sm text-gray-600">Brücke zu wichtigen Hilfsangeboten</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-charity-dark mb-4">Über Uns</h2>
            <div className="w-20 h-1 bg-charity-gold mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <p className="body-lg text-gray-700 leading-relaxed">
              Das „Vereinshaus Nasira (Die Helferin) e.V." steht als interkulturelle, interreligiöse und internationale Initiative, die sich für die gesamte Gesellschaft engagiert – unabhängig von Hautfarbe, Herkunft oder Nationalität. Unser Angebot richtet sich gleichermaßen an zugewanderte Menschen wie auch an in Deutschland geborene Bürgerinnen und Bürger. Unser Ziel ist es, einen Raum zu schaffen, in dem Unterstützung und Gemeinschaft für alle geboten wird. Als Brücke zu wichtigen Hilfsangeboten und als Ort des Zusammenhalts fördern wir aktiv Integration und gesellschaftliche Teilhabe.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-charity-dark mb-4">Zweck des Vereins</h2>
            <div className="w-20 h-1 bg-charity-gold mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <div className="space-y-6 body-base text-gray-700">
              <p className="font-semibold text-charity-dark">
                Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige und mildtätige Zwecke im Sinne des Abschnitts steuerbegünstigte Zwecke der Abgabenordnung (AO).
              </p>
              
              <p className="text-charity-dark font-medium">
                Der Zweck des Vereins ist gemäß § 52 Absatz 2 AO:
              </p>
              
              <ul className="space-y-4 ml-2">
                {[
                  'Förderung von Erziehung, Bildung, Jugend- und Altenhilfe.',
                  'Hilfe für Verfolgte, Flüchtlinge, Kriegsopfer und weitere Betroffene.',
                  'Stärkung von internationaler Gesinnung, Toleranz und Völkerverständigung.',
                  'Engagement des Schutzes von Ehe und Familie.',
                  'Unterstützung hilfsbedürftiger Personen (§ 53 AO).',
                  'Förderung bürgerschaftlichen Engagements und gemeinnütziger Zwecke.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-charity-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <p className="italic text-charity-dark">
                  Die Zwecke der Projekte dienen der Förderung der Hilfe zur Selbsthilfe.
                </p>
                
                <p className="font-medium text-charity-dark">
                  Zweck des Vereins ist die selbstlose Förderung der genannten Bereiche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-charity-dark mb-4">Unsere Unterstützer</h2>
            <div className="w-20 h-1 bg-charity-gold mx-auto mb-6"></div>
            <p className="text-gray-600">
              Mit dankbarer Unterstützung unserer Partner
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <p className="text-charity-dark font-medium text-sm mb-2">WIR</p>
              <p className="text-gray-600 text-xs">Hessisches Ministerium</p>
            </div>
            
            <div className="bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <img 
                src={saquibLogo} 
                alt="Saquib & Shaheen Consulting" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            <div className="bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <img 
                src={freiwilligeLogo} 
                alt="Freiwillige.Org" 
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}