# Zomato Nova – AI-Rebranded Food Discovery

Zomato Nova is a modern, premium rebranding of the classic Zomato platform. Built with **AI-assisted design** and cutting-edge frontend technologies, it offers a seamless and high-end food discovery experience.

## 🚀 Experience the Future
- **Premium Aesthetics**: A sleek, dark/light balanced theme with glassmorphism and smooth animations.
- **AI-Driven Branding**: Logos and design concepts generated and refined using AI.
- **Dynamic Discovery**: Real-time restaurant search and cuisine filtering.
- **Seamless Auth**: Secure user authentication powered by Firebase.
- **Engagement**: Direct feedback loop with Firestore-integrated contact systems.

## 🛠️ Technology Stack
- **Frontend**: Next.js 15 (App Router), Tailwind CSS 4, Framer Motion, Lucide React.
- **Backend**: Firebase (Authentication & Firestore).
- **Deployment**: Vercel.
- **Design Tools**: AI-driven image generation (Logo & Assets).

## 📁 Project Structure
- `/src/app`: Next.js App Router pages and layouts.
- `/src/components`: Reusable UI components (Navbar, Footer, RestaurantCard).
- `/src/lib`: Firebase configuration and seed data.
- `/public`: Static assets including the AI-generated logo.

## ⚙️ Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd zomato-nova
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment Variables**:
   Create a `.env.local` file in the root and add your Firebase credentials:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🎯 Final Goal
The project demonstrates a production-ready internship submission that combines UI/UX excellence with robust backend integration. It's built to impress and ready for deployment.

---
*Created by Antigravity AI for Future Interns Task 3.*
