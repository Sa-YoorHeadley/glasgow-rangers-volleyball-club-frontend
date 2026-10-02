import { InlineIcon } from "@iconify/react";
import { registrationContent } from "../content/registrationContent";
import { motion } from "framer-motion";

function Registration() {
  return (
    <>
      <motion.section
        className="flex flex-col gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Tagline */}
        <p className="text-secondary-dark uppercase font-black tracking-wider">
          {registrationContent.tagline}
        </p>

        {/* Hero Title */}
        <h1 className="text-5xl font-black text-tertiary">
          {registrationContent.title}
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-lg lg:max-w-3xl text-sm lg:text-lg text-black/50">
          {registrationContent.subtitle}
        </p>
      </motion.section>

      <section className="grid grid-cols-8 items-start gap-8 px-6 py-8 sm:px-12 lg:py-16 lg:px-32">
        {/* Registration Form */}
        <form className="flex flex-col gap-6 col-span-8 md:col-span-5 lg:col-span-6 px-6 py-8 bg-neutral/50 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-tertiary w-full border-b border-tertiary/10 pb-2">
            Player Details
          </h2>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {registrationContent.form.fields.map((field) => (
              <motion.div
                key={field.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -2 }}
                className={`flex flex-col gap-1 ${field.type === "text-area" ? "col-span-2" : "col-span-2 lg:col-span-1"}`}
              >
                <label
                  htmlFor={field.name}
                  className="text-sm font-semibold text-tertiary"
                >
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                {field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    className="px-4 py-2 border border-primary/50 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition"
                  >
                    <option value="" disabled selected>
                      {field.placeholder || "Select an option..."}
                    </option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "text-area" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="px-4 py-2 border border-primary/50 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition resize-x-none h-48"
                  />
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="px-4 py-2 border border-primary/50 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition"
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              type="submit"
              className="justify-self-end col-span-2 flex gap-2 items-center justify-center px-8 py-3 bg-tertiary text-neutral font-semi-bold rounded-full hover:bg-tertiary/95 transition"
            >
              {registrationContent.form.submitButton.title}
              <InlineIcon
                icon="mdi:arrow-right"
                className="text-2xl font-bold inline-block"
              />
            </motion.button>
          </motion.div>
        </form>

        {/* What to Expect */}
        <div className="col-span-8 md:col-span-3 lg:col-span-2 px-6 py-8 bg-primary/10 rounded-lg shadow-md text-tertiary">
          <h2 className="font-header text-lg font-bold">
            <InlineIcon
              icon="mdi:information"
              className="text-xl inline-block mr-2 "
            />
            {registrationContent.whatToExpect.title}
          </h2>

          <motion.ul
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-4 space-y-4"
          >
            {registrationContent.whatToExpect.points.map((point, index) => (
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -2 }}
                key={index}
                className="flex flex-col gap-1"
              >
                <div className="flex items-center gap-2">
                  <InlineIcon icon={point.icon} className="text-lg" />
                  <h3 className="font-semibold">{point.title}</h3>
                </div>
                <p className="text-sm text-tertiary/60">{point.subtitle}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  );
}

export default Registration;
