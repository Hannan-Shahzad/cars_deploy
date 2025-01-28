"use client"

import Link from "next/link"
import Image from "next/image"
import { Eye, Mail, MapPin, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-context"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react";

const sliderContent = [
  {
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    text: "Join our community of luxury car enthusiasts",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    text: "Get access to exclusive deals and offers",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1783&q=80",
    text: "Experience the thrill of luxury driving",
  },
]

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    role: "user1",
  });

  const { data: session, status } = useSession();
  const router = useRouter()


  useEffect(() => {
    if (session) {
      const role = session?.user?.role;
      if (role === "user1") {
        router.push("/"); // Redirect buyer
      } else if (role === "user2") {
        router.push("/dealer"); // Redirect dealer
      }
    }
  }, [session, router]);

  const { theme } = useTheme();
 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };




    
  
    
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      alert("Account created successfully! Please sign in.");
      router.push("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
              <h1 className={`text-4xl lg:text-6xl ${theme === "dark" ? "text-white" : "text-black"} font-bold mb-6`}>
                NKRY CARS
              </h1>
              <p className={`text-xl lg:text-3xl ${theme === "dark" ? "text-white" : "text-black"} max-w-md`}>
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right side - Signup Form */}
      <div className="w-full lg:w-2/5 flex justify-center p-4 lg:p-8 overflow-y-auto ">
        <div className="w-full max-w-lg space-y-8 pt-8">
          <div className="flex justify-center items-center mb-8">
            <div className="w-32 h-32 bg-[#f2b705] rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-black">LOGO</span>
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl text-center font-bold text-[#f2b705] mb-10">Create Your Account</h2>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="text-lg text-[#f2b705]" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-4 text-lg rounded-lg ${
                    theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                  } focus:outline-none focus:ring-2 focus:ring-[#f2b705] transition-shadow duration-200`}
                />
              </div>
              <div className="space-y-4">
                <label className="text-lg text-[#f2b705]" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-4 text-lg rounded-lg ${
                    theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                  } focus:outline-none focus:ring-2 focus:ring-[#f2b705] transition-shadow duration-200`}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-lg text-[#f2b705]" htmlFor="phone">
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } w-6 h-6`}
                />
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-4 pl-12 text-lg rounded-lg ${
                    theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                  } focus:outline-none focus:ring-2 focus:ring-[#f2b705] transition-shadow duration-200`}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-lg text-[#f2b705]" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <Mail
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } w-6 h-6`}
                />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 pl-12 text-lg rounded-lg ${
                    theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                  } focus:outline-none focus:ring-2 focus:ring-[#f2b705] transition-shadow duration-200`}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-lg text-[#f2b705]" htmlFor="location">
                Location
              </label>
              <div className="relative">
                <MapPin
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } w-6 h-6`}
                />
                <input
                  id="location"
                  type="text"
                  placeholder="Enter location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full p-4 pl-12 text-lg rounded-lg ${
                    theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                  } focus:outline-none focus:ring-2 focus:ring-[#f2b705] transition-shadow duration-200`}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-lg text-[#f2b705]" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
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
            <div>
  <label
    className={`text-lg block ${
      theme === "dark" ? "text-[#f2b705]" : "text-black"
    }`}
  >
    Role
  </label>
  <div className="flex items-center space-x-10 pl-4">
    <label
      className={`flex items-center space-x-2 ${
        theme === "dark" ? "text-[#f2b705]" : "text-black"
      }`}
    >
      <input
        type="radio"
        name="role"
        value="user1"
        checked={formData.role === "user1"}
        onChange={handleInputChange}
        className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-[#f2b705] checked:border-transparent focus:outline-none"
      />
      <span>Buyer</span>
    </label>
    <label
      className={`flex items-center space-x-2 ${
        theme === "dark" ? "text-[#f2b705]" : "text-black"
      }`}
    >
      <input
        type="radio"
        name="role"
        value="user2"
        checked={formData.role === "user2"}
        onChange={handleInputChange}
        className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-[#f2b705] checked:border-transparent focus:outline-none"
      />
      <span>Dealer</span>
    </label>
  </div>
      </div>

            <button
              type="submit"
              className="w-full bg-[#f2b705] text-black rounded-lg p-4 text-lg font-semibold hover:bg-[#f2b705]/90 transition-colors duration-200 button-hover"
            >
              Create Account
            </button>
          </form>

          <p
            className={`text-center pb-8 mt-8 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Already have an account?{" "}
            <Link href="/login" className="text-[#f2b705] hover:underline transition-colors duration-200">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}








