"use client";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useState } from "react";
import Link from "next/link";
import "./resources/login.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agree) {
      console.log("Email:", email);
      console.log("Password:", password);
      // Add your login logic here
    } else {
      alert("Please agree to the terms and privacy policy");
    }
  };
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center mb-2">
        <div className="login flex w-full md:p-32 justify-center">
          <div className="bg-[rgba(255,255,255,0.4)] p-8 rounded-lg shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              Login to WebInOrbit
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
                className="p-3 rounded-md bg-gray-200 text-gray-800"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Galactic Password"
                required
                className="p-3 rounded-md bg-gray-200 text-gray-800"
              />
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="w-4 h-4"
                />
                <label className="text-gray-300 text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="underline hover:text-gray-400">
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacypolicy"
                    className="underline hover:text-gray-400"
                  >
                    privacy policy
                  </Link>
                </label>
              </div>
              <button
                type="submit"
                className="p-3 rounded-md bg-gray-300 text-gray-900 font-semibold hover:bg-gray-400 transition"
              >
                Launch to WebInOrbit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;
