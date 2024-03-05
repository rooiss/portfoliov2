import { experience } from '../data/experience'
import { ExperienceCard } from './ExperienceCard'

export const Experience = () => {
  return (
    <div className="flex flex-col">
      <h1>Experience</h1>
      <div className="flex flex-row border rounded-md p-5">
        <div className="flex flex-col max-w-screen-xl">
          {experience.map((xp) => (
            <ExperienceCard {...xp} />
          ))}
        </div>
      </div>
    </div>
  )
}
