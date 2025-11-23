"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpCircle, Menu, X } from 'lucide-react';

// Define the prop types for the generic Section component.
interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

// Define the type for a project object.
interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
}

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      onClick={() => setIsMobileMenuOpen(false)}
      className="px-4 py-2 font-medium text-lg text-gray-400 hover:text-white transition-colors duration-300 relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-blue-400 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0"
    >
      {children}
    </a>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen font-inter flex flex-col items-center">
      {/* Header and Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg border-b border-gray-700 py-4 px-8 md:px-16 flex justify-between items-center transition-all duration-300">
        <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Bala Ramesh
        </h1>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden fixed top-20 left-0 w-full bg-gray-900 bg-opacity-95 backdrop-filter backdrop-blur-lg border-b border-gray-700 z-40 flex flex-col items-center py-6 space-y-4 transition-all duration-300 transform animate-fade-in">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      )}

      {/* Main Content Sections */}
      <main className="w-full max-w-7xl px-4 md:px-8 mt-24">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl py-8 px-4 md:px-8 mt-12 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Bala Ramesh. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition-colors duration-200" aria-label="Github profile">
            <Github size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-200" aria-label="LinkedIn profile">
            <Linkedin size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-200" aria-label="Email me">
            <Mail size={24} />
          </a>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-500 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle size={28} />
      </button>
    </div>
  );
};

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="min-h-screen py-20 flex flex-col items-center justify-center">
    {title && (
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        {title}
      </h2>
    )}
    {children}
  </section>
);

const Home: React.FC = () => (
  <Section id="home">
    <div className="text-center max-w-2xl px-4 md:px-0">
      
      <p className="text-2xl md:text-3xl text-gray-400 mb-4 animate-fade-in-down">
        Hello, I'm
      </p>
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6 animate-fade-in-up">
        Bala Ramesh.
      </h1>
      <p className="text-lg md:text-xl text-gray-400 leading-relaxed animate-fade-in-up delay-300">
        A passionate software engineer specializing in building exceptional digital experiences. Currently focused on creating clean, intuitive, and high-performance applications.
      </p>
    </div>
  </Section>
);

const About: React.FC = () => (
  <Section id="about" title="About Me">
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl">

      {/* Text Section */}
      <div className="order-2 md:order-1 text-gray-400 leading-relaxed space-y-4 text-justify">

        <p>
          I am a dedicated full-stack web developer with strong expertise in
          modern technologies such as React, Next.js, Node.js, Express,
          MongoDB, and Java. I specialize in building fast, scalable, and
          user-friendly web applications using clean architecture and best
          development practices.
        </p>

        <p>
          My journey in technology began with a curiosity to understand how
          things work, which soon grew into a passion for creating real-world
          solutions. I enjoy working in collaborative environments, solving
          challenging problems, and continuously learning new tools and
          technologies to enhance my skill set.
        </p>

        <p>
          Outside of development, I enjoy hiking, playing chess, and exploring
          new music—activities that help me stay creative and balanced.
        </p>

      </div>

      {/* Image Section */}
      <div className="order-1 md:order-2 flex justify-center">
        <img
          src="/my_photo.jpg"
          alt="Bala Ramesh profile picture"
          className="w-60 h-60 md:w-72 md:h-72 rounded-full shadow-lg border-4 
                     border-blue-400 object-cover transform transition-all 
                     duration-500 hover:scale-105 hover:shadow-blue-500/50"
        />
      </div>

    </div>
  </Section>
);


const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Decentralized Video Conferencing',
      description: 'A decentralized video conferencing application with real-time communication and user authentication.',
      link: 'http://decentralized-video-conferencing-d-e46rlz1yx.vercel.app/',
      tech: ['React', 'Node.js', 'WebRTC', 'Tailwind CSS'],
    },
    {
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce platform with features like product listings, shopping cart, and secure checkout.',
      link: 'http://ecommerce-q39qzg3t0-bala110082s-projects.vercel.app/',
      tech: ['React', 'Express',' MongoDB'],
    },
    {
      title: 'Meal DB App',
      description: 'A meal database application with search and filter functionality, built with React and integrated with a third-party API.',
      link: 'http://meal-db-weld.vercel.app/',
      tech: ['React'],
    },
  ];

  return (
    <Section id="projects" title="My Work">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-blue-400">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              className="text-blue-400 font-semibold hover:underline mt-auto self-start"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Contact: React.FC = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <Section id="contact" title="Get in Touch">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full">
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
            <input type="text" id="name" name="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
              placeholder="Your Name" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
            <input type="email" id="email" name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
              placeholder="your.email@example.com" required />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
            <textarea id="message" name="message" rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
              placeholder="Your message here..." required />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg"
          >
            Send Message
          </button>

        </form>
      </div>
    </Section>
  );
};


export default App;
