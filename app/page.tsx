import {
  Background,
  Badge,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Icon,
  Line,
  List,
  ListItem,
  Particle,
  Tag,
  Text,
} from "@once-ui-system/core";
import ExperienceTimeline from "./components/ExperienceTimeline";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
  description: string | null;
  language: string | null;
};

const githubUser = "Kojixus";
const githubApiUrl = `https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`;

const contact = {
  name: "Dezso Kovi",
  location: "Orlando, FL",
  phone: "(561) 460-3743",
  email: "dkovi24@gmail.com",
  linkedin: "https://linkedin.com/in/dezsokovi",
};

const summary =
  "Recent graduate with project management and supply chain experience in subcontract sourcing, procurement, and business operations. Experience in ERP systems, data analysis, and cross-functional collaboration to drive efficiency and cost savings. Eager to contribute value and grow as a dedicated team member in a dynamic organization.";

const highlights = [
  {
    icon: "screen",
    title: "Infrastructure Delivery",
    description:
      "Led end-to-end IT and web infrastructure projects with clear scope, schedule, and budget control.",
    tag: "IT Projects",
  },
  {
    icon: "radialGauge",
    title: "Procurement Ops",
    description:
      "Executed subcontract sourcing and compliance for high-value contracts across multiple types.",
    tag: "Supply Chain",
  },
  {
    icon: "computer",
    title: "Operational Efficiency",
    description:
      "Built KPI dashboards and automation that reduced delivery time and operating costs.",
    tag: "Process",
  },
];

const competencies = [
  {
    title: "Project Delivery",
    description:
      "Scope, schedule, and budget ownership with clear stakeholder alignment.",
    tag: "Execution",
  },
  {
    title: "Procurement & Compliance",
    description:
      "RFQ/RFP/PO workflows with FAR/DFARS and supplier performance focus.",
    tag: "Sourcing",
  },
  {
    title: "Operational Analytics",
    description:
      "KPIs, dashboards, and reporting that drive measurable efficiency gains.",
    tag: "Data",
  },
  {
    title: "Infrastructure & Web",
    description:
      "Reliable hosting, deployments, and digital experience improvements.",
    tag: "IT",
  },
  {
    title: "Stakeholder Leadership",
    description:
      "Cross-functional collaboration with clear communication and cadence.",
    tag: "Leadership",
  },
  {
    title: "ERP & Tooling",
    description:
      "Hands-on ERP systems, process mapping, and workflow enablement.",
    tag: "Systems",
  },
];

const experience = [
  {
    company: "Validity Hosting",
    location: "Orlando, FL",
    role: "IT Project Manager",
    dates: "Jul 2021 - Nov 2025",
    bullets: [
      "Directed IT and web infrastructure projects, aligning scope, schedule, and budgets.",
      "Integrated scalable server infrastructure, automated deployment pipelines, and secure hosting.",
      "Led a team of 5 contractors; delivered projects 10% under budget with 99.9% uptime.",
      "Implemented KPI dashboards and automation to reduce delivery time by 15% and costs by 12%.",
    ],
  },
  {
    company: "L3Harris Technologies",
    location: "Malabar, FL",
    role: "Subcontractor Intern",
    dates: "Jun 2025 - Aug 2025",
    bullets: [
      "Executed RFQ, RFP, PO, BOM review, and NDA workflows for $2M+ contracts.",
      "Ensured compliance with FAR, DFARS, and company policy requirements.",
      "Improved on-time supplier deliverables by 10% using performance analysis.",
      "Supported F-35 Technology Refresh TR2 and TR3 subcontract initiatives.",
    ],
  },
  {
    company: "Tilton Legacy",
    location: "Winter Park, FL",
    role: "Project Management Intern",
    dates: "May 2023 - Aug 2023",
    bullets: [
      "Communicated project scope, schedule, and budget with co-founders and contractors.",
      "Built a custom time clock system that improved tracking accuracy by 75%.",
      "Delivered a $1M+ motel deal investment package and status reporting.",
      "Coordinated 15+ stakeholder meetings to maintain alignment.",
    ],
  },
  {
    company: "Radix Consulting Alliance",
    location: "West Palm Beach, FL",
    role: "Logistics Analyst",
    dates: "Jan 2016 - Jan 2021",
    bullets: [
      "Led monthly analytics reviews with stakeholders and delivered action plans.",
      "Reduced shipping costs by 15% through transportation and inventory analysis.",
      "Supported warehouse management system migration with data mapping and analytics.",
      "Maintained Excel dashboards for lead times and freight spend KPIs.",
    ],
  },
];

const leadershipPrimary = [
  {
    title: "Aerospace Transport, Project Lead",
    dates: "Jan 2025 - May 2025",
    bullets: [
      "Built a WBS with 24 work packages for clear ownership and progress tracking.",
      "Developed a $137,700 budget with time-phased estimates for 3,610 labor hours.",
      "Conducted stakeholder analysis with NASA, SpaceX, and Boeing.",
    ],
  },
];

const leadershipSecondary = [
  {
    title: "Knights Racing Formula SAE (UCF), Secretary & Website Developer",
    dates: "May 2024 - May 2025",
    bullets: [
      "Managed sponsorship relationships, reached out to potential sponsors, promoted club events, and supported the outreach and business lead.",
      "Built and designed the club site in WordPress to strengthen online presence, visual appeal, and functionality.",
      "Assisted the President, Vice President, and Team Lead with tasks.",
      "Recorded meeting minutes for team and leadership meetings for members who could not attend.",
      "Documented information for incoming leadership to transfer knowledge.",
      "Managed incoming members and ensured all safety forms were completed before working on the car.",
      "Helped organize finances for next year's budget.",
    ],
  },
  {
    title: "Knights Racing Formula SAE (UCF), Outreach Lead & Website Developer",
    dates: "Sep 2023 - May 2024",
    bullets: [
      "Managed sponsorship relationships, reached out to potential sponsors, promoted club events, and supported the secretary and business lead.",
      "Built and designed the club site in WordPress to strengthen online presence, visual appeal, and functionality.",
    ],
  },
];

const education = [
  {
    school: "University of Central Florida",
    location: "Orlando, FL",
    degree: "B.S. Business Administration, Integrated Business",
  },
];

const educationHighlights = [
  "B.S. Business Administration",
  "Integrated Business",
  "Orlando, FL",
];

const educationDetails = {
  gpa: "",
  honors: "",
  capstone: "",
};

const coursework: string[] = [];

const hasEducation =
  education.length > 0 ||
  educationHighlights.length > 0 ||
  coursework.length > 0 ||
  Boolean(educationDetails.gpa || educationDetails.honors || educationDetails.capstone);

const currentFocus = {
  projects: ["Portfolio refresh", "Personal project"],
  languages: ["Python", "JavaScript"],
  certifications: ["Certification in progress"],
};

const skillGroups = [
  {
    key: "tech",
    label: "Tech skills",
    variant: "accent" as const,
    items: ["ERP systems", "Data analysis"],
  },
  {
    key: "hard",
    label: "Hard skills",
    variant: "brand" as const,
    items: [
      "Project management",
      "Subcontract sourcing",
      "Procurement compliance",
      "Supply chain operations",
    ],
  },
  {
    key: "soft",
    label: "Soft skills",
    variant: "neutral" as const,
    items: ["Cross-functional collaboration", "Stakeholder management"],
  },
];

const skills = skillGroups.flatMap((group) => group.items);

const tools = [
  { label: "SAP", variant: "brand" as const },
  { label: "ERP", variant: "accent" as const },
  { label: "Microsoft Excel", variant: "neutral" as const },
  { label: "SQL", variant: "neutral" as const },
  { label: "Trello", variant: "neutral" as const },
  { label: "GitHub", variant: "neutral" as const },
  { label: "WordPress", variant: "neutral" as const },
  { label: "Microsoft Teams", variant: "neutral" as const },
];

const certifications = [
  "Google IT Support",
  "Google Introduction to Project Management",
  "Six Sigma Yellow Belt",
];

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(githubApiUrl, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return [];
    }
    const data = (await res.json()) as Repo[];
    return data.filter((repo) => !repo.fork && !repo.archived && !repo.private);
  } catch {
    return [];
  }
}

const formatRepoDate = (isoDate: string) => {
  if (!isoDate) {
    return "";
  }
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(isoDate));
};

export default async function Home() {
  const repos = await getRepos();
  const rankedRepos = [...repos].sort((a, b) => {
    if (b.stargazers_count !== a.stargazers_count) {
      return b.stargazers_count - a.stargazers_count;
    }
    return (
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
  });
  const visibleRepos = rankedRepos.slice(0, 3);
  const primarySkills = skills.slice(0, 6);

  return (
    <Flex
      id="top"
      direction="column"
      fillWidth
      background="page"
      onBackground="neutral-strong"
      className="ambient-bg"
    >
      <Flex
        position="relative"
        direction="column"
        overflow="hidden"
        paddingY="104"
        paddingX="24"
      >
        <Particle
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          density={36}
          size="2"
          speed={0.25}
          opacity={20}
          color="brand-on-background-weak"
        />
        <Background
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          pointerEvents="none"
          gradient={{
            display: true,
            opacity: 70,
            width: 60,
            height: 60,
            tilt: -18,
            colorStart: "brand-background-strong",
            colorEnd: "static-transparent",
          }}
          dots={{
            display: true,
            opacity: 20,
            size: "24",
            color: "neutral-on-background-weak",
          }}
          grid={{ display: true, opacity: 10, width: "120px", height: "120px" }}
          lines={{
            display: true,
            opacity: 10,
            size: "32",
            angle: -35,
            color: "accent-on-background-weak",
          }}
        />
        <Flex
          direction="column"
          gap="32"
          fillWidth
          horizontal="center"
          align="center"
          className="stagger-reveal"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            width: "100%",
            textAlign: "center",
            zIndex: 1,
          }}
        >
            <Badge icon="sparkle" title="IT Project Manager" />
            <Flex
              direction="column"
              gap="16"
              align="center"
              fillWidth
              style={{ width: "100%" }}
            >
              <Heading
                as="h1"
                variant="display-strong-l"
                align="center"
                style={{ width: "100%", textAlign: "center" }}
              >
                {contact.name}
              </Heading>
              <Text
                as="p"
                variant="body-default-l"
                onBackground="neutral-medium"
                align="center"
                style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}
              >
                Project management and supply chain professional focused on
                infrastructure delivery, procurement operations, and data-driven
                efficiency gains.
              </Text>
            </Flex>
            <Flex direction="row" gap="12" wrap horizontal="center">
              <Button
                id="cta-email"
                size="l"
                variant="primary"
                arrowIcon
                href={`mailto:${contact.email}`}
              >
                Contact me
              </Button>
              <Button size="l" variant="secondary" href={contact.linkedin}>
                LinkedIn
              </Button>
            </Flex>
            <Flex direction="row" gap="8" wrap horizontal="center">
              <Tag className="hover-lift" variant="brand" label="Project Management" />
              <Tag className="hover-lift" variant="accent" label="Supply Chain" />
              <Tag className="hover-lift" variant="neutral" label="IT Infrastructure" />
            </Flex>
            <Flex direction="row" gap="12" wrap horizontal="center">
              <Text variant="label-default-s" onBackground="neutral-medium">
                {contact.location}
              </Text>
              <Text variant="label-default-s" onBackground="neutral-medium">
                {contact.phone}
              </Text>
              <Text variant="label-default-s" onBackground="neutral-medium">
                {contact.email}
              </Text>
            </Flex>
        </Flex>
      </Flex>

      <Line opacity={20} />

      <Flex paddingY="80" paddingX="24">
        <Flex
          className="profile-layout"
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Flex className="profile-panel" direction="column" gap="16">
            <Card
              direction="column"
              gap="16"
              padding="24"
              radius="l"
              className="hover-lift stagger-reveal"
            >
              <Tag className="hover-lift" variant="neutral" size="s" label="Profile" />
              <Heading as="h3" variant="heading-strong-m">
                Quick profile
              </Heading>
              <Flex direction="column" gap="8">
                <Text variant="label-default-m" onBackground="neutral-medium">
                  Location
                </Text>
                <Text variant="body-default-s">{contact.location}</Text>
                <Text variant="label-default-m" onBackground="neutral-medium">
                  Email
                </Text>
                <Text variant="body-default-s">{contact.email}</Text>
                <Text variant="label-default-m" onBackground="neutral-medium">
                  Phone
                </Text>
                <Text variant="body-default-s">{contact.phone}</Text>
              </Flex>
              <Flex direction="column" gap="8">
                <Heading as="h4" variant="heading-strong-s">
                  Top skills
                </Heading>
                <Flex direction="row" gap="8" wrap style={{ rowGap: "8px" }}>
                  {primarySkills.map((item) => (
                    <Tag className="hover-lift" key={item} variant="neutral" label={item} />
                  ))}
                </Flex>
              </Flex>
              <Flex direction="column" gap="8">
                <Heading as="h4" variant="heading-strong-s">
                  Currently learning
                </Heading>
                <Flex direction="row" gap="8" wrap style={{ rowGap: "8px" }}>
                  {currentFocus.languages.map((item) => (
                    <Tag className="hover-lift" key={item} variant="accent" label={item} />
                  ))}
                </Flex>
                <Flex direction="row" gap="8" wrap style={{ rowGap: "8px" }}>
                  {currentFocus.projects.map((item) => (
                    <Tag className="hover-lift" key={item} variant="neutral" label={item} />
                  ))}
                </Flex>
                <Flex direction="row" gap="8" wrap style={{ rowGap: "8px" }}>
                  {currentFocus.certifications.map((item) => (
                    <Tag className="hover-lift" key={item} variant="brand" label={item} />
                  ))}
                </Flex>
              </Flex>
              <Button
                size="m"
                variant="secondary"
                href={`mailto:${contact.email}`}
                className="hover-lift"
              >
                Email me
              </Button>
            </Card>
          </Flex>

          <Flex className="profile-content stagger-reveal" direction="column" gap="48">
            <Flex direction="column" gap="12">
              <Tag className="hover-lift" variant="neutral" size="s" label="Executive summary" />
              <Heading as="h2" variant="heading-strong-l">
                Driving measurable delivery and cost outcomes.
              </Heading>
              <Text as="p" variant="body-default-m" onBackground="neutral-medium">
                {summary}
              </Text>
            </Flex>

            <Flex
              id="experience"
              direction="column"
              gap="16"
              background="surface"
              padding="24"
              radius="l"
              className="hover-lift"
            >
              <Tag className="hover-lift" variant="neutral" size="s" label="Professional experience" />
              <Heading as="h2" variant="heading-strong-l">
                Projects, procurement, and operational leadership.
              </Heading>
              <ExperienceTimeline roles={experience} />
            </Flex>

            <Flex direction="column" gap="12">
              <Tag className="hover-lift" variant="neutral" size="s" label="Highlights" />
              <Heading as="h2" variant="heading-strong-l">
                Focused on delivery, efficiency, and cost control.
              </Heading>
              <Flex direction="column" gap="16">
                {highlights.map((item) => (
                  <Flex key={item.title} direction="column" gap="8">
                    <Flex
                      direction="row"
                      gap="12"
                      horizontal="between"
                      vertical="center"
                      wrap
                    >
                      <Flex direction="row" gap="12" vertical="center" wrap>
                        <Icon name={item.icon} size="l" onBackground="brand-strong" />
                        <Heading as="h3" variant="heading-strong-m">
                          {item.title}
                        </Heading>
                      </Flex>
                      <Tag className="hover-lift" variant="neutral" label={item.tag} />
                    </Flex>
                    <Text
                      as="p"
                      variant="body-default-s"
                      onBackground="neutral-medium"
                    >
                      {item.description}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>

            <Flex
              direction="column"
              gap="12"
              background="surface"
              padding="24"
              radius="l"
              className="hover-lift"
            >
              <Tag className="hover-lift" variant="neutral" size="s" label="Key competencies" />
              <Heading as="h2" variant="heading-strong-l">
                Capabilities that drive reliable delivery.
              </Heading>
              <Text as="p" variant="body-default-m" onBackground="neutral-medium">
                A focused view of the skills I apply across projects, procurement,
                and operations.
              </Text>
              <Grid columns="2" gap="16" s={{ columns: "1" }}>
                {competencies.map((item) => (
                  <Flex key={item.title} direction="column" gap="6">
                    <Flex direction="row" gap="8" vertical="center" wrap>
                      <Text variant="label-default-m">{item.title}</Text>
                      <Tag className="hover-lift" variant="neutral" label={item.tag} />
                    </Flex>
                    <Text
                      as="p"
                      variant="body-default-s"
                      onBackground="neutral-medium"
                    >
                      {item.description}
                    </Text>
                  </Flex>
                ))}
              </Grid>
            </Flex>

            <Flex direction="column" gap="24">
            {hasEducation ? (
              <Flex id="education" direction="column" gap="16">
              <Tag className="hover-lift" variant="neutral" size="s" label="Education" />
                <Flex direction="column" gap="16">
                  <Heading as="h3" variant="heading-strong-m">
                    Education
                  </Heading>
                  <Flex direction="row" gap="8" wrap style={{ rowGap: "8px" }}>
                    {educationHighlights.map((item) => (
                      <Tag className="hover-lift" key={item} variant="neutral" label={item} />
                    ))}
                  </Flex>
                  {education.map((item) => (
                    <Flex key={item.school} direction="column" gap="4">
                      <Text variant="label-default-m">{item.school}</Text>
                      <Text
                        variant="body-default-s"
                        onBackground="neutral-medium"
                      >
                        {item.degree}
                      </Text>
                      <Text
                        variant="label-default-s"
                        onBackground="neutral-medium"
                      >
                        {item.location}
                      </Text>
                    </Flex>
                  ))}
                  {educationDetails.gpa ? (
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      GPA: {educationDetails.gpa}
                    </Text>
                  ) : null}
                  {educationDetails.honors ? (
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      Honors: {educationDetails.honors}
                    </Text>
                  ) : null}
                  {educationDetails.capstone ? (
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      Capstone: {educationDetails.capstone}
                    </Text>
                  ) : null}
                  {coursework.length > 0 ? (
                    <Flex direction="column" gap="8">
                      <Heading as="h4" variant="heading-strong-s">
                        Relevant coursework
                      </Heading>
                      <Flex direction="row" gap="8" wrap style={{ rowGap: "8px" }}>
                        {coursework.map((item) => (
                          <Tag className="hover-lift" key={item} variant="neutral" label={item} />
                        ))}
                      </Flex>
                    </Flex>
                  ) : null}
                </Flex>
              </Flex>
            ) : null}

            <Flex id="leadership" direction="column" gap="16">
              <Tag className="hover-lift" variant="neutral" size="s" label="Leadership" />
              <Heading as="h2" variant="heading-strong-l">
                Leadership roles and campus involvement.
              </Heading>
              <Flex direction="column" gap="16">
                <Flex direction="column" gap="12">
                  <Heading as="h4" variant="heading-strong-s">
                    Leadership roles
                  </Heading>
                  {leadershipPrimary.map((item) => (
                    <Flex key={item.title} direction="column" gap="12">
                      <Flex direction="column" gap="4">
                        <Text variant="label-default-m">{item.title}</Text>
                        <Text
                          variant="label-default-s"
                          onBackground="neutral-medium"
                        >
                          {item.dates}
                        </Text>
                      </Flex>
                      <List gap="8">
                        {item.bullets.map((bullet) => (
                          <ListItem
                            key={bullet}
                            variant="body-default-s"
                            onBackground="neutral-medium"
                          >
                            {bullet}
                          </ListItem>
                        ))}
                      </List>
                    </Flex>
                  ))}
                </Flex>
                <Flex direction="column" gap="12">
                  <Heading as="h4" variant="heading-strong-s">
                    Campus & club leadership
                  </Heading>
                  {leadershipSecondary.map((item) => (
                    <Flex key={item.title} direction="column" gap="12">
                      <Flex direction="column" gap="4">
                        <Text variant="label-default-m">{item.title}</Text>
                        <Text
                          variant="label-default-s"
                          onBackground="neutral-medium"
                        >
                          {item.dates}
                        </Text>
                      </Flex>
                      <List gap="8">
                        {item.bullets.map((bullet) => (
                          <ListItem
                            key={bullet}
                            variant="body-default-s"
                            onBackground="neutral-medium"
                          >
                            {bullet}
                          </ListItem>
                        ))}
                      </List>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Flex>

            </Flex>

            <Flex
              id="skills"
              direction="column"
              gap="24"
              background="surface"
              padding="24"
              radius="l"
              className="hover-lift"
            >
              <Flex direction="column" gap="8">
                <Tag
                  className="hover-lift"
                  variant="neutral"
                  size="s"
                  label="Skills and certifications"
                />
                <Heading as="h2" variant="heading-strong-l">
                  Tools, platforms, and credentials.
                </Heading>
              </Flex>
              <Grid columns="2" gap="24" s={{ columns: "1" }} style={{ marginTop: "4px" }}>
                <Flex direction="column" gap="12">
                  <Heading as="h3" variant="heading-strong-m">
                    Core skills
                  </Heading>
                  <Flex direction="column" gap="12">
                    {skillGroups.map((group) => (
                      <Flex key={group.label} direction="column" gap="10">
                        <Text
                          variant="label-default-m"
                          onBackground="neutral-medium"
                        >
                          {group.label}
                        </Text>
                        <Flex
                          direction="row"
                          gap="8"
                          wrap
                          style={{ rowGap: "8px", marginTop: "2px" }}
                        >
                          {group.items.map((item) => (
                            <Tag
                              className={`hover-lift skill-tag skill-tag--${group.key}`}
                              key={item}
                              variant={group.variant}
                              label={item}
                            />
                          ))}
                        </Flex>
                      </Flex>
                    ))}
                  </Flex>
                  <Heading as="h4" variant="heading-strong-s">
                    Tools
                  </Heading>
                  <Flex direction="row" gap="8" wrap style={{ rowGap: "8px" }}>
                    {tools.map((item) => (
                      <Tag className="hover-lift" key={item.label}
                        variant={item.variant}
                        label={item.label}
                      />
                    ))}
                  </Flex>
                  <Flex direction="row" gap="8" wrap style={{ rowGap: "8px" }}>
                    <Text variant="label-default-s" onBackground="neutral-medium">
                      Key:
                    </Text>
                    <Tag
                      className="hover-lift skill-tag skill-tag--tech"
                      variant="accent"
                      label="Tech"
                    />
                    <Tag
                      className="hover-lift skill-tag skill-tag--hard"
                      variant="brand"
                      label="Hard"
                    />
                    <Tag
                      className="hover-lift skill-tag skill-tag--soft"
                      variant="neutral"
                      label="Soft"
                    />
                  </Flex>
                </Flex>
                <Flex direction="column" gap="12">
                  <Heading as="h3" variant="heading-strong-m">
                    Certifications
                  </Heading>
                  <List gap="8">
                    {certifications.map((item) => (
                      <ListItem
                        key={item}
                        variant="body-default-s"
                        onBackground="neutral-medium"
                      >
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Flex>
              </Grid>
            </Flex>

            <Flex id="github" direction="column" gap="16">
              <Tag className="hover-lift" variant="neutral" size="s" label="GitHub" />
              <Heading as="h2" variant="heading-strong-l">
                Selected repositories
              </Heading>
              <Text as="p" variant="body-default-m" onBackground="neutral-medium">
                Highlighted public work ordered by stars, then recent activity.
                Visit the profile for the full list.
              </Text>

              {visibleRepos.length > 0 ? (
                <Grid
                  columns="3"
                  gap="16"
                  m={{ columns: "2" }}
                  s={{ columns: "1" }}
                >
                  {visibleRepos.map((repo) => (
                    <Card
                      key={repo.id}
                      href={repo.html_url}
                      direction="column"
                      gap="12"
                      padding="24"
                      radius="l"
                      className="hover-lift"
                    >
                      <Flex direction="row" horizontal="between" vertical="center">
                        <Heading as="h3" variant="heading-strong-m">
                          {repo.name}
                        </Heading>
                        {repo.language ? (
                          <Tag className="hover-lift" variant="neutral" label={repo.language} />
                        ) : null}
                      </Flex>
                      <Text
                        as="p"
                        variant="body-default-s"
                        onBackground="neutral-medium"
                      >
                        {repo.description ||
                          "Repository details available on GitHub."}
                      </Text>
                      <Flex direction="row" gap="8" wrap>
                        <Tag className="hover-lift" variant="accent"
                          label={`${repo.stargazers_count} stars`}
                        />
                        {repo.updated_at ? (
                          <Tag className="hover-lift" variant="neutral"
                            label={`Updated ${formatRepoDate(repo.updated_at)}`}
                          />
                        ) : null}
                      </Flex>
                    </Card>
                  ))}
                </Grid>
              ) : (
                <Card
                  direction="column"
                  gap="16"
                  padding="24"
                  radius="l"
                  className="hover-lift"
                >
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    No public repositories found yet.
                  </Text>
                  <Button
                    size="m"
                    variant="secondary"
                    href={`https://github.com/${githubUser}`}
                  >
                    Visit GitHub profile
                  </Button>
                </Card>
              )}

              <Flex direction="row" horizontal="center">
                <Button
                  size="m"
                  variant="tertiary"
                  href={`https://github.com/${githubUser}`}
                  className="hover-lift"
                >
                  View all repositories
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex id="contact" paddingX="24" paddingBottom="80">
        <Card
          direction="column"
          gap="16"
          padding="32"
          radius="l"
          className="hover-lift"
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Heading as="h2" variant="heading-strong-l">
            Ready to connect?
          </Heading>
          <Text as="p" variant="body-default-m" onBackground="neutral-medium">
            Open to project management, procurement, and supply chain
            opportunities.
          </Text>
          <Text variant="label-default-s" onBackground="neutral-medium">
            Open to full-time roles in Orlando or remote.
          </Text>
          <Flex direction="row" gap="8" wrap>
            <Tag className="hover-lift" variant="brand" label="Project Management" />
            <Tag className="hover-lift" variant="accent" label="Procurement" />
            <Tag className="hover-lift" variant="neutral" label="Supply Chain" />
          </Flex>
          <Flex direction="row" gap="12" wrap>
            <Button
              id="cta-email-footer"
              size="m"
              variant="primary"
              arrowIcon
              href={`mailto:${contact.email}`}
              className="hover-lift"
            >
              Email me
            </Button>
            <Button
              size="m"
              variant="tertiary"
              href={contact.linkedin}
              className="hover-lift"
            >
              Connect on LinkedIn
            </Button>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
