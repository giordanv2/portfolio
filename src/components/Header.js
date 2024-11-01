"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Header() {
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
        <header className="py-4 mb-10">
            <nav className="flex justify-center items-center mb-4 relative">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/portfolio/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                            Projects
                        </Link>
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
        </header>
    );
}
