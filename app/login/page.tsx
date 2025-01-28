"use client"

import Link from "next/link"
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image"
import { Eye, Fingerprint, Scan } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-context"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react";

const sliderContent = [
  {
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    text: "Experience luxury at unbeatable prices",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    text: "Discover a wide range of premium vehicles",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1783&q=80",
    text: "Drive your dreams with our exclusive deals",
  },
]

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useTheme()
  const [error, setError] = useState("");
  const router = useRouter()
  const { data: session, status } = useSession(); // UseSession hook here, outside handleSubmit

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderContent.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])
//its working here
  useEffect(() => {
    if (session) {
      const role = session?.user?.role;
      if (role === "user1") {
        router.push("/"); // Redirect buyer
      } else if (role === "user2") {
        router.push("/dealer") ; // Redirect dealer
      }
    }
  }, [session, router]); // Redirect when session changes

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
  
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent automatic redirection
    });
  
    if (result?.error) {
      console.error("Sign-in error:", result.error);
      setError(result.error); // Display error
    } else if (result?.ok) {
      console.log("Sign-in successful");
      // The redirection is handled by useEffect after session change
    } else {
      console.error("Unexpected error during sign-in.");
      setError("An unexpected error occurred. Please try again.");
    }
  };
  
  
  return (
    <div className={`flex h-screen ${theme === "dark" ? "bg-[#0a0a0a] text-white" : "bg-white text-black"}`}>
      {/* Left side - Image Slider */}
      <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden">
        {sliderContent.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`Luxury Car ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white z-10">
              <h1 className={`text-6xl font-bold      ${theme === "dark" ? " text-white" : " text-black"}          mb-6`}>NKRY CARS</h1>
              <p className={`text-3xl max-w-md'   ${theme === "dark" ? " text-white" : " text-black"}   `}>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-start p-4 lg:p-8 overflow-y-auto">
        <div className="w-full max-w-lg flex flex-col items-center">
          <div className="mb-8 mt-8">
            <div className="w-32 h-32 bg-[#f2b705] rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-black">LOGO</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-[#f2b705] mb-10 text-center">Welcome Back</h2>

          <form className="w-full space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="text-lg text-[#f2b705]" htmlFor="email">
                Email
              </label>
              <input
               value={email}
               onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="Enter your email address"
                className={`w-full p-4 text-lg rounded-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} focus:outline-none focus:ring-2 focus:ring-[#f2b705] transition-shadow duration-200`}
              />
            </div>

            <div className="space-y-4">
              <label className="text-lg text-[#f2b705]" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={`w-full p-4 text-lg rounded-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} pr-12 focus:outline-none focus:ring-2 focus:ring-[#f2b705] transition-shadow duration-200`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f2b705] hover:text-[#f2b705]/80 transition-colors duration-200"
                >
                  <Eye className="w-6 h-6" />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#f2b705] text-black rounded-lg p-4 text-lg font-semibold hover:bg-[#f2b705]/90 transition-colors duration-200 button-hover"
            >
              Sign In
            </button>

            <div className="relative flex items-center justify-center">
              <hr className={`w-full border-${theme === "dark" ? "gray-700" : "gray-300"}`} />
              <span className={`absolute ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} px-2 text-[#f2b705]`}>
                OR
              </span>
            </div>

            <div className="flex justify-center gap-10 mt-8">
              <button
                type="button"
                className={`p-5 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} rounded-lg hover-scale button-hover`}
              >
                <Fingerprint className="w-8 h-8 text-[#f2b705]" />
                <span className="sr-only">Fingerprint login</span>
              </button>
              <button
                type="button"
                className={`p-5 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} rounded-lg hover-scale button-hover`}
              >
                <Scan className="w-8 h-8 text-[#f2b705]" />
                <span className="sr-only">Face ID login</span>
              </button>
            </div>
          </form>

          <p className={`text-center mt-8 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#f2b705] hover:underline transition-colors duration-200">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

