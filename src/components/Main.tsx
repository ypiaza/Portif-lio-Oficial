import Projects from "./Projects"
import Skills from "./Skills"
import Works from "./Works"

const Main = () => {
  return (
    <div className="mt-5 h-full grid grid-cols-2 gap-5">
      <div className="grid grid-rows-2 h-full gap-5">
        <Works />
        <Projects />
      </div>

      <div className="grid grid-rows-2 h-full gap-5">
        <Skills />
        <Skills />
      </div>
    </div>
  )
}

export default Main