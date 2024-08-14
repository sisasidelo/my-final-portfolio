'use client'
import { ChipIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import { experiences } from "../data";
import Layout from "../components/Layout";


export default function Experiences() {
  return (
    <Layout>
    <section id="experiences">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            Professional Experiences
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Below are some of the key projects and roles I&apos;ve undertaken, showcasing my skills and contributions.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {experiences.map((experience) => (
            <div key={experience.id} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={experience.image}
                  alt="content"
                />
                <h2 className="text-xl font-medium title-font text-white mb-4">
                  {experience.title}
                </h2>
                <h3 className="text-gray-500 text-xs tracking-widest font-medium title-font mb-2">
                  {experience.subtitle}
                </h3>
                <p className="leading-relaxed text-base mb-6">
                  {experience.description}
                </p>
                <Link href={`/projects/${experience.id}`} className="text-indigo-400 inline-flex items-center">
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Layout>
  );
}
