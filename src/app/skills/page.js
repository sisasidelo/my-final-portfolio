'use client'
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import  {skillsData } from '../data'
import Layout from "../components/Layout";

export default function Skills() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <Layout>
     <section id="skills" className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container bg-gray-800 px-5 py-10 mx-auto">
        
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are some of the skills and technologies I have experience with, categorized by area of expertise.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="w-full mb-6">
              <button
                className="text-xl font-semibold text-white mb-4 w-full text-left flex items-center"
                onClick={() => toggleCategory(category)}
              >
                <span className={`transition-transform ${openCategory === category ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {category}
              </button>
              {openCategory === category && (
                <div className="flex flex-wrap -mx-2">
                  {skills.map((skill) => (
                    <div key={skill.name} className="p-2 sm:w-1/3 w-full">
                      <div className="bg-gray-700 rounded-lg flex p-3 h-auto items-start">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 flex-shrink-0 mr-3" />
                        <div>
                          <span className="title-font font-medium text-white text-sm">
                            {skill.name}
                          </span>
                          <p className="text-gray-400 text-xs mt-1">
                            {skill.strength}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </Layout>
  );
}
