"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "../../lib/auth-client";
import { useEffect } from "react";

function LoginContent() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // শুধুমাত্র যদি callbackUrl ডিফল্ট না হয় (অর্থাৎ কোনো প্রটেক্টড পেজ থেকে আসলে)
    // অথবা যদি ইউজার ম্যানুয়ালি লগইন পেজে আসে তখন রিডাইরেক্ট হবে
    const hasCallback = searchParams.has("callbackUrl");
    if (session && hasCallback) {
      router.push(callbackUrl);
    }
  }, [session, router, callbackUrl, searchParams]);

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

      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={handleLogin}
        className="bg-orange-500 text-white px-4 py-2 w-full"
      >
        Login
      </button>
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