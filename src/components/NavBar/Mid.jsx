import { useState } from "react";
import Navigations from "/src/components/Utils/Navigations";

const Mid = () => {
    const [activeIconId, setActiveIconId] = useState(1)

    const handleNavigation = (id) => {
        setActiveIconId(id)
    }

    return (
        <section className="nav-mid justify-center items-center hidden lg:flex">
            {Navigations.map((navigation) => {
                const { icon, id } = navigation
                return (
                    <button
                        key={id}
                        className={activeIconId == id ? 'active' : undefined}
                        onClick={() => handleNavigation(id)}
                    >
                        {icon}
                    </button>
                )
            })}
        </section>
    );
}

export default Mid;