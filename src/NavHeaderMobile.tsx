import "@fontsource/montserrat";
import ContactButton from './ContactButton';
import close from './assets/close.svg';
import './styles/NavHeaderMobile.scss';

interface Props {
    openMenu: boolean;
    setOpenMenu: (bool: boolean) => void;
}

const NavHeaderMobile = ({openMenu, setOpenMenu}: Props) => {
    return (
        <div className="mobile-menu" style={{visibility: openMenu ? "visible" : "hidden" }}>
            <img src={close} onClick={() => setOpenMenu(!openMenu)} />
            <div className='links'>
                <a className='nav-heading' href="#projects">PROJECTS</a>
                <a className='nav-heading' href="#experience">EXPERIENCE</a>
                <a className='nav-heading' href="#diary">FOOD DIARY</a>
                <a className='nav-heading' href="#resume">RESUME</a>
                <ContactButton text={"GET IN TOUCH"} />
            </div>
        </div>
    )
}

export default NavHeaderMobile;
