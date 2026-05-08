import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function AktuelleProjekte() {
  const projects = [
    {
      title: "Formularhilfe",
      flyerUrl:
        "https://res.cloudinary.com/disaq3prz/image/upload/v1777296985/Flyer_Formularhilfe_tipgxi.jpg",
      image: {
        url: "https://res.cloudinary.com/disaq3prz/image/upload/v1777296985/Flyer_Formularhilfe_tipgxi.jpg",
        alt: "Flyer Formularhilfe",
      },
    },
    {
      title: "Frauentreff International",
      flyerUrl:
        "https://res.cloudinary.com/disaq3prz/image/upload/v1777296856/Flyer_Frauentreff_International_ltp6t9.jpg",
      image: {
        url: "https://res.cloudinary.com/disaq3prz/image/upload/v1777296856/Flyer_Frauentreff_International_ltp6t9.jpg",
        alt: "Flyer Frauentreff International",
      },
    },
    {
      title: "Rechtsberatung",
      flyerUrl:
        "https://res.cloudinary.com/disaq3prz/image/upload/v1777296848/Flyer_Rechtsberatung_c0cxxn.png",
      image: {
        url: "https://res.cloudinary.com/disaq3prz/image/upload/v1777296848/Flyer_Rechtsberatung_c0cxxn.png",
        alt: "Flyer Rechtsberatung",
      },
    },
    {
      title: "Lotsen Flyer Seite 1",
      flyerUrl:
        "https://res.cloudinary.com/disaq3prz/image/upload/Lotsen-Flyer_seite_1_ef2tya.pdf",
      image: {
        url: "https://res.cloudinary.com/disaq3prz/image/upload/Lotsen-Flyer_seite_1_ef2tya.jpg",
        alt: "Lotsen Flyer Seite 1",
      },
    },
    {
      title: "Lotsen Flyer Seite 2",
      flyerUrl:
        "https://res.cloudinary.com/disaq3prz/image/upload/Lotsen-Flyer_seite_2_vxital.pdf",
      image: {
        url: "https://res.cloudinary.com/disaq3prz/image/upload/Lotsen-Flyer_seite_2_vxital.jpg",
        alt: "Lotsen Flyer Seite 2",
      },
    },
  ];

  const handleViewFlyer = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-charity-gold to-charity-gold-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-4">Aktuelle Projekte</h1>
          <p className="body-lg text-white/90">
            Unsere laufenden Projekte zur Unterstützung und Integration in die
            Gesellschaft
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-md"
              >
                {/* Image Section */}
                <button
                  type="button"
                  onClick={() => handleViewFlyer(project.flyerUrl)}
                  className="relative h-56 w-full overflow-hidden cursor-pointer text-left"
                >
                  <img
                    src={project.image.url}
                    alt={project.image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="heading-sm text-charity-dark mb-3 line-clamp-2 min-h-[3.5rem]">
                    {project.title}
                  </h3>

                  {/* Action Button */}
                  <div>
                    <Button
                      onClick={() => handleViewFlyer(project.flyerUrl)}
                      className="w-full bg-charity-gold hover:bg-charity-gold-dark text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Flyer ansehen
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
