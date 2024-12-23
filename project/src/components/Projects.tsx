import React from 'react';
import { Bot, MessageCircle } from 'lucide-react';

const projects = [
  {
    type: 'bot',
    name: '@Ruhi_X_bot',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?w=400&h=300&fit=crop',
    description: 'An advanced Telegram bot with chat management and entertainment features.',
    link: 'https://t.me/Ruhi_X_bot'
  },
  {
    type: 'bot',
    name: '@anshi_chat_robot',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    description: 'Interactive chat bot with AI-powered conversations and group management.',
    link: 'https://t.me/anshi_chat_robot'
  },
  {
    type: 'bot',
    name: '@Reaction_Rbot',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop',
    description: 'Reaction bot for adding interactive elements to Telegram groups.',
    link: 'https://t.me/Reaction_Rbot'
  },
  {
    type: 'channel',
    name: '@ans_X_bot',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    description: 'Channel for bot updates and tech news.',
    link: 'https://t.me/ans_X_bot'
  },
  {
    type: 'channel',
    name: '@ansh_hack',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop',
    description: 'Cybersecurity and ethical hacking resources.',
    link: 'https://t.me/ansh_hack'
  },
  {
    type: 'channel',
    name: '@bot_maker1437',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    description: 'Bot development tutorials and updates.',
    link: 'https://t.me/bot_maker1437'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-slide-up">
          Telegram Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  {project.type === 'bot' ? <Bot className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}