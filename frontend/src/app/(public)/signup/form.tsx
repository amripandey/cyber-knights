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
      <input type="text" name="name" />
      {state?.errors?.name && (
        <p className="text-sm text-red-500">{state.errors.name}</p>
      )}

      <input type="email" name="email" />
      {state?.errors?.email && (
        <p className="text-sm text-red-500">{state.errors.email}</p>
      )}

      <input type="password" name="password" />
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

      <button disabled={pending}>{pending ? "Submiting..." : "Sign Up"}</button>
    </form>
  );
}
