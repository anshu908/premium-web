import React from 'react';

const experiences = [
  {
    period: '2020 - Present',
    title: 'Senior Computer Science Teacher',
    institution: 'Tech Academy',
    description: 'Leading computer science department, developing curriculum, and teaching advanced programming courses.',
  },
  {
    period: '2017 - 2020',
    title: 'Computer Science Instructor',
    institution: 'Digital Learning Institute',
    description: 'Taught programming fundamentals, web development, and database management to diverse student groups.',
  },
  {
    period: '2015 - 2017',
    title: 'Teaching Assistant',
    institution: 'University of Technology',
    description: 'Assisted in laboratory sessions and graded assignments for undergraduate computer science courses.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Teaching Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-2"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <span className="text-sm text-blue-600 font-semibold">{exp.period}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-1">{exp.title}</h3>
                <h4 className="text-lg text-gray-600 mb-2">{exp.institution}</h4>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}