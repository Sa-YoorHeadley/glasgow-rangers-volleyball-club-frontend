import { motion } from "framer-motion";
import type { ExecutiveMember } from "../types/globals";
import { InlineIcon } from "@iconify/react";

export default function Executive({
  name,
  role,
  emailAddress,
  phoneNumber,
}: ExecutiveMember) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      id={`executive-${name.toLowerCase().replace(/\s+/g, "-")}`}
      className="w-full sm:w-64 flex flex-col items-center gap-4 rounded-2xl text-center bg-primary/5 shadow-md hover:shadow-xl p-4 "
    >
      {/* Executive photo */}
      <div className="w-full h-48 bg-neutral/20 rounded-lg" aria-hidden="true">
        {/* Placeholder for executive photo */}
        <InlineIcon
          icon="mdi:account"
          className="w-full h-full text-tertiary/80"
        />
      </div>

      {/* Executive name */}
      <h3 className="font-semibold">{name}</h3>

      {/* Executive role */}
      <p className="text-black/60">{role}</p>

      {/* Executive contact information */}
      <div className="flex items-center gap-2">
        <a
          href={`mailto:${emailAddress}`}
          className="p-2 rounded-full bg-tertiary text-neutral border-2 border-neutral hover:border-primary hover:bg-neutral hover:text-tertiary transition-colors duration-200"
        >
          <InlineIcon icon="mdi:email" className="text-inherit text-lg" />
        </a>
        <a
          href={`tel:${phoneNumber}`}
          className="p-2 rounded-full bg-tertiary text-neutral border-2 border-neutral hover:border-primary hover:bg-neutral hover:text-tertiary transition-colors duration-200"
        >
          <InlineIcon icon="mdi:phone" className="text-inherit text-lg" />
        </a>
      </div>
    </motion.article>
  );
}
