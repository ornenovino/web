function Intro() {
    return (
        <article className="flex items-center justify-center mx-auto p-4">
            <div className="relative w-full max-w-6xl bg-zinc-300 rounded-3xl flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
                <div
                    className="z-10 text-indigo-950 italic text-2xl md:text-5xl font-bold font-['Volkhov'] leading-tight md:leading-12 mb-4 md:mb-0 md:pl-4"
                >
                    “Al otro día te ponías ese uniforme de invencible y volvías a salir a luchar”
                </div>
                <div className="relative w-full md:w-auto flex justify-end items-end md:pr-8">
                    <img className="bottom-0 right-0 md:max-w-[120%] md:right-auto -mb-4 md:-mb-8" src="/assets/vizintin-main.png" alt="tintin" />
                </div>
            </div>
        </article>
    );
}

export default Intro;
