export type ProjectBlock =
  | { kind: "text"; body: string }
  | { kind: "list"; heading: string; items: string[] };

export type ProjectDocument = {
  href: string;
  label: string;
  meta: string;
};

export type Project = {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  year: string;
  context: string;
  stack: string[];
  repo?: string;
  document?: ProjectDocument;
  blocks: ProjectBlock[];
};

export const projects: Project[] = [
  {
    slug: "aerospace-transport",
    name: "Aerospace Transport",
    title: "Aerospace Transport Project Management Plan",
    tagline:
      "A project management plan for building rocket launch pads, written with a team of six.",
    year: "2025",
    context: "University of Central Florida, Project Management",
    stack: [
      "WBS",
      "CPM network diagram",
      "Time phased budget",
      "Risk matrix",
      "Communications plan",
    ],
    document: {
      href: "/Aerospace-Transport-Project-Management-Plan.pdf",
      label: "Download the project management plan",
      meta: "PDF, 52 pages, 3.1 MB",
    },
    blocks: [
      {
        kind: "text",
        body: "Launch capacity is a bottleneck in the American space industry. Pads in Florida and Texas are booked solid, and many of them were built for large rockets, so the smaller vehicles flying today compete for the same few slots. The wait runs 12 to 18 months. Our plan covers building new launch pads and the ground infrastructure around them, on a notional budget of $350 million with a fixed completion date.",
      },
      {
        kind: "list",
        heading: "What the plan covers",
        items: [
          "A scope statement with goals, objectives, deliverables, and a section listing what the project would explicitly not do.",
          "A priority matrix ranking time first, scope second, and cost third, so we had an agreed answer for tradeoffs before we needed one.",
          "A work breakdown structure of seven summary tasks broken into 24 work packages, each with an index number.",
          "Duration estimates, a project network diagram, and the critical path traced through the schedule.",
          "A cost estimate split into labor, material, and equipment for every work package.",
          "A human resource plan and a time phased budget covering 3,610 labor hours over 171 working days.",
          "A stakeholder register, a communications plan, and a risk matrix scored on probability and impact.",
        ],
      },
      {
        kind: "text",
        body: "I was project lead. My sections were the scope statement and exclusions, the goals and objectives, the deliverables list, the success criteria, the priority matrix, the WBS and its chart, the network diagram, human resource allocation, and the time phased budget table.",
      },
      {
        kind: "text",
        body: "Some of the technical detail was past what I could work out on my own as a business student. I had questions about rocket weights, about flame trench and water cooling requirements, and about which fuel types we needed storage for. Friends in the Aerospace and Mechanical Engineering programs walked me through those, and I checked the specifications with them before they went into the plan.",
      },
      {
        kind: "text",
        body: "The success criteria were written to be specific enough to test. Finish by a fixed date, stay within 10% of budget, obtain FAA, EPA, and OSHA approvals, launch three rockets of different classes within 60 days, and pass inspection with zero critical defects.",
      },
      {
        kind: "text",
        body: "The exclusions section is the part I got the most out of. We wrote down what the project would not cover: rocket manufacturing, ongoing operations after handover, visitor facilities, and deep space communications. Anything past those lines belonged to the facility operator, and putting that in writing early kept the scope from drifting.",
      },
    ],
  },
  {
    slug: "warehouse-robotics",
    name: "warehouse-robotics",
    title: "Warehouse Robotics Efficiency Program",
    tagline:
      "A warehouse simulation for testing pick path and slotting changes without a live WMS or a real robot.",
    year: "2026",
    context: "Personal project",
    stack: ["Python", "pandas", "matplotlib", "GitHub Actions"],
    repo: "https://github.com/Kojixus/warehouse-robotics",
    blocks: [
      {
        kind: "text",
        body: "Travel time, slotting, and robot reliability drive a lot of warehouse cost and service performance. Proving that a change helps is the hard part, because you normally need a live WMS and a working robotics integration before you can measure anything. Smaller operations and lean consulting teams have neither.",
      },
      {
        kind: "text",
        body: "This simulates the warehouse instead. It builds a 2D grid with zones and prime pick locations, generates synthetic SKUs on a velocity distribution, produces sample orders, and computes baseline KPIs. Then it runs the optimizations and measures what changed, so you can show what a change is worth without touching production.",
      },
      {
        kind: "list",
        heading: "Three workstreams",
        items: [
          "Pick path optimization: baseline routing compared against nearest neighbor and zone batching, scored on Manhattan distance across the grid.",
          "Slotting and layout: moving high velocity SKUs into prime locations to raise prime zone pick share, shown as before, after, and delta heatmaps.",
          "Operations control: robot utilization, downtime, MTTR, and fault tracking over time, with alerts for the problems that need attention.",
        ],
      },
      {
        kind: "list",
        heading: "KPIs it measures",
        items: [
          "Average travel distance per order, and total travel distance per day",
          "Prime zone pick share, and distance reduction against baseline",
          "Expedite SLA risk, modeled as priority 1 orders whose estimated travel exceeds the time left before they are due",
          "Robot utilization, downtime, and MTTR",
          "Picks per hour, alert rate, and how actionable those alerts are",
        ],
      },
      {
        kind: "list",
        heading: "What it outputs",
        items: [
          "CSV reports and charts for every stage of the pipeline",
          "An evidence pack built for audit, with a run manifest and an evidence index",
          "A packaged HTML dashboard that collects the results in one place",
          "Scenario risk simulation comparing throughput and cycle time p95 across configurations",
        ],
      },
      {
        kind: "text",
        body: "The code sits in staged modules under src/ (pick_path, slotting, operations, audit_ready, scenarios, portfolio). Each one runs on its own or as part of a single pipeline. Scenarios come from config files, every dataset is synthetic and reproducible from a fixed random seed, and the repo runs flake8 and a GitHub Actions workflow on push.",
      },
      {
        kind: "text",
        body: "I kept the project management artifacts in the repo alongside the code: a project charter with scope and success metrics, a WBS, a schedule outline, a risk log, and a changelog. Those are the parts I enjoy most, and they are what kept the simulation from growing past what I could actually finish.",
      },
    ],
  },
  {
    slug: "driver-portfolio",
    name: "website-portfolio-dylan",
    title: "Race Car Driver Portfolio",
    tagline:
      "A portfolio site for a racing driver, built so he can update a season himself.",
    year: "2026",
    context: "Client project",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "three.js"],
    repo: "https://github.com/Kojixus/website-portfolio-dylan",
    blocks: [
      {
        kind: "text",
        body: "A site for driver Dylan Dana, with a homepage built around driver identity and a separate page for race results. The centerpiece is a 3D telemetry panel rendered with three.js, alongside a track reference graphic and highlight video cards.",
      },
      {
        kind: "list",
        heading: "What it includes",
        items: [
          "A homepage covering driver identity, accomplishments, coaching focus areas, and social links",
          "A results page with season stats, highlight cards, weekend notes, and a race calendar",
          "A sponsor marquee, plus partner deck and media kit downloads for prospective sponsors",
          "A 3D telemetry panel and a custom loading screen",
        ],
      },
      {
        kind: "text",
        body: "Most of the work went somewhere you cannot see on the page. Every piece of content sits in one predictable place: race events in a typed data file with enforced date formats and a fixed set of statuses, season stats and highlight cards as named exports, and sponsor logos and photos in asset folders. Updating a season means changing data files and nothing else.",
      },
      {
        kind: "text",
        body: "I built it that way because Dylan needs to keep it current himself. If every update had to come through me, the site would be a season out of date by the time anyone noticed.",
      },
    ],
  },
  {
    slug: "portfolio-site",
    name: "dezso-kovi-website",
    title: "This Site",
    tagline:
      "The portfolio you are reading, built on the Next.js App Router and deployed on Vercel.",
    year: "2026",
    context: "Personal project",
    stack: ["Next.js", "React", "TypeScript", "CSS", "Vercel"],
    repo: "https://github.com/Kojixus/dezso-kovi-website",
    blocks: [
      {
        kind: "text",
        body: "Built on the Next.js App Router with React Server Components, styled with CSS I wrote by hand over a set of theme tokens, and deployed on Vercel with analytics and speed insights.",
      },
      {
        kind: "list",
        heading: "Build notes",
        items: [
          "All content lives in typed data structures at the top of each route, so updating experience or skills never means touching layout code.",
          "Project pages are generated from a single data module and prerendered at build time.",
          "Colors come from theme tokens instead of hardcoded hex values, so the design stays correct if the theme changes.",
          "A sticky identity rail on desktop collapses to a stacked layout on smaller screens.",
          "Accessibility basics are covered: a skip link, visible focus rings, semantic landmarks, and a reduced motion guard.",
        ],
      },
      {
        kind: "text",
        body: "This is the project I change most often, so the commit history is a fair record of how I work.",
      },
    ],
  },
  {
    slug: "ucf-robot",
    name: "UCF-Freshmen-Robot-Project",
    title: "UCF Freshman Robotics Project",
    tagline:
      "First year engineering coursework at UCF: embedded C drivers for a line following robot.",
    year: "2019",
    context: "University coursework",
    stack: ["C", "TI MSP432", "Code Composer Studio"],
    repo: "https://github.com/Kojixus/UCF-Freshmen-Robot-Project",
    blocks: [
      {
        kind: "text",
        body: "A freshman engineering project at the University of Central Florida, built on the Texas Instruments robotics kit and programmed in C against an MSP432 microcontroller.",
      },
      {
        kind: "list",
        heading: "What the code covers",
        items: [
          "Motor control and quadrature encoder reading for closed loop movement",
          "A reflectance sensor array for line detection and following",
          "Bump sensor handling for collision response",
          "An ambient light sensor (OPT3001) driven over an I2C hardware abstraction layer",
          "Clock and timing routines underneath the whole control loop",
        ],
      },
      {
        kind: "text",
        body: "This is the oldest thing on the site by six years and I kept it on purpose. It was my first real exposure to hardware, and to reading a datasheet instead of guessing.",
      },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
