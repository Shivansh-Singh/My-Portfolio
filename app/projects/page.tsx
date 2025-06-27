import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { researchProjects, communityProjects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section className="p-4">
      {/* Research Projects Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-8">
          Research Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {researchProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image with optional DOI link for research projects */}
              {project.doi ? (
                <>
                  <a href={project.doi.url} target="_blank" rel="noopener noreferrer">
                    <div className="relative aspect-[4/3] w-full cursor-pointer">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </a>
                  <div className="px-4 pt-2 pb-0">
                    <a
                      href={project.doi.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline break-all"
                    >
                      DOI: {project.doi.url}
                    </a>
                  </div>
                </>
              ) : (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="mb-2">
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {project.subtitle}
                  </p>
                </div>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-700 dark:text-neutral-300">
                  {project.bulletPoints.map((point, idx) => {
                    const doiMatch = point.match(/(https?:\/\/doi\.org\/\S+)/);
                    if (doiMatch) {
                      const [before, after] = point.split(doiMatch[0]);
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
                    return <li key={idx}>{point}</li>;
                  })}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-white bg-black rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Projects Section */}
      <div>
        <h1 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-8">
          Community & Volunteer Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {communityProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Always render image for community projects */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {project.subtitle}
                  </p>
                </div>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-700 dark:text-neutral-300">
                  {project.bulletPoints.map((point, idx) => {
                    const doiMatch = point.match(/(https?:\/\/doi\.org\/\S+)/);
                    if (doiMatch) {
                      const [before, after] = point.split(doiMatch[0]);
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
                    return <li key={idx}>{point}</li>;
                  })}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-white bg-black rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.certificate && (
                  <div className="mt-4">
                    <a
                      href={project.certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline flex items-center gap-2"
                    >
                      <span>View Certificate</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
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
