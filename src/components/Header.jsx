function Header() {
    return (
        <header className="flex flex-row py-8 px-4 mx-auto lg:py-10 lg:px-6">
            <img className="h-12 mr-20" src="/public/assets/av-logo.png" alt="" />

            <nav className="flex flex-row items-center justify-between w-full text-center">
                <a href="#top">Inicio</a>
                <a href="#biography">Biografía</a>
                <a href="#conferences">Conferencias</a>
                <a href="#press">Prensa</a>
                <a href="#contact">Contacto</a>
            </nav>
        </header>)
}

export default Header;