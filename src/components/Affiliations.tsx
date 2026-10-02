import { globalContent } from "../content/globalContent";

function Affiliations() {
  return (
    <section className="flex flex-col justify-start relative px-6 py-8 gap-8 sm:px-12 lg:py-16 lg:px-32 bg-primary/5 text-primary">
      <h2 className="w-full text-center uppercase font-semibold tracking-wider">
        Proudly Affiliated With
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-12">
        {globalContent.affiliations.map((affiliation) => (
          <>
            <a
              key={affiliation.name}
              href={affiliation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-center text-xl font-bold hover:underline hover:text-primary transition-all duration-200"
            >
              {affiliation.name}
            </a>

            <a
              key={affiliation.name}
              href={affiliation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden text-center text-xl font-bold hover:underline hover:text-primary transition-all duration-200"
            >
              {affiliation.abbreviation}
            </a>
          </>
        ))}
      </div>
    </section>
  );
}

export default Affiliations;
