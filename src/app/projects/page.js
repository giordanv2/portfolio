// src/app/projects/page.jsx

import Header from "@/components/Header";

export const metadata = {
    title: 'Portfolio - Projects',
    description: 'The projects page of my portfolio.',
};

export default function Projects() {
    const projects = [
        {
            id: 1,
            name: "The Walt Disney Company",
            description: "Creating technology to empower civilians to explore space on their own terms.",
            url: "https://company.com",
            icon: "/portfolio/Walt-Disney-Pictures-Emblem.jpg",
        },
        {
            id: 2,
            name: "Santander Bank",
            description: "Creating technology to empower civilians to explore space on their own terms.",
            url: "https://company.com",
            icon: "/portfolio/santander.jpg",
        },
        {
            id: 3,
            name: "Solutions GDP",
            description: "Creating technology to empower civilians to explore space on their own terms.",
            url: "https://company.com",
            icon: "/portfolio/GDP logo.jpg",
        },

    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto p-6">
                {/* Header */}
                <Header />

                {/* Introduction Section */}
                <header className="py-4 mb-10">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                        Things I’ve made trying to put my dent in the universe.
                    </h1>
                    <p className="mt-4 text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    </p>
                </header>

                {/* Projects Grid */}
                <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-center shadow-md">
                            <img src={project.icon} alt={`${project.name} Logo`} className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                {project.description}
                            </p>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center text-blue-500 hover:underline dark:text-blue-400"
                            >
                                {project.url}
                            </a>
                        </div>
                    ))}
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
