# Portfolio Next.js

A modern, responsive personal portfolio website built with Next.js, React, and TypeScript. This project showcases my professional work, skills, experience, and provides an easy way to get in touch.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **TypeScript**: Type-safe development for better code quality
- **SEO Friendly**: Server-side rendering and optimized meta tags
- **Interactive Components**: Custom components like typing effects, scroll reveals, and counter animations

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Components**: React
- **Deployment**: Ready for Vercel

## Project Structure

```
app/
├── layout.tsx          # Root layout
├── page.tsx           # Home page
├── globals.css        # Global styles
├── home.css           # Home page styles
├── about/
│   ├── page.tsx       # About page
│   └── about.css      # About page styles
├── contact/
│   ├── page.tsx       # Contact page
│   └── contact.css    # Contact page styles
├── experience/
│   ├── page.tsx       # Experience page
│   └── experience.css # Experience page styles
├── projects/
│   ├── page.tsx       # Projects page
│   └── projects.css   # Projects page styles
├── skills/
│   ├── page.tsx       # Skills page
│   └── skills.css     # Skills page styles
└── components/
    ├── Header.tsx     # Navigation header
    ├── Footer.tsx     # Site footer
    ├── ContactForm.tsx # Contact form component
    ├── CounterAnimation.tsx # Animated counters
    ├── Icons.tsx      # Icon components
    ├── ScrollReveal.tsx # Scroll reveal animations
    └── TypingEffect.tsx # Typing animation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iliyashaik/PortFolio_NextJs.git
   cd PortFolio_NextJs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Navigate through the different sections using the header menu
- View projects, skills, and experience
- Use the contact form to send messages
- The site is fully responsive and works on mobile devices

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is configured for automatic deployment to Vercel with release tagging on every push to the `main` branch.

- **Automatic Releases**: On every push to `main`, a new release tag is created automatically.
- **Vercel Deployment**: The application deploys automatically to Vercel after successful builds.
- **CI/CD**: Uses GitHub Actions for continuous integration and deployment workflows.

## Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report issues, please open an issue on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Feel free to reach out through the contact form on the website or via [GitHub](https://github.com/iliyashaik).
