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

  // Helper to fix Unsplash links
  const fixImageUrl = (url) => {
    if (!url) return "";
    // If it's an Unsplash page link
    if (url.includes("unsplash.com/photos/")) {
      const parts = url.split("/");
      const id = parts[parts.length - 1];
      // Note: This is a best-effort redirect, Unsplash usually requires the internal ID
      // But we can at least show a warning or try a common pattern
      return url; 
    }
    return url;
  };

  const previewImage = image || `https://ui-avatars.com/api/?name=${name || "User"}&background=f97316&color=fff`;

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

      // ✅ Success → Refresh and go to profile
      router.refresh();
      router.push("/profile");

    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">Update Profile</h1>

      {/* Preview Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-100 shadow-md mb-2">
          <img
            src={previewImage}
            alt="Preview"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${name || "User"}&background=f97316&color=fff`;
            }}
          />
        </div>
        <p className="text-sm text-gray-500">Image Preview</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            className="border p-2 w-full rounded-md"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            className="border p-2 w-full rounded-md"
            placeholder="https://example.com/image.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">
            {image.includes("unsplash.com/photos/") ? (
              <span className="text-red-500 font-medium">
                ⚠️ This looks like a webpage link. Right-click the image and select "Copy image address" instead.
              </span>
            ) : (
              "* Use a direct image link (ends with .jpg, .png, etc.)"
            )}
          </p>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleUpdate}
          disabled={loading}
          className="bg-orange-500 text-white px-4 py-2 w-full rounded-md font-semibold hover:bg-orange-600 disabled:bg-gray-400 transition-colors"
        >
          {loading ? "Updating..." : "Update Info"}
        </button>
      </div>
    </div>
  );
}