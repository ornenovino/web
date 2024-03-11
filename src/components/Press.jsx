import PressCard from "./PressCard"

function Press() {
    return (

        <article className="flex flex-col items-start mx-auto mb-10">
            <div className="text-gray-500 text-lg font-semibold font-['Poppins']">
                Prensa
            </div>
            <div
                className="text-indigo-950 text-5xl font-bold font-['Volkhov'] capitalize mb-6"
            >
                Artículos en prensa escrita
            </div>
            <div className="w-full flex justify-center">
                <PressCard />
            </div>
        </article>

    )
}

export default Press