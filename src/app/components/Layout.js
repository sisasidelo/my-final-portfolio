// components/Layout.js
import { ProfileImage } from '../data';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/solid';

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="title-font font-medium text-white mb-4 md:mb-0 flex items-center">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-25 h-28 rounded-full object-cover"
            />
            <span className="ml-3 text-xl">Siphamandla Sisa Sidelo</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <Link href="/projects" className="mr-5 hover:text-white">Experience</Link>
            <Link href="/skills" className="mr-5 hover:text-white">Skills</Link>
            <Link href="/certifications" className="mr-5 hover:text-white">Certifications</Link>
          </nav>
          <Link href="/contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
