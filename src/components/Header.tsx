import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#202020]  border border-white/10 rounded-3xl px-16 py-3'>
      <nav>
        <ul className='flex items-center justify-between'>
          <li className='text-white hover:font-medium hover:text-[#F35034] cursor-pointer'>SOBRE MIM</li>
          <li className='text-white hover:font-medium hover:text-[#F35034] cursor-pointer'>PROJETOS</li>
          <li className='text-white hover:font-medium hover:text-[#F35034] cursor-pointer'>CONTATO</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header