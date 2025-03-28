import MoreProjects from "./MoreProjects"
import Projects from "./Projects"
import Skills from "./Skills"
import Works from "./Works"

const Main = () => {
  return (
    <div className="mt-3 h-full grid grid-cols-2 gap-3">
      <div className="grid h-full w-full gap-3">
        <Works />
        <Projects />
        <MoreProjects />
      </div>

      <div className="grid h-full w-full gap-3">
        <Skills />
        <Projects />
        <Projects />
      </div>
    </div>
  )
}

export default Main