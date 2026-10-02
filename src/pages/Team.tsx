import type { Team } from "../types/globals";
import { teamContent } from "../content/teamContent";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PlayerCard from "../components/PlayerCard";

function Team() {
  const { slug } = useParams();
  const team = teamContent.teams.find((t) => t.url === `/teams/${slug}`);
  if (!team) return <div>Team not found</div>;
  const { teamName, description, players } = team;

  return (
    <>
      <motion.section
        className="flex flex-col justify-center items-center text-center gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Team Name */}
        <h1 className="text-5xl font-black text-tertiary">{teamName}</h1>

        {/* Team Description */}
        <p className="max-w-lg lg:max-w-3xl text-sm lg:text-lg text-black/50">
          {description}
        </p>
      </motion.section>

      {/* Active Players */}
      <motion.section
        className="flex flex-col justify-center items-center gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-black text-tertiary">Active Players</h2>

        <div className="w-full flex flex-wrap items-stretch justify-center gap-6 mt-8">
          {players
            .filter((p) => p.isActive)
            .sort(
              (a, b) =>
                (b.isCaptain ? 1 : 0) - (a.isCaptain ? 1 : 0) ||
                (a.jerseyNumber ?? 99) - (b.jerseyNumber ?? 99) ||
                a.name.localeCompare(b.name),
            )
            .map((player, index) => (
              <PlayerCard key={index} {...player} />
            ))}
        </div>
      </motion.section>

      {/* Team List */}
      <motion.section
        className="flex flex-col justify-center items-center gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-black text-tertiary">Team Roster</h2>

        <div className="w-full flex flex-col items-stretch justify-center gap-6 mt-8">
          {players
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((player, index) => (
              <div className="flex w-full border-b py-2" key={index}>
                {/* Initials */}
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-2">
                  {player.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-tertiary">
                    {player.name}
                  </h3>
                  <p className="text-sm text-black/50">{player.position}</p>
                </div>
                <div className="flex items-center ml-auto gap-4">
                  {/* Height */}
                  {player.height && (
                    <p className="text-sm text-black/50 ml-auto">
                      Height: {player.height}
                    </p>
                  )}
                  {/* Standing Reach */}
                  {player.standingReach && (
                    <p className="text-sm text-black/50 ml-auto">
                      Standing Reach: {player.standingReach}
                    </p>
                  )}
                  {/* Vertical Jump */}
                  {player.verticalJump && (
                    <p className="text-sm text-black/50 ml-auto">
                      Vertical Jump: {player.verticalJump}
                    </p>
                  )}
                  {/* Shirt Size */}
                  {player.shirtSize && (
                    <p className="text-sm text-black/50 ml-auto">
                      Shirt: {player.shirtSize}
                    </p>
                  )}
                  {/* Waist Size */}
                  {player.waistSize && (
                    <p className="text-sm text-black/50 ml-4">
                      Waist: {player.waistSize}
                    </p>
                  )}
                  {/* Shoe Size */}
                  {player.shoeSize && (
                    <p className="text-sm text-black/50 ml-4">
                      Shoe: {player.shoeSize.US} US / {player.shoeSize.EU} EU
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </motion.section>
    </>
  );
}

export default Team;
