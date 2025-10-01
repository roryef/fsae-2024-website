# Columbia FSAE Website

This repository contains the source code for Columbia Formula Racing’s official website, built to showcase the team’s vehicles, sponsors, members, and updates. The site is implemented as a React single-page application and deployed via GitHub Pages.

## Features

- **Cars Page**: High-level overviews of EV25 and previous cars, with technical specs and team philosophy highlighted through animated stats and overlays.
- **Sponsors Page**: Dynamic grid with sponsor logos, hover animations, and external links.
- **News Page**: Mailchimp integration for newsletter subscriptions and embedded featured newsletters.
- **Team Page**: Subteam breakdowns, leadership information, and headshots.
- **Responsive Design**: Mobile and desktop layouts optimized with Tailwind CSS.

## Repository Structure

```
.
├── public/                 # Static assets available at runtime
│   ├── car/                # Images and content for past cars
│   ├── ev25/               # Images and content for EV25
│   ├── groups/             # Subteam/organizational graphics
│   ├── headshots/          # Team member photos
│   ├── logos/              # Sponsor and CUFR logos
│   ├── misc/               # Other shared assets
│   ├── newsletters/        # Past newsletters for embedding
│   ├── shop/               # Shop page resources
│   ├── sponsors/           # Sponsor logos
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── sponsorpacket.pdf
│
├── src/                    # Main React source code
│   ├── About.js / About.css
│   ├── App.js
│   ├── Cars.js / Cars.css
│   ├── Contact.js
│   ├── Data.js / Data.css
│   ├── Footer.js
│   ├── Home.js / Home.css
│   ├── Join.js / Join.css
│   ├── Navbar.js / navbar.css
│   ├── News.js / News.css
│   ├── Sponsors.js / Sponsors.css
│   ├── Subteams.js
│   ├── index.js / index.css
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── CNAME                   # Custom domain config
├── LICENSE                 # Project license (MIT)
├── README.md
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
```

## Getting Started

### Prerequisites

Install the following:
- **Node.js** (>= 16.x recommended)  
- **npm** (comes with Node)

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/<your-username>/columbia-fsae-website.git
cd columbia-fsae-website
npm install
```

Key dependencies:
- `react` and `react-dom`  
- `react-scripts`  
- `react-router-dom`  
- `react-countup`  
- `react-intersection-observer`  
- `tailwindcss` and `postcss`  

All are listed in `package.json`.

## Running Locally

```bash
npm start
```

The site will open at `http://localhost:3000/`.

## Building for Production

```bash
npm run build
```

This generates a production-ready build in the `/build` directory.

## Deployment

This site is deployed via **GitHub Pages** from the `gh-pages` branch.  

To deploy updates:

```bash
npm run build
npm run deploy
```

The `gh-pages` package will publish the build to the `gh-pages` branch.

## Licensing

This project is licensed under the [MIT License](./LICENSE).  

> **Note**: This repository is a fork of the Columbia Formula Racing team’s internal website project. Licensing details are inherited from the original maintainers. If you intend to redistribute or reuse this project, verify any additional restrictions with the upstream repository.

## Acknowledgments

- Columbia Formula Racing team members for content and design contributions  
- Original maintainers of the upstream repository  
- Sponsors and supporters of Columbia FSAE

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
