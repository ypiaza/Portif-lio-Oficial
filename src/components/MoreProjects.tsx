import { moreProjects } from "../data/projects"

const MoreProjects = () => {
    return (
        <div className=" h-full flex items-center justify-center px-12 py-14 rounded-3xl border border-white/10 bg-[#202020]">
            {moreProjects.map((item) => (
                <div>
                    <div>
                        <h3 className="text-2xl text-white font-bold">{item.title}</h3>
                        <p className="text-sm text-white/70">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MoreProjects