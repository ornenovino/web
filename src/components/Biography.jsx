function Biography() {
    return (
        <article id="biography" className="flex flex-col items-center mx-auto mt-10 px-4">
            <div className="text-gray-500 text-lg font-semibold font-['Poppins'] mb-2">
                Biografía
            </div>
            <div className="text-indigo-950 text-3xl md:text-5xl font-bold font-['Volkhov'] capitalize mb-6">
                Sobreviviente de los Andes
            </div>
            <div className="bg-blue-400 bg-opacity-30 rounded-lg flex flex-col md:flex-row w-full">
                <div className="text-left text-m font-medium md:w-1/2 p-5 text-pretty text-black">
                    Antonio Vizintin, Tintín, nació en Montevideo en 1953. Estudió en el
                    colegio Christian Brothers. Actualmente es Vicepresidente de la Unión de
                    Rugby del Uruguay (URU) y miembro del consejo de administración de la
                    FUNDACIÓN VIVEN. Su gran fortaleza física, así como los valores
                    adquiridos de los hermanos irlandeses, tallaron hondo en su ser, haciendo de
                    Antonio una persona capaz de derribar cualquier obstáculo. Hacer a un lado
                    los sentimientos para ir siempre hacia delante, es una característica
                    clave del jugador Pilar, que le servirá para poder afrontar sus propias
                    cordilleras a lo largo de su vida. En el accidente sufrió heridas varias
                    de diversa magnitud que gracias a su fortaleza de espíritu lograron
                    hacerlo olvidar que las tenía y así focalizarse en su objetivo que era
                    Sobrevivir. Luego del accidente, siguió sus estudios en derecho. Se casó y
                    al tiempo enviudó de su primer mujer a los 38 años, con la que tuvo 2
                    hijos.
                </div>
                <div className="text-left text-m font-medium md:w-1/2 p-5 text-pretty text-black">
                    Su consigna fue y es mantenerse siempre de pie, seguir caminando a pesar
                    de las dificultades. Actualmente está casado con Josefina Serrato. Estuvo
                    vinculado a la industria de envases plásticos por 13 años, así como a
                    la industria alimenticia. Hoy en día se dedica al desarrollo de proyectos
                    de inversión inmobiliario y a dar conferencias motivacionales por el
                    mundo. Vive una vida tranquila y sencilla, disfruta de sus hijos y nietos a
                    pleno, así como del yachting. En resumen, Antonio a pesar de lo vivido
                    es una persona optimista y alegre, si bien parece duro y hermético, es una
                    persona con una inmensa capacidad de dar, comprometida con sus ideales al
                    máximo.
                </div>
            </div>
        </article>
    );
}

export default Biography;
