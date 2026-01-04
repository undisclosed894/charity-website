import { useState } from "react";
import { Play, X } from "lucide-react";

export default function Media() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Placeholder images for Bildergalerie
  const images = [
    "https://images.pexels.com/photos/6646849/pexels-photo-6646849.jpeg",
    "https://images.pexels.com/photos/6646768/pexels-photo-6646768.jpeg",
    "https://images.pexels.com/photos/6647050/pexels-photo-6647050.jpeg",
    "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
    "https://images.pexels.com/photos/6647002/pexels-photo-6647002.jpeg",
    "https://images.pexels.com/photos/12091690/pexels-photo-12091690.jpeg",
  ];

  // Videos for Videogalerie - Replace these embed URLs with your own videos
  const videos = [
    {
      thumbnail:
        "https://images.pexels.com/photos/8422250/pexels-photo-8422250.jpeg",
      embedUrl: "https://www.youtube.com/embed/RBQ-IoHfimQ", // Save the Children: Most Shocking Second a Day
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/6646987/pexels-photo-6646987.jpeg",
      embedUrl: "https://www.youtube.com/embed/RBQ-IoHfimQ", // Replace with your video embed URL
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/32881356/pexels-photo-32881356.jpeg",
      embedUrl: "https://www.youtube.com/embed/RBQ-IoHfimQ", // Replace with your video embed URL
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/6646768/pexels-photo-6646768.jpeg",
      embedUrl: "https://www.youtube.com/embed/RBQ-IoHfimQ", // Replace with your video embed URL
    },
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-charity-gold to-charity-gold-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-4">Media</h1>
          <p className="body-lg text-white/90">
            Einblicke in unsere Arbeit und Projekte
          </p>
        </div>
      </section>

      {/* Bildergalerie Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="heading-lg text-charity-dark mb-2">Bildergalerie</h2>
            <div className="w-20 h-1 bg-charity-gold"></div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Bild ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="py-8 bg-gradient-to-b from-white to-gray-50"></div>

      {/* Videogalerie Section */}
      <section className="pt-16 pb-48 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="heading-lg text-charity-dark mb-2">Videogalerie</h2>
            <div className="w-20 h-1 bg-charity-gold"></div>
          </div>

          {/* Video Grid - Larger 2 column layout */}
          <div className="grid md:grid-cols-2 gap-10">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => handleVideoClick(video)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-black">
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={`Video ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center group-hover:from-black/70 group-hover:via-black/40 transition-all duration-300">
                      <div className="w-24 h-24 bg-white/95 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-2xl">
                        <Play
                          className="w-12 h-12 text-charity-gold ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div className="relative w-full max-w-6xl">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-charity-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={selectedVideo.embedUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
