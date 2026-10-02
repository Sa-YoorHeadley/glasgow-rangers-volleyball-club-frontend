import { useState } from "react";
import type { MediaItem } from "../types/globals";
import Lightbox from "yet-another-react-lightbox";
import { InlineIcon } from "@iconify/react";
import { motion } from "framer-motion";
import Counter from "yet-another-react-lightbox/plugins/counter";

function GalleryCard({
  title,
  category,
  coverImage,
  featuredHighlight,
  images,
}: MediaItem) {
  const [isOpen, setIsOpen] = useState(false);

  function handleCardClick() {
    setIsOpen(true);
  }
  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={handleCardClick}
        className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer group ${featuredHighlight ? "col-span-3 md:col-span-2" : "col-span-3 md:col-span-1"}`}
        aria-label={`View media for ${title} in category ${category}`}
      >
        <img
          src={coverImage.url}
          alt={coverImage.alternativeText ?? title}
          className="h-120 w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-b-to-t from-tertiary/80 via-transparent to-transparent" />

        {featuredHighlight && (
          <p className="absolute bottom-16 left-3 uppercase text-xs font-black bg-secondary-dark text-neutral tracking-widest px-2 py-1 rounded-full">
            Featured Highlight
          </p>
        )}
        <h1
          className={`rounded-lg px-2 py-1 text-neutral absolute bottom-4 left-3 ${featuredHighlight ? "text-2xl" : "text-2xl md:text-lg "} font-semibold`}
        >
          {title}
        </h1>

        <span className="absolute top-3 right-3 flex items-center gap-1 text-xs font-semibold bg-tertiary/60 text-neutral backdrop-blur-sm px-2 py-1 rounded-full">
          <InlineIcon icon="mdi:image-multiple" />
          {images.length}
        </span>
      </motion.article>

      <Lightbox
        open={isOpen}
        plugins={[Counter]}
        counter={{
          container: { style: { top: "unset", bottom: 0, color: "white" } },
        }}
        close={() => setIsOpen(false)}
        slides={images.map((img) => ({
          src: img.url,
          alt: img.alternativeText ?? title,
        }))}
      />
    </>
  );
}

export default GalleryCard;
