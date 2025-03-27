import { menu } from "../data/menu"

const Header = () => {
  return (
    <div className='bg-[#202020]  border border-white/10 rounded-3xl px-16 py-3'>
      <nav>
        <ul className='flex items-center justify-between'>
          {menu.map((item) => (
            <li className='text-white font-medium hover:text-blue-500 cursor-pointer duration-100'>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header