
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from 'better-auth';
import { nextCookies } from "better-auth/next-js";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("suncart");

// Ensure MongoDB connection
client.connect().catch((err) => {
  console.error("MongoDB connection error:", err);
});

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      prompt: "select_account",
    },
  },
  // ⚡ Smart BaseURL Detection
  baseURL: (process.env.NODE_ENV === "development") 
    ? "http://localhost:3000" 
    : (process.env.BETTER_AUTH_URL || `https://${process.env.VERCEL_URL}`),
  
  basePath: "/api/auth",
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: [
    "http://localhost:3000",
    "https://suncart-xi.vercel.app",
    process.env.BETTER_AUTH_URL
  ].filter(Boolean),
  plugins: [nextCookies()]
});