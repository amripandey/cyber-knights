"use client";

import { login } from "@/app/(public)/login/action";
import { useState, useActionState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function LogInForm() {
  const [state, action, pending] = useActionState(login, undefined);
  const [showPassword, setShowPassword] = useState(false);

  const toggleEye = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form action={action}>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mt-4 border rounded-md"
      />
      {state?.errors?.email && (
        <p className="text-sm text-red-500">{state.errors.email}</p>
      )}
      <div className="relative w-full mt-2">
        <input
          type="password"
          id="login-password"
          placeholder={showPassword ? "text" : "password"}
          className="w-full p-2 border rounded-md"
        />
        {state?.errors?.password && (
          <div className="text-sm text-red-500">
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          type="button"
          onClick={toggleEye}
          className="absolute right-3 top-3 text-gray-600"
        >
          <span id="login-eye">{showPassword ? <EyeOff /> : <Eye />}</span>
        </button>
      </div>

      <button disabled={pending} className="w-full bg-blue-600 text-white p-2 mt-4 rounded-md hover:bg-blue-700">
        {pending ? "Submiting..." : "Login"}
      </button>
    </form>
  );
}
