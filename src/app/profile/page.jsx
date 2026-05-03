"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();

  if (isPending) return <p>Loading...</p>;

  if (!session) {
    return <p className="p-10">Please login first</p>;
  }

  const userImage = session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}&background=f97316&color=fff`;

  return (
    <div className="max-w-md mx-auto p-10 text-center">

      <div className="relative w-24 h-24 mx-auto mb-4">
        <img
          src={userImage}
          alt={session.user.name || "User"}
          className="w-24 h-24 rounded-full object-cover border-4 border-orange-100 shadow-lg"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = `https://ui-avatars.com/api/?name=${session.user.name}&background=f97316&color=fff`;
          }}
        />
      </div>

      <h1 className="text-xl font-bold">
        {session.user.name}
      </h1>

      <p className="text-gray-500">
        {session.user.email}
      </p>

      <Link
        href="/profile/update"
        className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Update Profile
      </Link>

    </div>
  );
}