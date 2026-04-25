"use client";

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { t } = useTranslation();

  const submitForm = async (form: HTMLFormElement) => {
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      alert(t("contact.form.validation.required"));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert(t("contact.form.validation.email"));
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
          name,
          email,
          message,
          subject: t("contact.form.subject", { name }),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const buttonStyle = status === "idle" ? undefined : { opacity: 0.7 };

  let buttonContent: React.ReactNode;
  if (status === "sending") {
    buttonContent = t("contact.form.status.sending");
  } else if (status === "sent") {
    buttonContent = t("contact.form.status.sent");
  } else if (status === "error") {
    buttonContent = t("contact.form.status.error");
  } else {
    buttonContent = (
      <>
        {t("contact.form.submit")}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </>
    );
  }

  return (
    <form
      className="contact__form"
      ref={formRef}
      onSubmit={(event) => {
        event.preventDefault();
        const form = formRef.current;
        if (!form) return;

        submitForm(form);
      }}
      noValidate
    >
      <div className="form-group">
        <label htmlFor="name">{t("contact.form.nameLabel")}</label>
        <input type="text" id="name" name="name" placeholder={t("contact.form.namePlaceholder")} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">{t("contact.form.emailLabel")}</label>
        <input type="email" id="email" name="email" placeholder={t("contact.form.emailPlaceholder")} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">{t("contact.form.messageLabel")}</label>
        <textarea id="message" name="message" rows={5} placeholder={t("contact.form.messagePlaceholder")} required></textarea>
      </div>
      <button type="submit" className="btn btn--primary btn--full" disabled={status === "sending" || status === "sent"} style={buttonStyle}>
        {buttonContent}
      </button>
    </form>
  );
}

export default ContactForm;
