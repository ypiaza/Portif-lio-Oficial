import { projects } from "../data/projects"
import MoreProjects from "./MoreProjects"
import Projects from "./Projects"
import Skills from "./Skills"
import Works from "./Works"

const Main = () => {
  return (
    <div className="mt-3 h-full grid lg:grid-cols-2 grid-cols-1 gap-3">
      <div className="grid h-full w-full gap-3">
        <Works />
        {projects.filter((item) => item.id === 1).map((item) => (
          <Projects description={item.description} img={item.img} project={item.project} link={item.link} />
        ))}
        <MoreProjects />
      </div>

      <div className="grid h-full w-full gap-3">
        <Skills />
        {projects.filter((item) => item.id === 2).map((item) => (
          <Projects description={item.description} img={item.img} project={item.project} link={item.link} />
        ))}
        {projects.filter((item) => item.id === 3).map((item) => (
          <Projects description={item.description} img={item.img} project={item.project} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default Main