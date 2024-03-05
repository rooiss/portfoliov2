import GithubIcon from '../assets/GithubIcon.svg?react'

type ProjectCardT = {
  name: string,
  github: string,
  img: string,
  description: string
}

export const ProjectCard = ({ name, github, img, description }: ProjectCardT) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} />
      <a href={github}>
        <GithubIcon />
      </a>
      <p>{description}</p>
    </div>
  )
}
