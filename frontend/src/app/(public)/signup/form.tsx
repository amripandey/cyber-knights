"use client";

import { signup } from "@/app/(public)/signup/action";
import { useState, useActionState } from "react";

export function SignUpForm() {
  const [state, action, pending] = useActionState(signup, undefined);
  const [showPassword, setShowPassword] = useState(false);

  const toggleEye = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form action={action}>
      {/* <input type="text" name="name" className="border" placeholder="user name" />
      {state?.errors?.name && (
        <p className="text-sm text-red-500">{state.errors.name}</p>
      )}

      <input type="email" name="email" className="border" placeholder="user email" />
      {state?.errors?.email && (
        <p className="text-sm text-red-500">{state.errors.email}</p>
      )}

      <input type="password" name="password" className="border" placeholder="user password" />
      {state?.errors?.password && (
        <div className="text-sm text-red-500">
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )} */}
      
      <div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="Username"
          className="w-full bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {state?.errors?.name && (
        <p className="text-sm text-red-500">{state.errors.name}</p>
      )}
      <div className="mb-6">
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          className="w-full bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          className="w-full bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6 flex items-center">
        <input type="checkbox" id="remember" className="mr-2 rounded" />
        <label htmlFor="remember" className="text-gray-600">
          Remember Me
        </label>
      </div>

      <button
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg py-3 text-white font-medium hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-blue-300"
        disabled={pending}
      >
        {pending ? "Submiting..." : "Sign Up"}
      </button>
    </form>
  );
}
