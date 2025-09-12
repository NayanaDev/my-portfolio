import React from 'react'

function Skills() {
  const skills = ["React", "Redux Toolkit", "JavaScript (ES6+)", "HTML5", "CSS3",
    "Tailwind CSS", "Material-UI", "Git", "CI/CD", "Jest", "React Testing Library"
  ];
  return (
    <section id="#skills" className='py-16 px-4 shadow-lg rounded-lg mb-8 bg-white'>
      <h2 className='text-4xl font-bold text-center text-grey-800 mb-8'>Skills</h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {
          skills && skills.map((skill) => <span className='cursor-pointer px-4 py-2 bg-blue-100 text-blue-700 rounded-full shadow text-lg font-medium hover:text-black'>{skill}</span>)
        }
      </div>
    </section>
  )
}

export default Skills