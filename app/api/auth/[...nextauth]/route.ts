// /app/auth/[...nextauth]/route.ts:
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { dbConnect } from "@/lib/mongodb";
// import User from "@/models/userModel";
// import bcrypt from "bcrypt";

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "example@example.com" },
//         password: { label: "Password", type: "password", placeholder: "Your password" },
//       },
//       async authorize(credentials) {
//         try {
//           // Ensure the database is connected
//           await dbConnect();

//           // Extract and validate credentials
//           const { email, password }: any = credentials || {};
//           if (!email || !password) {
//             throw new Error("Missing email or password");
//           }

//           // Fetch user from database
//           const user = await User.findOne({ email });
//           if (!user) {
//             throw new Error("No user found with this email");
//           }

//           // Validate the password
//           const isPasswordCorrect = await bcrypt.compare(password, user.password);
//           if (!isPasswordCorrect) {
//             throw new Error("Invalid password");
//           }

//           // Return user details
//           return {
//             id: user._id.toString(),
//             name: user.firstName,
//             email: user.email,
//           };
//         } catch (error:any) {
//           console.error("Authorization error:", error.message);
//           return null; // Return null to handle the error gracefully
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/",
//     error: "/login", // Redirect to the login page on error
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.name = user.name;
//         token.email = user.email;
//       }
//       return token;
//     },
//     async session({ session, token }: any) {
//       if (token) {
//         session.user = {
//           id: token.id,
//           name: token.name,
//           email: token.email,
//         };
//       }
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };













// /app/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "@/lib/mongodb";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: { label: "Password", type: "password", placeholder: "Your password" },
      },
      async authorize(credentials) {
        try {
          // Connect to the database
          await dbConnect();

          const { email, password }: any = credentials || {};
          if (!email || !password) throw new Error("Missing email or password");

          // Find user in the database
          const user = await User.findOne({ email });
          if (!user) throw new Error("No user found with this email");

          // Validate password
          const isPasswordCorrect = await bcrypt.compare(password, user.password);
          if (!isPasswordCorrect) throw new Error("Invalid password");

          // Return user details, including role
          return {
            id: user._id.toString(),
            name: user.firstName,
            email: user.email,
            role: user.role, // Include role in returned user
          };
        } catch (error: any) {
          console.error("Authorization error:", error.message);
          return null; // Handle errors gracefully
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
    error: "/login", // Redirect to login on error
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role; // Include role in token
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
          role: token.role, // Include role in session
        };
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
