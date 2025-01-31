// pages/login.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Eye, Fingerprint, Scan } from "lucide-react";
import { useTheme } from "@/components/theme-context";
import Slider from "@/components/ui/slider";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useTheme();
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

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
      router.push("/");
      // The redirection is handled by useEffect after session change
    } else {
      console.error("Unexpected error during sign-in.");
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className={`flex h-screen ${theme === "dark" ? "bg-[#0a0a0a] text-white" : "bg-white text-black"}`}>
      {/* Left side - Image Slider */}
      <Slider />

      {/* Right side - Login Form */}
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-start p-4 lg:p-8 overflow-y-auto">
        <div className="w-full max-w-lg flex flex-col items-center">
          <div className="mb-8 mt-8">
            <div className="w-32 h-32 logo-color rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-black">LOGO</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold auth-page-text mb-10 text-center">Welcome Back</h2>

          <form className="w-full space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="text-lg auth-page-text" htmlFor="email">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="Enter your email address"
                className={`w-full p-4 text-lg rounded-lg ${
                  theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                } focus:outline-none focus:ring-2 focus:ring-[#f2b705] transition-shadow duration-200`}
              />
            </div>

            <div className="space-y-4">
              <label className="text-lg auth-page-text" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={`w-full p-4 text-lg rounded-lg ${
                    theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                  } pr-12 focus:outline-none focus:ring-2 focus:ring-[#f2b705] transition-shadow duration-200`}
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
              className="w-full auth-button rounded-lg p-4 text-lg font-semibold  transition-colors duration-200 button-hover"
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

          {error && (
            <p className="text-red-600 mt-4 text-center">Invalid Credientials</p>
          )}

          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#f2b705] hover:text-[#f2b705]/80"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
