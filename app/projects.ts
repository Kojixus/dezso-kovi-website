export type ProjectBlock =
  | { kind: "text"; body: string }
  | { kind: "list"; heading: string; items: string[] };

export type Project = {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  year: string;
  context: string;
  stack: string[];
  repo: string;
  blocks: ProjectBlock[];
};

export const projects: Project[] = [
  {
    slug: "warehouse-robotics",
    name: "warehouse-robotics",
    title: "Warehouse Robotics Efficiency Program",
    tagline:
      "A warehouse simulation that puts a number on what pick path and slotting optimization are worth, before anyone buys a robot.",
    year: "2026",
    context: "Personal project",
    stack: ["Python", "pandas", "matplotlib", "GitHub Actions"],
    repo: "https://github.com/Kojixus/warehouse-robotics",
    blocks: [
      {
        kind: "text",
        body: "Travel time, slotting, and robot reliability are three of the biggest levers on warehouse cost and service performance. The problem is proving a change is worth it: normally you need a live WMS and a real robotics integration before you can measure anything. Small operations and lean consulting teams do not have either.",
      },
      {
        kind: "text",
        body: "This project simulates the warehouse instead. It models a 2D grid with defined zones and prime pick locations, generates synthetic SKUs on a velocity distribution, produces sample orders, and computes baseline KPIs. From there it runs optimizations and measures the before and after, so the value of a change can be demonstrated without touching production.",
      },
      {
        kind: "list",
        heading: "Three workstreams",
        items: [
          "Pick path optimization: baseline routing compared against nearest-neighbor and zone-batching strategies, scored on Manhattan distance across the grid.",
          "Slotting and layout: moving fast-moving SKUs into prime locations to raise prime-zone pick share, visualized as before, after, and delta heatmaps.",
          "Operations control: robot utilization, downtime, MTTR, and fault tracking over time, with an alerting layer that flags problems worth acting on.",
        ],
      },
      {
        kind: "list",
        heading: "KPIs it measures",
        items: [
          "Average travel distance per order and total travel distance per day",
          "Prime zone pick share, and distance reduction against baseline",
          "Expedite SLA risk, modeled as priority-1 orders whose estimated travel exceeds time-to-due",
          "Robot utilization, downtime, and MTTR",
          "Picks per hour, plus alert rate and how actionable those alerts are",
        ],
      },
      {
        kind: "list",
        heading: "What it outputs",
        items: [
          "CSV reports and generated charts for every stage of the pipeline",
          "An audit-ready evidence pack with a run manifest and evidence index",
          "A packaged HTML dashboard collecting the results in one place",
          "Scenario risk simulation comparing throughput and cycle-time p95 across configurations",
        ],
      },
      {
        kind: "text",
        body: "The code is organized as staged modules under src/ (pick_path, slotting, operations, audit_ready, scenarios, portfolio), each runnable on its own or through a single pipeline entry point. Scenarios are config-driven, every dataset is synthetic and reproducible from a fixed random seed, and the repo runs flake8 and a GitHub Actions workflow on push.",
      },
      {
        kind: "text",
        body: "I also kept the project management artifacts in the repo rather than only the code: a project charter with scope and success metrics, a WBS, a schedule outline, a risk log, and a changelog. That side is the part of the work I care most about, and it is the reason the simulation stayed scoped instead of sprawling.",
      },
    ],
  },
  {
    slug: "driver-portfolio",
    name: "website-portfolio-dylan",
    title: "Race Car Driver Portfolio",
    tagline:
      "A portfolio site for a racing driver, built so the driver can update a season without opening a component file.",
    year: "2026",
    context: "Client project",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "three.js"],
    repo: "https://github.com/Kojixus/website-portfolio-dylan",
    blocks: [
      {
        kind: "text",
        body: "A site for driver Dylan Dana, built around a hero-focused homepage and a dedicated on-track page for season results. The visual centerpiece is a 3D telemetry panel rendered with three.js, alongside a track reference asset and highlight video cards.",
      },
      {
        kind: "list",
        heading: "What it includes",
        items: [
          "A homepage covering driver identity, accomplishments, coaching focus areas, and social links",
          "An on-track page with season stats, highlight cards, weekend notes, and a race calendar",
            "A sponsor marquee, plus partner deck and media kit downloads for prospective sponsors",
          "A 3D telemetry panel and custom loading screen",
        ],
      },
      {
        kind: "text",
        body: "The part I think matters most is not visible on the page. Every piece of content lives in one predictable place: race events in a typed data file with enforced date formats and a fixed set of statuses, season stats and highlight cards as named exports, sponsor logos and photos as folders of assets. Rolling to a new season means editing data, not JSX.",
      },
      {
        kind: "text",
        body: "That decision came from the same instinct as the rest of my work: the handoff matters more than the build. A site that only I can update is a site that goes stale the moment I stop touching it.",
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
        body: "Built with the Next.js App Router and React Server Components, styled with hand-written CSS over a token-based theme, and deployed on Vercel with analytics and speed insights wired in.",
      },
      {
        kind: "list",
        heading: "Build notes",
        items: [
          "All content lives in typed data structures at the top of each route, so updating experience or skills never means touching layout code.",
          "Project pages are generated from a single project data module and prerendered at build time.",
          "Colors come entirely from theme tokens rather than hardcoded hex values, so the design stays correct if the theme changes.",
          "A sticky identity rail on desktop collapses to a stacked layout on smaller screens.",
          "Accessibility basics are in place: a skip link, visible focus rings, semantic landmarks, and a reduced-motion guard.",
        ],
      },
      {
        kind: "text",
        body: "It is also the project I iterate on most often, which makes it a reasonable sample of how I work: small changes, verified in the browser, committed with a message that explains why.",
      },
    ],
  },
  {
    slug: "ucf-robot",
    name: "UCF-Freshmen-Robot-Project",
    title: "UCF Freshman Robotics Project",
    tagline:
      "First-year engineering coursework at UCF: embedded C drivers for a line-following robot.",
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
          "Motor control and quadrature encoder reading for closed-loop movement",
          "A reflectance sensor array for line detection and following",
          "Bump sensor handling for collision response",
          "An ambient light sensor (OPT3001) driven over an I2C hardware abstraction layer",
          "Clock and timing routines underpinning the whole control loop",
        ],
      },
      {
        kind: "text",
        body: "This is the oldest thing on the site by six years, and I am keeping it deliberately. It is where the hands-on systems work started, and the habit of reading a datasheet before guessing has been useful in every operations role since.",
      },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
