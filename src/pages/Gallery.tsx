import { motion } from "framer-motion";
import { galleryContent } from "../content/galleryContent";
import GalleryCard from "../components/GalleryCard";
import EmbedCard from "../components/EmbedCard";
import { useState } from "react";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Matches" | "Social" | "Fundraisers"
  >("All");
  return (
    <>
      <motion.section className="relative px-6 py-8 sm:px-12 lg:py-16 lg:px-16">
        {/* Title and Subtitle */}
        <div className="flex flex-col justify-center items-start gap-4 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary">
            {galleryContent.title}
          </h1>
          <p className="max-w-3xl text-sm lg:text-lg text-tertiary/70">
            {galleryContent.subtitle}
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            {galleryContent.categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === cat
                    ? "bg-tertiary text-neutral"
                    : "bg-tertiary/70 text-neutral"
                } hover:bg-tertiary/90 transition-colors duration-200`}
                aria-label={`Filter gallery by ${cat} category`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-8 mt-12">
          {galleryContent.media
            .filter((item) => {
              if (selectedCategory === "All") {
                return true;
              }
              return item.category === selectedCategory;
            })
            .sort(
              (a, b) =>
                (b.featuredHighlight ? 1 : 0) - (a.featuredHighlight ? 1 : 0) ||
                new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
            .map((item, index) => {
              if ("embedUrl" in item) {
                return <EmbedCard key={index} {...item} />;
              } else {
                return <GalleryCard key={index} {...item} />;
              }
            })}
        </div>
      </motion.section>
    </>
  );
}

export default Gallery;
