import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Iliyaz Ahmed — Full-Stack JavaScript/TypeScript Developer.",
};

const AboutPage = () => {
  return <AboutContent />;
}

export default AboutPage;
