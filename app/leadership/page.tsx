import React from "react";
import type { Metadata } from "next";
import { leadershipRoles } from "./leadership-data";

export const metadata: Metadata = {
  title: "Leadership/Co-Curricular Experience",
  description: "My Leadership Experience",
};

export default function Leadership() {
  return (
    <section className="py-12 px-6 bg-neutral-50 dark:bg-neutral-900">
      <h1 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-12">
        Leadership/Co-Curricular Experience
      </h1>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {leadershipRoles.map((institution, index) => (
          <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">
              {institution.institution}
            </h2>
            
            <div className="space-y-8">
              {institution.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-medium text-neutral-700 dark:text-neutral-200">
                      {role.title}
                    </h3>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {role.period}
                    </span>
                  </div>
                  
                  {role.subtitle && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                      {role.subtitle}
                    </p>
                  )}
                  
                  <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
                    {role.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 