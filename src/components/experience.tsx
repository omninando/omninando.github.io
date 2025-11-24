import React from 'react'
import useIntersectionObserver from '../helpers/intersection'

interface Experience {
  role: string
  company: string
  yearsWorked: string
  link: string
}

const experiences: Experience[] = [
  {
    role: 'Design Systems Engineer',
    company: 'Legora',
    link: 'https://www.legora.com',
    yearsWorked: '2025 — Present',
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Typeform',
    link: 'https://www.typeform.com',
    yearsWorked: '2022 — 2025',
  },
  {
    role: 'Software Engineer - Javascript',
    company: 'Klarna',
    link: 'https://www.klarna.com',
    yearsWorked: '2020 — 2022',
  },
  {
    role: 'Frontend Developer',
    company: 'VTEX',
    link: 'https://www.vtex.com',
    yearsWorked: '2017 — 2020',
  },
  {
    role: 'Web Engineer',
    company: 'Huge inc.',
    link: 'https://www.hugeinc.com',
    yearsWorked: '2015 — 2017',
  },
]

const ExperienceList: React.FC = () => {
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }

  useIntersectionObserver(observerCallback, { threshold: 0.5 }, '.slide-up')

  return (
    <section className="experience-list-wrapper w-full flex justify-center align-center p-4 pb-20 md:p-0 md:pt-35">
      <div className="experience-list w-full md:max-w-[90%]">
        <h2 className="title uppercase font-medium font-sans text-xl pb-5">
          Experience
        </h2>
        <ul className="list">
          {experiences.map((experience, index) => (
            <li
              key={index}
              className="item flex flex-col py-6 gap-2 opacity-0 slide-up"
            >
              <h3 className="role font-light font-serif italic text-3xl md:text-5xl">
                {experience.role}
              </h3>
              <div className="flex gap-2 ">
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noreferrer"
                  className="company font-normal text-xl"
                >
                  {experience.company}
                </a>
                |
                <p className="years font-normal text-xl">
                  {experience.yearsWorked}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="experience-list w-full flex justify-end py-4 opacity-0 slide-up">
          <a
            href="https://www.linkedin.com/in/nandocoelho"
            target="_blank"
            rel="noreferrer"
            className="button border rounded-xl px-4 py-2"
          >
            View Full Resumé
          </a>
        </div>
      </div>
    </section>
  )
}

export default ExperienceList
