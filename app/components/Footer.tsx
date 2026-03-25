import Link from "next/link";
import { siteConfig } from "../config";
import { SocialIcon } from "./Icons";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link href="/" className="footer__logo">&lt;IA /&gt;</Link>
        <p className="footer__copy">{siteConfig.copyright}</p>
        <div className="footer__socials">
          {siteConfig.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="social-link">
              <SocialIcon icon={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
