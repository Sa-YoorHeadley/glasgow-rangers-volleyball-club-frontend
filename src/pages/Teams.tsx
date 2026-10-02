import TeamSection from "../components/TeamSection";
import { teamContent } from "../content/teamContent";

function Teams() {
  return (
    <>
      <section className="h-full relative flex flex-col items-center justify-center text-center gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden">
        {/* Teams Title */}
        <h1 className="max-w-2xl z-2 font-header text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary">
          {teamContent.title}
        </h1>

        {/* Teams Subtitle */}
        <p className="max-w-lg lg:max-w-3xl z-2 text-sm lg:text-lg text-black/60">
          {teamContent.subtitle}
        </p>
      </section>

      {/* Team Section */}
      <TeamSection />
    </>
  );
}

export default Teams;
