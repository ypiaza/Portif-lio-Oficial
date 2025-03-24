import { work } from "../data/works"

const Works = () => {
  return (
    <div className=" flex flex-col items-start justify-between h-full px-12 py-14 rounded-3xl border border-white/10 bg-[#202020]">
        <div className="text-white/40 mb-10 font-bold">Trabalhos recentes:</div>
        <div className="w-full">
            <ul>
                {work.map((item) => (
                    <li className='mb-5 opacity-80 text-sm w-full flex justify-between' style={{
                        color: item.currentlyWork
                    }}>
                        <span className="font-semibold">{item.work}</span>
                        <span className="text-white/40 font-semibold">{item.business}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Works