import { Link } from "react-router-dom";
import type { SocialLink } from "../types/globals";
import SocialIcon from "./SocialIcon";
import { globalContent } from "../content/globalContent";

export default function Footer() {
  const globalData = globalContent;

  // Loading, error, and empty state handling
  if (!globalData) return null;

  const socialLinks: SocialLink[] = globalData.socialLinks;

  const pagesByCategory = globalData.footerData.pages.reduce<
    Record<string, typeof globalData.footerData.pages>
  >((acc, page) => {
    const category = page.category ?? "Other";

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(page);
    return acc;
  }, {});

  return (
    <footer
      className="flex flex-col lg:flex-row lg:justify-around  items-start lg:items-baseline px-4 md:px-16 py-8 gap-8 bg-primary text-neutral/70 text-sm lg:text-base"
      aria-label="Site footer"
    >
      <div className="gap-2 flex flex-col items-start">
        <h1 className="font-bold text-xl text-secondary">
          {globalData.siteName}
        </h1>
        <p className="w-80 text-xs">{globalData.siteDescription}</p>
        <small className="text-xs text-neutral/50">
          &copy; {new Date().getFullYear()} {globalData.siteName}. All rights
          reserved.
        </small>

        <ul
          className="flex justify-left lg:justify-left items-center flex-wrap gap-4"
          aria-label="Social media links"
        >
          {socialLinks.map((socialLink) => (
            <li key={socialLink.platform}>
              <SocialIcon {...socialLink} />
            </li>
          ))}
        </ul>
      </div>

      <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
        {Object.keys(pagesByCategory).map((category) => (
          <div key={category}>
            <h2 className="font-bold text-sm uppercase text-neutral">
              {category}
            </h2>
            <ul className="flex flex-col gap-2 text-sm mt-1">
              {pagesByCategory[category].map((page) => (
                <li key={page.slug}>
                  <Link
                    to={`/${page.slug}`}
                    className="text-nowrap text-neutral/70 hover:text-secondary hover:underline transition-colors duration-300"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </footer>
  );
}
