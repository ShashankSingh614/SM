# Shankar Multimedia - React Contact Page

A modern React application for the Shankar Multimedia institute contact page, converted from a static HTML site. This app provides a responsive, accessible interface for students to connect with the institute across multiple Mumbai locations.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Form Validation**: Client-side validation with real-time error feedback
- **Modern React**: Built with functional components and hooks
- **CSS Modules**: Scoped styling for better maintainability
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── header/          # Top navigation and contact info
│   ├── navigation/      # Main navigation menu
│   ├── contact-form/    # Enquiry form with validation
│   ├── location-card/   # Institute location display
│   └── footer/          # Footer with links and social media
├── data/                # Static data and configuration
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── styles/              # Global CSS variables and utilities
```

## Key Components

- **Header**: Displays contact numbers for all institute branches
- **Navigation**: Responsive menu with mobile hamburger toggle
- **ContactForm**: Validated enquiry form with error handling
- **LocationCard**: Displays institute locations with embedded maps
- **Footer**: Links and social media icons

## Major Decisions

1. **CSS Modules**: Chosen over styled-components for better performance and debugging
2. **Form Validation**: Custom hook implementation for reusable form logic
3. **Accessibility**: Focus on keyboard navigation and screen reader support
4. **Mobile-First**: Responsive design prioritizing mobile experience
5. **Component Composition**: Small, focused components for better testability

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Follow the established naming conventions (kebab-case files, PascalCase components)
2. Add PropTypes for all component props
3. Include tests for new components
4. Ensure accessibility compliance
5. Maintain responsive design patterns

## License

© 2025 Shankar Multimedia. All rights reserved.