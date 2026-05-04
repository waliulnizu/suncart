"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "../../lib/auth-client";
import { useEffect } from "react";
import Link from "next/link";

function LoginContent() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (session) {
      router.push(callbackUrl);
    }
  }, [session, router, callbackUrl]);

  async function handleLogin() {
    setError("");

    const res = await signIn.email({
      email,
      password,
    });

    if (res.error) {
      setError(res.error.message);
      return;
    }

    router.push(callbackUrl);
  }

  async function handleGoogleLogin() {
    try {
      console.log("Initiating Google Login...");
      const res = await signIn.social({
        provider: "google",
        callbackURL: callbackUrl,
      });
      console.log("Google Login Response:", res);
      if (res?.error) {
        console.error("Google Login Error:", res.error);
        setError(res.error.message || "Google login failed");
      }
    } catch (err) {
      console.error("Unexpected error during Google login:", err);
      setError("An unexpected error occurred. Please check console.");
    }
  }

  return (
    <div className="max-w-md mx-auto p-10 border rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">Login</h1>

      <div className="space-y-4">
        <input
          className="border p-3 w-full rounded-lg focus:outline-orange-500"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-3 w-full rounded-lg focus:outline-orange-500"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          className="bg-orange-500 text-white py-3 w-full rounded-lg font-bold hover:bg-orange-600 transition"
        >
          Login
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
          Login with Google
        </button>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-orange-500 font-bold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="max-w-md mx-auto p-10">Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}