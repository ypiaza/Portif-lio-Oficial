import { btn } from "../data/buttons"
import AvaliableForJob from "./AvaliableForJob"

const Apresentation = () => {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center justify-between h-full lg:h-[25rem] px-12 py-14 rounded-3xl border border-white/10 bg-[#202020] mt-3">
            <div className="h-full flex flex-col items-start justify-between">
                <div>
                    <h1 className="text-white/70">Desenvolvedor Frontend</h1>
                </div>
                <div>
                    <div className='max-w-80'>
                        <h2 className="text-2xl font-semibold text-white">Eu sou Yuri Piaza</h2>
                        <p className="text-sm text-white/70 mt-5">Crio interfaces bonitas e escaláveis, desenvolvedor frontend com foco em desenvolvimento web</p>
                    </div>
                    <div className="flex items-center gap-4 mt-8">
                        {btn.map((item, index) => (
                            <button key={index} className={`border border-white/10 px-2 py-1.5 rounded-md text-white font-medium cursor-pointer`}
                                style={{
                                    backgroundColor: item.color,
                                    boxShadow: `0 0 10px 5px ${item.color}70`
                                }}
                            >{item.name}</button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex flex-col items-end w-full h-full">
                <div className="flex flex-col items-center justify-between h-full">
                    <AvaliableForJob />
                    <div>
                        <img  className="rounded-full border-8 border-white/10" src='https://placehold.co/200' alt="Me" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apresentation