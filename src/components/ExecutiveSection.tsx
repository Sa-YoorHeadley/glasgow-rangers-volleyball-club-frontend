import { motion } from "framer-motion";
import { aboutContent } from "../content/aboutContent";
import Executive from "./Executive";

/**
 * ExecutiveSection displays a responsive grid of executive members.
 * - Accessible and responsive.
 * - Follows WCAG and industry best practices.
 */

function ExecutiveSection() {
  return (
    // Section groups the executive list for semantics and accessibility
    <section className="flex flex-col justify-center items-center relative px-6 py-8 gap-2 sm:px-12 lg:py-16 lg:px-32 bg-neutral text-black">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-fit text-center font-bold text-4xl text-tertiary/90"
      >
        {aboutContent.executives.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-fit text-center text-lg text-tertiary/70"
      >
        {aboutContent.executives.subtitle}
      </motion.p>

      {/* Responsive event grid, aria-live for screen reader updates */}
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="w-full flex flex-wrap items-start justify-center gap-8 py-8 px-8 sm:px-12 lg:px-16"
        aria-live="polite"
        id="executive-committee"
      >
        {aboutContent.executives.members.length !== 0
          ? aboutContent.executives.members.map((member) => (
              <Executive key={member.name} {...member} />
            ))
          : null}
      </motion.div>
    </section>
  );
}

export default ExecutiveSection;
