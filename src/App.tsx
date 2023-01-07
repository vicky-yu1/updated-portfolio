import React, { createContext, useState, useEffect, useRef } from 'react'
import './App.scss';
import { useMediaQuery } from 'react-responsive'
import NavHeader from './NavHeader';
import NavHeaderMobile from './NavHeaderMobile';
import "@fontsource/nunito-sans";
import Main from './Main';

export const ScreenContext = createContext<boolean | null>(null)

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const [ openMobileMenu, setOpenMobileMenu ] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0); // distance from top of page 
  const [visible, setVisible] = useState(true);
  const Position = useRef(null);  

  const debounce = (func: () => void, timeout: number) => {
    let timer: number | undefined = undefined;
    return (() => {
      clearTimeout(Number(timer));
      timer = window.setTimeout(() => func(), timeout);
    });
  }

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset; // current location of the window
    console.log("currentScrollPos", currentScrollPos, prevScrollPos, window.onscroll)
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 50) || 
    currentScrollPos < 10); // show nav bar only if scrolling up or at top of page
    setPrevScrollPos(window.pageYOffset);
  };

  const processChange = debounce(() => handleScroll(), 100);

  useEffect(() => {    
    console.log("window.pageYOffset", window.pageYOffset);
    window.addEventListener('scroll', processChange, { passive: true });
    return () => window.removeEventListener('scroll', processChange);
  }, [window.pageYOffset]);


  return (
    <div className="App" ref={Position}>
      <div className="content" style={{ padding: isDesktopOrLaptop ? "0px 72px 39px 72px" : "0px 36px 24px 36px"}}>
      <ScreenContext.Provider value={isDesktopOrLaptop}>
        
        { visible && <NavHeader openMenu={openMobileMenu} setOpenMenu={setOpenMobileMenu}/> }
        { visible && <NavHeaderMobile openMenu={openMobileMenu} setOpenMenu={setOpenMobileMenu}/> }
        
        <Main />
      </ScreenContext.Provider>
      </div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
