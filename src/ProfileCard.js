
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import './ProfileCard.css';

const ProfileCard = ({ name, title, description, avatar }) => {
  const [activeSection, setActiveSection] = useState('about'); 

  const projects = [
    {
      title: "Wine Quality Prediction",
      description: "Developed a wine quality prediction model using machine learning techniques, including feature engineering, ensemble methods, and hyperparameter tuning, to enhance accuracy. Deployed the model as a web application, allowing users to input wine characteristics for quality predictions.",
      technologies: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Google Colab"],
      link: "https://github.com/Aman-0402/Wine-Quality-prediction",
    },
    {
      title: "AI Chatbot",
      description: "An AI-powered chatbot that uses natural language processing.",
      technologies: ["Python", "TensorFlow", "Flask"],
      link: "https://github.com/Aman-0402/ai-chatbot",
    },
    {
      title: "Personal Portfolio using React",
      description: "My advanced React portfolio showcases my projects, skills, and experience with creative CSS animations and smooth transitions. It features a landing page, about section, skills, projects, and contact details. Built with React, Bootstrap, and Tailwind, it’s fully responsive with a modern, dynamic design.",
      technologies: ["VS Code", "HTML", "CSS", "JS", "REACT","node.js"],
      link: "https://github.com/Aman-0402/Portfolio_React",
    },
    {
      title: "Profile Card using React",
      description: "This project showcases a responsive profile card with glassmorphism design, highlighting my personal details, skills, and contact information. Built with React, it includes sections for About Me, Projects, Experience, and a seamless user interface for both desktop and mobile views.",
      technologies: ["VS Code", "HTML", "CSS", "JS", "REACT","node.js"],
      link: "https://github.com/Aman-0402/PofileCard",
    }
   
  ];

  const experiences = [
    {
      jobTitle: "Technical & IT Instructor",
      company: "Databits Technologies",
      dates: "May 2024 - Present ",
      description: "Expert in AI/ML, with experience in delivering innovative projects, solutions, and personalized project guidance to students applying ML skills in real-world scenarios.",
      technologies: ["Python", "NumPy", "Pandas", "Google Colab"],
    },
    {
      jobTitle: "Vocational Training-RMHP",
      company: "IRourkela Steel Plant(RSP)",
      dates: "May 2023 - June 2023",
      description: " I was learned about how RSP works, the turnover per year, how to handle the Raw material on field & using technology and Safety measures.",
      technologies: ["Hardware of Steel Plant Machine "],
    },
    {
      jobTitle: "Web Development and Designing Intern",
      company: "OASIS INFOBYTE ",
      dates: "1 month Internship",
      description: "Created Projects on Web development and uploaded in Github.",
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap","React"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Sambalpur University Institute of Information Technology",
      dates: "2020 - 2024",
      description: "Graduated with Honors. Focused on full-stack development and machine learning.",
      gpa: "GPA: 8.2",
    },
    {
      degree: "Intermediate / 12th - CBSE",
      institution: "Guru Gobind Singh Public School, Sector 5",
      dates: "2019",
    },
    {
      degree: "Matriculation / 10th - CBSE",
      institution: "Guru Gobind Singh Public School, Sector 5",
      dates: "2017",
    }
  ];
  
  const skills = {
    languages: ["JavaScript", "Python", "Java", "C++"],
    frameworks: ["React", "Node.js", "Express", "Django"],
    tools: ["Git", "Docker","Postman"],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    aiml : ["TensorFlow", "PyTorch", "scikit-learn", "Pandas"],
  };
  
  const contactInfo = {
    email: "aman08.stars@gmail.com",
    phone: "9852104967",
    linkedin: "https://www.linkedin.com/in/aman-raj-081905211/",
    github: "https://github.com/Aman-0402",
  };
  

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div>
            <p>I am Aman Raj, a passionate full stack developer with expertise in Artificial Intelligence and Machine Learning. I love solving complex problems and creating innovative solutions to real-world challenges. I have a deep understanding of both front-end and back-end technologies and enjoy working across the stack to build scalable and efficient applications.</p>
            

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/aman-raj-081905211/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a href="https://github.com/Aman-0402" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
             
              <a href="https://wa.me/9852104967" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
              </a>
              <a href="https://www.instagram.com/ai_aman_04" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </div>

            <div className="resume-preview">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEye} /> Preview Resume
              </a>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="projects-container">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> View Project
                </a>
              </div>
            ))}
          </div>
        );
      case 'experience':
        return (
          <div className="experience-container">
            {experiences.map((experience, index) => (
              <div className="experience-card" key={index}>
                <h3>{experience.jobTitle} @ {experience.company}</h3>
                <p><strong>Dates:</strong> {experience.dates}</p>
                <p>{experience.description}</p>
                <p><strong>Technologies:</strong> {experience.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        );
      case 'education':
        return (
          <div className="education-container">
            {education.map((edu, index) => (
              <div className="education-card" key={index}>
                <h3>{edu.degree}</h3>
                <p><strong>{edu.institution}</strong></p>
                <p><strong>Dates:</strong> {edu.dates}</p>
                <p>{edu.description}</p>
                <p>{edu.gpa}</p>
              </div>
            ))}
          </div>
        );
      case 'contact':
        return (
          <div className="contact-container">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${contactInfo.email}`} target="_blank" rel="noopener noreferrer">{contactInfo.email}</a>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <a href={`tel:${contactInfo.phone}`} target="_blank" rel="noopener noreferrer">{contactInfo.phone}</a>
            </div>
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
  
          </div>
        );
      case 'skills':
        return (
          <div className="skills-container">
            <div className="skills-category">
              <h4>Programming Languages</h4>
              <ul>
                {skills.languages.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-category">
              <h4>Frameworks & Libraries</h4>
              <ul>
                {skills.frameworks.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-category">
              <h4>Tools & Platforms</h4>
              <ul>
                {skills.tools.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-category">
              <h4>Databases</h4>
              <ul>
                {skills.databases.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-category">
              <h4>AI/ML Skills</h4>
              <ul>
                {skills.aiml.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-card">
      <img className="profile-avatar" src={avatar} alt={`${name}'s avatar`} />
      <h2 className="profile-name">{name}</h2>
      <h3 className="profile-title">{title}</h3>

      <div className="profile-buttons">
        <button onClick={() => setActiveSection('about')}>About Me</button>
        <button onClick={() => setActiveSection('projects')}>Projects</button>
        <button onClick={() => setActiveSection('experience')}>Experience</button>
        <button onClick={() => setActiveSection('education')}>Education</button>
        <button onClick={() => setActiveSection('skills')}>My Skills</button>
        <button onClick={() => setActiveSection('contact')}>Contact Me</button>
      </div>

      <div className="profile-section-content">
        {renderSectionContent()}
      </div>
    </div>
  );
};

export default ProfileCard;
