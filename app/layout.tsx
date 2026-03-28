import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./providers";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Iliyaz Ahmed — Full-Stack Developer",
    template: "%s — Iliyaz Ahmed",
  },
  description:
    "Portfolio of Iliyaz Ahmed — Full-Stack JavaScript/TypeScript Developer",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
