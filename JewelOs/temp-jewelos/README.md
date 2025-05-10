# JewelOS

A SaaS platform for jewelry retailers in India, built with Next.js, Firebase, and Tailwind CSS.

## Features

- 📱 Mobile-first design optimized for jewelry retailers
- 🔒 Phone number authentication with OTP verification
- 👥 Multi-tenant architecture with hierarchical structure
- 💬 WhatsApp integration for customer communication
- 👪 CRM with family relationship tracking
- 📅 AI-assisted campaign planning and management
- ✅ Task management for team coordination

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase account

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Mandeepthenoncoder/jewelos.git
   cd jewelos
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up Firebase
   - Create a Firebase project
   - Enable Authentication (Phone)
   - Set up Firestore Database
   - Create a web app and get the configuration

4. Create `.env.local` file with your Firebase configuration
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. Run the development server
   ```bash
   npm run dev
   ```

## Project Structure

- `/src/app` - Next.js App Router 
- `/src/modules` - Feature-based modules (CRM, WhatsApp, etc.)
- `/src/lib` - Shared utilities and hooks
- `/src/components` - Reusable UI components

## Deployment

The application can be deployed to Vercel:

```bash
npm run build
npm run start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
