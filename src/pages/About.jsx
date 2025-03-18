const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, iusto.
        Asperiores dolorum culpa eum voluptate voluptas facere odio? Obcaecati
        repellendus dolores ut provident! Assumenda, debitis saepe porro animi
        atque nihil ab minima, illo, eum enim aspernatur magni reiciendis
        repellat sed.
      </p>
    </>
  );
};

export default About;
