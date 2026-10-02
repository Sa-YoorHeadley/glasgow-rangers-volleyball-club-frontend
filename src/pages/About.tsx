import backgroundImage from "../assets/images/hero-bg.webp";
import { aboutContent } from "../content/aboutContent";
import { motion } from "framer-motion";
import Affiliations from "../components/Affiliations";
import ExecutiveSection from "../components/ExecutiveSection";
import { InlineIcon } from "@iconify/react";

function About() {
  return (
    <>
      <section className="h-screen relative flex flex-col items-center justify-center text-center gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden">
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

        {/* Tagline */}
        <p className="z-2 text-secondary rounded-full uppercase font-black bg-tertiary/30 backdrop-blur-sm px-4 py-1 text-sm tracking-wide">
          {aboutContent.hero.tagline}
        </p>

        {/* Hero Title */}
        <h1 className="max-w-2xl z-2 font-header text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral">
          {aboutContent.hero.title}
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-lg lg:max-w-3xl z-2 text-sm lg:text-lg text-neutral/70">
          {aboutContent.hero.subtitle}
        </p>
      </section>

      {/* More Info Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch gap-4 py-8 px-8 sm:px-12 lg:px-16">
        {aboutContent.moreInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`shadow-md flex flex-col gap-4 flex-1 max-w-sm rounded-xl p-6 border-t-6 border-primary/80 backdrop-blur-sm`}
          >
            <InlineIcon
              icon={info.icon}
              className={`text-4xl mb-4 p-2 rounded-full bg-primary text-neutral self-start`}
            />
            <h3 className="font-semibold text-2xl">{info.title}</h3>
            <p className="text-black/60 pr-8">{info.content}</p>
          </motion.div>
        ))}
      </section>

      {/* Executive Section */}
      <ExecutiveSection />

      {/* Affiliations Section */}
      <Affiliations />
    </>
  );
}

export default About;
