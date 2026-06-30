import Image from "next/image";

const divisionImageMap = {
  1: "/proestimate/division1.png",
  2: "/proestimate/division2.png",
  3: "/proestimate/division3.png",
  4: "/proestimate/division4.png",
  5: "/proestimate/division5.png",
  6: "/proestimate/division6.png",
  7: "/proestimate/division7.png",
  8: "/proestimate/division8.png",
  9: "/proestimate/division9.png",
  10: "/proestimate/division10.png",
  11: "/proestimate/division11.png",
  12: "/proestimate/division12.png",
  13: "/proestimate/division13.png",
  14: "/proestimate/division14.png",
  21: "/proestimate/division21.png",
  22: "/proestimate/division22.png",
  23: "/proestimate/division23.png",
  25: "/proestimate/division25.png",
  26: "/proestimate/division26.png",
  27: "/proestimate/division27.png",
  28: "/proestimate/division28.png",
  31: "/proestimate/division31.png",
  32: "/proestimate/division32.png",
  33: "/proestimate/division33.png",
  34: "/proestimate/division34.png",
  35: "/proestimate/division35.png",
  40: "/proestimate/division40.png",
  41: "/proestimate/division41.png",
  42: "/proestimate/division42.png",
  43: "/proestimate/division43.png",
  44: "/proestimate/division44.png",
  45: "/proestimate/division45.png",
  46: "/proestimate/division46.png",
  48: "/proestimate/division48.png",
};

const divisions = [
  {
    title: "Division 1 - Site Work",
    lead: "Ark sets the groundwork with precise site cost control from day one.",
    items: [
      "Site Preparation — Clearing vegetation, debris, and existing structures.",
      "Earthworks — Excavation, grading, and filling to achieve required levels.",
      "Utilities Installation — Laying water, sewer, and electrical services.",
    ],
  },
  {
    title: "Division 2 - Existing Conditions",
    lead: "Ark eliminates uncertainty with accurate pre-construction assessments.",
    items: [
      "Site Assessment — Review topography, soil, utilities, and legal factors.",
      "Demolition — Remove existing structures safely with required permits.",
      "Site Preparation — Clear, grade, install utilities, and prepare foundations.",
    ],
  },
  {
    title: "Division 3 - Concrete",
    lead: "Ark delivers solid numbers for stronger foundations.",
    items: [
      "Concrete work includes cement, sand, aggregates, and water for structural construction.",
      "Formwork — Setting up molds to shape the concrete.",
      "Reinforcement — Placing steel bars for strength.",
      "Pouring & Finishing — Placing, leveling, and smoothing the concrete.",
    ],
  },
  {
    title: "Division 4 - Masonry",
    lead: "Ark builds strength through precise masonry estimating.",
    items: [
      "Construction using bricks or stones bonded with mortar.",
      "Used for walls, columns, foundations, arches, and other structures.",
      "Can be structural or non-structural depending on project requirements.",
      "Provides strength, thermal mass, and fire resistance.",
    ],
  },
  {
    title: "Division 5 - Metals",
    lead: "Ark ensures steel-level accuracy and structural cost clarity.",
    items: [
      "Structural Steel — Strong frameworks for bridges and high-rise buildings.",
      "Metal Framing — Frameworks using steel or aluminum.",
      "Metal Fabrication — Shaping and assembling metal components for construction.",
    ],
  },
  {
    title: "Division 6 - Wood, Plastics, and Composites",
    lead: "Ark structures smart cost solutions for wood and composite construction.",
    items: [
      "Includes various materials used in construction.",
      "Wood is used for framing and finish carpentry.",
      "Plastics and composites are used for exterior and light structural components.",
    ],
  },
  {
    title: "Division 7 - Thermal and Moisture Protection",
    lead: "Ark protects your structure and your budget.",
    items: [
      "Protects the building from temperature changes and moisture.",
      "Includes insulation, air/vapor barriers, waterproofing, and roofing.",
      "Ensures durability and energy efficiency.",
    ],
  },
  {
    title: "Division 8 - Openings",
    lead: "Ark counts every detail for seamless execution.",
    items: [
      "Covers products that fill building openings.",
      "Includes doors, windows, frames, curtain walls, skylights, and hardware.",
      "Enhances aesthetics, safety, and functionality.",
    ],
  },
  {
    title: "Division 9 - Finishes",
    lead: "Ark balances premium finishes with smart cost planning.",
    items: [
      "Focuses on interior finishes that enhance aesthetics and functionality.",
      "Covers walls, ceilings, and floors, including paint, flooring, and wall coverings.",
      "Properly specified finishes contribute to the overall quality and comfort of a space.",
    ],
  },
  {
    title: "Division 10 - Specialties",
    lead: "Ark streamlines specialty construction with detailed cost planning and zero guesswork.",
    items: [
      "Covers specialized construction products and materials.",
      "Includes display boards, toilet partitions, signage, and lockers.",
      "Ensures coordination and uniformity in project execution.",
    ],
  },
  {
    title: "Division 11 - Equipment",
    lead: "Ark ensures every equipment component is precisely quantified and financially optimized.",
    items: [
      "Covers appliances, furnishings, and building equipment.",
      "Includes kitchen appliances, laundry equipment, and HVAC systems.",
      "Improves functionality and comfort of the space.",
    ],
  },
  {
    title: "Division 12 - Furnishings",
    lead: "Ark delivers precise cost planning for furnishings with a perfect balance of design and budget control.",
    items: [
      "Covers furniture, seating, and interior accessories.",
      "Includes tables, chairs, desks, beds, sofas, and benches.",
      "Accessories include lamps, artwork, and decorative items.",
    ],
  },
  {
    title: "Division 13 - Special Construction",
    lead: "Ark ensures high-accuracy estimating for custom-built and engineered construction systems.",
    items: [
      "Covers unique or specialized construction elements.",
      "Includes temporary structures like scaffolding and enclosures.",
      "Also includes pre-engineered buildings assembled on-site.",
    ],
  },
  {
    title: "Division 14 - Conveying Equipment",
    lead: "Ark ensures elevator and conveying installations are accurately quantified and financially controlled.",
    items: [
      "Covers vertical transportation systems.",
      "Includes elevators, escalators, and lifts.",
      "Ensures safe and efficient movement of people and goods.",
    ],
  },
  {
    title: "Division 21 - Fire Suppression",
    lead: "Ark calculates safety with compliance and confidence.",
    items: [
      "Sprinkler Systems — Wet-pipe, dry-pipe, preaction, and deluge systems to control fires.",
      "Fire Extinguishing Systems — CO2, clean-agent, and wet-chemical systems to suppress fires.",
      "Fire Pumps & Water Storage — Maintain water pressure and supply for fire systems.",
    ],
  },
  {
    title: "Division 22 - Plumbing",
    lead: "Ark prevents cost leaks with precise plumbing estimates.",
    items: [
      "Common Work Results (22 05 00) — General plumbing requirements, piping, installation, demolition, and equipment.",
      "Facility Water Distribution (22 10 00) — Domestic water distribution systems and fixtures.",
      "Facility Sanitary Sewerage (22 20 00) — Sanitary waste and vent piping with design and installation support.",
    ],
  },
  {
    title: "Division 23 - Heating, Ventilating, and Air Conditioning (HVAC)",
    lead: "Ark optimizes system performance through accurate forecasting.",
    items: [
      "Heating — Furnaces, heat pumps, and electric baseboard systems.",
      "Ventilation — Mechanical or natural systems that supply fresh air.",
      "Air Conditioning — Central AC, window units, or split systems for cooling indoor spaces.",
    ],
  },
  {
    title: "Division 25 - Integrated Automation",
    lead: "Ark ensures seamless automation integration backed by accurate financial forecasting.",
    items: [
      "Focuses on automation and control of building systems.",
      "Develops automation solutions for various industries.",
      "Designs systems to streamline processes and improve efficiency.",
      "Uses technology to reduce manual work and increase productivity.",
    ],
  },
  {
    title: "Division 26 - Electrical",
    lead: "Ark delivers structured estimating for electrical systems with total cost clarity.",
    items: [
      "Covers electrical systems and components.",
      "Includes design, installation, and maintenance.",
      "Encompasses wiring, lighting, switches, and circuit breakers.",
      "Ensures safety and reliability in buildings and industrial settings.",
    ],
  },
  {
    title: "Division 27 - Communications",
    lead: "Ark delivers structured estimating for communication systems with total cost clarity.",
    items: [
      "Focuses on communication systems within buildings.",
      "Includes data networks, telecommunications, audiovisual systems, and security alarms.",
      "Enhances connectivity, information sharing, and safety.",
      "Integrates voice, data, and video communication.",
    ],
  },
  {
    title: "Division 28 - Electronic Safety and Security",
    lead: "Ark ensures security systems are accurately quantified and financially aligned.",
    items: [
      "Protects the building through integrated safety and security systems.",
      "Includes alarms, access control, monitoring, and related infrastructure.",
      "Supports reliability, compliance, and controlled building operations.",
    ],
  },
  {
    title: "Division 31 - Earthwork",
    lead: "Ark controls ground-level costs with precision earthwork estimating.",
    items: [
      "Pertains to site preparation and excavation.",
      "Includes grading, excavation, and soil stabilization.",
      "Prepares the site for construction and ensures proper foundation and drainage.",
    ],
  },
  {
    title: "Division 32 - Exterior Improvements",
    lead: "Ark brings cost discipline to every exterior development scope.",
    items: [
      "Focuses on outdoor elements.",
      "Covers landscaping, paving, fences, and site amenities.",
      "Enhances aesthetics, accessibility, and functionality.",
      "Creates welcoming outdoor spaces.",
    ],
  },
  {
    title: "Division 33 - Utilities",
    lead: "Ark provides accurate utility estimating for seamless infrastructure execution.",
    items: [
      "Addresses utility systems.",
      "Includes water supply, sewer, gas, and electrical utilities.",
      "Ensures proper connections and distribution.",
      "Supports building operations.",
    ],
  },
  {
    title: "Division 34 - Transportation",
    lead: "Ark structures transportation system costs with clarity and efficiency.",
    items: [
      "Focuses on transportation-related exterior systems and supporting works.",
      "Supports coordinated planning for circulation, access, and site function.",
      "Helps align scope, infrastructure, and budget expectations.",
    ],
  },
  {
    title: "Division 35 - Waterway and Marine Construction",
    lead: "Ark delivers precision estimating for complex marine and waterway projects.",
    items: [
      "Focuses on water-related projects.",
      "Includes docks, piers, seawalls, and marine structures.",
      "Supports waterfront development and navigation.",
      "Ensures durability in harsh aquatic environments.",
    ],
  },
  {
    title: "Division 40 - Process Interconnections",
    lead: "Ark transforms process systems into structured, cost-controlled solutions.",
    items: [
      "Relates to industrial processes.",
      "Covers piping, valves, and process equipment connections.",
      "Facilitates fluid transfer and control.",
      "Supports manufacturing and production.",
    ],
  },
  {
    title: "Division 41 - Material Processing and Handling Equipment",
    lead: "Ark ensures efficient cost planning for material handling systems.",
    items: [
      "Addresses equipment for material handling.",
      "Includes conveyors, crushers, mixers, and bulk material handling systems.",
      "Supports efficient material flow in factories and plants.",
      "Enhances productivity.",
    ],
  },
  {
    title: "Division 42 - Process Heating, Cooling, and Drying Equipment",
    lead: "Ark aligns industrial equipment costs with performance and profitability.",
    items: [
      "Focuses on equipment related to temperature control.",
      "Includes systems for heating, cooling, and drying processes.",
      "Ensures efficient energy utilization.",
      "Supports industrial and commercial applications.",
    ],
  },
  {
    title: "Division 43 - Process Gas and Liquid Handling, Purification, and Storage Equipment",
    lead: "Ark provides financial precision for specialized gas and liquid systems.",
    items: [
      "Addresses equipment for handling gases and liquids.",
      "Covers pumps, compressors, tanks, and purification systems.",
      "Facilitates fluid transport and storage.",
      "Ensures safe handling and compliance with regulation.",
    ],
  },
  {
    title: "Division 44 - Pollution and Waste Control Equipment",
    lead: "Ark delivers compliant and cost-efficient environmental system estimates.",
    items: [
      "Deals with equipment for environmental protection.",
      "Includes air pollution control devices such as scrubbers and filters.",
      "Addresses waste treatment and disposal.",
      "Enhances sustainability and compliance.",
    ],
  },
  {
    title: "Division 45 - Industry-Specific Manufacturing Equipment",
    lead: "Ark structures complex manufacturing scopes into accurate cost forecasts.",
    items: [
      "Pertains to specialized manufacturing equipment.",
      "Covers machinery specific to various industries such as food processing and textiles.",
      "Supports production processes.",
      "Ensures quality and efficiency.",
    ],
  },
  {
    title: "Division 46 - Water and Wastewater Equipment",
    lead: "Ark structures complex manufacturing scopes into accurate cost forecasts.",
    items: [
      "Focuses on water-related equipment.",
      "Includes pumps, filters, water treatment systems, and sewage equipment.",
      "Supports water supply, distribution, and wastewater management.",
      "Complies with health and environmental standards.",
    ],
  },
  {
    title: "Division 48 - Electrical Power Generation",
    lead: "Ark structures complex manufacturing scopes into accurate cost forecasts.",
    items: [
      "Covers power generation and related systems.",
      "Includes generators, transformers, and associated equipment.",
      "Ensures reliable electrical supply.",
      "Supports infrastructure and emergency power needs.",
    ],
  },
];

const defaultDivisionsSection = {
  eyebrow: "Ark Simplify Construction",
  title:
    "Professional ProEstimates designed to eliminate guesswork, control costs, and give your project a competitive edge",
  divisionEyebrow: "ProEstimate",
  divisions,
};

function getDivisionNumber(division) {
  return Number(
    division.number ?? division.title?.match(/Division\s+(\d+)/)?.[1],
  );
}

function normalizeDivision(division) {
  const divisionNumber = getDivisionNumber(division);

  return {
    ...division,
    number: divisionNumber,
    imageUrl:
      division.imageUrl ??
      division.image ??
      divisionImageMap[divisionNumber] ??
      "/construction_industry.jpg",
    imageAlt: division.imageAlt ?? division.title,
  };
}

export default function ProEstimateDivisions({ data }) {
  const section = data ?? defaultDivisionsSection;
  const normalizedDivisions = (section.divisions?.length
    ? section.divisions
    : defaultDivisionsSection.divisions
  ).map(normalizeDivision);

  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-5">
        <div className="space-y-4 pb-4 text-center">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
            {section.eyebrow ?? defaultDivisionsSection.eyebrow}
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
            {section.title ?? defaultDivisionsSection.title}
          </h2>
        </div>

        <div className="space-y-5 lg:space-y-6">
          {normalizedDivisions.map((division, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={division.title}
                className="overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)]"
              >
                <div className="grid lg:grid-cols-2 lg:items-stretch">
                  <div
                    className={`relative order-1 min-h-72 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <Image
                      src={division.imageUrl}
                      alt={division.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div
                    className={`order-2 flex flex-col justify-center gap-5 px-5 py-6 sm:px-6 sm:py-7 lg:px-8 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="space-y-3">
                      <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
                        {section.divisionEyebrow ??
                          defaultDivisionsSection.divisionEyebrow}
                      </p>
                      <h3 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-brand-secondary sm:text-4xl">
                        {division.title}
                      </h3>
                      <div className="h-px w-16 bg-brand-primary" />
                      <p className="text-lg font-semibold leading-8 tracking-[-0.02em] text-brand-secondary/88 sm:text-xl">
                        {division.lead}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {division.items.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[0.5rem_minmax(0,1fr)] gap-3 text-base leading-7 text-brand-secondary/72 sm:text-lg"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-brand-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
