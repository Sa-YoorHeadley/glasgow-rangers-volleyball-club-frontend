import { motion } from "framer-motion";
import { trainingContent } from "../content/trainingContent";
import { InlineIcon } from "@iconify/react";
import Button from "../components/Button";

function Training() {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-6 py-8 sm:px-12 lg:py-16 lg:px-16">
        {/* Hero Section */}
        <section className="min-h-64 w-full lg:w-1/2 bg-tertiary text-neutral flex flex-col gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden rounded-t-xl backdrop-blur-sm shadow-md lg:rounded-tr-none lg:rounded-l-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest font-bold font-header text-secondary"
          >
            {trainingContent.hero.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-header"
          >
            {trainingContent.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-lg lg:max-w-3xl text-sm lg:text-lg text-neutral/70"
          >
            {trainingContent.hero.subtitle}
          </motion.p>

          {/* Sync to Calendar */}
          <Button
            title={trainingContent.hero.cta.title}
            url={trainingContent.hero.cta.url}
            textColor={trainingContent.hero.cta.textColor}
            backgroundColor={trainingContent.hero.cta.backgroundColor}
            otherStyles="justify-self-start mt-4 rounded-lg"
          />
        </section>

        {/* Calendar Section */}
        <section className="p-6 w-full lg:w-1/2 bg-tertiary lg:bg-neutral/50 backdrop-blur-sm shadow-md rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl">
          {/* Responsive iframe wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full h-full max-w-4xl mx-auto bg-tertiary rounded-xl lg:bg-neutral/50 shadow-md"
          >
            <iframe
              src={trainingContent.hero.calendarEmbedUrl}
              className="rounded-xl w-full h-full min-h-75"
              frameBorder="0"
              scrolling="no"
              title="Glasgow Rangers Volleyball Club Training Schedule"
            ></iframe>
          </motion.div>
        </section>
      </div>

      <section className="flex flex-col justify-center items-center gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32">
        <h2 className="text-3xl font-bold text-tertiary">
          {trainingContent.trainingScheduleSection.title}
        </h2>
        <p className="max-w-2xl text-center text-black/60">
          {trainingContent.trainingScheduleSection.description}
        </p>

        <div className="flex flex-wrap justify-center items-start gap-6 mt-8 w-full">
          {trainingContent.trainingScheduleSection.trainingSchedules.map(
            (schedule, index) => (
              <div
                key={index}
                className="w-sm bg-primary/5 p-4 border-t-4 border-primary rounded-lg shadow-md"
              >
                <h3 className=" flex items-center gap-2 text-xl font-bold text-tertiary">
                  <InlineIcon icon={schedule.icon} className="text-2xl" />
                  {schedule.title}
                </h3>
                <ul className="flex flex-col gap-2 my-4">
                  {schedule.times.map((time, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <p className="flex items-center justify-center text-center w-16 h-16 rounded-lg bg-primary text-neutral/70 font-semibold">
                        {time.day.slice(0, 3)}
                      </p>
                      <div className="">
                        <p className="text-black/80 font-semibold">
                          {time.time}
                        </p>
                        <a
                          href={time.location.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black/50 underline"
                        >
                          {time.location.name}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </section>
    </>
  );
}

export default Training;
