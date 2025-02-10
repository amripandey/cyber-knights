import Link from "next/link";
import { SignUpForm } from "@/app/(public)/signup/form";

export default function Page() {
  return (
    <main className="flex items-center justify-center h-screen bg-blue-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md text-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-500">Enter your information to get started</p>
        </div>
        <SignUpForm />
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
