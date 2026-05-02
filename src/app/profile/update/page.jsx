"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  if (isPending) return <p className="p-10">Loading...</p>;

  if (!session) {
    router.push("/login");
    return null;
  }

  async function handleUpdate() {
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/update-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          image,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Update failed");
        setLoading(false);
        return;
      }

      // ✅ Success → profile এ ফিরে যাও
      router.push("/profile");

    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">Update Profile</h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={handleUpdate}
        disabled={loading}
        className="bg-orange-500 text-white px-4 py-2 w-full"
      >
        {loading ? "Updating..." : "Update Info"}
      </button>
    </div>
  );
}