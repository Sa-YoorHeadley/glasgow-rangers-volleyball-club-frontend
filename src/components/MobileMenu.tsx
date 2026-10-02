import { useState } from "react";
import { globalContent } from "../content/globalContent";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import Button from "./Button";

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Toggle mobile menu open/close
  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <motion.nav
      className={`lg:hidden sticky top-0 left-0 z-99 font-body w-full flex flex-col items-center justify-between px-8 py-4 text-black/60 bg-neutral`}
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-between lg:w-auto w-full">
        <Link to="/" className="text-tertiary font-bold text-2xl font-header">
          {globalContent.siteName}
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="main-menu"
          aria-expanded={`${menuOpen}`}
          className="lg:hidden"
          onClick={toggleMenu}
        >
          <InlineIcon
            icon={
              menuOpen ? "line-md:menu-to-close-alt-transition" : "line-md:menu"
            }
            className="text-tertiary text-2xl transition-all"
          />
        </button>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral text-tertiary absolute top-full left-0 h-screen flex flex-col py-6 px-12 gap-2"
          >
            {globalContent.navbarData.pages.map((page) => (
              <Link
                key={page.title}
                to={`/${page.slug}`}
                className="flex items-center px-4 py-2 rounded-2xl transition-200 hover:bg-tertiary hover:text-neutral hover:underline hover:underline-offset-4 text-left"
                onClick={toggleMenu}
              >
                {page.icon && (
                  <InlineIcon
                    icon={page.icon}
                    className="mr-2 text-tertiary text-xl"
                  />
                )}
                {page.title}
              </Link>
            ))}

            <Button
              title={globalContent.navbarData.cta.title}
              url={globalContent.navbarData.cta.url}
              backgroundColor={globalContent.navbarData.cta.backgroundColor}
              textColor={globalContent.navbarData.cta.textColor}
              otherStyles="mt-4 w-full text-center rounded-lg"
            />
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default MobileMenu;
