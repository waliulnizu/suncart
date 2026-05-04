# SunCart ☀️ – Summer Essentials Store

SunCart is a modern eCommerce platform designed for seasonal summer products. Users can explore a variety of items like sunglasses, beach outfits, skincare, and more. The application provides a seamless shopping experience with secure authentication and a responsive design.

##  Live URL
[SunCart Live on Vercel](https://suncart-xi.vercel.app)

##  Key Features
- **Modern UI/UX**: A unique and clean design tailored for a summer theme.
- **Authentication**: Secure login and registration powered by **Better Auth**.
- **Social Login**: Easy access via Google Social Login.
- **Protected Routes**: Product details are accessible only to authenticated users.
- **User Profile**: Personalized profile page showing user information and avatar.
- **Profile Management**: Users can update their name and profile picture with a live preview feature.
- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop devices.
- **Product Catalog**: Explore a curated list of summer essentials from a static JSON database.

##  Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Components**: HeroUI / DaisyUI
- **Authentication**: Better Auth
- **Database**: MongoDB (via Better Auth Adapter)
- **Deployment**: Vercel

##  Packages Used
- `better-auth`: For robust and flexible authentication.
- `mongodb`: For database connectivity.
- `@heroui/react`: For modern and responsive UI components.
- `tailwindcss`: For utility-first styling.

##  Environment Variables
To run this project locally, create a `.env` file in the root directory and add the following:
```env
# 🟢 MongoDB Database
MONGODB_URI=mongodb+srv://nizu_suncart:ItoqZKkDmiWEEGih@cluster0.tq9hsap.mongodb.net/suncart?retryWrites=true&w=majority

# 🟢 App Base URL (PRODUCTION)
NEXT_PUBLIC_BASE_URL=https://suncart-xi.vercel.app

# 🟢 Better Auth URL (PRODUCTION)
BETTER_AUTH_URL=https://suncart-xi.vercel.app

# 🟢 Auth Secret (keep same, secure)
BETTER_AUTH_SECRET=OOv87UWceypxovMpeFrMTKcCEufub7av

# 🟢 Google Client ID
GOOGLE_CLIENT_ID=36506371062-8hd37k334te1mn7pv87f1rg0gu1r2irg.apps.googleusercontent.com

# 🟢 Google Client Secret
GOOGLE_CLIENT_SECRET=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

```

##  Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/waliulnizu/suncart.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 License
This project is for educational purposes as part of a programming assignment.
