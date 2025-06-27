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
                    {item.details.map((detail, idx) => {
                      // If the detail contains a DOI URL, split and render as a link
                      const doiMatch = detail.match(/(https?:\/\/doi\.org\/\S+)/);
                      if (doiMatch) {
                        const [before, after] = detail.split(doiMatch[0]);
                        return (
                          <li key={idx}>
                            {before}
                            <a
                              href={doiMatch[0]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline break-all"
                            >
                              {doiMatch[0]}
                            </a>
                            {after}
                          </li>
                        );
                      }
                      return <li key={idx}>{detail}</li>;
                    })}
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
    title: "Duke University - Pratt School of Engineering",
    subtitle: "Master of Engineering Management (MEM) | GPA: 3.96/4.0 | Durham, North Carolina, USA",
    date: "Aug 2024 – Dec 2025",
    details: [
      "Relevant courses: Product Management, Marketing, Finance, Management of High-Tech Industries, Business Law, Intellectual Proper ",
      "Student Consultant for projects in AI, Med-Tech, and Recruitment Platforms",
      "Student Ambassador, MEM Program",
    ]
  },
  {
    title: "Duke University – Fuqua School of Business",
    subtitle: "Innovation and Entrepreneurship (I&E) | GPA: 4.0/4.0 | Durham, North Carolina, USA",
    date: "Aug 2024 – May 2025",
    details: [
      "Specialized program in Innovation and Entrepreneurship",
      "Relevant courses: Venture Developement, Design Thinking and Innovation, Narrative Design"
    ]
  },
  {
    title: "Indian Institute of Technology (IIT), Indore",
    subtitle: "Bachelor of Technology – Metallurgical Engineering and Materials Science | GPA: 3.5/4.0 | Indore, Madhya Pradesh, India",
    date: "Jun 2018 – May 2022",
    details: [
      "Minor in Economics, Humanities, and Social Sciences",
      "Published B.Tech Thesis: Exploring the Influence of Hydrogen Bond Donors in Deep Eutectic Solvents on the Extraction of Metals During the Recycling Process of Lithium-Ion Batteries - Grade: 4/4 | DOI: https://doi.org/10.1039/d5nj01060h",
      "President, Music Society | Vice Captain, Football Team | Core Member, Consultancy & Analytics Club",
      "Gold & Silver Medalist in Inter-IIT Music Competitions"
    ]
  }
];
