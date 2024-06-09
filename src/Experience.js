import React from 'react';
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";
import Accordion from "./Accordion";
import './Experience.css';

// Import the image from the src folder
import experienceImage from './assets/images/skill3.jpg';

function Experience() {
    const items = [
        {
            title: 'Work',
            heading: 'Talent Acquisition Executive',
            organisation: 'Interactive Manpower Solution Pvt Ltd',
            content: `• Manage sourcing, screening, interviewing, and placing of the candidates.<br><br>
                      • Understanding the Job description, identifying and locating the required resources meeting the requirements
                      using personal network, database, and Job Boards.<br><br>
                      • Experience in using Job boards like Linked In, Naukri, Monster, and Career Builder`,
            date: 'Nov 22-Nov 23',
            location: 'Ahmedabad'
        },
        {
            title: 'Internship',
            heading: 'Frontend Developer Intern',
            organisation: 'Lakvins Entertainment Media Pvt Ltd',
            content: `• Implemented the smooth incorporation of metadata into the application, optimizing data organization and
                      enhancing search capabilities for improved efficiency.<br><br>
                      • Managed the integration of enriched content on the Protocol Digitalization project, improving user access to
                      comprehensive and informative resources.<br><br>
                      • Utilized a strong technology stack, including React.js, Redux, Redux Saga, HTML, CSS, and JavaScript, to
                      execute and deliver key enhancements to the project.`,
            date: 'Jan 24-May 24',
            location: 'Remote'
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="img-container">
                    {/* <div className='new'> <img className="img" src={experienceImage} alt="Experience" /></div> */}
                   
                    <div className="exp-heading">
                        <h1>Experience</h1>
                        <p>Work And Internship</p>
                        <p>
                            I have worked with startups as a Frontend Developer, utilizing React.js, and other frontend technologies. 
                            I completed a 6-month internship as a React.js Developer, gaining hands-on experience in building dynamic and 
                            responsive web applications. I am passionate about creating intuitive user interfaces and improving user experiences.
                        </p>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accord-content">
                        <Accordion items={items} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Experience;
