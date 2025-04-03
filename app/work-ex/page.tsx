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
      "Conducted market research across 7+ platforms; improved acquisition by 20%",
      "Applied user interviews and empathy mapping; boosted engagement by 25%",
      "Built feature roadmap through JTBD and prototyping; resolved 12+ user pain points"
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
      "Conducted 40+ stakeholder interviews; validated product-market fit",
      "Applied Lean Canvas to scope MVP (itterative prototyping); accelerated launch by 2 months",
      "Integrated usability feedback into clinical workflows; improved onboarding experience by 20%"
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
    details: [
      "Conducted discovery for BFSI product; defined scope and architecture",
      "Facilitated feature requirements and BRD creation; improved team alignment"
    ],
    
  }
];

