





// import { ThemeProvider } from "@/components/theme-context";
// import "./globals.css"; // Ensure this path is correct

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }















"use client"; // Ensure this is a client component

import { ThemeProvider } from "@/components/theme-context";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider from NextAuth
import "./globals.css"; // Ensure this path is correct

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SessionProvider>{children}</SessionProvider> {/* Wrap children with SessionProvider */}
        </ThemeProvider>
      </body>
    </html>
  );
}
