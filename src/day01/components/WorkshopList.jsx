import WorkshopCard from "./WorkshopCard";

export default function WorkshopList() {
  return (
    <section>
      <WorkshopCard
        title="HTML5 und CSS3"
        trainer="Jörg Aderhold"
        duration={8}
        level="Beginner"
        online={true}
      />
      <WorkshopCard
        title="JavaScript Grundlagen"
        trainer="Anna Weber"
        duration={8}
        level="Beginner"
        online={false}
      />
      <WorkshopCard
        title="Frontend-Entwicklung"
        trainer="Jörg Aderhold"
        duration={16}
        level="Beginner"
        online={true}
      />
    </section>
  );
}