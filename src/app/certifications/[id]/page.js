'use client'
import { useParams } from 'next/navigation';
import React from 'react';
import { certifications } from '@/app/data';

export default function CertificationDetails() {
  const { id } = useParams();
  const certification = certifications.find((cert) => cert.id === id);

  if (!certification) {
    return <div>Certification not found</div>;
  }

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="certification"
            className="lg:w-1/2 w-full object-cover object-center rounded"
            src={certification.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              {certification.title}
            </h1>
            <h2 className="text-gray-500 text-lg title-font font-medium mb-4">
              {certification.subtitle}
            </h2>
            <p className="leading-relaxed mb-4">{certification.extendedDescription}</p>
            <p className="leading-relaxed mb-4">{certification.description}</p>
            <a
              href={certification.link}
              className="mt-4 text-indigo-400 inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
