"use client";

import { useTranslation } from "react-i18next";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/ContactForm";

const ContactContent = () => {
  const { t } = useTranslation();

  return (
    <ScrollReveal>
      <section className="section page-section" id="contact">
        <div className="container">
          <h2 className="section__title">{t("contact.title")}</h2>
          <p className="section__subtitle">{t("contact.subtitle")}</p>
          <div className="contact__wrapper">
            <div className="contact__info">
              <p className="contact__text">{t("contact.description")}</p>
              <div className="contact__details">
                <div className="contact__detail">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_MAIL}`}>{process.env.NEXT_PUBLIC_CONTACT_MAIL}</a>
                </div>
                <div className="contact__detail">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <a href="https://maps.google.com/?q=Helsingborg,Sweden" target="_blank" rel="noopener noreferrer">
                    {t("contact.location")}
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ContactContent;
