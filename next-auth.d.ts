// import { DefaultSession } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       name?: string | null;
//       email?: string | null;
//       role?: string; // Add the role property
//     };
//   }
// }





import { User as NextAuthUser } from "next-auth";

// Extend the NextAuth User type
declare module "next-auth" {
  interface User extends NextAuthUser {
    role: string; // Add the 'role' field here
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string; // Add 'role' in the session
    };
  }

  interface JWT {
    id: string;
    name: string;
    email: string;
    role: string; // Add 'role' in the JWT token
  }
}
