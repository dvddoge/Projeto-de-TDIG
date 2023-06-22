import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function NavBar() {
  return (
    <nav id="navbar" className="nav">
      <ul className="nav-list">
        <li><a href="#welcome-section">About</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function WelcomeSection() {
  return (
    <section id="welcome-section" className="welcome-section">
      <h1>Hey I am Mimic</h1>
      <p>a web developer</p>
    </section>
  );
}

function ProjectsSection() {
  // Add the project elements similar to below
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>
      {/* ... Rest of the projects ... */}
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      {/* ... Rest of the contact links ... */}
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        **This is just a fake portfolio. All the projects and contact details
        given are not real.
      </p>
      <p>
        &copy; Created for
        <a href="https://www.freecodecamp.com/" target="_blank">
          freeCodeCamp <i className="fab fa-free-code-camp"></i>
        </a>
      </p>
    </footer>
  );
}

export default App;
