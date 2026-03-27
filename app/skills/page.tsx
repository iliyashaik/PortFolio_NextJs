'use client';

import { useTranslation } from 'react-i18next';
import ScrollReveal from "../components/ScrollReveal";
import "./skills.css";

export default function SkillsPage() {
  const { t } = useTranslation();

  return (
    <ScrollReveal>
      <section className="section section--alt page-section" id="skills">
        <div className="container">
          <h2 className="section__title">{t('skills.title')}</h2>
          <p className="section__subtitle">{t('skills.subtitle')}</p>

          <div className="skills__categories">
            <div className="skill-category">
              <h3 className="skill-category__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                {t('skills.categories.frontend')}
              </h3>
              <div className="skill-category__grid">
                <SkillCard icon="⚛️" name={t('skills.technologies.react')} />
                <SkillCard icon="🅰️" name={t('skills.technologies.angular')} />
                <SkillCard icon="▲" name={t('skills.technologies.nextjs')} />
                <SkillCard icon={<span style={{ fontWeight: 800, color: "var(--accent)" }}>TS</span>} name={t('skills.technologies.typescript')} />
                <SkillCard icon={<span style={{ fontWeight: 800, color: "#f7df1e" }}>JS</span>} name={t('skills.technologies.javascript')} />
                <SkillCard icon={<span style={{ fontWeight: 800, color: "#d32f2f" }}>P</span>} name={t('skills.technologies.primeng')} />
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                {t('skills.categories.backend')}
              </h3>
              <div className="skill-category__grid">
                <SkillCard icon="🟢" name={t('skills.technologies.nodejs')} />
                <SkillCard icon="🚂" name={t('skills.technologies.express')} />
                <SkillCard icon="🗄️" name={t('skills.technologies.sql')} />
                <SkillCard icon="🍃" name={t('skills.technologies.mongodb')} />
                <SkillCard icon="🔴" name={t('skills.technologies.redis')} />
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                {t('skills.categories.cloud')}
              </h3>
              <div className="skill-category__grid">
                <SkillCard icon="☁️" name={t('skills.technologies.gcp')} />
                <SkillCard icon="📊" name={t('skills.technologies.analytics')} />
                <SkillCard icon="🤖" name={t('skills.technologies.ai')} />
                <SkillCard icon="🛡️" name={t('skills.technologies.recaptcha')} />
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                {t('skills.categories.testing')}
              </h3>
              <div className="skill-category__grid">
                <SkillCard icon="🌲" name={t('skills.technologies.cypress')} />
                <SkillCard icon="🃏" name={t('skills.technologies.jest')} />
                <SkillCard icon="🔄" name={t('skills.technologies.karma')} />
                <SkillCard icon="🐛" name={t('skills.technologies.sentry')} />
                <SkillCard icon="🔀" name={t('skills.technologies.git')} />
                <SkillCard icon="🚀" name={t('skills.technologies.cicd')} />
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                {t('skills.categories.concepts')}
              </h3>
              <div className="skill-category__grid">
                <SkillCard icon="🔗" name={t('skills.technologies.ajax')} />
                <SkillCard icon="📄" name={t('skills.technologies.json')} />
                <SkillCard icon="🌐" name={t('skills.technologies.i18n')} />
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
