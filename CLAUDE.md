# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based portfolio website built with TypeScript and Vite. The project is structured as a frontend-only application using MUI Joy UI components, with routing infrastructure already established. It's designed to showcase a developer's skills, experience, and projects.

## Development Setup

### Commands
- `pnpm setup` - Install all dependencies and set up the development environment
- `pnpm lf` - Run the development server (equivalent to `pnpm --filter frontend run dev`)
- `pnpm build` - Build the production version of the application

## Code Architecture

The project follows a standard React + TypeScript + Vite structure:

- **Frontend**: Located in `/frontend` directory
- **Main entry point**: `frontend/src/main.tsx` 
- **Routing setup**: `frontend/src/architecture/Router.tsx`
- **Provider component**: `frontend/src/architecture/Provider.tsx`
- **Page components**: `frontend/src/pages/Home.tsx`
- **Wrapper component**: `frontend/src/components/Wrapper.tsx`
- **Vite configuration**: `frontend/vite.config.ts`
- **TypeScript configurations**: Multiple tsconfig files for different environments

## Key Technologies

- React 19 with TypeScript
- Vite for development and building
- MUI Joy UI components (already installed)
- React Router for navigation
- Modern ES2023 JavaScript features

## Development Notes

The project has:
1. Complete routing infrastructure set up with React Router
2. MUI Joy as the UI library (fully integrated)
3. Resume information available in `resume.txt` for portfolio content
4. TypeScript configuration ready for development
5. ESLint configuration for code quality
6. Home page component (`frontend/src/pages/Home.tsx`) already implemented with responsive design

## Implementation Details

The portfolio homepage has been implemented with the following sections:
1. Header with name and contact information
2. Education section
3. Skills section with a grid layout
4. Experience section with detailed job descriptions
5. Volunteering & Involvement section
6. Non-technical work history
7. Responsive design using MUI Joy components

The page uses:
- Typography for headings and body text
- Cards for content sections
- Grid layouts for responsive design
- Lists for structured experience details
- Buttons for contact actions
- Responsive spacing and breakpoints

## Next Steps

The portfolio is now functional and displays all the information from resume.txt. Future enhancements could include:
1. Adding more pages (About, Projects, Contact)
2. Implementing a dark/light mode toggle
3. Adding animations or transitions
4. Including project showcase with images
5. Adding a downloadable PDF version of the resume