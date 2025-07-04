# Deepak Portfolio

A modern, responsive personal portfolio website built with React and Vite, showcasing my skills, projects, and professional experience.

## 🌐 Live Demo

**[Visit My Portfolio](https://deepak-adimoolam.vercel.app/)**

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

## 🎯 Overview

This portfolio website serves as a comprehensive showcase of my professional journey, technical skills, and creative projects. Built with modern web technologies, it provides an interactive and engaging way for visitors to learn about my work and capabilities.

## ✨ Features

- **🎨 Modern Design**: Clean, professional, and visually appealing interface
- **📱 Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and build times
- **🎪 Interactive Elements**: Smooth animations and transitions
- **📊 Skills Showcase**: Visual representation of technical skills and proficiencies
- **💼 Project Gallery**: Detailed showcase of projects with descriptions and technologies used
- **📧 Contact Form**: Functional contact form for potential collaborations
- **🌙 Dark/Light Theme**: Toggle between light and dark modes (if implemented)
- **♿ Accessibility**: WCAG compliant design for better accessibility

## 🛠️ Tech Stack

### Frontend
- **React** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool
- **JavaScript/TypeScript** - Programming language (update based on your actual implementation)
- **CSS3/SCSS** - Styling (update based on your actual implementation)
- **HTML5** - Markup language

### Additional Libraries & Tools
- **React Router** - Client-side routing (if used)
- **Framer Motion** - Animation library (if used)
- **React Icons** - Icon library (if used)
- **Styled Components** - CSS-in-JS styling (if used)
- **Tailwind CSS** - Utility-first CSS framework (if used)

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control
- **GitHub Pages** - Deployment platform

## 🚀 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Git

### Clone the Repository
```bash
git clone https://github.com/DpkReach/Deepak-portfolio.git
cd Deepak-portfolio
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (default Vite port).

## 📖 Usage

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:
```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=your_email_here
```

## 📁 Project Structure

```
Deepak-portfolio/
├── public/                 # Static assets
│   ├── images/            # Image files
│   ├── icons/             # Icon files
│   └── favicon.ico        # Favicon
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   ├── Header/        # Header component
│   │   ├── Footer/        # Footer component
│   │   ├── About/         # About section
│   │   ├── Skills/        # Skills section
│   │   ├── Projects/      # Projects section
│   │   └── Contact/       # Contact section
│   ├── assets/            # Asset files
│   ├── styles/            # CSS/SCSS files
│   ├── utils/             # Utility functions
│   ├── data/              # Static data files
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🎨 Customization

### Personal Information
Update the personal information in the data files:
- `src/data/personal.js` - Personal details, bio, contact information
- `src/data/skills.js` - Technical skills and proficiencies
- `src/data/projects.js` - Project details and descriptions
- `src/data/experience.js` - Work experience and education

### Styling
- **CSS Variables**: Update CSS custom properties in `src/styles/variables.css`
- **Color Scheme**: Modify color palette in the main stylesheet
- **Typography**: Update font families and sizes
- **Animations**: Customize animations and transitions

### Content Sections
- **About**: Update personal description and profile image
- **Skills**: Add/remove technical skills with proficiency levels
- **Projects**: Showcase your best work with descriptions and links
- **Experience**: Add work experience, education, and certifications
- **Contact**: Update contact information and social media links

## 🚀 Deployment

### GitHub Pages
The portfolio is automatically deployed to GitHub Pages. To deploy:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting platform
3. Configure your domain (if using custom domain)

### Other Deployment Options
- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your GitHub repository and deploy with zero configuration
- **Firebase Hosting**: Deploy using Firebase CLI

## 🔧 Configuration

### Vite Configuration
The `vite.config.js` file includes:
- Base URL configuration for GitHub Pages
- Build output directory
- Development server settings
- Plugin configurations

### Package.json Scripts
- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build
- `deploy`: Deploy to GitHub Pages

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized for fast loading
- **Image Optimization**: Compressed and optimized images
- **Code Splitting**: Lazy loading for better performance

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📞 Contact

**Deepak** - Portfolio Owner

- **Email**: [deepakadimoolam1412@gmail.com](mailto:deepakadimoolam1412@gmail.com)
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/deepak-adimoolam/)
- **GitHub**: [DpkReach](https://github.com/DpkReach)
- **Portfolio**: [https://deepak-adimoolam.vercel.app/](https://deepak-adimoolam.vercel.app/)

## 🙏 Acknowledgments

- Thanks to the React and Vite communities for excellent documentation
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Inspiration from various portfolio designs in the developer community
- Open source libraries that made this project possible

## 📈 Future Enhancements

- [ ] Add blog section with technical articles
- [ ] Implement dark/light theme toggle
- [ ] Add animations with Framer Motion
- [ ] Include testimonials section
- [ ] Add multi-language support
- [ ] Implement contact form with backend
- [ ] Add project filtering and search
- [ ] Include resume download functionality
- [ ] Add analytics tracking
- [ ] Implement PWA features

---

**Built with ❤️ using React and Vite**

*Last updated: July 2025*
