import { useEffect, useState } from 'react';
import './AboutMe.css';

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section id="about" className={`about-section fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="about-container">
        <div className="about-image">
          <img 
            src={`${process.env.PUBLIC_URL}/images/profile.png`} 
            alt="Sk Md Tousif" 
            className="profile-img"
          />
          <div className="image-border"></div>
        </div>
        
        <div className="about-content">
          <h1>Sk Md Tousif</h1>
          <h2>Full Stack Developer & Competitive Programmer</h2>
          
          <div className="about-details">
            <div className="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z" fill="currentColor"/>
              </svg>
              <span>Email: <a href="mailto:skmdtousif172@gmail.com">skmdtousif172@gmail.com</a></span>
            </div>
            
            <div className="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995A15.51 15.51 0 0 1 18.5 21C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" fill="currentColor"/>
              </svg>
              <span>Phone: +91-7908319931</span>
            </div>
            
            <div className="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h9v2H7v-2z" fill="currentColor"/>
              </svg>
              <span>Languages: English · Bengali · Hindi (fluent)</span>
            </div>
          </div>
          
          <p className="about-description">
            Passionate developer and competitive programmer with expertise in full-stack development 
            and problem-solving. Currently pursuing B.Tech in Computer Science and Engineering with 
            a strong foundation in algorithms and web technologies.
          </p>
          
          <div className="about-actions">
            <a 
              href={`${process.env.PUBLIC_URL}/CV.pdf`} 
              download 
              className="btn btn-primary"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z" fill="currentColor"/>
              </svg>
            </a>
            
            <a 
              href="#contact" 
              className="btn"
            >
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;