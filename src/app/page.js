import { ArticleCard } from "@/components/article-card";
import { SubscribeCard } from "@/components/subscribe-card";
import { SkillsCard } from "@/components/skills-card";
import Profile from "@/components/profile";
import Work from "@/components/work-card";

const articles = [
    {
        date: "October 31, 2024",
        title: 'Free Harvard courses',
        description: 'If you want to improve your skills in CS and working with data, take a look into the free CS50 courses that Harvard University offers.',
        link: 'https://pll.harvard.edu/catalog?topics%5B702%5D=702&max_price=&start_date=&keywords='
    },
    {
        date: "September 18, 2024",
        title: 'Tech Careers Roadmaps',
        description: 'You want to improve your skills, but you dont know what to learn next? Explore this awesome webpage to check Roadmaps by Career that will show you the most important skills for your area.',
        link: 'https://roadmap.sh/roadmaps'
    },
    
]

export default async function Home() {
    const data = {
        languages: [
            {
                name: 'Java',
                percent: 85,
            },
            {
                name: 'Python',
                percent: 70,
            },
            {
                name: 'SQL',
                percent: 80,
            },
            {
                name: 'Javascript',
                percent: 80,
            },
        ],
    };

    return (
        <div className="flex justify-between min-h-screen mx-0 px-[144px] py-4"> {/* Added padding and adjusted margin */}
            <div className="flex flex-col items-start flex-grow"> {/* Allow this column to grow */}
                <Profile />
                <div className={'flex flex-col md:flex-row'}>
                    <div className={'md:w-3/5'}>
                        {articles.map((article, index) => (
                            <ArticleCard key={index} {...article} />
                        ))}
                    </div>
                    <div className={'md:w-2/5 space-y-8'}>
                        <SubscribeCard />
                        <Work />
                        <SkillsCard stats={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}
