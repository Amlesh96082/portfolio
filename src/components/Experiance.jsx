//import React from "react";
import { Code2, Database, Layout, Settings } from 'lucide-react';
function Experiance() {
return (
    /* Background remains White */
    <div className="bg-white min-h-screen w-full py-20 px-6">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-20">
          <h2 className="text-purple-600 text-4xl md:text-5xl font-bold">
            Technical Skills
          </h2>
          <div className="h-1.5 w-24 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* GRID SETTINGS:
           grid-cols-1 (Mobile)
           sm:grid-cols-2 (Tablet)
           lg:grid-cols-4 (Desktop - All in one line)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 1. LANGUAGES */}
          <div className="flex flex-col items-center p-6 border border-transparent hover:border-purple-100 rounded-2xl transition-all">
            <div className="border-2 border-purple-600 p-4 rounded-xl mb-6 text-purple-600 bg-purple-50">
              <Code2 size={28} />
            </div>
            <h3 className="text-gray-900 text-xl font-bold mb-4">Languages</h3>
            <ul className="text-gray-600 space-y-2 text-center">
              <li>Java With DSA</li>
              <li>Python (Basic)</li>
              <li>C++</li>
              <li>Javascript</li>
            </ul>
          </div>

          {/* 2. DATABASES */}
          <div className="flex flex-col items-center p-6 border border-transparent hover:border-purple-100 rounded-2xl transition-all">
            <div className="border-2 border-purple-600 p-4 rounded-xl mb-6 text-purple-600 bg-purple-50">
              <Database size={28} />
            </div>
            <h3 className="text-gray-900 text-xl font-bold mb-4">Databases</h3>
            <ul className="text-gray-600 space-y-2 text-center">
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* 3. FRAMEWORKS */}
          <div className="flex flex-col items-center p-6 border border-transparent hover:border-purple-100 rounded-2xl transition-all">
            <div className="border-2 border-purple-600 p-4 rounded-xl mb-6 text-purple-600 bg-purple-50">
              <Layout size={28} />
            </div>
            <h3 className="text-gray-900 text-xl font-bold mb-4">Frameworks</h3>
            <ul className="text-gray-600 space-y-2 text-center">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Node.js / Express.js</li>
            </ul>
          </div>

          {/* 4. TOOLS */}
          <div className="flex flex-col items-center p-6 border border-transparent hover:border-purple-100 rounded-2xl transition-all">
            <div className="border-2 border-purple-600 p-4 rounded-xl mb-6 text-purple-600 bg-purple-50">
              <Settings size={28} />
            </div>
            <h3 className="text-gray-900 text-xl font-bold mb-4">Tools</h3>
            <ul className="text-gray-600 space-y-2 text-center">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Apache NetBeans</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experiance;
