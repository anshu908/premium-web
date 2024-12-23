import React from 'react';
import { Code2, Database, Globe, Users, Brain, Bot } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Programming Languages',
    description: 'Python, JavaScript, Bot Development',
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'Bot Development',
    description: 'Telegram Bots, Chat Bots, Automation',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Web Technologies',
    description: 'HTML5, CSS3, Basic Web Development',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Teaching',
    description: 'Computer Science, Programming Basics',
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Course Development',
    description: 'Curriculum Design, Student Mentoring',
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Development Tools',
    description: 'Git, VS Code, Bot APIs',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-slide-up tracking-wide">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-600 mb-4 transform hover:scale-110 transition-transform">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}