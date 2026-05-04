"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "../../lib/auth-client";
import Link from "next/link";


export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  async function handleRegister() {
    setError("");

    const res = await signUp.email({
      email: form.email,
      password: form.password,
      name: form.name,
    });

    if (res.error) {
      setError(res.error.message);
      return;
    }

    // ✅ Professional UX: Redirect to home page after auto-login
    router.push("/");
  }

  async function handleGoogleLogin() {
    try {
      console.log("Initiating Google Register...");
      const res = await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
      console.log("Google Register Response:", res);
      if (res?.error) {
        console.error("Google Register Error:", res.error);
        setError(res.error.message || "Google registration failed");
      }
    } catch (err) {
      console.error("Unexpected error during Google register:", err);
      setError("An unexpected error occurred. Please check console.");
    }
  }

  return (
    <div className="max-w-md mx-auto p-10 border rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">Register</h1>

      <div className="space-y-4">
        <input
          className="border p-3 w-full rounded-lg focus:outline-orange-500"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="border p-3 w-full rounded-lg focus:outline-orange-500"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="border p-3 w-full rounded-lg focus:outline-orange-500"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleRegister}
          className="bg-orange-500 text-white py-3 w-full rounded-lg font-bold hover:bg-orange-600 transition"
        >
          Register
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300"></span>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full border p-3 rounded-lg hover:bg-gray-50 transition font-semibold cursor-pointer active:scale-95"
        >
          <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
          Register with Google
        </button>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}