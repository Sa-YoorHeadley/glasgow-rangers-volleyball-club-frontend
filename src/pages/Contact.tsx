import { InlineIcon } from "@iconify/react";
import { contactContent } from "../content/contactContent";
import { globalContent } from "../content/globalContent";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <motion.section
        className="flex flex-col justify-center items-center gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Contact Title */}
        <h1 className="text-5xl font-black text-tertiary text-center">
          {contactContent.title}
        </h1>

        {/* Contact Subtitle */}
        <p className="max-w-lg lg:max-w-2xl text-sm lg:text-lg text-black/50 text-center">
          {contactContent.subtitle}
        </p>
      </motion.section>

      <section className="grid grid-cols-8 items-start gap-8 px-6 py-8 sm:px-12 lg:py-16 lg:px-16">
        {/* Contact Information */}
        <motion.div
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
          className="flex flex-col gap-4 col-span-8 md:col-span-4 lg:col-span-3 px-6 py-8 bg-neutral/50 rounded-lg shadow-md text-tertiary"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -2 }}
            className="text-2xl font-bold text-tertiary w-full"
          >
            Contact Information
          </motion.h2>

          {/* Email */}
          <motion.a
            href={`mailto:${globalContent.contactEmail}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -2 }}
            className="flex items-start gap-2 mt-4 text-sm"
          >
            <InlineIcon
              icon="mdi:email"
              className="rounded-full p-1 bg-primary/20 text-tertiary text-2xl lg:text-4xl font-bold inline-block"
            />

            {/* Email Address */}
            <div className="flex flex-col gap-1">
              <p>Email us</p>
              <p className="font-semibold">{globalContent.contactEmail}</p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${globalContent.phoneNumber}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -2 }}
            className="flex items-start gap-2 mt-4 text-sm"
          >
            <InlineIcon
              icon="mdi:phone"
              className="rounded-full p-1 bg-primary/20 text-tertiary text-2xl lg:text-4xl font-bold inline-block"
            />

            {/* Phone Number */}
            <div className="flex flex-col gap-1">
              <p>Call us</p>
              <p className="font-semibold">{globalContent.phoneNumber}</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -2 }}
            className="flex items-start gap-2 mt-4 text-sm"
          >
            <InlineIcon
              icon="mdi:map-marker"
              className="rounded-full p-1 bg-primary/20 text-tertiary text-2xl lg:text-4xl font-bold inline-block"
            />

            {/* Location */}
            <div className="flex flex-col gap-1">
              <p>Our Location</p>
              <p className="font-semibold">{globalContent.location}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <form className="flex flex-col gap-6 col-span-8 md:col-span-4 lg:col-span-5 px-6 py-8 bg-neutral/50 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-tertiary w-full">
            Send A Message
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
            {contactContent.form.fields.map((field) => (
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
                {field.type === "text-area" ? (
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
              className="justify-self-start col-span-2 flex gap-2 items-center justify-center px-8 py-3 bg-tertiary text-neutral font-semi-bold rounded-xl hover:bg-tertiary/95 transition"
            >
              {contactContent.form.submitButton.title}
              <InlineIcon
                icon="mdi:send-outline"
                className="text-xl font-bold inline-block"
              />
            </motion.button>
          </motion.div>
        </form>
      </section>
    </>
  );
}

export default Contact;
