// ============================================================================
// PROJECT DATA
// ============================================================================
// This is the ONLY file you need to edit to add a new project to the site.
// No HTML, no other JS — just copy the TEMPLATE object below into the
// PROJECTS array, fill in the fields, and save. See README.md for the
// full step-by-step guide (including where to put your images).
//
// Field guide:
//   id        - short unique lowercase-with-dashes slug. Becomes the URL,
//               e.g. "lta-aircraft-design" -> yoursite.com/#lta-aircraft-design
//   category  - short tag shown above the title (e.g. "Aerospace Design")
//   title     - project name
//   summary   - one sentence, shown on the home page card
//   status    - "Complete" or "In Progress"
//   role      - your role on the project
//   tools     - tools/software used
//   team      - team size/type (e.g. "5-Person Engineering Team", "Individual Project")
//   what      - what you built (1 short paragraph)
//   how       - how you built it (1 short paragraph)
//   result    - the outcome (1 short paragraph)
//   images    - array of { src, caption }. Put image files in
//               images/<your-project-id>/ and reference them here.
// ============================================================================

/* TEMPLATE — copy this, uncomment, fill in, and add to the array below:

{
  id: "your-project-id",
  category: "Category Name",
  title: "PROJECT TITLE",
  summary: "One sentence describing the project.",
  status: "Complete",
  role: "Your Role",
  tools: "Tools Used",
  team: "Team Description",
  what: "What you built.",
  how: "How you built it.",
  result: "The outcome.",
  images: [
    { src: "images/your-project-id/photo1.png", caption: "Caption for photo 1" }
  ]
},

*/

const PROJECTS = [
  {
    id: "lta-aircraft-design",
    category: "Aerospace Design",
    title: "LTA Aircraft Design",
    summary: "Designed and developed a lighter-than-air aircraft from initial concept through physical construction and testing.",
    status: "Complete",
    role: "Team Leader & Concept Development/CAD",
    tools: "SolidWorks",
    team: "7-Person Engineering Team",
    what: "Designed and built a lighter-than-air (LTA) aircraft as part of a 7-person engineering team, integrating a helium balloon, balsa wood structure, propulsion, and flight controls.",
    how: "Developed the aircraft from initial hand sketches into a 3D CAD model and engineering drawing, then helped translate the design into a physical build while considering weight, propulsion, stability, and controllability.",
    result: "Received a qualifying engineering evaluation and achieved a qualifying flight time, allowing our team to advance and compete in a department-wide LTA aircraft competition.",
    images: [
      { src: "images/lta-aircraft/engineering-drawing.png", caption: "Final engineering drawing documenting aircraft geometry and dimensions" },
      { src: "images/lta-aircraft/completed-aircraft.png", caption: "Completed LTA aircraft after construction and testing" }
    ]
  },
  {
    id: "kc135-stratotanker",
    category: "Aircraft CAD Modeling",
    title: "KC-135 Stratotanker",
    summary: "Led a five-person aerospace engineering team in developing a full-scale KC-135 Stratotanker CAD model in SolidWorks.",
    status: "Complete",
    role: "Group Leader / Wing & Flap CAD",
    tools: "SolidWorks / Airfoil Data",
    team: "5-Person Engineering Team",
    what: "Developed a detailed 3D CAD model of the KC-135 Stratotanker, including the fuselage, wings, tail, engines, landing gear, and refueling boom.",
    how: "Led project planning and coordination while modeling the wings and flaps using aircraft dimensions, reference images, and airfoil data. Integrated team components into the final SolidWorks assembly and developed the project presentation and documentation.",
    result: "Produced a completed full-scale SolidWorks model and delivered the project's technical presentation and documentation as a team.",
    images: [
      { src: "images/kc135-stratotanker/reference-geometry.png", caption: "KC-135 reference geometry and dimensional data" },
      { src: "images/kc135-stratotanker/wing-flap-cad.png", caption: "Wing and flap assembly modeled using aircraft airfoil data" },
      { src: "images/kc135-stratotanker/completed-assembly.png", caption: "Completed SolidWorks assembly of the KC-135 Stratotanker" }
    ]
  },
  {
    id: "weight-balance-calculator",
    category: "Numerical Methods / MATLAB Programming",
    title: "Aircraft Weight, Balance & Density Altitude Calculator",
    summary: "Developed MATLAB tools to verify aircraft weight and balance limits and calculate real-time density altitude from live weather data.",
    status: "Complete",
    role: "Sole Developer / Author",
    tools: "MATLAB / OpenWeatherMap API",
    team: "Individual Project",
    what: "Built two independent MATLAB calculators: a weight-and-balance checker for a 1965 Piper Cherokee PA-28-180, and a density altitude calculator for Ames Municipal Airport (KAMW) using live API weather data.",
    how: "Wrote scripts and custom functions with input validation (while loop fuel error checking), calculated ramp weight, moment, and center of gravity against FAA limits, and chained seven equations, including dew point, vapor pressure, virtual temperature, and unit conversions, to compute density altitude from real time temperature, pressure, and humidity.",
    result: "Validated both tools across 6 documented test cases (including overweight and out of balance conditions) and cross-checked density altitude output against the NOAA calculator, landing within a ±150 ft margin of error.",
    images: [
      { src: "images/weight-balance-calculator/matlab-script-1.png", caption: "Weight and balance script and input validation logic in MATLAB" },
      { src: "images/weight-balance-calculator/matlab-script-2.png", caption: "Weight and balance script, continued" },
      { src: "images/weight-balance-calculator/test-output.png", caption: "Live test case output confirming aircraft is within weight and balance limits" }
    ]
  }
];

// ============================================================================
// IN-PROGRESS / CURRENT WORK
// ============================================================================
// Lighter-weight entries for work that's underway but not written up as a
// full case study yet. Shown in the "Current / In Progress" section, not
// clickable, no images required. Once a project here is finished and
// documented, move it up into PROJECTS above (using the full template)
// and delete it from here.
//
// Field guide:
//   title       - project name
//   category    - short tag shown above the title
//   description - 1-2 sentences on what you're doing
//   started     - e.g. "December 2025" (optional, shown as a small meta line)
// ============================================================================

/* TEMPLATE — copy this, uncomment, fill in, and add to the array below:

{
  title: "Project Name",
  category: "Category Name",
  description: "What you're doing.",
  started: "Month Year"
},

*/

const IN_PROGRESS_PROJECTS = [
  {
    title: "Engineering Assistant",
    category: "Independent Project",
    description: "Architecting a unified engineering workspace integrating dual online/offline AI nodes, fabrication tooling, and a secure data-transfer system for isolated engineering workflows.",
    started: "December 2025"
  },
  {
    title: "FPV Drone Build",
    category: "Independent Project",
    description: "Designing and building a custom FPV quadcopter from scratch, including 3D-printed frame fabrication and full electrical/wiring integration.",
    started: "December 2025"
  },
  {
    title: "Tripoli L1 Rocket Certification",
    category: "Independent Project",
    description: "Building a high-power rocket airframe (fin alignment, motor mount/ring installation, epoxy work) ahead of a Level 1 certification flight.",
    started: "December 2025"
  }
];
