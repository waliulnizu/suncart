
import { toNextJsHandler } from "better-auth/next-js";
import { auth } from '@/lib/auth';

const handler = toNextJsHandler(auth);

export const POST = async (req) => {
  try {
    return await handler.POST(req);
  } catch (error) {
    console.error("BETTER AUTH POST ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    return await handler.GET(req);
  } catch (error) {
    console.error("BETTER AUTH GET ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};