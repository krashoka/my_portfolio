"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

/* -------------------- Experience Data -------------------- */

const experiences = [
  {
    role: "Software Engineer L2",
    company: "Predigle India Pvt Ltd",
    location: "Chennai, India",
    period: "Feb 2024 – Present",
    points: [
      "Leading frontend development for scalable product interfaces using React.js, Redux patterns, and reusable UI architectures.",
      "Built a modular, reusable UI component library with Storybook ensuring design-system consistency, accessibility, and cross-browser compatibility.",
      "Implemented high-performance React components using Hooks, memoization, and optimized re-renders, improving application responsiveness.",
      "Designed reliable REST API integration patterns with robust error handling and efficient data-fetching strategies.",
      "Refactored legacy web modules into modern, maintainable React components, reducing future development effort by 25%.",
      "Participated in code reviews to maintain high code quality and long-term maintainability.",
      "Collaborated with designers, backend engineers, and product managers in an Agile environment for smooth feature delivery.",
    ],
    side: "left",
  },
  {
    role: "Software Engineer",
    company: "Tata Consultancy Services (TCS)",
    location: "Kolkata, India",
    period: "Sep 2019 – Jan 2021",
    points: [
      "Developed Angular UI components for internal enterprise-grade applications.",
      "Integrated frontend modules with backend services using REST APIs.",
      "Collaborated with cross-functional teams to deliver UI enhancements aligned with enterprise standards.",
      "Fixed UI bugs, improved responsiveness, and optimized API calls, helping reduce user-reported issues by 20%.",
      "Led a frontend support team during lockdown operations, ensuring uninterrupted delivery and support.",
    ],
    side: "right",
  },
];

/* -------------------- Keyword Highlighter -------------------- */

const highlightKeywords = (text: string) => {
  const keywords = [
    "React",
    "React.js",
    "Next.js",
    "Redux",
    "Angular",
    "REST",
    "API",
    "APIs",
    "Storybook",
    "Hooks",
    "Agile",
  ];

  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");

  return text.split(regex).map((part, index) =>
    keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
      <span key={index} className="text-primary font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

/* -------------------- Component -------------------- */

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-lightbg scroll-mt-24 px-6 pt-24 pb-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop only) */}
          <div className="absolute left-1/2 top-0 hidden md:block h-full w-[2px] bg-primary/30 -translate-x-1/2"></div>

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Card Component -------------------- */

function ExperienceCard({
  exp,
  index,
}: {
  exp: any;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative grid md:grid-cols-2 gap-8 items-start"
    >
      {/* Content */}
      <div
        className={`${
          exp.side === "left"
            ? "md:text-right md:pr-12"
            : "md:col-start-2 md:pl-12"
        }`}
      >
        <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800">
            {exp.role}
          </h3>

          <p className="text-primary font-medium text-sm">
            {exp.company}
          </p>

          <p className="text-gray-500 text-xs mt-1">
            {exp.location} • {exp.period}
          </p>

          {/* Bullet Points */}
          <ul className="mt-4 space-y-3">
            {(expanded ? exp.points : exp.points.slice(0, 3)).map(
              (point: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <FaCheckCircle className="text-primary mt-[3px] shrink-0" />
                  <span className="leading-relaxed">
                    {highlightKeywords(point)}
                  </span>
                </li>
              )
            )}
          </ul>

          {/* Show more / less (mobile only) */}
          {exp.points.length > 3 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-sm text-primary font-medium md:hidden hover:underline"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>

      {/* Timeline Dot (desktop only) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
          <FaBriefcase className="text-white text-sm" />
        </div>
      </div>
    </motion.div>
  );
}
