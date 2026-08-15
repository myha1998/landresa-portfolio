export type GalleryItem = {
  src: string;
  cap: string;
  wide?: boolean;
};

export type StructureSystem = {
  title: string;
  items: string[];
};

export type Project = {
  index: string;
  slug: string;
  title: string;
  category: string;
  course: string;
  year: string;
  status: "FEATURED" | "ARCHIVED";
  description: string;
  image: string;
  alt: string;
  location: string;
  tools: string;
  role: string;
  program: string[];
  concept: string;
  gallery: GalleryItem[];
  structure?: { primary: StructureSystem; secondary: StructureSystem };
  site?: string;
};

const base = "/img/webp";

export const projects: Project[] = [
  {
    index: "01",
    slug: "civil-center-cultural-facility",
    title: "Civil Center with Cultural Facility",
    category: "CIVIC · AR-8 FINAL PLATE",
    course: "AR-8 Final Plate",
    year: "2026",
    status: "FEATURED",
    description:
      "A Civic Center with Cultural Facility gestated from the shape of the kulintang, with bamboo shingles on the roof. Program includes a civic area, public library, black box, exhibit hall, commercial area, basement parking, and roof garden — applying tropical and vernacular architecture.",
    image: `${base}/civil-center-cultural-facility/exterior.webp`,
    alt: "Civil Center with Cultural Facility — exterior perspective render",
    location: "Davao City, Philippines",
    tools: "CADD · ENSCAPE · PHOTOSHOP",
    role: "Design Concept · Rendering",
    program: [
      "CIVIC AREA",
      "PUBLIC LIBRARY",
      "BLACK BOX",
      "EXHIBIT HALL",
      "COMMERCIAL AREA",
      "BASEMENT PARKING",
      "ROOF GARDEN",
    ],
    concept:
      "The design concept is derived from the shape of the kulintang, with bamboo shingles on the roof. Applying tropical and vernacular architecture, the project expresses public identity, structural clarity, and environmental response — a civic landmark woven from the patterns, weaving, and spatial traditions of Davao City's 11 tribes.",
    gallery: [
      {
        src: `${base}/civil-center-cultural-facility/exterior-2.webp`,
        cap: "Second exterior view — facade and public approach",
        wide: true,
      },
      {
        src: `${base}/civil-center-cultural-facility/concept-board-final.webp`,
        cap: "Concept board — kulintang form and bamboo shingle study",
      },
      {
        src: "",
        cap: "Scheme options / massing study (placeholder)",
      },
      {
        src: `${base}/civil-center-cultural-facility/aerial.webp`,
        cap: "Aerial perspective — site in context",
      },
      {
        src: `${base}/civil-center-cultural-facility/aerial-2.webp`,
        cap: "Aerial perspective — roof language and public ground",
      },
      {
        src: `${base}/civil-center-cultural-facility/a1-board.webp`,
        cap: "Final A1 presentation board",
        wide: true,
      },
    ],
    structure: {
      primary: {
        title: "Primary Structural System — Arched or Bamboo Frame",
        items: [
          "Acts as the main skeleton; supports layers; resists vertical and lateral loads",
          "Curved geometry enables long spans without internal columns",
          "Bamboo's tensile strength allows elegant curvature and flexibility",
          "Sustainable, locally sourced — perfect for tropical, culturally rooted civic architecture",
          "Reduces embodied carbon, promotes regenerative design",
        ],
      },
      secondary: {
        title: "Secondary System — Inclined Column / V-Column System",
        items: [
          "Carries vertical loads; inclined to also resist lateral forces",
          "Transfers loads more efficiently than straight vertical columns",
          "V-shape creates a striking architectural identity with structural clarity",
          "Supports can reduce columns, freeing open space; elevating the building creates an open public ground level",
        ],
      },
    },
    site: "Davao City — flood-prone area near Matina Aplaya Road. Surroundings: major and secondary roads, commercial and residential zones, green areas.",
  },
  {
    index: "02",
    slug: "eleven-horizons-tower",
    title: "Eleven Horizons Tower",
    category: "HIGH-RISE · THESIS",
    course: "Thesis",
    year: "2026",
    status: "FEATURED",
    description:
      "A proposed high-rise mixed-use building for resilient development in Davao City. Draws from the 11 tribes of Davao City, abstracting their patterns, weaving, and spatial traditions into a modern architectural language.",
    image: `${base}/eleven-horizons-tower/site-analysis.webp`,
    alt: "Eleven Horizons Tower — site analysis board",
    location: "Davao City, Philippines · Piapi",
    tools: "CADD · ENSCAPE · PHOTOSHOP",
    role: "Design Concept · Site Analysis",
    program: [
      "GREEN AREA",
      "ROAD ACCESS",
      "ZONING",
      "WATERSHED",
      "UTILITY",
      "HAZARD MAPPING",
    ],
    concept:
      "A high-rise mixed-use building for resilient development in Davao City. The design draws from the 11 tribes, abstracting their patterns, weaving, and spatial traditions into a modern architectural language — designed for comfort and elegance in an urban setting.",
    gallery: [
      {
        src: `${base}/eleven-horizons-tower/site-analysis.webp`,
        cap: "Site analysis board — zoning, green area, road access, climate considerations",
        wide: true,
      },
      {
        src: `${base}/eleven-horizons-tower/concept.webp`,
        cap: "Concept board — massing and tribal pattern abstraction",
      },
      {
        src: "",
        cap: "Tower exterior perspective (placeholder)",
      },
      {
        src: "",
        cap: "Structural diagram (placeholder)",
      },
    ],
    structure: {
      primary: {
        title: "Design Strategies",
        items: [
          "Resolve — clear local and cultural identity; public / service zoning",
          "Smart & Resilience — flood spaces, systems and utilities",
          "Target users: students and urban community",
          "Frank Gehry–inspired precedents (Arch 4A)",
        ],
      },
      secondary: {
        title: "Design Narratives",
        items: [
          "Concept development / design morphology",
          "Design objectives and target users",
          "Design philosophy grounded in place",
        ],
      },
    },
    site: "Davao City — flood-prone areas mapped via hazard mapping; climate considerations 24\"–40\" rainfall per monsoon.",
  },
  {
    index: "03",
    slug: "panaghiusa-interchange-terminal",
    title: "Panaghiusa Interchange Terminal",
    category: "CIVIC · TRANSPORT · AR-8 MIDTERM",
    course: "AR-8 Midterm Plate",
    year: "2026",
    status: "FEATURED",
    description:
      "An interchange terminal (same concept from Prelim) that draws from the 11 tribes of Davao City, abstracting their patterns, weaving, and spatial traditions into a modern architectural language.",
    image: "",
    alt: "Panaghiusa Interchange Terminal — exterior perspective render",
    location: "Davao City, Philippines",
    tools: "CADD · ENSCAPE · PHOTOSHOP",
    role: "Design Concept · Rendering",
    program: [],
    concept:
      "An interchange terminal — with the same conceptual lineage as the Prelim — that draws from the 11 tribes of Davao City, abstracting their patterns, weaving, and spatial traditions into a modern architectural language. Designed for comfort, efficiency, and elegance in an urban setting.",
    gallery: [
      {
        src: "",
        cap: "Terminal exterior perspective (placeholder)",
        wide: true,
      },
      {
        src: "",
        cap: "Floor plans (placeholder)",
      },
    ],
    site: "Davao City — urban interchange site; access and circulation at the core of the brief.",
  },
  {
    index: "04",
    slug: "sawali-residential",
    title: "SAWALI · Two-Storey Residential Building",
    category: "RESIDENTIAL · FIRST RENDER CADD 2",
    course: "CADD 2 — First Render",
    year: "2026",
    status: "FEATURED",
    description:
      "My first comprehensive hands-on experience with 3D modeling and rendering in CADD 2. \"SAWALI\" bridges traditional Filipino architectural motifs with modern residential functionality.",
    image: `${base}/sawali-residential/exterior.webp`,
    alt: "SAWALI two-storey residential building — exterior perspective render",
    location: "Philippines",
    tools: "CADD · ENSCAPE · PHOTOSHOP",
    role: "Site Analysis · Floor Planning · Rendering",
    program: ["TWO STOREYS", "EXTERIOR + INTERIOR PERSPECTIVES", "VERNACULAR MOTIFS"],
    concept:
      "\"SAWALI\" is a vernacular Philippine-inspired residential house that celebrates Filipino architectural heritage while addressing contemporary needs for sustainability and comfort. The process began with rigorous site analysis and floor planning, translated into realistic interior and exterior perspectives — experimenting with digital materials and natural lighting to capture the \"spirit of the Philippines\".",
    gallery: [
      {
        src: `${base}/sawali-residential/exterior.webp`,
        cap: "Exterior perspective — main approach",
        wide: true,
      },
      {
        src: `${base}/sawali-residential/exterior-2.webp`,
        cap: "Exterior perspective — alternate view",
      },
      {
        src: `${base}/sawali-residential/front-elevation.webp`,
        cap: "Front elevation",
      },
    ],
    structure: {
      primary: {
        title: "Design Concept",
        items: [
          "Bridges traditional Filipino architectural motifs with modern residential functionality",
          "Draws inspiration from the rich architectural heritage of the Philippines",
          "Comfort, sustainability, and a connection to nature",
        ],
      },
      secondary: {
        title: "Deliverables",
        items: ["Elevations — Front / Right / Rear / Left", "Perspectives — Exterior / Interior"],
      },
    },
    site: "Philippine residential site — vernacular context at the center of the design.",
  },
  {
    index: "05",
    slug: "civic-complex-tawi-tawi",
    title: "Civic Complex, Panglima Sugala",
    category: "MUNICIPAL / CIVIC",
    course: "AR-7 Major Plate",
    year: "2025",
    status: "ARCHIVED",
    description:
      "A visionary Civic Complex designed to serve as the heart of Panglima Sugala, Tawi-Tawi — consolidating government functions and public services into a single, cohesive space.",
    image: "",
    alt: "Civic Complex, Panglima Sugala — masterplan perspective",
    location: "Panglima Sugala, Tawi-Tawi",
    tools: "CADD · ENSCAPE · PHOTOSHOP",
    role: "Design Concept · Masterplan",
    program: ["GOVERNMENT FUNCTIONS", "PUBLIC SERVICES", "CIVIC DIALOGUE VENUES", "CULTURAL EVENTS"],
    concept:
      "A Civic Complex designed as the heart of Panglima Sugala, Tawi-Tawi — a dynamic, inclusive hub that consolidates essential government functions and public services into a single, cohesive space. The design intentionally reflects the cultural heritage and future aspirations of the local community, blending tradition with modern civic functionality.",
    gallery: [
      {
        src: "",
        cap: "Masterplan perspective (placeholder)",
        wide: true,
      },
      {
        src: "",
        cap: "Streetscape / civic spaces (placeholder)",
      },
    ],
    structure: {
      primary: {
        title: "Design Goals",
        items: [
          "Enhance governance and transparency",
          "Foster a vibrant streetscape",
          "Encourage active community participation",
        ],
      },
      secondary: {
        title: "Planning",
        items: [
          "Efficient land use",
          "Community-oriented master plan",
          "A vital landmark supporting the social fabric of Tawi-Tawi",
        ],
      },
    },
    site: "Panglima Sugala, Tawi-Tawi — civic heart of the municipality.",
  },
  {
    index: "06",
    slug: "mixed-use-high-rise",
    title: "Mixed-Use 30-Storey High Rise",
    category: "MIXED-USE",
    course: "AR-8 Prelim Plate",
    year: "2025",
    status: "ARCHIVED",
    description:
      "A mixed-used 30-storey high rise building drawing from the 11 tribes of Davao City, abstracting their patterns, weaving, and spatial traditions into a modern architectural language.",
    image: `${base}/mixed-use-high-rise/exterior.webp`,
    alt: "Mixed-use 30-storey high rise building — exterior perspective render",
    location: "Davao City, Philippines",
    tools: "CADD · ENSCAPE · PHOTOSHOP",
    role: "Design Concept · Rendering",
    program: [],
    concept:
      "A mixed-used 30-storey high rise building drawing from the 11 tribes of Davao City, abstracting their patterns, weaving, and spatial traditions into a modern architectural language. Designed for comfort and elegance in an urban setting.",
    gallery: [
      {
        src: `${base}/mixed-use-high-rise/exterior.webp`,
        cap: "Exterior perspective — tower in context",
        wide: true,
      },
      {
        src: `${base}/mixed-use-high-rise/exterior-2.webp`,
        cap: "Exterior perspective — alternate view",
      },
      {
        src: `${base}/mixed-use-high-rise/concept-board.webp`,
        cap: "Concept board — tribal pattern abstraction",
      },
    ],
    site: "Davao City — urban high-rise context.",
  },
  {
    index: "07",
    slug: "adaptive-reuse-dormitory",
    title: "Adaptive Reuse · Residential Conversion",
    category: "ADAPTIVE REUSE",
    course: "AR-8",
    year: "2025",
    status: "ARCHIVED",
    description:
      "Conversion of an abandoned three-storey residential structure — with mid-20th-century Filipino architectural elements — into a student dormitory and study hub.",
    image: "",
    alt: "Adaptive reuse residential conversion — student dormitory",
    location: "Davao City, Philippines · Piapi Boulevard",
    tools: "CADD · ENSCAPE · PHOTOSHOP",
    role: "Adaptive Reuse · Space Planning",
    program: ["STUDENT DORMITORY", "STUDY HUB", "COMMERCIAL-RESIDENTIAL HYBRID"],
    concept:
      "A three-storey mid-20th-century residence near Davao City's universities along Piapi Boulevard, converted into a student dormitory and study hub. The project blends \"historic charm\" with modern, high-performance study environments. By transitioning the building into a commercial-residential hybrid, generated revenue funds ongoing maintenance while breathing new life into the structure.",
    gallery: [
      {
        src: "",
        cap: "Existing structure (placeholder)",
        wide: true,
      },
      {
        src: "",
        cap: "Converted dormitory perspective (placeholder)",
      },
    ],
    structure: {
      primary: {
        title: "Why Adaptive Reuse",
        items: [
          "Strategic response to Davao City's academic housing demand",
          "Unparalleled transit accessibility; reduced commute times",
          "Long-term preservation through revenue generation",
        ],
      },
      secondary: {
        title: "Site",
        items: ["Near major universities", "Along the well-connected Piapi Boulevard"],
      },
    },
    site: "Piapi Boulevard, Davao City — ideal transit accessibility for the academic community.",
  },
  {
    index: "08",
    slug: "acoustic-auditorium-black-box",
    title: "Auditorium & Black Box",
    category: "ACOUSTICS / LIGHTING",
    course: "Acoustic Plates",
    year: "2025",
    status: "ARCHIVED",
    description:
      "My first experience designing high-performance spaces like Auditoriums and Black Box theaters — synthesizing acoustic planning and specialized lighting with functional floor plans.",
    image: "",
    alt: "Auditorium and black box — acoustic render",
    location: "University project",
    tools: "AUTOCAD · 3D RENDERING",
    role: "Acoustics · Lighting · Space Planning",
    program: ["AUDITORIUM", "BLACK BOX THEATER", "ACOUSTIC ZONING", "SPECIALIZED LIGHTING"],
    concept:
      "This project showcases my development in specialized architectural design through the Acoustic Plates — my first experience designing high-performance spaces like auditoriums and black box theaters. I learned to synthesize complex technical requirements such as acoustic planning and specialized lighting with functional floor plans, refining my ability to visualize how light and sound interact within a space.",
    gallery: [
      {
        src: "",
        cap: "Auditorium render (placeholder)",
        wide: true,
      },
      {
        src: "",
        cap: "Black box render (placeholder)",
      },
    ],
    structure: {
      primary: {
        title: "Technical Focus",
        items: [
          "Acoustic planning",
          "Specialized lighting",
          "Functional floor plans",
        ],
      },
      secondary: {
        title: "Outcome",
        items: [
          "Second major venture into digital design",
          "Ongoing progress in AutoCAD and 3D rendering",
        ],
      },
    },
    site: "University acoustic plates — auditorium and black box theater.",
  },
];

export const featuredProjects = projects.filter((p) => p.status === "FEATURED");

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectNeighbors(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i < projects.length - 1 ? projects[i + 1] : null,
  };
}

export const skills = [
  "AUTOCAD",
  "SKETCHUP",
  "ENSCAPE",
  "PHOTOSHOP",
  "CORELDRAW",
  "TRADITIONAL DRAFTING",
  "DIGITAL MODELING",
];

export const facts = [
  { label: "UNIVERSITY", value: "UNIVERSITY OF THE IMMACULATE CONCEPTION" },
  { label: "LOCATION", value: "DAVAO CITY, PHILIPPINES" },
  { label: "FOCUS", value: "ARCHITECTURAL DESIGN / RENDERING" },
  { label: "BUSINESS", value: "FAMILY-RUN PRINTING SERVICES" },
];

export const contact = {
  email: "230000002665@UIC.EDU.PH",
  phone: "0951 457 0301",
  location: "DAVAO CITY, PHILIPPINES",
};