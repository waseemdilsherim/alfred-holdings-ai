# Alfred Holdings Website

This repository contains the codebase for the Alfred Holdings website. The website is built using Next.js, React, TypeScript, and Tailwind CSS.

## Project Structure

The project follows a structured organization:

```
├── app/                  # Next.js app directory
│   ├── about/            # About page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── common/           # Reusable UI components
│   ├── features/         # Feature components (business logic)
│   ├── layout/           # Layout components (header, footer, container)
│   ├── sections/         # Page sections
│   └── ui/               # UI primitives
├── lib/                  # Libraries and utilities
│   ├── config/           # Configuration files
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── public/               # Static assets
```

## Component Organization

- **Common Components**: Reusable components like cards, buttons, and items
- **Feature Components**: Business logic components that compose sections and common components
- **Section Components**: Page sections for the landing page and other pages
- **Layout Components**: Structural components like header, footer, and container
- **UI Components**: Low-level UI primitives

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Folder Structure Details

### `app/`

Contains Next.js app router pages and layouts.

### `components/`

Contains all React components organized by their role:

- `common/`: Reusable components like cards and UI elements
- `features/`: Business logic components
- `layout/`: Layout components like Header and Footer
- `sections/`: Page sections for different pages
- `ui/`: UI primitives (buttons, inputs, etc.)

### `lib/`

Contains utilities and shared logic:

- `config/`: Configuration files for the site
- `hooks/`: Custom React hooks
- `types/`: TypeScript type definitions
- `utils/`: Utility functions

### `public/`

Contains static assets like images and fonts.
