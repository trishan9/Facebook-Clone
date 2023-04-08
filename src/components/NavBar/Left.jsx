const Left = () => {
    return (
        <section className="nav-left flex items-center">
            <img
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                alt="Logo"
                className="nav-logo w-20 cursor-pointer"
            />

            <div className="search-menu flex relative">
                <svg className="w-5 ml-3 absolute top-2.5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>

                <input
                    type="search"
                    className="rounded-full w-10 h-10 pl-11 md:pl-10 md:w-full bg-body focus:outline-none"
                    placeholder="Search Facebook"
                />

                <svg className="w-8 ml-4 sm:hidden cursor-pointer" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>
        </section>
    );
}

export default Left;