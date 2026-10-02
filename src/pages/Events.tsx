import { eventContent } from "../content/eventContent";
import EventSection from "../components/EventSection";

function Events() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center text-center gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden">
        {/* Hero Title */}
        <h1 className="max-w-2xl z-2 font-header text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary">
          {eventContent.title}
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-lg lg:max-w-3xl z-2 text-sm lg:text-lg text-tertiary/70">
          {eventContent.subtitle}
        </p>

        <EventSection />
      </section>
    </>
  );
}

export default Events;
