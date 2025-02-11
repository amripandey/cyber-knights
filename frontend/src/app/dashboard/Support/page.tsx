import React from "react";

function App() {
  return (
    <div className="p-10">
      {/* Table of Contents at the Top */}
      <div className="bg-white shadow-lg p-5 rounded-md mb-8">
        <h3 className="text-xl font-semibold mb-6">Table of Contents</h3>
        <ul className="flex space-x-10">
          <li>
            <a href="#section1" className="text-blue-500 hover:underline">
              Section 1
            </a>
          </li>
          <li>
            <a href="#section2" className="text-blue-500 hover:underline">
              Section 2
            </a>
          </li>
          <li>
            <a href="#section3" className="text-blue-500 hover:underline">
              Section 3
            </a>
          </li>
          <li>
            <a href="#section4" className="text-blue-500 hover:underline">
              Section 4
            </a>
          </li>
          <li>
            <a href="#section5" className="text-blue-500 hover:underline">
              Section 5
            </a>
          </li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="bg-white shadow-lg p-8 rounded-md">
        <section id="section1" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Section 1</h2>
          <p className="text-gray-700">
            This is content for Section 1. It can be any content you like.
          </p>
        </section>
        <section id="section2" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Section 2</h2>
          <p className="text-gray-700">
            This is content for Section 2. It can be any content you like.
          </p>
        </section>
        <section id="section3" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Section 3</h2>
          <p className="text-gray-700">
            This is content for Section 3. It can be any content you like.
          </p>
        </section>
        <section id="section4" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Section 4</h2>
          <p className="text-gray-700">
            This is content for Section 4. It can be any content you like.
          </p>
        </section>
        <section id="section5" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Section 5</h2>
          <p className="text-gray-700">
            This is content for Section 5. It can be any content you like.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
