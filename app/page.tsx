'use client';

import Link from "next/link";
import { useTranslation } from 'react-i18next';
import TypingEffect from "./components/TypingEffect";
import { GitHubIcon, LinkedInIcon } from "./components/Icons";
import "./home.scss";

type Token = { type: string; text: string } | string;

const codeLines = [
  [{ type: "keyword", text: "interface" }, " ", { type: "type", text: "Developer" }, " {"],
  ["  ", { type: "prop", text: "name" }, ": ", { type: "string", text: "string" }, ";"],
  ["  ", { type: "prop", text: "role" }, ": ", { type: "string", text: "string" }, ";"],
  ["  ", { type: "prop", text: "skills" }, ": ", { type: "string", text: "string" }, "[];"],
  ["  ", { type: "prop", text: "passion" }, ": ", { type: "string", text: "string" }, ";"],
  ["}"],
  [{ type: "keyword", text: "const" }, " ", { type: "var", text: "iliyaz" }, ": ", { type: "type", text: "Developer" }, " = {"],
  ["  ", { type: "prop", text: "name" }, ": ", { type: "value", text: '"Iliyaz Ahmed"' }, ","],
  ["  ", { type: "prop", text: "role" }, ": ", { type: "value", text: '"Full-Stack Developer"' }, ","],
  ["  ", { type: "prop", text: "skills" }, ": ["],
  ["    ", { type: "value", text: '"React"' }, ", ", { type: "value", text: '"Angular"' }, ","],
  ["    ", { type: "value", text: '"Next Js"' }, ", ", { type: "value", text: '"Node Js"' }, ","],
  ["    ", { type: "value", text: '"Express Js"' }, ", ", { type: "value", text: '"SQL"' }, ","],
  ["    ", { type: "value", text: '"MongoDB"' }, ", ", { type: "value", text: '"GCP"' }],
  ["  ],"],
  ["  ", { type: "prop", text: "passion" }, ": ", { type: "value", text: '"Building AI-driven' }],
  ["    ", { type: "value", text: 'solutions"' }, ","],
  ["};"],
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <p className="hero__greeting">{t('hero.greeting')}</p>
          <h1 className="hero__name">{t('hero.name')}</h1>
          <div className="hero__title-wrapper">
            <span className="hero__title-prefix">{t('hero.titlePrefix')}</span>
            <TypingEffect />
            <span className="hero__cursor">|</span>
          </div>
          <p className="hero__description">
            {t('hero.description')}
          </p>
          <div className="hero__actions">
            <Link href="/projects" className="btn btn--primary">{t('hero.viewWork')}</Link>
            <Link href="/contact" className="btn btn--outline">{t('hero.getInTouch')}</Link>
          </div>
          <div className="hero__socials">
              <a href="https://github.com/iliyashaik?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                <GitHubIcon size={22} />
              </a>
              <a href="https://www.linkedin.com/in/iliyazshaik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                <LinkedInIcon size={22} />
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__code-block">
              <div className="code-header">
                <span className="code-dot code-dot--red"></span>
                <span className="code-dot code-dot--yellow"></span>
                <span className="code-dot code-dot--green"></span>
                <span className="code-filename">developer.ts</span>
              </div>
              <pre className="code-body"><code>{codeLines.map((line, i) => (
                <span key={i}>
                  {line.map((token, j) =>
                    typeof token === "string" ? (
                      <span key={j}>{token}</span>
                    ) : (
                      <span key={j} className={`code-${token.type}`}>{token.text}</span>
                    )
                  )}
                  {"\n"}
                </span>
              ))}</code></pre>
            </div>
          </div>
        </div>
        <div className="hero__scroll">
          <Link href="/about" aria-label="Learn more">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="7 13 12 18 17 13" />
              <polyline points="7 6 12 11 17 6" />
            </svg>
          </Link>
        </div>
      </section>
  );
}

export default Home;
