import { useState } from "react"
import { itemSkill, skills } from "../data/skills"


const Skills = () => {
  const [hoverIcon, setHoverIcon] = useState<number | false>(false)
  return (
    <div className='grid grid-cols-4 h-[15rem] overflow-hidden rounded-3xl border text-white border-white/10 bg-[#202020]'>
      {skills.map((item: itemSkill, index) => (
        <div className={`relative text-4xl border border-white/10 flex items-center justify-center overflow-hidden cursor-pointer`}
        onMouseOver={() => setHoverIcon(index)}
        onMouseOut={() => setHoverIcon(false)}>
          <item.icon className='z-50'/>
          <span className={`absolute block w-full h-0 bg-blue-500 right-0 bottom-0 duration-75 ${hoverIcon === index ? 'h-full' : 'delay-300 duration-700'}`}></span>
        </div>
      ))}
    </div>
  )
}

export default Skills