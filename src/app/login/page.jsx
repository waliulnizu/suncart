"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    // demo flow (BetterAuth integration later)
    console.log(email, password);

    router.push("/");
  }

  return (
    <div className="max-w-md mx-auto p-10">

      <h1 className="text-2xl font-bold mb-6">Login</h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 w-full mb-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-orange-500 text-white px-4 py-2 w-full"
      >
        Login
      </button>

    </div>
  );
}