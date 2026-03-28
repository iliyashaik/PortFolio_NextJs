'use client';

import { Trans, useTranslation } from "react-i18next";
import CounterAnimation from "../components/CounterAnimation";
import ScrollReveal from "../components/ScrollReveal";

const AboutContent = () => {
  const { t } = useTranslation();

  return (
    <ScrollReveal>
      <section className="section page-section" id="about">
        <div className="container">
          <h2 className="section__title">{t("about.title")}</h2>
          <p className="section__subtitle">{t("about.subtitle")}</p>
          <div className="about__grid">
            <div className="about__text">
              <p><Trans i18nKey="about.paragraph1" components={{ strong: <strong /> }} /></p>
              <p><Trans i18nKey="about.paragraph2" components={{ strong: <strong /> }} /></p>
              <p><Trans i18nKey="about.paragraph3" components={{ strong: <strong /> }} /></p>
              <p><Trans i18nKey="about.paragraph4" components={{ strong: <strong /> }} /></p>
            </div>
            <div className="about__stats">
              <div className="stat-card">
                <CounterAnimation target={7} /><span className="stat-card__plus">+</span>
                <span className="stat-card__label">{t("about.stats.yearsExperience")}</span>
              </div>
              <div className="stat-card">
                <CounterAnimation target={9} /><span className="stat-card__plus">+</span>
                <span className="stat-card__label">{t("about.stats.projectsDelivered")}</span>
              </div>
              <div className="stat-card">
                <CounterAnimation target={10} /><span className="stat-card__plus">+</span>
                <span className="stat-card__label">{t("about.stats.technologies")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default AboutContent;