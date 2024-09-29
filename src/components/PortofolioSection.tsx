import PortfolioCard, { PortfolioItem } from "./PortofolioCard";

const PortfolioSection = () => {
    const portfolioItems: PortfolioItem[] = [
      { title: "AOTC Cosmetics", imageUrl: "images/portfolio.png" },
      { title: "Nosh kitchen Website", imageUrl: "images/portfolio-1.png" },
      { title: "Micheiah Event Organizer Singapore", imageUrl: "images/portfolio-2.png" },
      { title: "Joywaltzstudio Academy", imageUrl: "images/portfolio-3.png" },
      { title: "Octopay Payment", imageUrl: "images/portfolio-4.png" },
    ];
  
    return (
      <section className="py-12 bg-[#1e293b]">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold font-orbitron text-white mb-12 xl:text-start">Our Portfolio</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PortfolioSection;