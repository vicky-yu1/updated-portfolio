import "@fontsource/montserrat";
import ContactButton from './ContactButton';
import vickyMobile from './assets/vicky-mobile.png';
import './styles/IntroSectionMobile.scss';

const IntroSection = () => {
  return (
      <div className="section-mobile">
        <div className="container">
            <img src={vickyMobile} />
            <div className="overlay">
                hi! i'm
                <h1>VICKY YU, </h1>
                a self-driven
                <div className="text-animation">trojan.</div>
            </div>
        </div>
        <h2>About Me</h2>
            <div className="about-me">
                
                Strangers say I’m a pleaser. My friends say I’m empathetic. The 16 personalities test say I'm an entertainer (Go ESFP!). <br /> <br />
                But who am I? <br /> <br />
                I am someone who derives happiness from seeing the people around me happy. I am someone who strives to spread happiness around my local community, my state, my country, and eventually across the globe one step at a time. I am a proud USC alum with my B.S. and M.S. in Computer Science. <br /> <br />
                At USC, I have served as a resident assistant for 3 years and the Vice President of Corporate Affairs at Society of Women Engineer, where I planned memorable, meaningful events for my peers. I also participated in 5+ hackathons to build applications to tackle real-world challenges. Currently, I am making an impact on my local community by volunteering and mentoring students in my community. <br /> <br />
                I hope to extend my impact on a larger scale by collaborating with other bright minds and building impactful products as a frontend/full-stack software developer.

            </div>
            <div className="contact-button"><ContactButton text={"Let's talk!"} /></div>
            
        
      </div>
  );
};

export default IntroSection;
