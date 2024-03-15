function Header() {
    return (
        <header className="flex flex-col items-center py-4 px-4 mx-auto lg:flex-row lg:py-8 lg:px-6">
            <img className="h-12 lg:h-16 mr-4 lg:mr-10" src="public/assets/av-logo.png" alt="Logo" />

            <nav className="flex flex-row items-center justify-between w-full text-center text-xs lg:text-sm xl:text-base">
                <a href="#top" className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out px-2 lg:px-4">Inicio</a>
                <a href="#biography" className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out px-2 lg:px-4">Biografía</a>
                <a href="#conferences" className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out px-2 lg:px-4">Conferencias</a>
                <a href="#press" className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out px-2 lg:px-4">Prensa</a>
                <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out px-2 lg:px-4">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;
