import NewsCard from "../components/NewsCard";
import { newsContent } from "../content/newsContent";

function News() {
  return (
    <>
      <section className="relative flex flex-col items-start justify-center gap-4 px-6 py-8 sm:px-12 lg:py-16 lg:px-32 overflow-hidden">
        {/* Hero Title */}
        <h1 className="max-w-2xl z-2 font-header text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary">
          {newsContent.title}
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-lg lg:max-w-3xl z-2 text-sm lg:text-lg text-tertiary/70">
          {newsContent.subtitle}
        </p>

        {/* News Items */}
        <div className="w-full mt-8 flex flex-col gap-6">
          {newsContent.newsItems.map((item) => {
            return <NewsCard key={item.title} item={item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default News;
