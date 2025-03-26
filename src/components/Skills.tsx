import { useState } from "react"
import { itemSkill, skills } from "../data/skills"


const Skills = () => {
  const [hoverIcon, setHoverIcon] = useState(false)
  return (
    <div className='grid grid-cols-4 overflow-hidden rounded-3xl border text-white border-white/10 bg-[#202020]'>
      {skills.map((item: itemSkill) => (
        <div className={`relative text-4xl border border-white/10 flex items-center justify-center overflow-hidden`}
        onMouseOver={() => setHoverIcon(true)}
        onMouseOut={() => setHoverIcon(false)}>
          <item.icon />
          <span className={`absolute block h-full w-0 bg-amber-200/30 left-0 duration-300 ${hoverIcon ? 'w-full' : ''}`}></span>
        </div>
      ))}
    </div>
  )
}

export default Skills