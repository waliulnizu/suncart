
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
  // Better Auth requires a baseURL. 
  // It will use BETTER_AUTH_URL from your .env or VERCEL_URL on Vercel.
  baseURL: process.env.BETTER_AUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  basePath: "/api/auth",
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: [
    process.env.BETTER_AUTH_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
    "https://suncart-xi.vercel.app",
    "http://localhost:3000"
  ].filter(Boolean),
  plugins: [nextCookies()]
});