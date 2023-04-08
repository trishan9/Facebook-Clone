const Right = () => {
    return (
        <section className="nav-right flex items-center gap-2 mr-3 md:mr-5">

            <div className="option bg-body p-2 rounded-full hover:bg-gray-200 cursor-pointer hidden sm:block">
                <svg className="w-6 md:w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>

            <div className="option bg-body p-2 rounded-full relative hover:bg-gray-200 cursor-pointer">
                <p className="badge absolute rounded-full bg-red-500 text-white w-5 h-5 pt-0.5 text-xs text-center bottom-7 left-7">
                    1
                </p>

                <svg className="w-6 md:w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>

            <div className="option bg-body p-2 rounded-full relative hover:bg-gray-200 cursor-pointer">
                <p className="badge absolute rounded-full bg-red-500 text-white w-5 h-5 pt-0.5 text-xs text-center bottom-7 left-7">
                    1
                </p>

                <svg className="w-6 md:w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>

            <img
                src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RUipgZkRndgAX-6cZyu&_nc_ht=scontent.fktm9-2.fna&oh=00_AfBfja6eFlc_13v0bezgNDzAMyv97-dT6xu9T6EWVD6xhA&oe=6458D538"
                alt=""
                className="md:w-10.5 rounded-full cursor-pointer"
            />

        </section>
    );
}

export default Right;