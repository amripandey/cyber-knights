import React from "react";

const App = () => {
  // Table of Contents data
  const sections = [
    { id: "section1", title: "Section 1", content: "This is content for Section 1. It can be any content you like." },
    { id: "section2", title: "Section 2", content: "This is content for Section 2. It can be any content you like." },
    { id: "section3", title: "Section 3", content: "This is content for Section 3. It can be any content you like." },
    { id: "section4", title: "Section 4", content: "This is content for Section 4. It can be any content you like." },
    { id: "section5", title: "Section 5", content: "This is content for Section 5. It can be any content you like." },
  ];

  return (
    <div className="flex min-h-screen p-10 bg-gray-50">
      {/* Table of Contents Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 rounded-lg sticky top-10 h-fit">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Table of Contents</h3>
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Section */}
      <div className="flex-1 ml-10 bg-white shadow-lg p-8 rounded-lg">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-10 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default App;