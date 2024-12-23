import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Watermark from './components/Watermark';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} ANSH. All rights reserved.</p>
        </div>
      </footer>
      <Watermark />
    </div>
  );
}

export default App;