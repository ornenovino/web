function Intro() {
    return (
        <article className="flex items-center justify-center mx-auto">
            <div className="w-192 h-96 bg-zinc-300 rounded-3xl flex items-center">
                <div
                    className="text-left pl-4 text-indigo-950 italic text-5xl font-bold font-['Volkhov'] leading-12"
                >
                    “Al otro día te ponías ese uniforme de invencible y volvías a salir a luchar”
                </div>
                <div className="w-full h-full">
                    <img className="flex-end" src="/assets/vizintin-main.png" alt="" />
                </div>
            </div>
        </article>
    )
}

export default Intro;