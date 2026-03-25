import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import "./experience.css";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Iliyaz Ahmed — Full-Stack Developer.",
};

const experiences = [
  {
    date: "2024 — Present",
    role: "Software Engineer",
    company: "IKEA",
    desc: "Led frontend development using React and TypeScript, owning UI architecture and feature delivery. Implemented Cypress-based test automation to ensure application reliability and reduce regression issues and integrated Sentry to proactively identify and resolve production issues. Built CI/CD pipelines with GitHub Actions and actively contributed to product and architectural decisions in cross-functional teams. Implementing analytics-driven features with Google Analytics and building scalable microservices architecture with AI-driven solutions.",
    tags: ["React", "TypeScript", "Cypress", "Sentry", "CI/CD", "AI", "GCP"],
  },
  {
    date: "2022 — 2024",
    role: "Senior Consultant",
    company: "Capgemini",
    desc: "Built dynamic, graph-based dashboards to visualize application health, incident tracking, and system performance. Implemented detailed monitoring views for critical and major business incidents across multiple markets, enabling real-time insights and faster decision-making. Worked closely with cross-functional teams to enhance data accuracy, usability, and overall product experience.",
    tags: ["Angular", "Express.js", "Node.js", "SQL"],
  },
  {
    date: "2021 — 2022",
    role: "Consultant",
    company: "Capgemini",
    desc: "Developed and maintained end-to-end customer journey applications for a financial insurance platform using Angular and Express.js, delivering scalable and user-centric solutions. Built secure workflows for policy management, claims processing, and customer onboarding. Ensured seamless integration with backend services and adherence to financial domain requirements in a fast-paced Agile environment.",
    tags: ["Angular", "Express.js", "Node.js", "SQL"],
  },
  {
    date: "2019 — 2021",
    role: "Junior Software Developer",
    company: "Sterling Software Pvt Ltd",
    desc: "Contributed to the development of multiple mutual fund applications using Angular, Node.js, and Express.js, delivering secure and scalable solutions for investment and withdrawal workflows. Implemented OTP-based authentication and Google reCAPTCHA integration to strengthen security. Worked across multiple application modules, ensuring seamless user experience, robust backend integration, and adherence to financial domain requirements in an Agile environment.",
    tags: ["Angular", "Node.js", "Express.js", "JavaScript", "TypeScript"],
  },
];

export default function ExperiencePage() {
  return (
    <ScrollReveal>
      <section className="section page-section" id="experience">
        <div className="container">
          <h2 className="section__title">Experience</h2>
          <p className="section__subtitle">My professional journey</p>
          <div className="timeline">
            {experiences.map((exp) => (
              <div className="timeline__item" key={exp.company + exp.date}>
                <div className="timeline__dot"></div>
                <div className="timeline__content">
                  <span className="timeline__date">{exp.date}</span>
                  {(
                    <>
                      <h3 className="timeline__role">{exp.role}</h3>
                      <p className="timeline__company">{exp.company}</p>
                      <p className="timeline__desc">{exp.desc}</p>
                    </>
                  )}
                  <div className="timeline__tags">
                    {exp.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
