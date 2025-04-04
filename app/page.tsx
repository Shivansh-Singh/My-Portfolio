import Image from "next/image";
import HowICanHelp from "./components/HowICanHelp";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow py-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-5 max-w-4xl w-full mx-auto">
          <section className="text-center">
            {/* Profile Image and Logos Container */}
            <div className="flex items-center justify-center gap-8 mb-6">
              {/* Duke Logo */}
              <div className="relative w-24 h-24">
                <Image
                  src="/logos/duke.jpg"
                  alt="Duke University Logo"
                  fill
                />
              </div>

              {/* Profile Image */}
                <div className="w-60 h-60 relative overflow-hidden rounded-full">
                <div className="absolute inset-0 m-auto">
                  <Image
                    src="/shivansh.jpg"
                    alt="Profile photo"
                    className="object-cover"
                    unoptimized
                    fill
                    priority
                  />
                </div>
              </div>

              {/* Deloitte and IIT Logos */}
              <div className="flex flex-col gap-4">
                <div className="relative w-24 h-24">
                  <Image
                    src="/logos/deloitte-1.jpg"
                    alt="Deloitte Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-24 h-24">
                  <Image
                    src="/logos/iit.jpg"
                    alt="IIT Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <h2 className="text-xl font-medium text-gray-400 mb-1">
              Graduate Student | Duke University
            </h2>

            {/* Program & Field */}
            <h3 className="text-lg font-light text-gray-400 mb-3">
              Engineering Management
            </h3>

            {/* Profile Description */}
            <div className="prose prose-neutral dark:prose-invert max-w-xl mx-auto">
              <p className="italic text-center mb-3">
                Curiosity finds structure and empathy gives it purpose.
              </p>

              <div className="text-left space-y-4">
                <p>
                Hi, I'm <strong>Shivansh</strong>, a builder of products, teams, and ideas. 
                With a foundation in engineering and experience across strategy, innovation, and leadership, 
                my approach is cross-functional by design: rooted in engineering, shaped by business, and driven by impact.
                </p>
                <p>
                  I'm currently pursuing my master's in{" "}
                  <a href="https://masters.pratt.duke.edu/management/overview/" target="_blank" className="text-blue-600 hover:underline">
                    <span className="text-blue-600">Engineering Management</span>
                  </a>{" "}
                  at Duke, with a focus on Product Management, Innovation, and Entrepreneurship.
                </p>
              </div>
            </div>
          </section>
        </div>
        
        {/* How I Can Help Section */}
        <HowICanHelp />
      </main>
    </div>
  );
}
