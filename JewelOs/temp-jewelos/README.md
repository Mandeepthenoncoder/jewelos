# JewelOS - Jewelry Business Management Platform

JewelOS is a comprehensive SaaS platform designed specifically for jewelry retailers in India. It combines CRM, WhatsApp automation, AI-driven marketing, campaign planning, and task management into one powerful system.

## Website Structure

The JewelOS website consists of several pages:

1. **Home Page** (`/`) - Landing page with hero section, features, testimonials, and pricing.
2. **About Page** (`/about`) - Information about the company, our story, mission, and team.
3. **Features Page** (`/features`) - Detailed overview of JewelOS capabilities and modules.
4. **Pricing Page** (`/pricing`) - Pricing plans, feature comparison, and FAQs related to pricing.
5. **Blog Page** (`/blog`) - Articles and insights on jewelry retail trends and best practices.
6. **Contact Page** (`/contact`) - Contact information and a form to get in touch with the team.

## Dashboard App Pages

7. **Dashboard** (`/dashboard`) - Home dashboard with statistics and overview.
8. **CRM** (`/crm`) - Customer relationship management for jewelry customers.
9. **WhatsApp Module** (`/whatsapp`) - WhatsApp Business integration for customer communication.
10. **Campaigns** (`/campaigns`) - AI-driven marketing campaign planning and management.
11. **Tasks** (`/tasks`) - Team task management and assignment.

## Authentication Pages

12. **Login** (`/login`) - User login page.
13. **Signup** (`/signup`) - New user registration.
14. **Onboarding** (`/onboarding`) - New user onboarding flow.

## Tech Stack

- **Frontend:** Next.js with App Router, React, TypeScript
- **Styling:** Tailwind CSS with ShadCN/UI components
- **Authentication:** JWT-based authentication system
- **Data Persistence:** Server-side state management
- **Deployment:** Vercel

## Project Structure

```
jewelos/
├── public/            # Static assets
├── src/
│   ├── app/           # App router pages
│   │   ├── page.tsx   # Home/landing page
│   │   ├── about/     # About page
│   │   ├── features/  # Features page
│   │   ├── pricing/   # Pricing page
│   │   ├── blog/      # Blog page
│   │   ├── contact/   # Contact page
│   │   ├── (auth)/    # Auth-related pages
│   │   └── (dashboard)/ # Dashboard pages
│   ├── components/    # Reusable components
│   ├── lib/           # Utility functions
│   └── types/         # TypeScript type definitions
└── ...
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

[MIT](https://choosealicense.com/licenses/mit/)
