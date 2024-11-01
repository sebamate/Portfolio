export const metadata = {
    title: 'Portfolio - Uses',
    description: 'The uses page of my portfolio.',
};

// Section Title Component
function SectionTitle({ title, description }) {
    return (
        <div className="w-full flex flex-col items-start gap-4 lg:gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-6">
                {description}
            </p>
        </div>
    );
}

// Item Component
function Item({ name, description }) {
    return (
        <div className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-sm w-[738px]">
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                {name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-6">
                {description}
            </p>
        </div>
    );
}

// Category Component
function Category({ categoryName, items }) {
    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full max-w-3xl lg:pl-6 border-l border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {categoryName}
            </h3>
            <div className="flex flex-col gap-6">
                {items.map((item, index) => (
                    <Item key={index} name={item.name} description={item.description} />
                ))}
            </div>
        </div>
    );
}

// Main Uses Page Component
export default function Uses() {
    return (
        <div className="flex flex-col items-start px-6 md:px-10 py-10 md:py-16 bg-white dark:bg-black min-h-screen">
            <div className="w-full md:w-2/3">
                <SectionTitle
                    title="Software I use, gadgets I love, and other things I recommend."
                    description="Things that have helped me be a better professional"
                />
            </div>

            <div className="flex flex-col items-center gap-12 lg:gap-20 w-full mt-12 lg:mt-16">
                <Category
                    categoryName="Workstation"
                    items={[
                        {
                            name: "Laptop - Asus Zenbook 14 OLED",
                            description: "A great thin laptop, very powerful and with an awesome screen"
                        },
                        {
                            name: "Mouse - Razer DeathAdder",
                            description: "Budget friendly mouse that gets the job done. Great response and feeling"
                        },
                    ]}
                />
                <Category
                    categoryName="Development & Visualization Tools"
                    items={[
                        {
                            name: "VS Code",
                            description: "My go-to code editor with a variety of useful extensions."
                        },
                        {
                            name: "Git",
                            description: "Essential for version control and collaboration on projects."
                        },
                        {
                            name: "Power BI",
                            description: "Powerful visualization tool to manipulate data and deliver meaningful dashboards."
                        },
                    ]}
                />
                <Category
                    categoryName="Design"
                    items={[
                        {
                            name: "Figma",
                            description: "Powerful design tool with collaboration features. Also has a simple yet powrful prototype feature."
                        },
                        
                    ]}
                />
                <Category
                    categoryName="Productivity"
                    items={[
                        {
                            name: "MS Planner",
                            description: "Great tool to organize tasks and share with others."
                        },
                        {
                            name: "Power Automate",
                            description: "Very useful tool to automate daily tasks and improve efficiency"
                        },
                    ]}
                />
            </div>
        </div>
    );
}
