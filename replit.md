# Holist Bella - Romanian Wellness Center

## Overview

This is a full-stack web application for "Holist Bella", a holistic wellness center in Iași, Romania. The application serves as a professional website showcasing various alternative medicine services including Bowen Therapy, Magnetic Bioresonance, Cellular Nutrition, and Reiki Therapy. The site features a modern, responsive design with a contact form system for patient inquiries and appointment scheduling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database Layer**: Drizzle ORM configured for PostgreSQL
- **Storage Strategy**: Currently using in-memory storage (MemStorage class) with interface for easy database migration
- **API Design**: RESTful endpoints with proper error handling and request logging middleware

### Database Schema
- **Contact Submissions Table**: Stores patient inquiries with fields for personal information (nume, prenume, email, telefon), service selection, and message content
- **Schema Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Database Provider**: Configured for PostgreSQL with Neon serverless database support

### Development & Build Process
- **Development Server**: Vite dev server with HMR (Hot Module Replacement)
- **Production Build**: Separate builds for client (Vite) and server (esbuild)
- **TypeScript Configuration**: Monorepo setup with shared types between client, server, and shared directories
- **Code Quality**: Structured with proper path aliases and module resolution

### Key Design Patterns
- **Shared Schema Approach**: Type definitions and validation schemas are shared between frontend and backend through the `/shared` directory
- **Component Architecture**: Modular React components with clear separation between UI components, layout components, and page sections
- **Repository Pattern**: Storage abstraction with IStorage interface allowing easy switching between in-memory and database implementations
- **Middleware Pattern**: Express middleware for request logging, JSON parsing, and error handling

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database client for Neon
- **drizzle-orm & drizzle-kit**: Modern TypeScript ORM with excellent PostgreSQL support
- **express**: Web application framework for the backend API
- **vite**: Fast build tool and development server

### UI & Styling Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework with custom design system
- **class-variance-authority**: Utility for creating type-safe CSS class variants
- **lucide-react**: Modern icon library with consistent design

### State Management & Forms
- **@tanstack/react-query**: Powerful data synchronization for server state
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema declaration and validation

### Development Tools
- **tsx**: TypeScript execution environment for development
- **wouter**: Lightweight routing library for React applications
- **@replit/***: Replit-specific development tools and runtime error handling

### Notable Integrations
- **WhatsApp Business**: Direct messaging integration for instant patient communication
- **Form Processing**: Contact form submissions with validation and storage
- **Responsive Design**: Mobile-first approach with adaptive layouts for all screen sizes

The application is designed with scalability in mind, using a clean separation of concerns and modern development practices. The current in-memory storage can be easily replaced with the configured PostgreSQL database when needed.