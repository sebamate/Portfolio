"use client";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
    return (
        <div className="w-full flex flex-col items-start gap-6 p-6 bg-white shadow-none dark:bg-black">
            <div className="w-24 h-24 p-2 bg-opacity-90 bg-white rounded-full flex justify-center items-center">
                <img
                    className="w-25 h-25 rounded-full"
                    src="/ProfilePic.jpg"
                    alt="Profile"
                />
            </div>
            <div className="text-black dark:text-white text-3xl font-bold leading-9">
                Data Scientist | Data Analyst
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-base leading-7">
                I am capable person, passionate about data and technology, and committed to learning new things every day. I have a Bachelors in Business Administration and and Associates degree in Data Science. Among my main strengths are Data analysis, reporting, problem-solving, communication and leadership. 
            </div>
            <div className="bg-gray-100 p-2 rounded-md flex gap-3">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/sebastian-mateluna-28995815b/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer">
                    <button className="w-6 h-6 flex items-center justify-center focus:outline-none">
                        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-gray-600" />
                    </button>
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <button className="w-6 h-6 flex items-center justify-center focus:outline-none">
                        <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 text-gray-600" />
                    </button>
                </a>

                {/* GitHub */}
                <a href="https://github.com/sebamate/Portfolio" target="_blank" rel="noopener noreferrer">
                    <button className="w-6 h-6 flex items-center justify-center focus:outline-none">
                        <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-gray-600" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Profile;