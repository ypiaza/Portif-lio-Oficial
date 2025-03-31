import { menuFooter } from "../data/menuFooter"
import AvaliableForJob from "./AvaliableForJob"

const Footer = () => {
  return (
    <div className='flex items-center justify-between h-full px-12 py-5 rounded-3xl border border-white/10 bg-[#202020] mt-3'>
      <div>
        <ul className="flex gap-3 ">
          {menuFooter.map((item) => (
            <li><a target="_blank" href={item.link}><item.icon className='text-white text-2xl hover:text-blue-500' /></a></li>
          ))}
        </ul>
      </div>

      <AvaliableForJob />
    </div>
  )
}

export default Footer