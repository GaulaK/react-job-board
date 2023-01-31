import Job from "./Job";

const Jobs = () => {
  return (
    <main className="jobs">
      <Job
        className="borderRed"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />
      <Job
        className="borderGreen"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        className="borderYellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDI"
        country="France"
        city="Paris"
      />

      <Job
        className="borderBlue"
        title="Chef de Projets"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="borderBeige"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        className="borderRed"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />

      <Job
        className="borderGreen"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montanta"
      />
      <Job
        className="borderYellow"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New York"
      />
      <Job
        className="borderBlue"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="France"
        city="Paris"
      />
    </main>
  );
};

export default Jobs;
