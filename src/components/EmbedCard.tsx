import { motion } from "framer-motion";

function EmbedCard({
  title,
  category,
  embedUrl,
}: {
  title: string;
  category: string;
  embedUrl: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group col-span-3 md:col-span-1"
      aria-label={`View embedded media for ${title} in category ${category}`}
    >
      <div className="relative w-full h-110 bg-tertiary rounded-lg overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Title overlay - positioned outside/below iframe */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="px-4 py-3 bg-neutral mt-2 rounded-lg text-center"
      >
        <p className="text-tertiary font-bold text-sm">{title}</p>
      </motion.div>
    </motion.article>
  );
}

export default EmbedCard;
