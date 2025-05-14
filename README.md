# Alfred Holdings

A modern investment company website built with Next.js 15 and Tailwind CSS v4.

## Tech Stack

- **Next.js 15**: Latest version of the React framework with App Router
- **Tailwind CSS v4**: Utility-first CSS framework
- **Headless UI**: Unstyled, accessible UI components
- **Utility Libraries**:
  - `clsx`: Utility for conditional class names
  - `tailwind-merge (twMerge)`: Merge Tailwind CSS classes without conflicts
  - `class-variance-authority (cva)`: Create variant components with Tailwind CSS

## Project Structure

The project follows a clean, modular structure:

```
alfred-holdings/
├── app/                  # Next.js App Router
│   ├── about/            # About page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── layout/           # Layout components
│   │   ├── container.tsx # Container component
│   │   ├── footer.tsx    # Footer component
│   │   └── header.tsx    # Header component
│   └── ui/               # UI components
│       ├── button.tsx    # Button component
│       └── card.tsx      # Card component
├── lib/                  # Utility functions
│   └── utils.ts          # Helper utilities
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind CSS configuration
├── prettier.config.js    # Prettier configuration
└── eslint.config.mjs     # ESLint configuration
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/alfred-holdings.git
cd alfred-holdings
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- Modern, responsive design
- Type-safe components with TypeScript
- Component variants with class-variance-authority
- Optimized for performance and SEO
- Accessible UI components

## Customization

- **Theme**: Customize colors, fonts, and other design elements in the `tailwind.config.ts` file
- **Components**: Extend or modify existing components in the `components` directory
- **Pages**: Add new pages in the `app` directory

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
