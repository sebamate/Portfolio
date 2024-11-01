'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default async function Page() {
    return (
        <div className="flex flex-col md:flex-row justify-between min-h-screen mx-0 px-4 py-4 bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* Left Side: Text Content */}
            <div className="flex flex-col justify-start items-start gap-6 w-full md:w-[464px] order-1 md:order-1">
                <h1 className="text-4xl font-bold">
                    I’m Sebastian. I live in Lehi, Utah, where I'm preparing to achieve great things.
                </h1>
                {Array.from({ length: 1 }, (_, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-400 text-sm leading-6">
                        I am from Chile. I have a beautiful family that I profoundly love: my wife and 2 daughters of 4 and 2 years old. 
                        I love learning new things and pushing my limits. Thats why I decided to continue my studies and get an AAS in Data Science at Ensign College.
                        I loved learning about data and its power in todays world. The develoment of new technologies like AI and machine learning are topics that make me want to participate in this huge advances for the world.

                        My hobbies are playing the guitar and playing videogames. I love composing music and let my creativity flow.

                    </p>
                ))}
            </div>

            {/* Right Side: Image and Social Media Links */}
            <div className="flex flex-col gap-6 w-full md:w-[464px] order-2 md:order-2">
                {/* Image at the top in mobile view */}
                <img
                    className="w-full h-[452px] object-cover rounded-lg"
                    src="/ProfilePic.jpg"
                    alt="About Image"
                />

                {/* Social Media Links */}
                <div className="flex flex-col gap-6">
                    {/* Follow me on Section with Clickable Icons */}
                    <div className="flex flex-col gap-2">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faXTwitter} className="text-gray-900 dark:text-white w-5 h-5" />
                            <span className="text-gray-900 dark:text-white text-sm">Follow me on X</span>
                        </a>
                        <a href="https://github.com/sebamate/Portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faGithub} className="text-gray-900 dark:text-white w-5 h-5" />
                            <span className="text-gray-900 dark:text-white text-sm">Follow me on GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/sebastian-mateluna-28995815b/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faLinkedin} className="text-gray-900 dark:text-white w-5 h-5" />
                            <span className="text-gray-900 dark:text-white text-sm">Follow me on LinkedIn</span>
                        </a>
                    </div>

                    {/* Email Section */}
                    <div className="flex items-center border-t border-gray-700 pt-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-900 dark:text-white w-5 h-5" />
                        <span className="ml-2 text-gray-900 dark:text-white text-sm">sebamate.c@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
