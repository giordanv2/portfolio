// src/app/about/page.jsx
import Header from "@/components/Header.js";

export const metadata = {
    title: 'Portfolio - About',
    description: 'The about page of my portfolio.',
};

export default function About() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto p-6">
                {/* Header Section */}
                <Header />

                <main className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-start mt-6">
                    {/* Left side: Introduction Text */}
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                            I’m Giordan. I live in Utah, where I develop the future.
                        </h1>
                        <p className="mt-4 text-gray-700 dark:text-gray-400">
                            Detail-oriented and highly motivated Android developer with 8+ years of experience in Android application development, specializing in fintech solutions. Proficient in Java and Kotlin, with a strong foundation in software design patterns and user-oriented design.
                        </p>
                        <p className="mt-4 text-gray-700 dark:text-gray-400">
                            {/* Repeat this paragraph or add more text as needed */}
                            Have experience in both large and small development teams. Last 4 years I helped manage the mobile team and ran the Scrum ceremonies. Developed in other languages and no problems learning something outside of
                            Android.
                        </p>
                    </div>

                    {/* Right side: Profile Image and Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src="/profilepic.jpeg" alt="Profile" className="rounded-lg w-full md:w-auto mb-4" />
                        <div className="mt-4 space-y-2">
                            <a href="https://twitter.com/username" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">
                                <span>Follow me on X</span>
                            </a>
                            <a href="https://github.com/username" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900">
                                <span>Follow me on Github</span>
                            </a>
                            <a href="https://linkedin.com/in/username" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
                                <span>Follow me on LinkedIn</span>
                            </a>
                            <p className="text-gray-600 dark:text-gray-300 flex items-center space-x-2">
                                <span>Email: giordanvar@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </main>

                {/* Footer */}
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
