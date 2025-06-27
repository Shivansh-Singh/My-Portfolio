import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Work Experience",
  description: "Shivansh's Work Experience Timeline",
};

export default function PortfolioTimeline() {
  return (
    <section className="py-12 px-6 bg-neutral-50 dark:bg-neutral-900">
      <h1 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-8">
        Work Experience
      </h1>
      <div className="relative mx-auto max-w-4xl flex">
        {/* Timeline Line */}
        <div className="relative border-l-4 border-neutral-400 dark:border-neutral-600" style={{ marginLeft: "75px" }}>
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
              <div className="ml-6 space-y-4">
                <div className="space-y-2">
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

                {/* Images */}
                {item.images && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {item.images.map((image, imgIdx) => (
                      <div key={imgIdx} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                        {image.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2">
                            {image.caption}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Website Links */}
                {item.website && (
                  <div className="mt-4">
                    <a 
                      href={item.website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                            Visit {item.website.name}
                          </h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {item.website.url}
                          </p>
                        </div>
                        <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  </div>
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
    title: "Bern – AI Teddy Bear Startup | Product Manager",
    subtitle: "Product Manager",
    date: "Jan 2025 – May 2025",
    details: [
      "Defined GTM and pricing strategy; secured beta testers and early customers",
      "Created ICPs and value proposition; improved lead to pre-order conversion rate by 40%",
      "Designed product roadmap with focus on UX, compliance, and LLM safety; increased parent satisfaction by 30%"
    ],
    images: [
      {
        src: "/work/bern-1.jpg",
        alt: "Bern AI Teddy Bear Product",
        caption: "Product prototype and testing"
      },
    ]
  },
  {
    title: "Jobz – AI Hiring Platform | Student Consultant",
    subtitle: "Student Consultant",
    date: "Aug 2024 – Dec 2024",
    details: [
      "Defined product roadmap through competitive research and 40+ user interviews across B2B and B2C segments.",
      "Created customer personas and problem statements to align feature development with real user needs.",
      "Refined AI matching and feedback logic using empathy mapping; projected 10% uplift in engagement.",
      "Developed GTM strategy and positioning to drive platform adoption, contributing to a 20% increase in user acquisition."
    ],
    images: [
      {
        src: "/work/jobz-1.jpg",
        alt: "Jobz Platform Interface",
        caption: "Strategy Pitch"
      },
      {
        src: "/work/jobz-2.jpg",
        alt: "User Research",
        caption: "User research and interviews"
      }
    ]
  },
  {
    title: "Duke IP – Med-Tech Device | Student Consultant",
    subtitle: "Student Consultant",
    date: "Aug 2024 – Dec 2024",
    details: [
      "Led MVP development of a diagnostic med-tech device, conducting 30+ stakeholder interviews across hospitals, clinics, and patient groups",
      "Applied Lean Canvas to scope MVP (itterative prototyping); accelerated launch by 2 months",
    ],
    images: [
      {
        src: "/work/duke-1.jpg",
        alt: "Med-Tech Device",
        caption: "Final Pitch"
      },
    ]
  },
  {
    title: "Deloitte India – Consultant, Cyber & Strategic Risk",
    subtitle: "Consultant",
    date: "Jul 2022 – Jun 2024",
    details: [
      "Delivered ERM rollouts across energy, manufacturing, and SaaS clients",
      "Applied scenario modeling; improved risk estimation accuracy by 15%",
      "Automated risk indicators with SAP; enhanced monitoring by 40%",
      "Built Power BI dashboards; improved executive decision-making",
      "Trained 60+ senior leaders on risk frameworks; improved governance and risk awareness by 55%",
      <>
        Recognized with 3 performance awards for innovation and impact; top 5% of performers{" "}
        <a
          href="https://drive.google.com/drive/folders/1eljQU1HKO9bE5h6syPdEqVA3-MmYMrtj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          🔗
        </a>
      </>
    ],
    images: [
      {
        src: "/work/deloitte-1.jpg",
        alt: "ERM Dashboard",
        caption: "Client Location"
      },
      {
        src: "/work/deloitte-2.jpg",
        alt: "Training Session",
        caption: "Leadership meeting"
      }
    ]
  },
  {
    title: "Appointy – Enterprise Sales & Product Intern",
    subtitle: "Intern",
    date: "Sep 2020 – Dec 2020",
    website: {
      url: "https://www.appointy.com/",
      name: "Appointy"
    },
    details: [
      "Translated 15+ RFPs into actionable features; increased proposal win rate by 20%",
      "Ran pricing experiments; improved client conversions by 10%",
      "Prioritized feature rollout across teams; shortened sales cycles"
    ],
  },
  {
    title: "Netlink Software – Business Analyst Intern",
    subtitle: "Intern",
    date: "Apr 2020 – Jul 2020",
    website: {
      url: "https://lumenore.com/",
      name: "Lumenore (Netlink's AI-Product)"
    },
    details: [
      "Conducted discovery research for Lumenore (AI-Flagship Product) to define product scope and delivery roadmap.",
      "Facilitated feature scoping and curated Product Requirements Documents (PRDs) to align cross-functional teams.",
    ],
    
  }
];

