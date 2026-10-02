import { InlineIcon } from "@iconify/react";
import { sponsorContent } from "../content/sponsorContent";
import { motion } from "framer-motion";
import Button from "../components/Button";

function Sponsor() {
  return (
    <>
      <motion.section
        className="flex flex-col gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Sponsor Title */}
        <h1 className="text-5xl font-black text-tertiary">
          {sponsorContent.title}
        </h1>

        {/* Sponsor Subtitle */}
        <p className="max-w-lg lg:max-w-3xl text-sm lg:text-lg text-black/50">
          {sponsorContent.subtitle}
        </p>
      </motion.section>

      {/* Our Corporate Partners */}
      <motion.section
        className="flex flex-col justify-center items-center gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Our Corporate Partners Title */}
        <h2 className="text-3xl font-black text-tertiary">
          {sponsorContent.ourCorporatePartners.title}
        </h2>

        {/* Our Corporate Partners Subtitle */}
        <p className="max-w-lg lg:max-w-3xl text-sm lg:text-base text-black/50">
          {sponsorContent.ourCorporatePartners.subtitle}
        </p>

        {/* Corporate Partners Grid */}
        <div className="w-full flex flex-wrap items-center justify-center gap-6 mt-8">
          {sponsorContent.ourCorporatePartners.partners.map(
            (partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-xs h-32 flex items-center justify-center p-4 bg-neutral/50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-full max-w-32 w-full object-contain"
                  />
                ) : (
                  <span className="text-neutral/60">{partner.name}</span>
                )}
              </a>
            ),
          )}
        </div>
      </motion.section>

      {/* Sponsor Information */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-8 items-stretch gap-8 px-6 py-8 sm:px-12 md:gap-0 lg:py-16 lg:px-32"
      >
        {/* Donation Methods */}
        <article className="col-span-8 md:col-span-4 px-6 py-8 bg-tertiary text-neutral rounded-xl md:rounded-l-xl shadow-md">
          {/* Donation Methods Title */}
          <h2 className="text-2xl font-bold w-full">
            {sponsorContent.donationMethods.title}
          </h2>

          {/* Donation Methods List */}
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
            {sponsorContent.donationMethods.methods.map((method, index) => (
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                key={index}
                className="flex flex-col gap-1 bg-primary/60 p-4 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <InlineIcon
                    icon={method.icon}
                    className="text-4xl text-secondary"
                  />
                  <h3 className="font-semibold">{method.title}</h3>
                </div>
                <p className="text-sm text-neutral/60">{method.subtitle}</p>
                {method.accountDetails && (
                  <div className="mt-2 px-4 py-2 text-neutral/80 font-semibold">
                    {method.accountDetails.bankName && (
                      <p className="">
                        <span className="font-medium text-neutral/60">
                          Bank:
                        </span>{" "}
                        {method.accountDetails.bankName}
                      </p>
                    )}
                    <p className="">
                      <span className="font-medium text-neutral/60">
                        Account Name:
                      </span>{" "}
                      {method.accountDetails.accountName}
                    </p>
                    <p className="">
                      <span className="font-medium text-neutral/60">
                        Account Number:
                      </span>{" "}
                      {method.accountDetails.accountNumber}
                    </p>
                    {method.accountDetails.branch && (
                      <p className="">
                        <span className="font-medium text-neutral/60">
                          Branch:
                        </span>{" "}
                        {method.accountDetails.branch}
                      </p>
                    )}
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <Button
            title={sponsorContent.donationMethods.cta.title}
            url={sponsorContent.donationMethods.cta.url}
            backgroundColor={sponsorContent.donationMethods.cta.backgroundColor}
            textColor={sponsorContent.donationMethods.cta.textColor}
            otherStyles="rounded-lg mt-6"
          />
        </article>

        {/* Why Sponsor Us */}
        <article className="col-span-8 md:col-span-4 px-6 py-8 bg-neutral/50 rounded-xl md:rounded-r-xl shadow-md">
          {/* Why Sponsor Us Title */}
          <h2 className="text-2xl font-bold text-tertiary w-full">
            {sponsorContent.whySponsorUs.title}
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
            {/* Why Sponsor Us Points */}
            {sponsorContent.whySponsorUs.points.map((point, index) => (
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                key={index}
                className="flex flex-col gap-1"
              >
                <div className="flex items-center gap-2">
                  <InlineIcon
                    icon={point.icon}
                    className="text-4xl bg-tertiary/20 p-1 rounded-full text-tertiary"
                  />
                  <h3 className="font-semibold">{point.title}</h3>
                </div>
                <p className="text-sm text-tertiary/60">{point.subtitle}</p>
              </motion.li>
            ))}
          </motion.ul>
        </article>
      </motion.section>
    </>
  );
}

export default Sponsor;
