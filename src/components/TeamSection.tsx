import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { teamContent } from "../content/teamContent";

/**
 * TeamSection displays a responsive grid of upcoming teams.
 * - Accessible and responsive.
 * - Follows WCAG and industry best practices.
 */

function TeamSection() {
  return (
    // Section groups the team list for semantics and accessibility
    <section className="flex flex-col justify-start relative px-6 py-8 gap-8 sm:px-12 lg:py-16 lg:px-32 bg-neutral text-black">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-fit text-center font-bold text-3xl border-b-4 text-primary border-primary"
      >
        Our Teams
      </motion.h2>

      {/* Responsive team grid, aria-live for screen reader updates */}
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
        className="grid grid-cols-1 lg:grid-cols-8 align-top justify-items-stretch gap-8 px-8py-8"
        aria-live="polite"
      >
        {teamContent &&
          teamContent.teams.map((team) => (
            <TeamCard key={team.teamName} {...team} />
          ))}
      </motion.div>
    </section>
  );
}

export default TeamSection;
