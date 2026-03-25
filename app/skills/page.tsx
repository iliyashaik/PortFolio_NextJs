import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import "./skills.css";

export const metadata: Metadata = {
  title: "Skills",
  description: "Tech stack and skills of Iliyaz Ahmed — TypeScript, React, Angular, Node.js, GCP and more.",
};

export default function SkillsPage() {
  return (
    <ScrollReveal>
      <section className="section section--alt page-section" id="skills">
        <div className="container">
          <h2 className="section__title">Tech Stack</h2>
          <p className="section__subtitle">Technologies I work with</p>

          <div className="skills__categories">
            <div className="skill-category">
              <h3 className="skill-category__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                Frontend
              </h3>
              <div className="skill-category__grid">
                <SkillCard icon="⚛️" name="React" />
                <SkillCard icon="🅰️" name="Angular" />
                <SkillCard icon="▲" name="Next.js" />
                <SkillCard icon={<span style={{ fontWeight: 800, color: "var(--accent)" }}>TS</span>} name="TypeScript" />
                <SkillCard icon={<span style={{ fontWeight: 800, color: "#f7df1e" }}>JS</span>} name="JavaScript" />
                <SkillCard icon={<span style={{ fontWeight: 800, color: "#d32f2f" }}>P</span>} name="PrimeNG" />
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                Backend
              </h3>
              <div className="skill-category__grid">
                <SkillCard icon="🟢" name="Node.js" />
                <SkillCard icon="🚂" name="Express.js" />
                <SkillCard icon="🗄️" name="SQL" />
                <SkillCard icon="🍃" name="MongoDB" />
                <SkillCard icon="🔴" name="Redis" />
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                Cloud &amp; Analytics
              </h3>
              <div className="skill-category__grid">
                <SkillCard icon="☁️" name="GCP" />
                <SkillCard icon="📊" name="Google Analytics" />
                <SkillCard icon="🤖" name="AI Solutions" />
                <SkillCard icon="🛡️" name="Google reCAPTCHA" />
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                Testing &amp; Tools
              </h3>
              <div className="skill-category__grid">
                <SkillCard icon="🌲" name="Cypress" />
                <SkillCard icon="🃏" name="Jest" />
                <SkillCard icon="🔄" name="Karma" />
                <SkillCard icon="🐛" name="Sentry" />
                <SkillCard icon="🔀" name="Git" />
                <SkillCard icon="🚀" name="CI/CD" />
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                Concepts
              </h3>
              <div className="skill-category__grid">
                <SkillCard icon="🔗" name="AJAX" />
                <SkillCard icon="📄" name="JSON" />
                <SkillCard icon="🌐" name="i18n" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

function SkillCard({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="skill-card">
      <div className="skill-card__icon">{icon}</div>
      <span className="skill-card__name">{name}</span>
    </div>
  );
}
