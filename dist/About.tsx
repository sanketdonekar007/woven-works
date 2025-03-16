
import { Link } from "react-router-dom";


const About = () => {
  const resumeUrl = "https://drive.google.com/your-resume-link"; // Replace with your actual resume link

  return (
    <div className="about-container">
      {/* Header/Navigation */}
      <header className="header about-header">
        <div className="logo">
          <Link to="/"><img src="/lovable-uploads/logo.png" alt="SD" /></Link>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/#works">Works</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </header>

      {/* About Content */}
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-greeting">Hello again! 👋</h1>
          
          <div className="about-bio">
            <p>I'm Sanket, a Product Designer based in Pune. I hold a Bachelor of Engineering in Information Technology from MIT Pune and a Master of Business Administration in Business Analytics from Pune University. As a product designer, I am passionate about being involved in the entire product lifecycle, from ideation to implementation, ensuring seamless user experiences across digital platforms. My focus lies in designing intuitive interfaces that blend aesthetics, functionality, and technology to solve real-world problems effectively.</p>
            
            <p>Beyond my professional work, I have a deep love for music. When I'm not designing, you'll find me singing or playing the guitar, indulging in my creative side.</p>
            
            <p className="contact-prompt">Feel free to contact me if you would like to get in touch!</p>
            
            <p className="contact-email"><a  href="mailto:sanket.donekar@gmail.com">sanket.donekar@gmail.com</a> | <a href="tel:+918149760321">+91 8149760321</a></p>
          </div>
          
          <div className="education-section">
            <h2 className="section-heading">Education</h2>
            
            <div className="education-item">
              <h3>Master of Business Administration in Business Analytics, Pune University</h3>
              <p className="date-range">Sep 2022 - Jun 2024</p>
            </div>
            
            <div className="education-item">
              <h3>Bachelors of Engineering in Information Technology, MIT Pune</h3>
              <p className="date-range">June 2016 - May 2019</p>
            </div>
          </div>
          
          <div className="experience-section">
            <h2 className="section-heading">Experience</h2>
            
            <div className="experience-intro">
              <p>I have collaborated with teams to develop products for both web and mobile platforms, with a strong focus on creating intuitive and visually engaging user experiences, from conceptualization to final design.</p>
            </div>
            
            <div className="experience-item">
              <h3>Product Designer, RedBeryl Tech Solutions.</h3>
              <p className="date-range">Mar 2024 - Present</p>
            </div>
            
            <div className="experience-item">
              <h3>UI/UX Designer, Esofcode.</h3>
              <p className="date-range">Mar 2023 - Feb 2024</p>
            </div>
            
            <div className="experience-item">
              <h3>UI Designer, KnackBe.</h3>
              <p className="date-range">Jun 2021 - Mar 2023</p>
            </div>
          </div>
          
          
        </div>
        
        <div className="about-photo">
          <img src="/lovable-uploads/me.png" alt="Sanket Donekar" />
        </div>
      </div>
      <div className="about-footer min-[1400px]:px-72">
            <h2 className="footer-title">Like what you see??</h2>
            <p className="footer-text">
              View my <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, follow me or contact me below
            </p>
            
            <div className="social-links">
              <a href="hhttps://dribbble.com/sanket_works" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.32 4 16.45 4.95 18.06 6.44C16.87 8.08 15.16 9.34 13.16 10.21C12.34 8.43 11.37 6.74 10.27 5.13C10.82 5.04 11.41 4 12 4ZM7.68 5.72C8.83 7.38 9.86 9.16 10.74 11.04C8.35 11.74 5.76 12.11 3.08 12.11C3.03 12.08 3 12.04 3 12C3 9.28 4.87 6.97 7.68 5.72ZM4.04 14.12C7.14 14.12 10.13 13.69 12.87 12.85C13.14 13.4 13.4 13.95 13.63 14.5C11.91 15.02 10.36 16.15 9.14 17.57C7.83 18.96 6.88 20.68 6.4 22.55C4.96 21.12 4 19.07 4 16.8C4 15.89 4.07 14.99 4.24 14.12H4.04ZM12 20C11.61 20 11.23 19.98 10.86 19.93C11.4 18.35 12.16 16.95 13.32 15.75C14.38 14.66 15.69 13.76 17.21 13.22C17.65 14.89 17.91 16.64 17.98 18.44C16.4 19.43 14.3 20 12 20ZM19.34 16.38C19.25 15.04 19.04 13.74 18.73 12.5C19.96 12.01 21.34 11.77 22.76 11.76C22.91 11.83 22.99 11.91 22.99 12C23 13.94 22.39 15.75 21.35 17.19C20.97 16.87 20.14 16.68 19.34 16.38Z"/>
                </svg>
              </a>
              {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"/>
                </svg>
              </a> */}
              <a href="https://www.linkedin.com/in/sanketworks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 11.116 14.313 10.872 14.024 10.872C13.735 10.872 12.791 11.035 12.791 13.174C12.791 13.585 12.791 17 12.791 17H10.395V10H12.791V10.977C13.153 10.407 13.95 10 15.066 10C16.181 10 18 10.977 18 13.174V17Z"/>
                </svg>
              </a>
            </div>
            
            <a href="mailto:sanket.donekar@gmail.com" className="contact-email-link">sanket.donekar@gmail.com</a>
          </div>
    </div>
  );
};

export default About;
