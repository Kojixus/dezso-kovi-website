type ExperienceRole = {
  company: string;
  location: string;
  role: string;
  dates: string;
  bullets: string[];
};

type ExperienceTimelineProps = {
  roles: ExperienceRole[];
};

export default function ExperienceTimeline({ roles }: ExperienceTimelineProps) {
  return (
    <div className="entry-list">
      {roles.map((role) => {
        const isCurrent = role.dates.includes("Present");

        return (
          <article className="entry" key={`${role.company}-${role.role}`}>
            <p className="entry-dates">
              {role.dates}
              {isCurrent ? <span className="entry-now">Current</span> : null}
            </p>
            <div className="entry-body">
              <h3 className="entry-title">{role.role}</h3>
              <p className="entry-org">
                {role.company} · {role.location}
              </p>
              <ul className="bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
