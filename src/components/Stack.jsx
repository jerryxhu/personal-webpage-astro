import Card from './CardStack';

export default function Stack() {
  const cardData = [
    {
      title: "Technologies/Languages",
      data: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'Node.js'],
      index: [0, 1, 2, 3, 4, 5],
    },
    {
      title: "Libraries/Frameworks",
      data: ['React', 'Astro', 'Bootstrap', 'SASS', 'Material UI'],
      index: [6, 7, 8, 9, 10],
    },
    {
      title: "Tools",
      data: ['Git', 'Railway', 'Figma', 'Adobe Illustrator'],
      index: [11, 12, 13, 14],
    },
  ];

  return (
    <section className="m-10 sm:m-20 md:m-40">
      <div data-layer="Line" className="Line min-w-64 w-1/3 h-1 bg-main-blue" />
      <h3 className="font-bold text-3xl sm:text-4xl my-4">My Stack</h3>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {cardData.map((cardProps) => (
          <Card index={cardProps.index} title={cardProps.title} key={cardProps.data.join(',')} {...cardProps} />
        ))}
      </div>
    </section>
  );
}