import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <img
            src="https://envs.sh/z7n.jpg"
            alt="ANSH"
            className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-lg animate-fade-in hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-slide-up tracking-wider">ANSH</h1>
          <h2 className="text-2xl text-blue-600 mb-6 animate-slide-up delay-100 tracking-wide">Computer Science Educator & Bot Developer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-slide-up delay-200">
            Passionate computer science teacher and Telegram bot developer. Created popular bots like @Ruhi_X_bot, 
            @anshi_chat_robot, and @Reaction_Rbot. Dedicated to combining teaching with practical bot development 
            to inspire the next generation of tech innovators.
          </p>
          <a href="#skills" className="animate-bounce inline-block hover:text-blue-600 transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}