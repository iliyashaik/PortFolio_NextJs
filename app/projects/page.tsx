import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import { GitHubIcon, FolderIcon, ExternalLinkIcon } from "../components/Icons";
import "./projects.scss";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects built by Iliyaz Ahmed — AI dashboards, enterprise apps, e-commerce & more.",
};

const projects = [
  {
    title: "Wells Fargo — Financial Services Platform",
    desc: "Developed responsive web pages for Wells Fargo using PrimeNG and Angular 7. Implemented JWT-based authentication, built various API endpoints, and created transaction pages for a global financial institution serving over 70 million customers.",
    tags: ["Angular", "PrimeNG", "TypeScript", "SCSS", "MySQL"],
    url: "https://www.wellsfargo.com",
  },
  {
    title: "myCAMS Online — Mutual Fund Investments",
    desc: "Built a single page web application for mutual fund investors to manage investments across various bank funds. Designed responsive GUI using Angular Material, implemented SMS-based app download links, and developed various transaction pages.",
    tags: ["Angular", "TypeScript", "Angular Material", "MySQL"],
    url: "https://mycams.camsonline.com/",
  },
  {
    title: "CAMS FinServ — Account Aggregator",
    desc: "Developed UI for an RBI-authorized Account Aggregator platform that consolidates financial holdings across Insurance, Mutual Funds, Equity, Government Bonds, ETFs, and more. Built responsive interfaces using Angular 7 and Bootstrap for all devices.",
    tags: ["Angular", "Bootstrap", "HTML", "CSS", "TypeScript"],
    url: "https://www.camsfinserv.com/",
  },
  {
    title: "Edge 360 — Mutual Fund Operations",
    desc: "Developed a platform for managing day-to-day mutual fund operations with live transaction status tracking, investor statement generation, and brokerage revenue monitoring. Built lazy-loading modules, implemented Invisible Google reCAPTCHA, and developed Node.js OAuth2 and REST API callback services.",
    tags: ["Angular", "Node.js", "TypeScript", "MySQL"],
    url: "https://edge360.camsonline.com",
  },
  {
    title: "Better Heads — Recruiting Platform",
    desc: "Contributed to a German-based recruiting platform that connects companies with the right recruiters and headhunters for each vacancy. Served as an optimal interface between companies and recruiting professionals.",
    tags: ["Angular", "TypeScript", "HTML", "CSS"],
    url: "https://www.betterheads.de/sec/en/",
  },
];

const ProjectsPage = () => {
  return (
    <ScrollReveal>
      <section className="section section--alt page-section" id="projects">
        <div className="container">
          <h2 className="section__title">Projects</h2>
          <p className="section__subtitle">Some things I&apos;ve built</p>
          <div className="projects__grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>
                {/* {project.url && ( // I Don't want to show now
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-card__url">
                    <ExternalLinkIcon /> {project.url.replace(/^https?:\/\//, "")}
                  </a>
                )} */}
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default ProjectsPage;