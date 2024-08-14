import React from "react";
import Link from 'next/link';

export default function Welcome() {
  return (
    <section id="about" className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto flex px-1 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
            Hi, I&apos;m Sisa.
            <br className="hidden lg:inline-block" />SQL Developer. Reporting and Analytics Specialist. Database Administrator
          </h1>
          <p className="mb-8 leading-relaxed">
                As a dedicated SQL Developer with a focus on T-SQL, 
                I bring three years of experience in database administration, reporting, and analytics to the table. 
                My expertise spans designing and optimizing complex queries, managing high-profile projects, and delivering actionable insights through advanced reporting solutions. 
                I&apos;ve successfully optimised the Gauteng Online Admissions Placement Engine, which significantly improved its performance by 71%. 
                I thrive in dynamic environments, leveraging my technical skills and project experience to drive data-driven decision-making and enhance operational efficiency.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
            </Link>
            <Link href="/projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
