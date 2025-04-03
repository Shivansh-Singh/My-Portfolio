'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceSection {
  title: string;
  description: string;
  experience: string;
}

const services: ServiceSection[] = [
  {
    title: "User Insight & Lean/Continuous Discovery",
    description: "I drive user-first product development by leading customer discovery, empathy mapping, journey design, and product testing ensuring solutions are grounded in real needs, not assumptions.",
    experience: "At Bern (a smart educational companion for children), I drove development of the first prototype through hands-on customer discovery and testing, defined Ideal Customer Profiles (ICPs), and set key product performance metrics for beta success. I also co-developed a diagnostic med-tech device with a Duke inventor, guiding itterative prototyping through stakeholder interviews and clinical workflow design."
  },
  {
    title: "Product Vision & Strategy",
    description: "I help shape product foundations from architecture and value proposition to go-to-market strategy, sales channels, and feature roadmaps. I have also designed financial models, and product performance metrics to guide data driven decision-making.",
    experience: "At Bern, I led core aspects of product development including product strategy and architecture. I outlined possible sales channels, beta testing plan and drove early traction, securing the first 20 pre-orders with a goal of reaching 100 within 3 months. At Jobz, an AI-powered recruitment platform, I identified 12+ user pain points and translated insights into a feature roadmap through user journey mapping and storyboarding."
  },
  {
    title: "Business & Risk Analysis",
    description: "I enable informed product decisions by identifying risks, modeling scenarios, and aligning business goals with operational planning.",
    experience: "At Deloitte, I delivered Enterprise Risk Management rollouts and trained 60+ senior leaders on structured frameworks for risk informed decision-making. At Appointy, I assisted in product customiztion and pricing strategies, translating 15+ RFPs into actionable product features and increased proposal win rate."
  }
];

export default function HowICanHelp() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-5 max-w-4xl w-full mx-auto mt-4 cursor-pointer"
         onClick={() => setIsExpanded(!isExpanded)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          How I Can Help
        </h2>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-500"
        >
          ▼
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-6">
              {services.map((service, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                 {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                    {service.experience}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 