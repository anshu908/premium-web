import React from 'react';
import { Monitor, Mail, Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">ANSH</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <div className="flex items-center gap-4">
              <a href="mailto:anshppt19@gmail.com" className="text-gray-600 hover:text-blue-600">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/anshu908" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}