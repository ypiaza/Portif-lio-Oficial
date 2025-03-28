const AvaliableForJob = () => {
    return (
        <div className="flex items-center gap-2 border border-white/10 bg-[#161616] px-3 py-0.5 rounded-3xl">
            <span className="h-2 w-2 rounded-full bg-emerald-500 block animate-pulse"
                style={{
                    boxShadow: '0 0 2px 2px green'
                }}
            ></span>
            <span className="text-sm text-white">Disponível para trabalho</span>
        </div>
    )
}

export default AvaliableForJob