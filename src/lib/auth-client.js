
import { createAuthClient } from 'better-auth/react';

const authClient = createAuthClient();

export const { signIn, signUp, useSession, signOut } = authClient;
export { authClient };