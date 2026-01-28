# RedHammer Platform - Claude Code Migration Guide

## Overview

This package contains everything needed to set up the RedHammer Platform in Claude Code as a proper React application.

## Current State

- **Platform**: 7,500+ line single-file React app (redhammer-platform-v2.html)
- **Tools**: 7,400+ line business development tools (redhammer-tools.html)
- **Database**: Supabase (PostgreSQL) with 7 tables
- **Auth**: Supabase Auth with invite-only flow

## Quick Start in Claude Code

```bash
# 1. Create new Vite + React project
npm create vite@latest redhammer-platform -- --template react
cd redhammer-platform

# 2. Install dependencies
npm install @supabase/supabase-js
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Copy the source files from this migration package
# 4. Set up environment variables (see below)
# 5. Run development server
npm run dev
```

## Environment Variables

Create `.env` file:
```
VITE_SUPABASE_URL=https://vnnafzabklkucobvpxse.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZubmFmemFia2xrdWNvYnZweHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzNTY5NTUsImV4cCI6MjA4NDkzMjk1NX0.bMHOpfyFLHdm0svhS0MK0RoyM8vI4z8C7XTPHmtZtwI
```

## Project Structure

```
redhammer-platform/
├── public/
│   └── redhammer-logo.png
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Toast.jsx
│   │   ├── auth/
│   │   │   └── SignIn.jsx
│   │   ├── home/
│   │   │   └── HomeView.jsx
│   │   ├── quotes/
│   │   │   ├── QuoteBuilderView.jsx
│   │   │   ├── QuotesView.jsx
│   │   │   ├── PricingCard.jsx
│   │   │   ├── TaskRow.jsx
│   │   │   └── ReportModal.jsx
│   │   ├── templates/
│   │   │   └── TemplatesView.jsx
│   │   ├── customers/
│   │   │   ├── CustomersView.jsx
│   │   │   └── CustomerForm.jsx
│   │   ├── tools/                    # NEW - from redhammer-tools.html
│   │   │   ├── ToolsView.jsx
│   │   │   ├── SalesProcess.jsx
│   │   │   ├── MeetingScript.jsx
│   │   │   ├── EmailTemplates.jsx
│   │   │   ├── AssessmentScript.jsx
│   │   │   ├── SowPrompts.jsx
│   │   │   ├── RfiGenerator.jsx
│   │   │   ├── ProjectBudget.jsx
│   │   │   └── SalesPhilosophy.jsx
│   │   └── admin/
│   │       ├── AdminView.jsx
│   │       ├── ProfileTab.jsx
│   │       ├── UsersTab.jsx
│   │       ├── RolesTab.jsx
│   │       ├── TasksTab.jsx
│   │       └── SettingsTab.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useQuotes.js
│   ├── utils/
│   │   ├── supabase.js
│   │   ├── FormulaEngine.js
│   │   ├── QuoteStorage.js
│   │   └── constants.js
│   ├── data/
│   │   ├── defaultRoles.js
│   │   ├── defaultTasks.js
│   │   ├── defaultVariables.js
│   │   └── hammerTimeTasks.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Database Schema (Already Deployed)

Tables in Supabase:
1. `quotes` - Quote/template data with JSONB columns
2. `customers` - Customer records
3. `team_members` - Team member invites and roles
4. `user_profiles` - User profile information
5. `audit_log` - Activity tracking
6. `task_comments` - Comments on quotes/tasks
7. `user_settings` - User preferences

## Migration Steps

### Phase 1: Core Setup
1. Create Vite project with React
2. Configure Tailwind CSS
3. Set up Supabase client
4. Create AppContext with all state

### Phase 2: Extract Components
1. Layout components (Sidebar, Header, Toast)
2. Auth components (SignIn)
3. Home view
4. Quotes and QuoteBuilder
5. Templates view
6. Customers view
7. Admin view

### Phase 3: Add Tools
1. Create ToolsView with sub-tabs
2. Port each tool section
3. Add settings for document links
4. Add prompt customization

### Phase 4: Polish
1. URL routing (react-router)
2. Microsoft Azure AD login
3. Email templates
4. HammerTime export

## Key Components to Extract

### From redhammer-platform-v2.html:
- `FormulaEngine` class (lines ~1200-1350)
- `QuoteStorage` class (lines ~1350-1500)
- `DEFAULT_ROLES` constant
- `DEFAULT_TASKS` array
- `DEFAULT_VARIABLES` object
- `DEFAULT_HAMMERTIME_TASKS` array
- All view components

### From redhammer-tools.html:
- Tab content sections
- Search functionality
- Dark mode toggle
- Copy-to-clipboard functions
- Settings modal
- Prompt editor

## Notes

- The current single-file approach uses in-browser Babel transformation
- Claude Code will use proper JSX compilation via Vite
- Tailwind classes can be kept as-is
- Supabase client setup needs to use environment variables
