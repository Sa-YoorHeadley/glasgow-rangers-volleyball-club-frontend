import { motion } from "framer-motion";
import Event from "./Event";
import { eventContent } from "../content/eventContent";
import type { Event as EventType } from "../types/globals";

/**
 * EventSection displays a responsive grid of upcoming events.
 * - Accessible and responsive.
 * - Follows WCAG and industry best practices.
 */

const upcomingEvents: EventType[] = eventContent.events.filter(
  (event) => new Date(event.date) >= new Date(),
);
function EventSection() {
  return (
    // Section groups the event list for semantics and accessibility
    <section className="flex flex-col justify-start relative px-6 py-8 gap-8 sm:px-12 lg:py-16 lg:px-32 bg-neutral text-black">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-fit text-center font-bold text-3xl border-b-4 text-primary border-primary"
      >
        Upcoming Events
      </motion.h2>

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
        className="grid grid-cols-1 lg:grid-cols-2 align-top justify-items-center md:justify-items-stretch gap-8 px-8py-8"
        aria-live="polite"
      >
        {upcomingEvents.length !== 0 ? (
          upcomingEvents
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
            )
            .map((event) => <Event key={event.title} {...event} />)
        ) : (
          <h3 className="w-full text-center text-2xl p-16">
            There are no upcoming events
          </h3>
        )}
      </motion.div>
    </section>
  );
}

export default EventSection;
