import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-slide-up tracking-wide">Get in Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Mail className="h-8 w-8" />,
              title: 'Email',
              content: <a href="mailto:anshppt19@gmail.com" className="text-blue-600 hover:text-blue-700">anshppt19@gmail.com</a>
            },
            {
              icon: <Phone className="h-8 w-8" />,
              title: 'Phone',
              content: <p className="text-gray-600">+91 7355348898</p>
            },
            {
              icon: <MapPin className="h-8 w-8" />,
              title: 'Location',
              content: <p className="text-gray-600">Gorakhpur, Uttar Pradesh</p>
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-up hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-600 mx-auto mb-4 transform hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}