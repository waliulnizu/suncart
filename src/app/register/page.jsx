"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleRegister() {
    console.log(form);

    router.push("/login");
  }

  return (
    <div className="max-w-md mx-auto p-10">

      <h1 className="text-2xl font-bold mb-6">Register</h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        className="border p-2 w-full mb-3"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        onClick={handleRegister}
        className="bg-orange-500 text-white px-4 py-2 w-full"
      >
        Register
      </button>

    </div>
  );
}