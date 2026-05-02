"use client";

import { useSession } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();

  if (isPending) return <p>Loading...</p>;

  if (!session) {
    return <p className="p-10">Please login first</p>;
  }

  return (
    <div className="max-w-md mx-auto p-10 text-center">

      <img
        src={session.user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />

      <h1 className="text-xl font-bold">
        {session.user.name}
      </h1>

      <p className="text-gray-500">
        {session.user.email}
      </p>

    </div>
  );
}