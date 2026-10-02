import Logo from "../components/Logo";
import backgroundImage from "../assets/images/hero-bg.webp";
import { homeContent } from "../content/homeContent";
import { motion } from "framer-motion";
import Button from "../components/Button";
import EventSection from "../components/EventSection";
import TeamSection from "../components/TeamSection";
import Affiliations from "../components/Affiliations";

function Home() {
  return (
    <>
      <section className="h-full relative flex flex-col items-center justify-center text-center gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 z-1 bg-tertiary/70" />

        {/* Background Image */}
        <motion.img
          src={backgroundImage}
          alt=""
          fetchPriority="high"
          aria-hidden="true"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 w-full h-full object-cover object-center"
        />

        <div className="z-2 w-40 h-40">
          <Logo />
        </div>

        {/* Tagline */}
        <p className="z-2 text-secondary rounded-full uppercase font-black bg-tertiary/30 backdrop-blur-sm px-4 py-1 text-sm tracking-wide">
          {homeContent.hero.tagline}
        </p>

        {/* Hero Title */}
        <h1 className="max-w-2xl z-2 font-header text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral">
          {homeContent.hero.title}
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-lg lg:max-w-3xl z-2 text-sm lg:text-lg text-neutral/70">
          {homeContent.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 z-2">
          {/* Primary CTA */}
          <Button
            title={homeContent.hero.primaryCta.title}
            url={homeContent.hero.primaryCta.url}
            backgroundColor={homeContent.hero.primaryCta.backgroundColor}
            textColor={homeContent.hero.primaryCta.textColor}
            otherStyles="rounded-lg px-8 py-4"
          />
          {/* Secondary CTA */}
          <Button
            title={homeContent.hero.secondaryCta.title}
            url={homeContent.hero.secondaryCta.url}
            backgroundColor={homeContent.hero.secondaryCta.backgroundColor}
            textColor={homeContent.hero.secondaryCta.textColor}
            otherStyles="rounded-lg px-8 py-4 border-2 border-neutral/50 hover:border-neutral transition-colors duration-200"
          />
        </div>
      </section>

      {/* Event Section */}
      <EventSection />

      {/* Team Section */}
      <TeamSection />

      {/* Affiliations Section */}
      <Affiliations />
    </>
  );
}

export default Home;
