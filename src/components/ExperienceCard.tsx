type ExperienceCardT = {
  company: string
  title: string
  startDate: string
  endDate: string
  duties: string
  techStack: string[]
}

export const ExperienceCard = ({
  company,
  title,
  startDate,
  endDate,
  duties,
  techStack,
}: ExperienceCardT) => {
  return (
    <div className="flex flex-row py-1 justify-between" key={company}>
      <div className="px-3">
        <h2>
          {startDate} - {endDate}
        </h2>
      </div>
      <div>
        <h2>
          {title} | {company}
        </h2>
        <div className="max-w-xl">{duties}</div>
        <div className="flex flex-row py-1">
          {techStack.map((tech, i) => {
            return (
              <div
                className="bg-blue-600 text-white px-4 py-1 rounded-full"
                key={i}
              >
                {tech}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
