# Holist Bella - Romanian Wellness Center

## Overview

This is a full-stack web application for "Holist Bella", a holistic wellness center in Iași, Romania. The application serves as a professional website showcasing various alternative medicine services including Bowen Therapy, Magnetic Bioresonance, Cellular Nutrition, and Reiki Therapy. The site features a modern, responsive design with a contact form system for patient inquiries and appointment scheduling.

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
- **Storage Strategy**: Using in-memory storage for simplicity - all data is stored in memory during runtime
- **API Design**: RESTful endpoints with proper error handling and request logging middleware

### Database Schema
- **Contact Submissions Table**: Stores patient inquiries with fields for personal information (nume, prenume, email, telefon), service selection, and message content
- **Schema Validation**: Zod schemas shared between frontend and backend for consistent data validation


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

### Notable Integrations
- **WhatsApp Business**: Direct messaging integration for instant patient communication
- **Form Processing**: Contact form submissions with validation and storage
- **Responsive Design**: Mobile-first approach with adaptive layouts for all screen sizes

The application is designed with scalability in mind, using a clean separation of concerns and modern development practices. The in-memory storage keeps the setup simple and requires no external database configuration.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:5000
   ```

The development server will automatically handle both frontend and backend, with hot reload enabled for immediate feedback during development.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the complete application for production (client + server)
- `npm run build:client` - Build only the frontend static files (for static hosting)
- `npm run build:server` - Build only the backend Node.js application
- `npm run start` - Start the production server
- `npm run check` - Run TypeScript type checking

### Build Outputs

After running the build commands, you'll find the built files in the following locations:

- **Frontend (Static Files)**: `dist/public/`
  - Contains: `index.html`, `assets/` folder with minified CSS and JS
  - These files are ready to be uploaded to any static web hosting

- **Backend (Node.js Server)**: `dist/index.js`
  - Bundled Node.js application
  - Serves both API endpoints and static frontend files in production

---

## Deployment on Hosterion

This project is configured for easy deployment on Hosterion hosting. There are two deployment options depending on your hosting plan:

### Option 1: Static Frontend Deployment (Recommended for Basic Plans)

This is the simplest option - deploy only the frontend as static files. The backend features will not be available with this option.

#### Manual Deployment

1. **Build the frontend:**
   ```bash
   npm run build:client
   ```

2. **Upload files to Hosterion:**
   - Connect to your hosting via FTP/SFTP:
     - Host: `holistbella.ro` (or `92.114.98.33` initially)
     - Username: Your cPanel username
     - Password: Your cPanel password
   - Navigate to the `public_html` folder
   - Upload **all contents** from the `dist/public/` folder (not the folder itself)
   - Your `public_html` should contain: `index.html`, `assets/`, etc.

3. **Access your site:**
   - Visit `https://www.holistbella.ro`

#### Automated Deployment with GitHub Actions

The repository includes a GitHub Actions workflow that automatically deploys your site when you push to the `main` branch.

**Setup Instructions:**

1. **Configure GitHub Secrets:**
   - Go to your GitHub repository
   - Navigate to: `Settings` → `Secrets and variables` → `Actions`
   - Click `New repository secret` and add each of the following:

   | Secret Name | Value |
   |-------------|-------|
   | `HOSTERION_HOST` | `holistbella.ro` (or `92.114.98.33`) |
   | `HOSTERION_USERNAME` | `holistbe` |
   | `HOSTERION_PASSWORD` | Your hosting password |

2. **Deploy:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the `Actions` tab in your GitHub repository
   - Watch the deployment workflow execute
   - Once complete (green checkmark), your site is live!

**Note:** The workflow uses FTPS (FTP over SSL) on port 21. If deployment fails, verify that your hosting supports FTPS.

---

### Option 2: Full-Stack Node.js Deployment

If your Hosterion plan supports Node.js applications (available in the cPanel "Setup Node.js App" section), you can deploy the complete application with backend functionality.

#### Prerequisites

- Hosterion plan with Node.js support
- SSH access to your hosting account (request from Hosterion support if needed)

#### Deployment Steps

1. **Build the complete application:**
   ```bash
   npm run build
   ```
   This creates both `dist/public/` (frontend) and `dist/index.js` (backend).

2. **Upload files via SFTP/SSH:**
   - Upload the entire project to your hosting (e.g., `/home/holistbe/holistbella/`)
   - Include: `dist/`, `node_modules/`, `package.json`, `package-lock.json`

   **Alternative:** Upload only necessary files and run `npm install` on the server:
   - Upload: `dist/`, `package.json`, `package-lock.json`
   - SSH into your server and run:
     ```bash
     cd ~/holistbella
     npm install --production
     ```

3. **Configure Node.js Application in cPanel:**
   - Log into cPanel: `https://pontus.hosterion.net:2083/`
   - Navigate to: `Software` → `Setup Node.js App`
   - Click `Create Application`
   - Configure:
     - **Node.js version**: 20.x or latest LTS
     - **Application mode**: Production
     - **Application root**: Path to your project folder (e.g., `holistbella`)
     - **Application URL**: `holistbella.ro` (or your domain)
     - **Application startup file**: `dist/index.js`
     - **Environment variables**: Add `PORT` (cPanel will auto-assign, or use the suggested port)

4. **Start the application:**
   - Click `Save` in cPanel
   - The application should start automatically
   - Monitor the application status in the Node.js App manager

5. **Access your site:**
   - Visit `https://www.holistbella.ro`
   - Both frontend and backend features should now work

#### Updating the Node.js Application

When you make changes:

1. Build locally: `npm run build`
2. Upload the new `dist/` folder to your server
3. In cPanel Node.js App manager, click `Restart` on your application

---

### Troubleshooting

**Static Deployment Issues:**
- **404 errors on refresh**: Make sure your web server is configured to redirect all requests to `index.html` (for client-side routing)
- **Missing styles/images**: Verify you uploaded the contents of `dist/public/`, not the folder itself

**Node.js Deployment Issues:**
- **Application won't start**: Check Node.js version (should be 18.x or higher)
- **Port conflicts**: Ensure the PORT environment variable is set correctly in cPanel
- **Module errors**: Run `npm install --production` on the server to ensure dependencies are installed

**GitHub Actions Issues:**
- **Authentication failed**: Double-check your GitHub Secrets are set correctly
- **Connection timeout**: Try using the IP address `92.114.98.33` instead of the domain name in `HOSTERION_HOST`
- **Permission denied**: Verify your FTP user has write permissions to `public_html/`

---

### Domain Configuration

Your domain `holistbella.ro` is already configured with Hosterion's nameservers:
- `ns1.hosterion.net`
- `ns2.hosterion.net`
- `ns1.hosterion.com`
- `ns2.hosterion.com`

DNS propagation can take up to 48 hours. Until then, you can access your site via the temporary URL or IP address.

