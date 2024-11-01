import React from 'react';

const Work = () => {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white dark:bg-black rounded-lg border border-gray-300 dark:border-gray-800 flex flex-col space-y-1.5 p-6">
            <div className="flex items-center gap-x-2">
                <div className="relative text-md">
                    🛄
                </div>
                <h2 className="text-gray-900 dark:text-white font-semibold tracking-tight text-base">Work</h2>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                My Professional Experience
            </p>
            <div className="mt-4 flex flex-col gap-4">
                {[
                    { company: 'Experian', role: 'HR Analyst', duration: '2021 - 2024', imgSrc: '/experian_logo.jpeg' },
                    { company: 'Experian', role: 'Workforce Management Analyst', duration: '2017 - 2021', imgSrc: '/experian_logo.jpeg' },
                    
                ].map((work, index) => (
                    <div key={index} className="flex items-center justify-between gap-4">
                        <div className="flex justify-center items-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm">
                            <img className="w-7 h-7 rounded-full" src={work.imgSrc} alt={work.company} />
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className="text-gray-900 dark:text-white font-medium">{work.company}</span>
                            <div className="flex justify-between items-center mt-1">
                                <span className="text-gray-600 dark:text-gray-400 text-xs uppercase">{work.role}</span>
                                <span className="text-gray-500 dark:text-gray-400 text-xs text-right">{work.duration}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
