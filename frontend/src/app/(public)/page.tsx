import React from "react";
import Link from "next/link";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-800 min-h-screen flex flex-col text-white">
      {/* Navigation Bar */}
      <nav className="w-full bg-white bg-opacity-10 p-4 flex justify-between items-center shadow-md backdrop-blur-md">
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Entrepreneurship.svg/1024px-Entrepreneurship.svg.png"
            alt="Logo"
            className="w-10 h-10"
          />
          <h1 className="text-3xl font-extrabold tracking-wide">
            Udhyamshil Nepal
          </h1>
        </Link>
        <Link href={"/login"}>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 shadow-lg">
            Login
          </button>
        </Link>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center p-10">
        {/* Main Text */}
        <h2 className="text-6xl font-black mt-6 text-center max-w-3xl leading-tight drop-shadow-lg">
          Think, Plan, and Grow Together
        </h2>
        <p className="text-lg text-gray-200 mt-6 max-w-2xl text-center">
          Empowering entrepreneurs with strategic insights, marketing expertise,
          and financial guidance to scale their businesses effectively.
        </p>

        {/* CTA Button */}
        <Link href="/signup">
          <button className="mt-12 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-xl font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105">
            Get Started - It's Free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;
