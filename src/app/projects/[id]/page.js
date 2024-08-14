'use client'
import { useParams } from 'next/navigation';
import React from 'react';
import { experiences } from '@/app/data';
import Layout from '@/app/components/Layout';

export default function ExperienceDetails() {
  const { id } = useParams();
  const experience = experiences.find((exp) => exp.id === id);

  if (!experience) {
    return <div>Experience not found</div>;
  }

  return (
    <Layout>
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="experience"
            className="lg:w-1/2 w-full object-cover object-center rounded"
            src={experience.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              {experience.title}
            </h1>
            <h2 className="text-gray-500 text-lg title-font font-medium mb-4">
              {experience.subtitle}
            </h2>
            <p className="leading-relaxed mb-4">{experience.extendedDescription}</p>
            <p className="leading-relaxed mb-4">{experience.description}</p>
            <h3 className="text-lg font-medium text-white mb-4">Tasks:</h3>
            <ul className="list-disc pl-5 space-y-2">
              {experience.tasks.map((task, index) => (
                <li key={index} className="text-gray-400">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
}
