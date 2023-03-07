function Header() {
    return (
        <header>
            <nav className="flex flex-wrap items-center justify-between container mx-auto px-8 py-4">
                <div className="flex flex-shrink-0">
                    <a href="/" className="text-2xl font-bold text-medhjelp-red">Medhjelp</a>
                </div>
{/*                <div className="hidden navbar-menu lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
                    <div className="lg:mr-auto font-medium"></div>
                    <div className="font-medium">
                        <a href="/kontakt/"
                           className="block lg:inline-block mt-4 lg:mt-0 lg:mr-8 text-gray-800 hover:underline hover:text-purple-900">
                            Om oss
                        </a>
                    </div>
                </div>*/}
            </nav>
        </header>
    );
}

export default Header;