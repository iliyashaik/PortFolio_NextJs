import type { Metadata } from "next";
import ContactContent from "./contactContent";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Iliyaz Ahmed — Full-Stack Developer.",
};

const ContactPage = () => {
  return <ContactContent />;
};

export default ContactPage;
