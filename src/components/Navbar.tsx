import { useEffect, useState } from "react";
// import Logo from "./Logo";
import { Link } from "react-router-dom";
import DropdownLink from "./DropdownLink";
import Button from "./Button";
import { motion } from "framer-motion";
import { globalContent } from "../content/globalContent";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const childrenMap = globalContent.navbarData.pages.reduce<
    Record<string, typeof globalContent.navbarData.pages>
  >((acc, page) => {
    if (page.parent) {
      const parentTitle = page.parent.title;
      if (!acc[parentTitle]) acc[parentTitle] = [];
      acc[parentTitle].push(page);
    }
    return acc;
  }, {});

  const standalonePages = globalContent.navbarData.pages.filter(
    (page) => !page.parent,
  );
  const groupedParents = Object.keys(childrenMap);

  return (
    <motion.nav
      className={`hidden lg:flex sticky top-0 left-0 z-50 font-body w-full flex-col lg:flex-row items-center justify-between px-8 xl:px-16 py-6 text-black/60 transition-all duration-500 ${
        scrolled ? "bg-neutral/80 backdrop-blur-md shadow-md" : "bg-neutral"
      }`}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between lg:w-auto w-full">
        <Link to="/" className="text-tertiary font-bold text-2xl font-header">
          {globalContent.siteName}
        </Link>
      </div>

      {/* Links */}
      <div
        id="main-menu"
        className="flex flex-col lg:flex-row lg:justify-start justify-center items-center gap-2 lg:gap-4 xl:gap-8 transition-all duration-500 text-center text-base font-medium"
      >
        {groupedParents.map((parentTitle) => (
          <DropdownLink
            key={parentTitle}
            name={parentTitle}
            links={childrenMap[parentTitle].map((child) => ({
              name: child.title,
              url: `/${child.slug}`,
            }))}
          />
        ))}

        {standalonePages.map((page) => (
          <Link
            key={page.title}
            to={`/${page.slug}`}
            className="px-4 py-2 rounded-2xl transition-200 hover:text-tertiary hover:underline hover:underline-offset-4"
          >
            {page.title}
          </Link>
        ))}
      </div>

      {/* CTA Button: Only visible on large screens */}
      <Button
        title={globalContent.navbarData.cta.title}
        url={globalContent.navbarData.cta.url}
        backgroundColor={globalContent.navbarData.cta.backgroundColor}
        textColor={globalContent.navbarData.cta.textColor}
      />
    </motion.nav>
  );
}
