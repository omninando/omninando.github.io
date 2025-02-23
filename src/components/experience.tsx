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
    role: 'Frontend Engineer',
    company: 'Typeform',
    link: 'https://www.typeform.com',
    yearsWorked: '2022 — Present',
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

  useIntersectionObserver(observerCallback, { threshold: 0.5 }, '.item')

  return (
    <section className="experience-list-wrapper w-full flex justify-center p-4 md:p-0 my-30">
      <div className="experience-list w-full md:max-w-[90%]">
        <h2 className="title uppercase font-medium font-sans text-xl pb-5">
          Experience
        </h2>
        <ul className="list">
          {experiences.map((experience, index) => (
            <li key={index} className="item flex flex-col py-6 gap-2">
              <h3 className="role font-light font-serif italic text-4xl">
                {experience.role}
              </h3>
              <div className="flex gap-2">
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
        <div className="experience-list w-full flex justify-end py-4">
          <button type="button" className="button border rounded-xl px-4 py-2">
            View Full Resumé
          </button>
        </div>
      </div>
    </section>
  )
}

export default ExperienceList
