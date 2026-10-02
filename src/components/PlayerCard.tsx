import type { Player } from "../types/globals";
import { Icon } from "@iconify/react";

function PlayerCard({
  name,
  position,
  isCaptain,
  tagline,
  photo,
  height,
  standingReach,
  verticalJump,
  jerseyNumber,
}: Player) {
  console.log(photo);
  return (
    <article className="w-xs flex flex-col justify-start p-4 bg-neutral/50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      {/* Image Placeholder */}
      <div className="relative w-full h-64 bg-primary/30 rounded-lg flex items-center justify-center">
        {photo ? (
          <img
            src={photo.url}
            alt={photo.alternativeText || `${name} Photo`}
            className="h-full w-full object-cover rounded-lg"
          />
        ) : (
          <Icon
            icon="mdi:account"
            className="h-48 w-48 text-6xl text-neutral/50"
          />
        )}
        <div className="flex flex-col md:flex-row gap-2 absolute bottom-2 left-2 text-center">
          <p className="uppercase text-xs font-bold bg-primary/70 text-neutral px-2 py-1 rounded-full">
            {position}
          </p>
          {isCaptain && (
            <p className="uppercase text-xs font-bold bg-secondary/70 text-tertiary px-2 py-1 rounded-full">
              Captain
            </p>
          )}
        </div>
        {jerseyNumber && (
          <p className="w-8 h-8 rounded-full bg-primary/70 text-neutral px-2 py-1 absolute top-4 right-4 text-xl font-bold flex items-center justify-center">
            {jerseyNumber}
          </p>
        )}
      </div>
      <div className="text-left mt-4">
        <p className="text-xl font-semibold text-tertiary">{name}</p>
        {tagline && (
          <p className="text-sm text-tertiary/80 font-bold">{tagline}</p>
        )}
        {(height || standingReach || verticalJump) && (
          <ul className="text-sm text-tertiary/80 mt-2">
            {height && <li>Height: {height}</li>}
            {standingReach && <li>Standing Reach: {standingReach}</li>}
            {verticalJump && <li>Vertical Jump: {verticalJump}</li>}
          </ul>
        )}
      </div>
    </article>
  );
}

export default PlayerCard;
