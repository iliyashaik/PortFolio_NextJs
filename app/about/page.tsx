import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import "./about.scss";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Iliyaz Ahmed — Senior Front-End Engineer.",
};

const AboutPage = () => {
  return <AboutContent />;
}

export default AboutPage;
