
// import { withAuth } from 'next-auth/middleware';
// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt'; // Import getToken

// export default withAuth(
//   async function middleware(req) {
//     const { pathname } = req.nextUrl;

//     // Get the token from the session
//     const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//     console.log("Token:", token); // Log the token

//     // Check 1: Login and Signup pages should only be accessible if the user is not logged in
//     if (pathname === "/login" || pathname === "/signup") {
//       if (token) {
//         console.log("User is authenticated. Redirecting away from login/signup");
//         if (token.role === "user1") {
//           return NextResponse.redirect(new URL("/", req.url)); // Redirect user1 to home
//         } else if (token.role === "user2") {
//           return NextResponse.redirect(new URL("/dealer", req.url)); // Redirect user2 to dealer dashboard
//         }
//       }
//       return NextResponse.next(); // Allow access to login/signup for unauthenticated users
//     }

//     // Check 2: "/dealer" page should only be accessible by user2
//     if (pathname.startsWith("/dealer")) {
//       if (!token || token.role !== "user2") {
//         console.log("User is not authorized to access /dealer. Redirecting to home");
//         return NextResponse.redirect(new URL("/", req.url)); // Redirect non-user2 to home
//       }
//       return NextResponse.next(); // Allow access to /dealer for user2
//     }




   

//     // Check 3: "/" (home) page should only be protected if user2 is logged in
//     if (pathname === "/") {
//       if (token && token.role === "user2") {
//         console.log("User2 is not allowed to access home. Redirecting to /dealer");
//         return NextResponse.redirect(new URL("/dealer", req.url)); // Redirect user2 to /dealer
//       }
//       return NextResponse.next(); // Allow access to home for unauthenticated users or user1
//     }


//     // Default behavior for other routes
//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       // Ensure the user is authenticated before proceeding for protected routes
//       authorized: ({ token, req }) => {
//         const { pathname } = req.nextUrl;

//         // Allow access to /login and /signup without authentication
//         if (pathname === "/login" || pathname === "/signup") {
//           return true;
//         }

//         // Require authentication for all other routes except "/"
//         if (pathname !== "/") {
//           return !!token;
//         }

//         // Allow access to "/" for unauthenticated users and user1
//         return true;
//       },
//     },
//   }
// );

// export const config = {
//   matcher: ["/", "/login", "/signup", "/dealer/:path*"], // Define protected routes
// };













import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt'; // Import getToken

export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;

    // Get the token from the session
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    console.log("Token:", token); // Log the token

    // Check 1: Login and Signup pages should only be accessible if the user is not logged in
    if (pathname === "/login" || pathname === "/signup") {
      if (token) {
        console.log("User is authenticated. Redirecting away from login/signup");
        if (token.role === "user1") {
          return NextResponse.redirect(new URL("/", req.url)); // Redirect user1 to home
        } else if (token.role === "user2") {
          return NextResponse.redirect(new URL("/dealer", req.url)); // Redirect user2 to dealer dashboard
        }
      }
      return NextResponse.next(); // Allow access to login/signup for unauthenticated users
    }

    // Check 2: "/dealer" page should only be accessible by user2
    if (pathname.startsWith("/dealer")) {
      if (!token || token.role !== "user2") {
        console.log("User is not authorized to access /dealer. Redirecting to home");
        return NextResponse.redirect(new URL("/", req.url)); // Redirect non-user2 to home
      }
      return NextResponse.next(); // Allow access to /dealer for user2
    }

    // Check 3: "/" (home) page should only be protected if user2 is logged in
    if (pathname === "/") {
      if (token && token.role === "user2") {
        console.log("User2 is not allowed to access home. Redirecting to /dealer");
        return NextResponse.redirect(new URL("/dealer", req.url)); // Redirect user2 to /dealer
      }
      return NextResponse.next(); // Allow access to home for unauthenticated users or user1
    }

    // Check 4: "/wishlist" page should only be accessible by user1
    if (pathname === "/wishlist") {
      if (!token || token.role !== "user1") {
        console.log("User is not authorized to access /wishlist. Redirecting to home");
        return NextResponse.redirect(new URL("/", req.url)); // Redirect non-user1 to home
      }
      return NextResponse.next(); // Allow access to /wishlist for user1
    }

    // Default behavior for other routes
    return NextResponse.next();
  },
  {
    callbacks: {
      // Ensure the user is authenticated before proceeding for protected routes
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Allow access to /login and /signup without authentication
        if (pathname === "/login" || pathname === "/signup") {
          return true;
        }

        // Require authentication for all other routes except "/"
        if (pathname !== "/") {
          return !!token;
        }

        // Allow access to "/" for unauthenticated users and user1
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/", "/login", "/signup", "/dealer/:path*", "/wishlist"], // Define protected routes
};
