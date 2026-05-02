import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(req) {
  try {
    const body = await req.json();

    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const updatedUser = await auth.api.updateUser({
      headers: await headers(),
      body: {
        name: body.name,
        image: body.image,
      },
    });

    return Response.json(updatedUser);
  } catch (err) {
    return Response.json(
      { message: "Update failed" },
      { status: 500 }
    );
  }
}