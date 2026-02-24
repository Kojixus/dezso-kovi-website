import {
  Background,
  Badge,
  Button,
  Carousel,
  Card,
  Flex,
  Grid,
  Heading,
  Icon,
  Line,
  List,
  ListItem,
  Particle,
  RevealFx,
  Scroller,
  Tag,
  Text,
  Timeline,
} from "@once-ui-system/core";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
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

const caseSnapshots = [
  {
    title: "Infrastructure roadmap delivery",
    metric: "99.9% uptime",
    description:
      "Integrated scalable infrastructure and automated deployments while delivering 10% under budget.",
    tags: ["IT roadmap", "CI/CD", "Hosting"],
  },
  {
    title: "Procurement compliance at scale",
    metric: "$2M+ contracts",
    description:
      "Executed RFQ/RFP/PO workflows and ensured FAR/DFARS compliance across high-value programs.",
    tags: ["RFQ/RFP", "FAR/DFARS", "Supplier KPIs"],
  },
  {
    title: "Process automation wins",
    metric: "15% faster delivery",
    description:
      "Built KPI dashboards and automation that reduced delivery time by 15% and costs by 12%.",
    tags: ["Dashboards", "Automation", "Cost savings"],
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

const leadership = [
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

const education = [
  {
    school: "University of Central Florida",
    location: "Orlando, FL",
    degree: "B.S. Business Administration, Integrated Business",
  },
];

const skills = [
  "Project management",
  "Subcontract sourcing",
  "Procurement compliance",
  "ERP systems",
  "Data analysis",
  "Cross-functional collaboration",
  "Supply chain operations",
  "Stakeholder management",
];

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

export default async function Home() {
  const repos = await getRepos();
  const visibleRepos = repos.slice(0, 6);
  const caseCarouselItems = caseSnapshots.map((snapshot) => ({
    slide: (
      <Flex
        direction="column"
        gap="12"
        padding="24"
        fill
        background="surface"
        onBackground="neutral-strong"
      >
        <Tag variant="brand" label={snapshot.metric} />
        <Heading as="h3" variant="heading-strong-m">
          {snapshot.title}
        </Heading>
        <Text as="p" variant="body-default-s" onBackground="neutral-medium">
          {snapshot.description}
        </Text>
        <Flex direction="row" gap="8" wrap>
          {snapshot.tags.map((tag) => (
            <Tag key={tag} variant="neutral" label={tag} />
          ))}
        </Flex>
      </Flex>
    ),
  }));
  const experienceTimeline = experience.map((role, index) => ({
    label: (
      <Flex direction="column" gap="2">
        <Text variant="label-default-m">{role.role}</Text>
        <Text variant="label-default-s" onBackground="neutral-medium">
          {role.company}
        </Text>
      </Flex>
    ),
    description: (
      <Text variant="label-default-s" onBackground="neutral-medium">
        {role.location} · {role.dates}
      </Text>
    ),
    marker: <Text variant="label-default-s">{index + 1}</Text>,
    children: (
      <List gap="8" marginTop="8">
        {role.bullets.map((item) => (
          <ListItem
            key={item}
            variant="body-default-s"
            onBackground="neutral-medium"
          >
            {item}
          </ListItem>
        ))}
      </List>
    ),
  }));

  return (
    <Flex
      direction="column"
      fillWidth
      background="page"
      onBackground="neutral-strong"
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
        <RevealFx translateY="12" speed="slow" zIndex={1} fillWidth>
          <Flex
            direction="column"
            gap="32"
            fillWidth
            horizontal="center"
            align="center"
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              width: "100%",
              textAlign: "center",
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
                style={{ maxWidth: "760px" }}
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
              <Tag variant="brand" label="Project Management" />
              <Tag variant="accent" label="Supply Chain" />
              <Tag variant="neutral" label="IT Infrastructure" />
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
        </RevealFx>
      </Flex>

      <Flex direction="column" gap="8" paddingY="80" paddingX="24">
        <Flex
          direction="column"
          gap="12"
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Tag variant="neutral" size="s" label="Executive summary" />
          <Heading as="h2" variant="heading-strong-l">
            Driving measurable delivery and cost outcomes.
          </Heading>
          <Text as="p" variant="body-default-m" onBackground="neutral-medium">
            {summary}
          </Text>
        </Flex>

        <Grid
          columns="3"
          gap="16"
          m={{ columns: "2" }}
          s={{ columns: "1" }}
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          {highlights.map((item) => (
            <Card
              key={item.title}
              direction="column"
              gap="16"
              padding="24"
              radius="l"
            >
              <Flex direction="row" horizontal="between" vertical="center">
                <Icon name={item.icon} size="l" onBackground="brand-strong" />
                <Tag variant="neutral" label={item.tag} />
              </Flex>
              <Heading as="h3" variant="heading-strong-m">
                {item.title}
              </Heading>
              <Text
                as="p"
                variant="body-default-s"
                onBackground="neutral-medium"
              >
                {item.description}
              </Text>
            </Card>
          ))}
        </Grid>
      </Flex>

      <Flex direction="column" gap="32" paddingY="80" paddingX="24">
        <Flex
          direction="column"
          gap="12"
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Tag variant="neutral" size="s" label="Case snapshots" />
          <Heading as="h2" variant="heading-strong-l">
            Recent wins with measurable outcomes.
          </Heading>
          <Text as="p" variant="body-default-m" onBackground="neutral-medium">
            A few representative engagements that highlight delivery,
            compliance, and efficiency results.
          </Text>
        </Flex>

        <Flex style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <Carousel
            items={caseCarouselItems}
            radius="l"
            indicator="line"
            aspectRatio="16/9"
            play={{
              auto: true,
              interval: 5000,
              controls: true,
              progress: true,
            }}
          />
        </Flex>
      </Flex>

      <Line opacity={20} />

      <Flex
        id="experience"
        direction="column"
        gap="32"
        paddingY="80"
        paddingX="24"
      >
        <Flex
          direction="column"
          gap="12"
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Tag variant="neutral" size="s" label="Professional experience" />
          <Heading as="h2" variant="heading-strong-l">
            Projects, procurement, and operational leadership.
          </Heading>
        </Flex>

        <Flex style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <Timeline items={experienceTimeline} gap="16" />
        </Flex>
      </Flex>

      <Flex direction="column" gap="32" paddingY="80" paddingX="24">
        <Flex
          direction="column"
          gap="12"
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Tag variant="neutral" size="s" label="Education and leadership" />
          <Heading as="h2" variant="heading-strong-l">
            Foundation in business and project leadership.
          </Heading>
        </Flex>

        <Grid
          columns="2"
          gap="16"
          s={{ columns: "1" }}
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Card direction="column" gap="20" padding="24" radius="l">
            <Heading as="h3" variant="heading-strong-m">
              Education
            </Heading>
            {education.map((item) => (
              <Flex key={item.school} direction="column" gap="4">
                <Text variant="label-default-m">{item.school}</Text>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {item.degree}
                </Text>
                <Text variant="label-default-s" onBackground="neutral-medium">
                  {item.location}
                </Text>
              </Flex>
            ))}
          </Card>
          <Card direction="column" gap="20" padding="24" radius="l">
            <Heading as="h3" variant="heading-strong-m">
              Leadership
            </Heading>
            {leadership.map((item) => (
              <Flex key={item.title} direction="column" gap="12">
                <Flex direction="column" gap="4">
                  <Text variant="label-default-m">{item.title}</Text>
                  <Text variant="label-default-s" onBackground="neutral-medium">
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
          </Card>
        </Grid>
      </Flex>

      <Flex direction="column" gap="32" paddingY="80" paddingX="24">
        <Flex
          direction="column"
          gap="12"
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Tag variant="neutral" size="s" label="Skills and certifications" />
          <Heading as="h2" variant="heading-strong-l">
            Tools, platforms, and credentials.
          </Heading>
        </Flex>

        <Grid
          columns="2"
          gap="16"
          s={{ columns: "1" }}
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Card direction="column" gap="16" padding="24" radius="l">
            <Heading as="h3" variant="heading-strong-m">
              Core skills
            </Heading>
            <Scroller gap="8" fadeColor="page" radius="l" paddingY="4">
              {skills.map((item) => (
                <Tag key={item} variant="neutral" label={item} />
              ))}
            </Scroller>
            <Heading as="h4" variant="heading-strong-s">
              Tools
            </Heading>
            <Scroller gap="8" fadeColor="page" radius="l" paddingY="4">
              {tools.map((item) => (
                <Tag
                  key={item.label}
                  variant={item.variant}
                  label={item.label}
                />
              ))}
            </Scroller>
          </Card>
          <Card direction="column" gap="16" padding="24" radius="l">
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
          </Card>
        </Grid>
      </Flex>

      <Flex direction="column" gap="32" paddingY="80" paddingX="24">
        <Flex
          direction="column"
          gap="12"
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Tag variant="neutral" size="s" label="GitHub" />
          <Heading as="h2" variant="heading-strong-l">
            Recent repositories
          </Heading>
          <Text as="p" variant="body-default-m" onBackground="neutral-medium">
            Public work from the latest repos. Visit the profile for the full
            list.
          </Text>
        </Flex>

        {visibleRepos.length > 0 ? (
          <Grid
            columns="3"
            gap="16"
            m={{ columns: "2" }}
            s={{ columns: "1" }}
            style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
          >
            {visibleRepos.map((repo) => (
              <Card
                key={repo.id}
                href={repo.html_url}
                direction="column"
                gap="12"
                padding="24"
                radius="l"
              >
                <Flex direction="row" horizontal="between" vertical="center">
                  <Heading as="h3" variant="heading-strong-m">
                    {repo.name}
                  </Heading>
                  {repo.language ? (
                    <Tag variant="neutral" label={repo.language} />
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
                  <Tag
                    variant="accent"
                    label={`${repo.stargazers_count} stars`}
                  />
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
            style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
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

        <Flex
          direction="row"
          horizontal="center"
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Button
            size="m"
            variant="tertiary"
            href={`https://github.com/${githubUser}`}
          >
            View all repositories
          </Button>
        </Flex>
      </Flex>

      <Flex paddingX="24" paddingBottom="80">
        <Card
          direction="column"
          gap="16"
          padding="32"
          radius="l"
          style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
        >
          <Heading as="h2" variant="heading-strong-l">
            Ready to connect?
          </Heading>
          <Text as="p" variant="body-default-m" onBackground="neutral-medium">
            Open to project management, procurement, and supply chain
            opportunities.
          </Text>
          <Flex direction="row" gap="12" wrap>
            <Button
              id="cta-email-footer"
              size="m"
              variant="primary"
              arrowIcon
              href={`mailto:${contact.email}`}
            >
              Email me
            </Button>
            <Button size="m" variant="tertiary" href={contact.linkedin}>
              Connect on LinkedIn
            </Button>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
