
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from 'better-auth';

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
  // ✅ CRITICAL: These settings are REQUIRED
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  basePath: "/api/auth",
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: [(process.env.BETTER_AUTH_URL || "http://localhost:3000")],
});