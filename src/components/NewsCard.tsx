import { motion } from "framer-motion";
import type { ExternalArticle, ClubArticle } from "../types/globals";

function NewsCard({ item }: { item: ExternalArticle | ClubArticle }) {
  return (
    <>
      {item.type === "club" ? (
        <article></article>
      ) : item.type === "external" ? (
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-sm"
        ></motion.article>
      ) : (
        <></>
      )}
    </>
  );
}

export default NewsCard;
