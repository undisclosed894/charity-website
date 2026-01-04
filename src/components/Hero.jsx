import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero({ title, subtitle, description, image, primaryAction, secondaryAction }) {
  return (
    <section className="relative bg-gradient-to-r from-charity-blue to-charity-dark-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {subtitle && (
              <div className="inline-block px-4 py-1.5 bg-charity-green rounded-full text-sm font-medium">
                {subtitle}
              </div>
            )}
            <h1 className="heading-xl text-white">{title}</h1>
            {description && <p className="body-lg text-white/90">{description}</p>}
            
            <div className="flex flex-wrap gap-4 pt-4">
              {primaryAction && (
                <Button
                  size="lg"
                  className="bg-charity-green hover:bg-charity-green/90 text-white"
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.label}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              )}
              {secondaryAction && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </div>

          {image && (
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}