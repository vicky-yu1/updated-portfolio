import { useContext, useState } from 'react'
import { ScreenContext } from './App'
import "@fontsource/montserrat";
import ContactButton from './ContactButton';
import vy from './assets/VY.png';
import hamburger from './assets/hamburger.svg';
import './styles/NavHeader.scss';

interface Props {
    openMenu: boolean;
    setOpenMenu: (bool: boolean) => void;
}

  
const NavHeader = ({openMenu, setOpenMenu}: Props) => {
    const appContext = useContext(ScreenContext);
   
    return (
        <div className="header" style={{ padding: appContext ? "0px 72px 12px 72px" : "16px 36px"}}>
            <div className='left'>
                <img src={vy} />
            </div>
            <div className='right'>
                { 
                appContext ? 
                <>
                    <a className='nav-heading' href="#projects">PROJECTS</a>
                    <a className='nav-heading' href="#experience">EXPERIENCE</a>
                    <a className='nav-heading' href="#diary">LA DIARY</a>
                    <a className='nav-heading' href="#resume">RESUME</a>
                    <ContactButton text={"GET IN TOUCH"} />
                </>
                    : 
                    <button className="hamburger-menu" onClick={() => setOpenMenu(!openMenu)}><img src={hamburger} /></button>
                }
            </div>
        </div> 

    )
}

export default NavHeader;
