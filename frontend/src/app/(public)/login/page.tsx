import Link from "next/link";
import { LogInForm } from "@/app/(public)/login/form";

export default function Page() {
  return (
    <main className="flex items-center justify-center h-screen bg-blue-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-blue-600">Login</h2>
        <LogInForm />
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
