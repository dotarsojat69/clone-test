import TeamCard, { TeamMember } from "./TeamCard";

const TeamSection = () => {
    const teamMembers: TeamMember[] = [
      {
        name: "Jay Chen",
        role: "CEO",
        description: "Jay began his career in the banking and finance sector, where he honed his skills and developed a deep understanding of the industry. Leveraging this foundation, he expanded into HR operations and outsourcing, successfully growing his businesses by delivering exceptional service to renowned international brands like Huawei, Coca-Cola, and GlaxoSmithKline. CO2 Labs provides a solutions-based approach to champion human resource and outsourcing through strategic consultation and meticulously planned placements.",
        imageUrl: "/images/profile1.jpeg"
      },
      {
        name: "Alune",
        role: "Development Project Manager",
        description: "With a background in IT software development, quality testing and web design, she brings a deep understanding of the technical and strategic aspects of project management. Known for her meticulous planning, effective communication, and ability to navigate challenges, she has consistently delivered high-quality software solutions on time and within budget. Alune excels at fostering collaboration across cross-functional teams, ensuring that projects align with client objectives and business goals. Her dedication to excellence and passion for innovation make her a driving force behind the success of every project she leads.",
        imageUrl: "/images/profile2.jpeg"
      },
      {
        name: "Ron",
        role: "Business Development Lead",
        description: "With a strong background in business development for finance, logistics and real estate industries, Ron has successfully led initiatives that have expanded market reach and increased revenue for both emerging and established companies. Known for his ability to identify new opportunities and forge lasting relationships, Ron excels in creating tailored solutions that meet client needs and align with business goals through thoughtful solutions.",
        imageUrl: "/images/profile3.jpeg"
      }
    ];
  
    return (
      <section className="py-12 bg-[#ffffff] xl:m-20">
        <div className="container mx-auto xl:px-10 px-4">
          <h1 className="xl:text-6xl text-4xl font-bold font-orbitron xl:text-start text-center mb-32 -mt-20">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TeamSection;