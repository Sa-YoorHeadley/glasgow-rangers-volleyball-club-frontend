import type { SocialLink } from "../types/globals";
import { InlineIcon } from "@iconify/react";

export default function SocialIcon({ platform, url, icon }: SocialLink) {
  return (
    <a
      title={platform}
      aria-label={platform}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary bg-neutral border-2 border-neutral p-1 rounded-full
                 hover:bg-primary hover:text-neutral hover:scale-110 transition-all duration-300
                 flex items-center justify-center"
    >
      {/* Social icon */}
      <InlineIcon icon={icon} className="text-xl" />
    </a>
  );
}
