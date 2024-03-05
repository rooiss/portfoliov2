import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <div className="flex flex-col">
      <h1>Projects</h1>
      <div className="">
        {projects.map((p, i) => (
          <ProjectCard {...p} key={i} />
        ))}
      </div>
    </div>
  )
}
