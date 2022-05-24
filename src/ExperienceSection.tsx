import React, { useState } from 'react';
import Company from './Company';
import './styles/ExperienceSection.scss';

const ExperienceSection = () => {
    const [isClicked, setIsClicked] = useState("");
    const clicked = () => {

    }
  return (
      <div className="exp-section">
        <div className="header">Work Experience</div>
        <div className="text">Interested in my resume? Click here.</div>
        <div className="experience">
            <div className="left">
                <div className="timeline">
                    <Company name="Rivian" />
                    <Company name="Oracle Cloud Infrastructure" />
                    <Company name="USC" />
                    <Company name="Dell Technologies" />
                </div>
            </div>
        <div className="right">
        </div>
        
            
        </div>
      </div>
  );
};

export default ExperienceSection;
