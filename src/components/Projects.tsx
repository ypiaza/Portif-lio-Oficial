import { useState } from "react"
import { projects } from "../data/projects"
import { FaArrowAltCircleRight } from "react-icons/fa";


const Projects = () => {
  const [hoverAnimation, setHoverAnimation] = useState<number | false>(false)

  return (
    <div className={`flex items-center justify-center px-12 py-14 rounded-3xl border border-white/10 bg-[#202020] duration-300 hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-3d  hover:bg-blue-500/50 overflow-hidden ${hoverAnimation ? '' : ''}`}>
      {projects.map((item, index) => (
        <div 
          className="cursor-pointer perspective-distant"
          onMouseOver={() => setHoverAnimation(index)}
          onMouseOut={() => setHoverAnimation(false)}>
          <div className="relative">
            <h3 className="text-2xl text-white font-bold">{item.project}</h3>
            <p className="text-sm text-white/70">{item.description}</p>
            <span className={`absolute z-50 top-0 right-0 transition-transform ${hoverAnimation === index ? '-translate-x-0' : 'translate-x-28'}`}>
              <FaArrowAltCircleRight className="text-4xl -rotate-40 text-white/80" />
            </span>
          </div>
          <img src={item.img} className={`rounded-2xl w-[30rem] mt-10 duration-300 translate-3d transform-3d scale-3d ${hoverAnimation === index ? 'rotate-x-12 -rotate-y-3 -rotate-z-3 scale-110  shadow-2xl shadow-black/50' : ''}`} />
        </div>
      ))}
    </div>
  )
}

export default Projects