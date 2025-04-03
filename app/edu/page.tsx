import Link from "next/link"; 

export const metadata = {
  title: "Education",
  description: "Shivansh's Education Timeline",
};

export default function PortfolioTimeline() {
  return (
    <section className="py-12 px-6 bg-neutral-50 dark:bg-neutral-900">
      <h1 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-8">
        Education
      </h1>
      <div className="relative mx-auto max-w-2xl flex">
        {/* Timeline Line */}
        <div className="relative border-l-4 border-neutral-400 dark:border-neutral-600" style={{ marginLeft: "40px" }}>
          {/* Invisible spacer for alignment */}
        </div>

        {/* Timeline Content */}
        <div className="pl-0">
          {timelineItems.map((item, index) => (
            <div key={index} className="mb-12 flex items-start relative">
              {/* Date */}
              <div className="absolute -left-28 w-24 text-right mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {item.date}
              </div>

              {/* Content */}
              <div className="ml-6 space-y-2">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  {item.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {item.subtitle}
                </p>
                {/* Additional points */}
                {item.details && (
                  <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const timelineItems = [
  {
    title: "Duke University",
    subtitle: "Master of Engineering Management (MEM) | GPA: 3.93/4.0 | Durham, North Carolina, USA",
    date: "Aug 2024 – Dec 2025",
    details: [
      "Focus areas: Product Management, Innovation, and Entrepreneurship",
      "Coursework includes: Product Management, Design Thinking, Venture Development, Marketing, and Finance",
      "Student Consultant for projects in AI, Med-Tech, and Recruitment Platforms",
      "Student Ambassador, MEM Program",
    ]
  },
  {
    title: "Indian Institute of Technology (IIT), Indore",
    subtitle: "Bachelor of Technology – Metallurgical Engineering and Materials Science | GPA: 3.5/4.0 | Indore, Madhya Pradesh, India",
    date: "Jun 2018 – May 2022",
    details: [
      "Minor in Economics, Humanities, and Social Sciences",
      "B.Tech Thesis: E-Waste Utilization and Management - Grade: 4/4 ",
      "President, Music Society | Vice Captain, Football Team | Core Member, Consultancy & Analytics Club",
      "Gold & Silver Medalist in Inter-IIT Music Competitions"
    ]
  }
];
