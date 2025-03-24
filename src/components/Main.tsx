import Projects from "./Projects"
import Works from "./Works"

const Main = () => {
  return (
    <div className="mt-5 h-full grid grid-cols-2 ">
      <div className="grid grid-rows-2 h-full gap-5">
        <Works />
        <Projects />
      </div>

      <div></div>
    </div>
  )
}

export default Main