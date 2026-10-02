import { motion } from "framer-motion";
import type { Team } from "../types/globals";
import { InlineIcon } from "@iconify/react";
import { Link } from "react-router-dom";
import SeniorMaleTeamPhoto from "../assets/images/senior-male-team-photo.webp";
import SeniorFemaleTeamPhoto from "../assets/images/senior-female-team-photo.webp";
import JuniorMaleTeamPhoto from "../assets/images/junior-male-team-photo.webp";

export default function TeamCard({ teamName, division, url }: Team) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className={`h-82 relative flex flex-col justify-end items-start gap-4 rounded-2xl bg-primary/5 shadow-md hover:shadow-xl p-4 ${teamName === "Senior Male Team" ? "col-span-8 lg:col-span-4" : teamName === "Senior Female Team" ? "col-span-8 lg:col-span-4" : "col-span-8"}`}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-1 bg-tertiary/60 overflow-hidden rounded-2xl hover:bg-tertiary/20 transition-colors duration-300" />

      {/* Background Team Photo */}
      <motion.img
        src={
          teamName === "Senior Male Team"
            ? SeniorMaleTeamPhoto
            : teamName === "Senior Female Team"
              ? SeniorFemaleTeamPhoto
              : JuniorMaleTeamPhoto
        }
        alt={teamName ? `${teamName} Photo` : "Placeholder Team Photo"}
        fetchPriority="high"
        aria-hidden="true"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 z-0 w-full h-full object-cover object-center overflow-hidden rounded-2xl"
      />
      {/* Division */}
      {division && (
        <p className="z-5 bg-primary/80 px-3 py-2 rounded-full uppercase text-xs text-neutral font-bold tracking-wide">
          {division}
        </p>
      )}

      {/* Team Name */}
      <h3 className="z-3 text-2xl lg:text-4xl font-semibold max-w-xl text-neutral">
        {teamName}
      </h3>

      <Link
        to={url}
        className="z-3 text-sm lg:text-base font-bold text-neutral hover:underline"
      >
        <InlineIcon icon="mdi:person-multiple" className="inline-block mr-1" />
        View Roster
      </Link>
    </motion.article>
  );
}
