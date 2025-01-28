// /middleware.ts

// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(req: any) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//   const { pathname } = req.nextUrl;

//   // Check if user is logged in
//   if (!token) {
//     // Allow access to login and signup for unauthenticated users
//     if (pathname === "/login" || pathname === "/signup") {
//       return NextResponse.next();
//     }

//     // Redirect unauthenticated users to login
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   // Redirect logged-in users away from login and signup pages
//   if (pathname === "/login" || pathname === "/signup") {
//     if (token.role === "user1") {
//       return NextResponse.redirect(new URL("/", req.url)); // Redirect buyers
//     } else if (token.role === "user2") {
//       return NextResponse.redirect(new URL("/dealer", req.url)); // Redirect dealers
//     }
//   }

//   // Protect "/dealer" route: only accessible by dealers
//   if (pathname.startsWith("/dealer") && token.role !== "user2") {
//     return NextResponse.redirect(new URL("/", req.url)); // Redirect non-dealers to home
//   }

//   // Allow access to other routes
//   return NextResponse.next();
// }

// // Apply middleware to specific routes
// export const config = {
//   matcher: ["/login", "/signup", "/dealer/:path*"], // Define protected routes
// };




// /app/middleware/middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (token) {
    if (pathname === "/login" || pathname === "/signup") {
      if (token.role === "user1") {
        return NextResponse.redirect(new URL("/", req.url)); // Redirect buyer to home
      } else if (token.role === "user2") {
        return NextResponse.redirect(new URL("/dealer", req.url)); // Redirect dealer to dealer dashboard
      }
    }

    // Protect "/dealer" route: only accessible by dealers
    if (pathname.startsWith("/dealer") && token.role !== "user2") {
      return NextResponse.redirect(new URL("/", req.url)); // Redirect non-dealers to home
    }
  }

  if (!token) {
    if (pathname === "/login" || pathname === "/signup") {
      return NextResponse.next(); // Allow access to login and signup
    }
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/dealer/:path*"], // Define protected routes
};
