import "@fontsource/montserrat";
import ContactButton from './ContactButton';
import vy from './assets/VY.png';
import './styles/NavHeader.scss';

const NavHeader = () => {
    return (
        <div className="header">
            <div className='left'>
                <img src={vy} />
            </div>
            <div className='right'>
                <a className='nav-heading'>PROJECTS</a>
                <a className='nav-heading'>EXPERIENCE</a>
                <a className='nav-heading'>LA DIARY</a>
                <a className='nav-heading'>RESUME</a>
                <ContactButton text={"GET IN TOUCH"} />
            </div>
        </div>
    )
}

export default NavHeader;
