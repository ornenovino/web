
function Contact() {
    return (
        <article className="flex flex-col items-start mx-auto mb-10 px-4">
            <div className="m-4 text-gray-500 text-lg font-semibold font-['Poppins']">
                Medios de contacto
            </div>
            <div
                className="text-indigo-950 text-3xl md:text-5xl font-bold font-['Volkhov'] capitalize mb-6"
            >
                Contacto
            </div>
            <div className="flex flex-row w-full gap-20">
                <div className="flex flex-col">
                    <div className="flex flex-row w-full">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                            </svg>
                        </div>
                        <div className="grid place-content-center">
                            <p className="text-gray-700 ml-4"><a href="tel:+59812341234">+59812341234</a></p>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                <path d="M3 7l9 6l9 -6" />
                            </svg>
                        </div>
                        <div className="grid place-content-center">
                            <p className="text-gray-700 ml-4"><a href="tintin@antoniovizintin.com">tintin@antoniovizintin.com</a></p>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M16.5 7.5l0 .01" />
                        </svg>
                        <div className="grid place-content-center">
                            <p className="text-gray-700 ml-4"><a target='_blank' href="https://www.instagram.com/vizintinantonio">/VizintinAntonio</a></p>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                        <div className="grid place-content-center">
                            <p className="text-gray-700 ml-4"><a target='_blank' href="https://www.linkedin.com/in/antonio-tintin-vizintin-4a4a04179/?originalSubdomain=uy">Antonio Tintin Vizintin</a></p>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                        <div className="grid place-content-center">
                            <p className="text-gray-700 ml-4"><a target='_blank' href="https://es-la.facebook.com/p/Antonio-Vizintin-100004330300632/">Antonio Tintin Vizintin</a></p>
                        </div>
                    </div>
                </div>
                <div className="flex-end invisible lg:visible bottom-0">
                    <img src="public/assets/mountain.png" alt="" />
                </div>
            </div>
        </article>
    )
}

export default Contact