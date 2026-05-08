import { Card } from "@/components/ui/card";

export default function GeplanteProjekte() {
  const flyerUrl =
    "https://res.cloudinary.com/disaq3prz/image/upload/v1777301509/Vereins-Flyer_Vereinshaus_Nasira_e._V._2_bnttum.png";

  const handleViewFlyer = () => {
    window.open(flyerUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-charity-gold to-charity-gold-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-4">Geplante Projekte</h1>
          <p className="body-lg text-white/90">
            Unsere Vision für die Zukunft – kommende Initiativen zur
            Unterstützung der Gesellschaft
          </p>
        </div>
      </section>

      {/* Flyer Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-charity-gold/25 bg-white shadow-lg overflow-hidden">
            <button
              type="button"
              onClick={handleViewFlyer}
              className="block w-full cursor-pointer"
            >
              <img
                src={flyerUrl}
                alt="Flyer Geplante Angebote"
                className="w-full h-auto"
              />
            </button>
          </Card>
        </div>
      </section>
    </div>
  );
}
