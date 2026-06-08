"use client";

import { useState } from "react";
// import { registerUser } from "@/services/register";
import { registerUser } from "@/services/register";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await registerUser(form);

      router.push("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={submit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6">Create Account</h1>

        <input
          name="username"
          placeholder="Username"
          className="w-full border p-3 rounded mb-3"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-3"
          onChange={handleChange}
        />

        <input
          name="first_name"
          placeholder="First Name"
          className="w-full border p-3 rounded mb-3"
          onChange={handleChange}
        />

        <input
          name="last_name"
          placeholder="Last Name"
          className="w-full border p-3 rounded mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <button className="w-full bg-black text-white py-3 rounded-lg">
          Create Account
        </button>

        <p className="mt-4 text-center text-sm">Already have an account?</p>

        <button
          type="button"
          onClick={() => router.push("/login")}
          className="w-full mt-2 border py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
