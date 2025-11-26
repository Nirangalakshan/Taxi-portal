"use client";

import React, { useState, useRef, KeyboardEvent, ChangeEvent } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const VerificationForm = () => {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = code.join("");

    if (enteredCode === "1999") {
      // Correct code - navigate to next page
      router.push("/forgot-pw/reset-password"); // Updated redirect
    } else {
      alert("Invalid verification code. Please try again.");
      setCode(["", "", "", ""]);
      inputRefs[0].current?.focus();
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      className={`${inter.className} bg-white h-screen flex flex-row overflow-hidden relative`}
    >
      {/* Blue Section - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-linear-to-b from-[#4A90E2]/80 via-[#4A90E2] to-[#2563EB] h-full w-[35%] flex flex-col p-8 relative overflow-visible"
      >
        {/* Header - Taxi Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className=""
        >
          <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm w-fit">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
            priority
          />
        </motion.div>

        {/* Feature Icons - Middle */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center px-4 mt-[10%] gap-[10%]"
        >
          {[
            {
              name: "Analytics",
              path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
            },
            {
              name: "User Management",
              path: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
            },
            {
              name: "Live Tracking",
              path: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center gap-2"
            >
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer">
                <svg
                  className="w-15 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={item.path}
                  />
                </svg>
              </div>
              <span className="text-white text-xs font-medium">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Illustration at Bottom - OVERLAPPING into white section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            type: "spring",
            bounce: 0.3,
          }}
          className="absolute bottom-0 left-[20%] right-0 w-full z-30"
        >
          <div className="relative">
            <Image
              src="/images/loginpage.png"
              alt="Taxi Illustration"
              width={800}
              height={600}
              className="w-[160%] h-auto"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Verification section*/}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-[60%] bg-white h-full flex flex-col items-center justify-center px-12 relative z-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Verification
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Enter the verification code sent to your phone number
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
          {/* Verification Code Input Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-3"
          >
            <label className="block text-xs font-medium text-gray-700 text-center">
              Enter verification code
            </label>
            <div className="flex justify-center gap-3">
              {code.map((digit, index) => (
                <motion.input
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) =>
                    handleChange(index, e.target.value.replace(/[^0-9]/g, ""))
                  }
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-16 h-16 text-center text-2xl font-bold bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 text-gray-900"
                  required
                />
              ))}
            </div>
          </motion.div>

          {/* Resend Code Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-center"
          >
            <button type="button" className="text-sm text-gray-500 ">
              Didn&apos;t receive code?{" "}
              <span className="font-semibold text-blue-600 hover:cursor-pointer">
                Resend
              </span>
            </button>
          </motion.div>

          {/* Continue Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            onClick={() => router.push("/forgot-pw/reset-password")}
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-linear-to-r from-[#4A90E2] to-[#2563EB] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Continue
          </motion.button>

          {/* Back to Login Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-center"
          >
            <button
              type="button"
              onClick={() => router.push("/auth")}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              ← Back to Login
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default VerificationForm;
