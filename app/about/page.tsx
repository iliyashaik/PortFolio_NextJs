import type { Metadata } from "next";
import CounterAnimation from "../components/CounterAnimation";
import ScrollReveal from "../components/ScrollReveal";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Iliyaz Ahmed — Full-Stack JavaScript/TypeScript Developer.",
};

const AboutPage = () => {
  return (
    <ScrollReveal>
      <section className="section page-section" id="about">
        <div className="container">
          <h2 className="section__title">Get to know me</h2>
          <p className="section__subtitle">A bit about my background and experience</p>
          <div className="about__grid">
            <div className="about__text">
              <p>
                I&apos;m a Full-Stack Developer with 7+ years of experience delivering
                scalable, production-grade web applications across the JavaScript and
                TypeScript ecosystem. My expertise spans <strong>React</strong>,{" "}
                <strong>Angular</strong>, <strong>Next.js</strong>,{" "}
                <strong>Node.js</strong>, and <strong>Express</strong>, with a strong
                focus on performance, scalability, and clean architecture.
              </p>
              <p>
                I have a growing focus on <strong>AI-driven application development</strong>,
                integrating intelligent features such as automation, data insights, and
                smart user interactions using modern AI APIs and cloud services. I&apos;m
                particularly interested in building systems that combine traditional web
                engineering with AI capabilities to create more adaptive and efficient
                user experiences.
              </p>
              <p>
                I bring strong experience in <strong>GCP</strong>,{" "}
                <strong>SQL/NoSQL databases</strong>, and{" "}
                <strong>analytics integration</strong>, enabling me to design data-driven
                systems end-to-end. I ensure high-quality delivery through{" "}
                <strong>Cypress</strong>-based test automation, proactive monitoring
                with <strong>Sentry</strong>, and CI/CD pipelines using{" "}
                <strong>GitHub Actions</strong>.
              </p>
              <p>
                I take ownership of frontend architecture, from crafting pixel-perfect interfaces to contributing actively to product
                decisions, and collaborate closely with cross-functional teams to align
                technical solutions with business goals.
              </p>
            </div>
            <div className="about__stats">
              <div className="stat-card">
                <CounterAnimation target={7} /><span className="stat-card__plus">+</span>
                <span className="stat-card__label">Years Experience</span>
              </div>
              <div className="stat-card">
                <CounterAnimation target={9} /><span className="stat-card__plus">+</span>
                <span className="stat-card__label">Projects Delivered</span>
              </div>
              <div className="stat-card">
                <CounterAnimation target={10} /><span className="stat-card__plus">+</span>
                <span className="stat-card__label">Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default AboutPage;
