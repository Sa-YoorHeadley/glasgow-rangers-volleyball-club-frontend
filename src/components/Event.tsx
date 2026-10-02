import { motion } from "framer-motion";
import type { Event } from "../types/globals";
import { InlineIcon } from "@iconify/react";

export default function Event({
  title,
  subtitle,
  date,
  type,
  location,
}: Event) {
  const eventDateObj = new Date(date);
  const formattedDate = eventDateObj.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className={`flex flex-col items-start gap-4 rounded-2xl border-t-4 bg-primary/5 shadow-md hover:shadow-xl p-4 ${type === "Tournament" ? "border-secondary/80" : "border-primary/50"}`}
    >
      <div className="flex gap-2 flex-row items-center justify-between w-full">
        {/* Event type */}
        <p className="bg-primary/10 px-3 py-2 rounded-full uppercase text-xs text-primary">
          {type}
        </p>

        {/* Event date */}
        <time
          dateTime={eventDateObj.toISOString()}
          className="block text-xs text-black/60"
        >
          {formattedDate}
        </time>
      </div>

      {/* Event title */}
      <h3 className="text-2xl font-semibold max-w-xl">{title}</h3>
      {/* Event subtitle */}
      <p className="text-black/60">{subtitle}</p>

      <a
        href={location.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-bold text-primary hover:underline"
      >
        <InlineIcon icon="mdi:map-marker" className="inline-block mr-1" />
        {location.title}
      </a>
    </motion.article>
  );
}
