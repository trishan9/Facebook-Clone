import Left from './Left'
import Mid from './Mid'
import Right from './Right';

const NavBar = () => {
    return (
        <nav className="nav pt-1 flex justify-between items-center bg-white border-b-4 font-primaryFont">
            <Left />
            <Mid />
            <Right />
        </nav>
    );
}

export default NavBar;