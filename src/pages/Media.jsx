import { useState, useEffect, useCallback, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera, CalendarDays, FileText, Download, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Data ───────────────────────────────────────────────────────────────────────
// Each category has `images` (string[]) and optional `videos` (string[]) and `documents`.
// To add a year: push to MEDIA_DATA. To add a category: push to year's `categories`.
const MEDIA_DATA = [
  {
    year: "2025",
    categories: [
      {
        id: "media-2025-1",
        title: "Media 2025/1",
        images: [
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777302274/1_hkcsap.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777302280/2_xix9mv.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777302299/3_bmtne4.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777302433/4_1_rgofnu.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777302341/5_ie7gnr.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777302445/6_1_dtqjms.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777302461/7_vd0xte.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777302485/8_gx13hd.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777302501/10_oazkws.jpg",
        ],
      },
      {
        id: "lotsenehrung",
        title: "Lotsenehrung",
        images: [
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777303622/6_2_iiyuze.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777303648/3_1_uqfspf.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777303664/2_1_m7k3en.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777303692/4_2_kq97ts.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777303784/5_1_jcufyl.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777303818/7_gh1nhr.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777303892/Lotsenehrung_1_whtbww.jpg",
        ],
      },
      {
        id: "sommerfest",
        title: "Sommerfest",
        images: [
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306075/Bild_1_lmmlyu.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306090/Bilde_2_kcy1hm.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306110/Bild_3_q93v7r.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306155/Bild_4_wocqlf.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306171/Bild_5_rvrlvs.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306179/Bild_6_vbkbcj.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306204/Bilde_7_on4a8x.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306209/Bilde_8_sgxowm.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306218/Bild_9_jv3r78.jpg",
        ],
      },
      {
        id: "talentmesse",
        title: "Talentmesse",
        images: [
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306683/Bild_1_1_pdjumf.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306873/Bild_2_dttyly.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306821/Bild_3_1_pdagoe.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306792/Bild_4_1_ohovac.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306728/Bild_5_1_n2shko.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306770/Bild_6_1_bdydeb.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777306891/Bild_7_rmcsm6.jpg",
        ],
      },
      {
        id: "vernetzungstreffen",
        title: "Vernetzungstreffen Lotsenprojekt",
        images: [
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777307058/Wiesbaden_Vernetzungstreffen_1_pixlel.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777307070/Wiesbaden_Vernetzungstreffen_2_vkngbh.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777307083/Wiesbaden_Vernetzungstreffen_3_qitwkn.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777307099/Wiesbaden_Vernetzungstreffen_IL_kioiyx.jpg",
        ],
        documents: [
          {
            url: "https://res.cloudinary.com/disaq3prz/image/upload/Lebhafter_Austausch_der_WIR_Wiesbaden_ffxqif.pdf",
            name: "Lebhafter Austausch der WIR Wiesbaden",
            type: "pdf",
          },
        ],
      },
      {
        id: "post-migrantische-selbstorganisationen",
        title: "Vernetzungstreffen der Post-Migrantischen Selbstorganisationen",
        images: [
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777315243/Bild_mit_Fr._Hoffmann_nqr1vp.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777315255/Vernethzungstreffen_der_Post-_migrantischen_Selbstorganisationen_2025_am_22.11.25_vsmrtg.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777315265/Vernetzungstreffen_der_post-_mitgrantischen_Selbstorganisationen_22.11.25_1_rig04m.jpg",
        ],
        documents: [
          {
            url: "https://res.cloudinary.com/disaq3prz/image/upload/Vernetzungstreffen_der_post-_mitgrantischen_Selbstorganisationen_22.11.25_qkjdnz.pdf",
            name: "Vernetzungstreffen der Post-Migrantischen Selbstorganisationen 22.11.25",
            type: "pdf",
          },
        ],
      },
      {
        id: "gruendungstreffen-damoh",
        title: "Gründungstreffen DaMoh",
        images: [
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777315702/DaMOH_1_nakeio.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777315761/DaMOH_2_aa2sku.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777315845/DaMOH_3_cxdpci.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777315876/DaMOH_4_wdkztd.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777315884/DaMOH_5_yenavs.jpg",
        ],
      },
      {
        id: "internationale-unterstuetzung-benin",
        title: "Internationale Unterstützung Benin",
        images: [
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777316084/Augen_OP_e1vhvy.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777316095/Wasserpumpe_dp0gzx.jpg",
        ],
      },
      {
        id: "abschlussfeier-2025",
        title: "Abschlussfeier 2025",
        images: [
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777316477/1_yrlwck.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777316483/2_vv5nik.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777316491/3_ircshn.jpg",
          "https://res.cloudinary.com/disaq3prz/image/upload/v1777316498/4_fnvba4.jpg",
        ],
        videos: [
          "https://res.cloudinary.com/disaq3prz/video/upload/v1777316526/Video_qy6n7h.mp4",
        ],
      },
    ],
    upcoming: [],
  },
];

const ALL_FILTER = "all";

// ── Helpers ────────────────────────────────────────────────────────────────────
// Build a Cloudinary video thumbnail URL from an mp4 URL
function videoThumbUrl(src) {
  return src.replace("/video/upload/", "/video/upload/").replace(/\.mp4$/, ".jpg");
}

// Merge images + videos into a unified items array
function getCategoryItems(cat) {
  return [
    ...(cat.images ?? []).map((src) => ({ src, type: "image" })),
    ...(cat.videos ?? []).map((src) => ({ src, type: "video" })),
  ];
}

// ── Lightbox ───────────────────────────────────────────────────────────────────
function Lightbox({ items, initialIndex, categoryTitle, open, onOpenChange }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const thumbStripRef = useRef(null);
  const activeThumbRef = useRef(null);

  useEffect(() => {
    if (open) setCurrentIndex(initialIndex);
  }, [initialIndex, open]);

  useEffect(() => {
    if (activeThumbRef.current) {
      activeThumbRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, goNext, goPrev]);

  if (!items.length) return null;

  const current = items[currentIndex];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/92 backdrop-blur-xs z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200" />
        <Dialog.Content
          className="fixed inset-0 z-50 flex flex-col items-center justify-center focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">
            {categoryTitle} – {currentIndex + 1} von {items.length}
          </Dialog.Title>

          {/* ── Top bar ── */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 bg-gradient-to-b from-black/70 to-transparent z-10">
            <div className="flex items-center gap-3">
              <Camera className="w-4 h-4 text-white/60" />
              <span className="text-white font-semibold text-sm tracking-wide">{categoryTitle}</span>
              <span className="text-white/50 text-xs">{currentIndex + 1} / {items.length}</span>
            </div>
            <Dialog.Close asChild>
              <button
                className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* ── Main media ── */}
          <div className="relative w-full flex-1 flex items-center justify-center px-16 py-16">
            {current.type === "video" ? (
              <video
                key={currentIndex}
                src={current.src}
                controls
                autoPlay
                className="max-w-full max-h-[72vh] rounded-lg shadow-2xl"
              />
            ) : (
              <img
                key={currentIndex}
                src={current.src}
                alt={`${categoryTitle} Bild ${currentIndex + 1}`}
                className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl select-none"
                draggable={false}
              />
            )}
          </div>

          {/* ── Prev / Next arrows ── */}
          {items.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors backdrop-blur-xs"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors backdrop-blur-xs"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* ── Thumbnail strip ── */}
          {items.length > 1 && (
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-12 bg-gradient-to-t from-black/70 to-transparent">
              <div
                ref={thumbStripRef}
                className="flex gap-1.5 overflow-x-auto scrollbar-hidden justify-start sm:justify-center"
              >
                {items.map((item, i) => (
                  <button
                    key={i}
                    ref={i === currentIndex ? activeThumbRef : null}
                    onClick={() => setCurrentIndex(i)}
                    className={cn(
                      "flex-shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-all duration-200 relative",
                      i === currentIndex
                        ? "border-charity-gold opacity-100 scale-105"
                        : "border-transparent opacity-40 hover:opacity-70"
                    )}
                    aria-label={`${item.type === "video" ? "Video" : "Bild"} ${i + 1}`}
                  >
                    <img
                      src={item.type === "video" ? videoThumbUrl(item.src) : item.src}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play className="w-3 h-3 text-white fill-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// ── Category Filter Pill ────────────────────────────────────────────────────────
function FilterPill({ active, onClick, label, count }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charity-gold/50",
        active
          ? "bg-charity-gold text-white shadow-sm"
          : "bg-white text-charity-dark border border-gray-200 hover:border-charity-gold/50 hover:text-charity-gold hover:bg-charity-gold/5"
      )}
    >
      {label}
      <span
        className={cn(
          "inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-xs font-bold leading-none",
          active ? "bg-white/25 text-white" : "bg-gray-100 text-charity-gray"
        )}
      >
        {count}
      </span>
    </button>
  );
}

// ── Gallery Grid ───────────────────────────────────────────────────────────────
function GalleryGrid({ items, categoryTitle, onItemClick }) {
  if (!items.length) return null;
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
      {items.map((item, index) => (
        <div
          key={item.src + index}
          className="mb-4 break-inside-avoid group relative overflow-hidden rounded-xl border border-charity-gold/10 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
          onClick={() => onItemClick(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onItemClick(index)}
          aria-label={`${categoryTitle} ${item.type === "video" ? "Video" : "Bild"} ${index + 1} öffnen`}
        >
          <img
            src={item.type === "video" ? videoThumbUrl(item.src) : item.src}
            alt={`${categoryTitle} ${item.type === "video" ? "Video" : "Bild"} ${index + 1}`}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {/* Video badge */}
          {item.type === "video" && (
            <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Play className="w-3 h-3 fill-white" />
              Video
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/15 backdrop-blur-xs rounded-full p-3">
              {item.type === "video"
                ? <Play className="w-6 h-6 text-white fill-white" />
                : <ZoomIn className="w-6 h-6 text-white" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Document Card ─────────────────────────────────────────────────────────────
function DocumentCard({ doc, categoryLabel }) {
  return (
    <a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 bg-white rounded-xl border border-charity-gold/15 px-5 py-4 shadow-sm hover:shadow-md hover:border-charity-gold/40 transition-all duration-200"
    >
      <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
        <FileText className="w-5 h-5 text-red-500" />
      </div>
      <div className="flex-1 min-w-0">
        {categoryLabel && (
          <span className="text-xs text-charity-gray font-medium uppercase tracking-wide block mb-0.5">
            {categoryLabel}
          </span>
        )}
        <p className="text-sm font-semibold text-charity-dark truncate">{doc.name}</p>
        <p className="text-xs text-charity-gray mt-0.5">PDF Dokument</p>
      </div>
      <div className="flex-shrink-0 p-2 rounded-lg bg-gray-50 group-hover:bg-charity-gold/10 transition-colors">
        <Download className="w-4 h-4 text-charity-gray group-hover:text-charity-gold transition-colors" />
      </div>
    </a>
  );
}

// ── Upcoming Event Card ────────────────────────────────────────────────────────
function UpcomingCard({ title, description }) {
  return (
    <div className="bg-white rounded-xl border-2 border-dashed border-charity-gold/25 p-5 flex items-start gap-4 hover:border-charity-gold/40 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-charity-gold/10 flex items-center justify-center flex-shrink-0">
        <CalendarDays className="w-5 h-5 text-charity-gold" />
      </div>
      <div>
        <div className="font-semibold text-charity-dark mb-0.5">{title}</div>
        <div className="text-sm text-charity-gray mb-3">{description}</div>
        <span className="inline-flex items-center gap-1.5 text-xs text-charity-gold font-semibold bg-charity-gold/10 px-2.5 py-1 rounded-full">
          Demnächst
        </span>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function Media() {
  const years = MEDIA_DATA.map((d) => d.year);
  const [activeYear, setActiveYear] = useState(years[0]);
  const [activeCategory, setActiveCategory] = useState(ALL_FILTER);
  const [lightbox, setLightbox] = useState({
    open: false,
    items: [],
    index: 0,
    title: "",
  });

  const yearData = MEDIA_DATA.find((d) => d.year === activeYear);
  const categories = yearData?.categories ?? [];
  const upcoming = yearData?.upcoming ?? [];

  // Unified media items per category
  const allItems = categories.flatMap(getCategoryItems);
  const totalCount = allItems.length;

  const displayedItems =
    activeCategory === ALL_FILTER
      ? allItems
      : getCategoryItems(categories.find((c) => c.id === activeCategory) ?? { images: [], videos: [] });

  // Documents to show below gallery
  const displayedDocuments =
    activeCategory === ALL_FILTER
      ? categories.flatMap((c) =>
          (c.documents ?? []).map((doc) => ({ ...doc, categoryLabel: c.title }))
        )
      : (categories.find((c) => c.id === activeCategory)?.documents ?? []).map(
          (doc) => ({ ...doc, categoryLabel: null })
        );

  const activeCategoryTitle =
    activeCategory === ALL_FILTER
      ? `Media ${activeYear}`
      : categories.find((c) => c.id === activeCategory)?.title ?? "";

  const openLightbox = (index) => {
    setLightbox({ open: true, items: displayedItems, index, title: activeCategoryTitle });
  };

  const handleYearChange = (year) => {
    setActiveYear(year);
    setActiveCategory(ALL_FILTER);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* ── Header ── */}
      <section className="py-16 bg-gradient-to-r from-charity-gold to-charity-gold-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-3">Media</h1>
          <p className="body-lg text-white/85">
            Einblicke in unsere Arbeit und Projekte
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-14 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Year Selector – only if multiple years */}
          {years.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200",
                    year === activeYear
                      ? "bg-charity-gold text-white border-charity-gold shadow-sm"
                      : "bg-white text-charity-dark border-gray-200 hover:border-charity-gold/50 hover:text-charity-gold"
                  )}
                >
                  {year}
                </button>
              ))}
            </div>
          )}

          {/* Category filter */}
          {categories.length > 0 && (
            <div className="mb-10 rounded-2xl border border-gray-100 bg-white shadow-xs px-4 py-4 sm:px-5">
              {/* Mobile: horizontal scroll — Desktop: wrap */}
              <div className="flex gap-2 overflow-x-auto scrollbar-hidden sm:flex-wrap">
                <FilterPill
                  active={activeCategory === ALL_FILTER}
                  onClick={() => setActiveCategory(ALL_FILTER)}
                  label="Alle"
                  count={totalCount}
                />
                {categories.map((cat) => (
                  <FilterPill
                    key={cat.id}
                    active={activeCategory === cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    label={cat.title}
                    count={getCategoryItems(cat).length}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {displayedItems.length > 0 ? (
            <GalleryGrid
              items={displayedItems}
              categoryTitle={activeCategoryTitle}
              onItemClick={openLightbox}
            />
          ) : (
            <div className="text-center py-20 text-charity-gray">
              <Camera className="w-12 h-12 mx-auto mb-3 opacity-25" />
              <p className="text-sm">Keine Beiträge vorhanden.</p>
            </div>
          )}

          {/* Documents */}
          {displayedDocuments.length > 0 && (
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-4 h-4 text-charity-gold" />
                <h4 className="text-sm font-semibold text-charity-dark uppercase tracking-wide">
                  Dokumente
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {displayedDocuments.map((doc, i) => (
                  <DocumentCard key={i} doc={doc} categoryLabel={doc.categoryLabel} />
                ))}
              </div>
            </div>
          )}

          {/* Upcoming events */}
          {upcoming.length > 0 && (
            <div className="mt-20">
              <div className="mb-6">
                <h3 className="heading-sm text-charity-dark mb-2">
                  Weitere Events folgen in Kürze
                </h3>
                <div className="w-12 h-0.5 bg-charity-gold/40 rounded-full" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcoming.map((event) => (
                  <UpcomingCard
                    key={event.title}
                    title={event.title}
                    description={event.description}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      <Lightbox
        items={lightbox.items}
        initialIndex={lightbox.index}
        categoryTitle={lightbox.title}
        open={lightbox.open}
        onOpenChange={(open) => setLightbox((prev) => ({ ...prev, open }))}
      />
    </div>
  );
}
