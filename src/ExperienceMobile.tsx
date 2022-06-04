import React, { useState } from 'react';
import CompanyMobile from './CompanyMobile';
import './styles/ExperienceMobile.scss';

const ExperienceMobile = () => {
    const experienceArray = [
        {
            "company": "Rivian",
            "position": "Software Engineer Intern",
            "time": "Sep 2021 - Apr 2022",
            "experience": ["Develop and deploy 4 responsive web applications from ground-up in React, Node.js, HTML, CSS/Sass, MongoDB, and AWS (S3, EC2), which reduced robot commissioning time by ~75% and increased production in vehicles", "Design user interface in Figma for 2 web applications"],
            "keywords": ["React", "Node.js", "HTML", "CSS", "Sass", "MongoDB", "AWS (S3, EC2)", "Figma"]
        },
        {
            "company": "Oracle Cloud Infrastructure",
            "position": "Software Engineer Intern",
            "time": "May 2021 - Aug 2021",
            "experience": ["Implemented new features, fixed bugs, and created unit tests for the Data Integration Service web page using React, Jest, and the DOM Testing Library",
            "Built a metrics dashboard with 8 visualizations that monitors site performance and customer usage of the Data Integration Service on the Oracle Cloud Infrastructure platform using Grafana to assist 80+ on-call engineers resolve customer issues"],
            "keywords": ["React", "Jest", "DOM Testing Library", "Grafana"]
        },
        {
            "company": "USC",
            "position": "Software Engineering (CS 310) Course Producer",
            "time": "Aug 2020 - Dec 2020",
            "experience": ["Assist with the understanding of software engineering concepts, including project management, architecture, design, implementation, testing, and maintenance for 150+ students", 
            "Serve as stakeholder and mentor in technical software engineering group projects"],
        },
        {
            "company": "Dell Technologies",
            "position": "Software Engineer Intern",
            "time": "Jun 2020 - Aug 2020",
            "experience": ["Automate unit and integration testing for data operations team by writing scripts to integrate Github and Jenkins and configuring slave nodes",
            "Create a Jenkins Continuous Integration/Continuous Deployment pipeline by bundling data operations and tests into a Docker container and deploying it to Kubernetes",
            "Write and fix Python unit tests for ETL operations"],
            "keywords": ["Github", "Jenkins", "Docker", "Kubernetes", "Python"]
        },
        {
            "company": "USC",
            "position": "Python (ITP 115) Teaching Assistant",
            "time": "Jan 2020 - May 2020",
            "experience": ["Assist 600+ students with Python concepts, labs, and homework assignments during lecture and office hours", 
            "Topics include: Object-oriented programming, inheritance, dictionaries, lists, tuples"]
        },
        {
            "company": "iD Tech Camps",
            "position": "Instructor",
            "time": "Jun 2019 - Aug 2019",
            "experience": ["Created curriculum and engaging activities to teach up to 10 students per week between the ages of 10 to 18 years old programming in C++ and Java and game development on Roblox",
            "Assisted students in creating personal projects from scratch using the C++ and Java programming language"],
            "keywords": ["C++", "Java"]
        }
    ]

    const [clickedExp, setclickedExp] = useState(0);
    const clicked = (idx: number) => {
        console.log(experienceArray[idx])
        setclickedExp(idx)
    }

  return (
      <div className="section-mobile" id="experience">
        <h2>Work Experience</h2>
        <div className="text">Interested in my resume? Click <a href="#resume">here</a>.</div>
        <div className="experience">
        <div className="left">
        {
            experienceArray.map((exp, idx) => {
                return (
                    <div className="timeline">
                        <CompanyMobile key={idx} idx={idx} name={experienceArray[idx].company} clickedExp={clickedExp} clicked={clicked}/>
                    </div>
                )
            })
        }
        </div>
               
        <div className="right">
            <div className="position"> {experienceArray[clickedExp].position} @ <div className="company-name"> {experienceArray[clickedExp].company} </div></div>
            <div className="time"> {experienceArray[clickedExp].time}</div>
            <ul className="details"> 
            {experienceArray[clickedExp].experience.map((bullet) => {
                let str = "";
                let regex = "("
                experienceArray[clickedExp].keywords?.map((word) => {
                    if(word.includes("(") || word.includes("+")) {
                        for (let i = 0; i < word.length; i++) {
                            if(word.charAt(i) == "(" || word.charAt(i) == ")" || word.charAt(i) == "+" ) {
                                regex += "\\" + word.charAt(i);
                            }
                            else {
                                regex += word.charAt(i);
                            }
                        }
                        regex += "|";
                    }
                    else {
                        regex += word + "|";
                    }
                })
                regex = regex.slice(0, -1);
                regex += ")"
                if(experienceArray[clickedExp].keywords) {
                    const strArr = bullet.split(RegExp(regex));
                    strArr.map((subStr, idx) => {
                        if(subStr.replace(" ", "") != "," && experienceArray[clickedExp].keywords?.find(a => a.includes(subStr)) != undefined) {
                            str += "<span className='keyword'>" + subStr + "</span>";
                        }
                        else if(subStr) {
                            str += subStr;
                        }
                    })
                }
                else {
                    str = bullet;
                }
                
                
                // experienceArray[clickedExp].keywords?.map((word) => {
                //     bullet.split(word);
                //     str += 
                //     // const includesComma = bullet.includes(",");
                //     // if(bullet.includes(word)) {
                //     //     if(includesComma) {
                //     //         str += "<span class='#FECB02'>" + word + " </span>" + ", "
                //     //     }
                //     //     else {
                //     //         str += "<span class='#FECB02'>" + word + " </span>" + " ";
                //     //     }
                //     // }
                //     // else {
                //     //     if(includesComma) {
                //     //         str += bullet + ", ";
                //     //     }
                //     //     else {
                //     //         str += word + " ";
                //     //     }
                //     // }
                // })
                    // console.log("BULLET: " + bullet, "KEYWORDS: " + experienceArray[clickedExp].keywords, "STR: " + str);

                return <li className="bullet" dangerouslySetInnerHTML={{__html: str}}></li>
                
            })
            }
            </ul>
        </div>
        
            
        </div>
      </div>
  );
};

export default ExperienceMobile;
