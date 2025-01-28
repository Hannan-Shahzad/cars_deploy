// import CarListingPage from "@/components/ui/User/CarListingPage"

// export default function HomePage() {

//   return <CarListingPage  />

// }



"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import the correct router hook for the app directory
import { useEffect } from "react";
import CarListingPage from "@/components/ui/User/CarListingPage";

export default function HomePage() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === "loading") return; // Wait for session to load
  //   if (!session) router.push("/login"); // Redirect if unauthenticated
  // }, [status, session, router]);

  // if (status === "loading") {
  //   return <p>Loading...</p>; // Show a loading message while session is loading
  // }

  // if (!session) {
  //   return null; // Render nothing while redirecting to /login
  // }

  return <CarListingPage />;
}
