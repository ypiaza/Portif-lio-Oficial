import { projects } from "../data/projects"

const Projects = () => {
  return (
    <div className=" max-h-[25rem] flex items-center justify-center px-12 py-14 rounded-3xl border border-white/10 bg-[#202020]">
        {projects.map((item) => (
          <div>
            <div>
              <h3 className="text-2xl text-white font-bold">{item.project}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
            </div>
            <img src={item.img} className="rounded-2xl w-[30rem] mt-10" alt="" />
          </div>
        ))}
    </div>
  )
}

export default Projects