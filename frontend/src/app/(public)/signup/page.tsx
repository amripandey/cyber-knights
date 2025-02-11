import Link from "next/link";
import { SignUpForm } from "@/app/(public)/signup/form";

const style = {
  backgroundImage:
    "url('https://cdn.dribbble.com/userupload/15520664/file/original-c662833759b6fc8d01193eb1948945aa.png?resize=752x&vertical=center')",
};

export default function Page() {
  return (
    // <main className="flex items-center justify-center h-screen bg-blue-100">
    //   <div className="w-96 p-6 bg-white rounded-lg shadow-md text-center">
    //     <div className="text-center">
    //       <h1 className="text-3xl font-bold">Create an account</h1>
    //       <p className="text-gray-500">Enter your information to get started</p>
    //     </div>
    //     <SignUpForm />
    //     <p className="mt-4 text-sm">
    //       Already have an account?{" "}
    //       <Link href="/login" className="text-blue-600">
    //         Login
    //       </Link>
    //     </p>
    //   </div>
    // </main>
    <div className="bg-cover bg-center h-screen relative">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white rounded-3xl p-12 w-96 shadow-lg">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Sign up with email
            </h2>
            <p className="text-gray-600 text-sm">
              Make a new doc to bring your words, data, and teams together. For
              free.
            </p>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
