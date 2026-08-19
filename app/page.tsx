import Link from "next/link";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { projects } from "./projects";

const githubUser = "Kojixus";

const contact = {
  name: "Dezso Kovi",
  role: "Project Management & Supply Chain",
  location: "Orlando, FL",
  phone: "(561) 460-3743",
  email: "dkovi24@gmail.com",
  linkedin: "https://linkedin.com/in/dezsokovi",
  github: `https://github.com/${githubUser}`,
};

const about = [
  "I work at the point where project management meets supply chain. In practice that means subcontract sourcing, procurement, and the business operations holding both of them together.",
  "Most of my day happens inside ERP systems and spreadsheets. Right now I am modeling warehouse storage capacity against 800,000 rows of Prophet 21 data, profiling 18,000 SKUs and 11,000 pick locations to find space a distribution center did not know it had.",
  "Before this I sourced subcontracts above the TINA threshold at L3Harris, working under FAR and DFARS on F-35 Technology Refresh contracts. For four years before that I ran IT projects and a team of five contractors at Validity Hosting, delivering an average of 10% under budget.",
  "I graduated from UCF in 2025 with a B.S. in Business Administration, and I am working toward the CAPM. Based in Orlando, FL, and a dual citizen of the US and Canada.",
];

const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "leadership", label: "Leadership" },
  { id: "education", label: "Education" },
  { id: "coursework", label: "Coursework" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

const experience = [
  {
    company: "Radix Consulting Alliance",
    location: "Hybrid",
    role: "Data Analyst",
    dates: "March 2026 - Present",
    bullets: [
      "Built a storage capacity model comparing usable cubic feet against on-hand inventory, identifying 205 underutilized spaces through heat mapping analysis.",
      "Proficient in AI-prompting; analyzing 800,000 rows of ERP (Prophet 21) order, production, transfer, inventory, and item master data for distribution center operations.",
      "Constructed an Excel model using XLOOKUP, SUMIFS, COUNTIFS, PivotTables, and array formulas to profile 18,000 SKUs and 11,000 pick locations.",
      "Documented current state processes and future state requirements across six operational areas for a replacement WMS.",
    ],
  },
  {
    company: "L3Harris Technologies",
    location: "Malabar, FL",
    role: "Subcontractor Intern",
    dates: "June 2025 - August 2025",
    bullets: [
      "Executed subcontract sourcing processes, including RFQ, RFP, PO issuance, BOM reviews, and NDAs, for contracts exceeding $2 million across multiple contract types (FFP, Cost-Plus, T&M).",
      "Conducted subcontract sourcing for projects exceeding the Truth in Negotiations Act (TINA) threshold ($2M+), ensuring compliance and best-value contracting.",
      "Ensured 100% compliance with FAR, DFARS, public law requirements, company policies, government audit readiness, and legal adherence.",
      "Provided sourcing for the F-35 Technology Refresh (TR2 & TR3) initiatives, managing contracts involving complex engineering specifications and high-value procurement.",
      "Analyzed supplier performance metrics, contributing to a 10% improvement in on-time deliverables.",
      "Engaged in team training on procurement systems, compliance standards, and supplier relationship management.",
    ],
  },
  {
    company: "Validity Hosting",
    location: "Orlando, FL",
    role: "IT Project Manager",
    dates: "July 2021 - June 2025",
    bullets: [
      "Defined project scope, schedule, and budget with co-founders and contractors, ensuring tracking and reporting across 5 projects.",
      "Led a team of 5 contractors, coordinating project scope, schedule, and budget to deliver projects 10% under budget on average.",
      "Implemented cost-saving DevOps and vendor management strategies, reducing operating expenses by 12% within the first year through workload automation and resource optimization.",
      "Utilized AI-driven project management and workflow automation tools to improve operational efficiency, documentation, task prioritization, and cross-functional collaboration.",
    ],
  },
  {
    company: "Tilton Legacy",
    location: "Winter Park, FL",
    role: "Project Management Intern",
    dates: "May 2023 - August 2023",
    bullets: [
      "Delivered a build investment package for a $1,000,000+ motel deal, contacted investors, and sent project status reports for management, clients, and stakeholders.",
      "Communicated project scope, schedule, budget, and project risk mitigation strategies with co-founders and contractors to ensure project alignment and operational efficiency.",
      "Coordinated stakeholder meetings to maintain project alignment and clear communication.",
    ],
  },
  {
    company: "Radix Consulting Alliance",
    location: "West Palm Beach, FL",
    role: "Logistics Analyst",
    dates: "January 2016 - January 2021",
    bullets: [
      "Analyzed transportation and inventory data to identify trends, reduce shipping costs by 15%, and improve delivery performance across regional distribution centers.",
      "Led monthly analytics reviews with stakeholders, providing actionable recommendations based on logistics data trends.",
      "Supported implementation of a warehouse management system by providing data mapping and analytics support during migration.",
      "Developed and maintained Excel spreadsheets to monitor supply chain KPIs such as lead times and freight spend.",
    ],
  },
];

const leadership = [
  {
    org: "University of Central Florida, Project Management",
    title: "Aerospace Transport, Project Lead",
    dates: "January 2025 - May 2025",
    bullets: [
      "Managed and built the Work Breakdown Structure (WBS) with 24 detailed work packages, enabling clear task ownership and effective progress tracking across all phases.",
      "Constructed a CPM network diagram (ES/EF, LS/LF) and the critical path for schedule control and cost across procurement, logistics, and delivery phases.",
      "Built a communications plan with weekly status, monthly exec updates, bi-weekly risk issue logging, and compliance reporting.",
    ],
  },
  {
    org: "Knights Racing Formula SAE (UCF)",
    title: "Secretary & Website Developer",
    dates: "May 2024 - May 2025",
    bullets: [
      "Managed internal documentation, membership records, and leadership coordination for the Formula SAE team as an RSO Officer.",
      "Recorded and distributed meeting minutes across subteams, and documented processes and transition materials for incoming leadership.",
      "Managed new member onboarding and tracked required safety forms before members were cleared to work on the car.",
      "Built and maintained the team WordPress site, and supported sponsorship outreach and budgeting for the next competition season.",
    ],
  },
  {
    org: "Knights Racing Formula SAE (UCF)",
    title: "Outreach Lead & Website Developer",
    dates: "September 2023 - May 2024",
    bullets: [
      "Led outreach for the Formula SAE team, supporting sponsor engagement, promotional efforts, and external communications.",
      "Assisted with sponsorship prospecting and relationship management to expand team support and funding.",
      "Designed and built the team WordPress site to improve online presence, sponsor recognition, and recruitment.",
    ],
  },
];

const education = {
  school: "University of Central Florida",
  location: "Orlando, FL",
  degree: "B.S. Business Administration, Integrated Business",
  dates: "January 2021 - August 2025",
};

const coursework = [
  {
    title: "Project Management",
    note: "Scope, WBS, CPM scheduling, budgeting, and risk planning. The basis for the Aerospace Transport project lead work.",
  },
  {
    title: "Supply Chain & Operations Management",
    note: "Inventory, logistics, and operations planning across a distribution network.",
  },
  {
    title: "Management Information Systems",
    note: "How ERP and business systems fit together, and where the data behind them actually lives.",
  },
  {
    title: "Intro to Programming with C",
    note: "Fundamentals of programming, control flow, and memory.",
  },
  {
    title: "Computer Architecture Concepts",
    note: "How hardware executes instructions, and why performance behaves the way it does.",
  },
];

const skillGroups = [
  {
    key: "ops",
    label: "Project & supply chain",
    items: [
      "IT Project Management",
      "Procurement & Subcontract Sourcing",
      "FAR / DFARS Compliance",
      "Supply Chain Analytics",
      "KPI Dashboards",
      "Vendor Management",
      "Process Documentation",
    ],
  },
  {
    key: "systems",
    label: "Systems & data",
    items: [
      "ERP (Prophet 21)",
      "ERP / MRP (Control Cincom)",
      "SAP",
      "Microsoft Excel",
      "SQL",
      "Tableau",
      "Power BI",
      "Jira",
      "Trello",
      "Microsoft Project",
      "Microsoft 365",
    ],
  },
  {
    key: "build",
    label: "Web & tooling",
    items: [
      "WordPress",
      "Vercel Deployment",
      "HTML",
      "CSS",
      "PHP",
      "GitHub",
      "Claude Code",
      "AI Codex",
      "AI Prompting",
      "Canva",
      "Adobe Photoshop",
      "Adobe Lightroom",
    ],
  },
];

const certifications = [
  "Google IT Support Professional Certificate",
  "Google Introduction to Project Management",
  "Six Sigma Yellow Belt",
  "Anthropic AI Framework",
  "CAPM, in progress",
];

const coursesTaken = [
  "Talking to AI: Prompt Engineering for Project Managers",
  "AI Pair Programming with GitHub Copilot",
  "TestOut IT Fundamentals Pro",
  "AWS Certified Database Specialty (DBS-C01) Cert Prep",
  "Excel Spreadsheet Design: Extreme Makeover",
  "PowerPoint Essential Training (Microsoft 365)",
  "Sustainability Strategies",
];

export default function Home() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="shell">
        <header className="rail">
          <div className="rail-top">
            <h1 className="rail-name">{contact.name}</h1>
            <p className="rail-role">{contact.role}</p>
            <p className="rail-blurb">
              Turning operational data into decisions across procurement,
              logistics, and the systems underneath them.
            </p>

            <nav className="rail-nav" aria-label="Sections">
              <ul>
                {nav.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>
                      <span className="rail-nav-line" aria-hidden="true" />
                      <span className="rail-nav-label">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="rail-bottom">
            <ul className="rail-links">
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={contact.linkedin}>LinkedIn</a>
              </li>
              <li>
                <a href={contact.github}>GitHub</a>
              </li>
            </ul>
            <p className="rail-meta">
              {contact.location} · {contact.phone}
            </p>
          </div>
        </header>

        <main className="content" id="main">
          <section className="section" id="about" aria-labelledby="about-h">
            <p className="section-label">
              <span className="section-num">01</span> About
            </p>
            <h2 className="section-title" id="about-h">
              What I do
            </h2>
            <p className="lede">{about[0]}</p>
            {about.slice(1).map((paragraph) => (
              <p className="body" key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}
          </section>

          <section
            className="section"
            id="experience"
            aria-labelledby="experience-h"
          >
            <p className="section-label">
              <span className="section-num">02</span> Experience
            </p>
            <h2 className="section-title" id="experience-h">
              Where I have worked
            </h2>
            <ExperienceTimeline roles={experience} />
          </section>

          <section
            className="section"
            id="leadership"
            aria-labelledby="leadership-h"
          >
            <p className="section-label">
              <span className="section-num">03</span> Leadership
            </p>
            <h2 className="section-title" id="leadership-h">
              Leading teams and projects
            </h2>
            <div className="entry-list">
              {leadership.map((item) => (
                <article className="entry" key={`${item.org}-${item.dates}`}>
                  <p className="entry-dates">{item.dates}</p>
                  <div className="entry-body">
                    <h3 className="entry-title">{item.title}</h3>
                    <p className="entry-org">{item.org}</p>
                    <ul className="bullets">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            className="section"
            id="education"
            aria-labelledby="education-h"
          >
            <p className="section-label">
              <span className="section-num">04</span> Education
            </p>
            <h2 className="section-title" id="education-h">
              University of Central Florida
            </h2>
            <article className="entry">
              <p className="entry-dates">{education.dates}</p>
              <div className="entry-body">
                <h3 className="entry-title">{education.degree}</h3>
                <p className="entry-org">
                  {education.school} · {education.location}
                </p>
              </div>
            </article>
          </section>

          <section
            className="section"
            id="coursework"
            aria-labelledby="coursework-h"
          >
            <p className="section-label">
              <span className="section-num">05</span> Coursework
            </p>
            <h2 className="section-title" id="coursework-h">
              Relevant coursework
            </h2>
            <p className="body">
              The classes from my degree that map most directly onto the work I
              do now.
            </p>
            <ul className="course-list">
              {coursework.map((course) => (
                <li key={course.title}>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-note">{course.note}</p>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="section"
            id="projects"
            aria-labelledby="projects-h"
          >
            <p className="section-label">
              <span className="section-num">06</span> Projects
            </p>
            <h2 className="section-title" id="projects-h">
              Things I have built
            </h2>
            <p className="body">
              Simulation work, client sites, and coursework. Each one has a
              write-up with a link to the source.
            </p>

            <ul className="project-list">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link className="project" href={`/projects/${project.slug}`}>
                    <span className="project-head">
                      <span className="project-name">{project.title}</span>
                      <span className="project-year">{project.year}</span>
                    </span>
                    <span className="project-tagline">{project.tagline}</span>
                    <span className="project-stack">
                      {project.stack.join(" · ")}
                    </span>
                    <span className="project-cta" aria-hidden="true">
                      Read more →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="section" id="skills" aria-labelledby="skills-h">
            <p className="section-label">
              <span className="section-num">07</span> Skills
            </p>
            <h2 className="section-title" id="skills-h">
              Tools and credentials
            </h2>

            <div className="skill-block">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.key}>
                  <h3 className="skill-label">{group.label}</h3>
                  <ul className="chips">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="cert-grid">
              <div>
                <h3 className="skill-label">Certifications</h3>
                <ul className="bullets">
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="skill-label">Additional training</h3>
                <ul className="bullets">
                  {coursesTaken.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="section section--last" id="contact">
            <p className="section-label">
              <span className="section-num">08</span> Contact
            </p>
            <h2 className="section-title">Get in touch</h2>
            <p className="body">
              I am looking for full-time project management, procurement, and
              supply chain roles in Orlando, remote, or hybrid, and I am open to
              relocation with assistance. The fastest way to reach me is email.
            </p>
            <div className="cta-row">
              <a className="cta" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <a className="cta cta--ghost" href={contact.linkedin}>
                LinkedIn
              </a>
            </div>
            <p className="footer-note">
              Built with Next.js and deployed on Vercel. Last updated 2026.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
