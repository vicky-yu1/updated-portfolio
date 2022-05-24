// import logo from './logo.svg';
import './App.scss';
import NavHeader from './NavHeader';
import IntroSection from './IntroSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import "@fontsource/nunito-sans";

function App() {
  return (
    <div className="App">
      <div className="content">
      <NavHeader />
      <IntroSection />
      <ProjectsSection />
      <ExperienceSection />
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
