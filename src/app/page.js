"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto p-6">
          {/* Header Section */}
          <header className="py-4 mb-10">
            <nav className="flex justify-center items-center mb-4 relative">
              <ul className="flex space-x-4">
                <li>
                  <a
                      href="/"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                      href="/about"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                      href="/projects"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Projects
                  </a>
                </li>
              </ul>

              {/* Dark Mode Toggle Button */}
              <button
                  onClick={toggleDarkMode}
                  className="absolute right-0 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-2 rounded-lg"
              >
                {darkMode ? '☀️' : '🌖'}
              </button>
            </nav>

            <div className="max-w-3xl text-left">
              <img
                  src="/portfolio/profilepic.jpeg"
                  alt="Profile"
                  className="rounded-full w-24 h-24 mb-4"
              />
              <h1 className="text-5xl font-bold mt-4 text-left text-gray-900 dark:text-white">
                Android developer, Software engineer, and believer
              </h1>
              <p className="mt-4 text-gray-700 dark:text-gray-400">
                Over 8 years of professional native Android experience. Used Java most of the career. Last 4 years been using mix of Kotlin and Java
              </p>
            </div>
          </header>

          {/* Main Content */}
          <main className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
            {/* Left side: Articles */}
            <div>
              <article className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">February 20, 2023</h2>
                <p className="text-gray-700 dark:text-gray-400 w-3/4">
                  Worked for Point of Sale (POS) system for all Disney parks, used across stores, restaurants, hotels, and various other locations. Key features include check creation, integration with receipt printers, credit card terminals, barcode readers, and cash drawers.
                </p>
                <a href="#" className="text-blue-500 hover:underline dark:text-blue-400">Read article</a>
              </article>

              <article className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">April 10, 2023</h2>
                <p className="text-gray-700 dark:text-gray-400 w-3/4">
                  Actively participated in the maintenance and enhancement of a large-scale microfinance management application, serving over 80,000 active users.
                </p>
                <a href="#" className="text-blue-500 hover:underline dark:text-blue-400">Read article</a>
              </article>

              <article className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">November 05, 2021</h2>
                <p className="text-gray-700 dark:text-gray-400 w-3/4">
                  Core team member in the development and maintenance of a multifaceted automotive app serving thousands of users, featuring car information, wallpapers, and an e-commerce platform for auto parts.
                </p>
                <a href="#" className="text-blue-500 hover:underline dark:text-blue-400">Read article</a>
              </article>
            </div>

            {/* Right side: Sidebar */}
            <aside>
              {/* Stay up-to-date section */}
              <section className="rounded-lg shadow-md p-4 mb-6 bg-white dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Stay up to date</h3>
                <form className="mt-4">
                  <input
                      type="email"
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Enter your email"
                  />
                  <button className="w-full bg-blue-500 text-white p-2 mt-2 rounded-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800">
                    Join
                  </button>
                </form>
              </section>

              {/* Work Section */}
              <section className="rounded-lg shadow-md p-4 mb-6 bg-white dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Work</h3>
                <ul className="mt-4">
                  <li className="flex items-center mb-4">
                    <img src="/portfolio/Walt-Disney-Pictures-Emblem.jpg" alt="Disney Logo" className="w-13 h-10 mr-2" />
                    <span className="text-gray-900 dark:text-white">The Walt Disney Company - Software Engineer (2024 - Present)</span>
                  </li>
                  <li className="flex items-center mb-4">
                    <img src="/portfolio/santander.jpg" alt="Santander Logo" className="w-15 h-10 mr-2" />
                    <span className="text-gray-900 dark:text-white">Santander Bank - Software Engineer (2022 - 2024)</span>
                  </li>
                  <li className="flex items-center mb-4">
                    <img src="/portfolio/GDP logo.jpg" alt="GDP Logo" className="w-10 h-10 mr-2" />
                    <span className="text-gray-900 dark:text-white">Solutions GDP - Software Engineer (2016  - 2019)</span>
                  </li>
                </ul>
              </section>

              {/* Skills Section */}
              <section className="rounded-lg shadow-md p-4 bg-white dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Skills</h3>
                <div className="mt-4">
                  <div className="mb-4">
                    <span className="text-gray-900 dark:text-white">HTML</span>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-1">
                      <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-900 dark:text-white">CSS</span>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-1">
                      <div className="bg-green-600 dark:bg-green-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-900 dark:text-white">JavaScript</span>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-1">
                      <div className="bg-yellow-600 dark:bg-yellow-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </section>
            </aside>
          </main>

          {/* Footer Section */}
          <footer className="border-t mt-10 pt-4 flex justify-between items-center">
            <nav className="flex space-x-4">
              <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
              <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
              <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
              <a href="/uses" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Uses</a>
            </nav>
            <p className="text-gray-500 dark:text-gray-400 text-sm">&copy; 2024 Giordan Vargas. All rights reserved.</p>
          </footer>
        </div>
      </div>
  );
}
