import { Code2, Database, Layout, Settings, BarChart3 } from 'lucide-react';
import { ReactTyped } from "react-typed";

export default function Technical() {
  return (
    /* ADDED ID HERE: id="Skills" matches the Navbar link */
    <div id="Skills" className="bg-navy-600 min-h-screen w-full py-20 px-6">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <div className="flex space-x-2 justify-center text-3xl md:text-5xl mb-6">
            {/* <h1 className="text-white font-bold">I&apos;m a</h1>
            <ReactTyped
              className="text-purple-600 font-bold"
              strings={["Data Analyst", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            /> */}
          </div>
          <h2 className="text-purple-600 text-4xl md:text-5xl font-bold">
            Technical Skills
          </h2>
          <div className="h-1.5 w-24 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Updated grid to lg:grid-cols-5 to fit the new section comfortably */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 1. LANGUAGES */}
         {/* 1. LANGUAGES */}
<div className="flex flex-col items-center p-6 border border-transparent hover:border-purple-100 rounded-2xl transition-all">
  <div className="border-2 border-purple-600 p-4 rounded-xl mb-6 text-purple-600 bg-purple-50">
    <Code2 size={28} />
  </div>

  <h3 className="text-white text-xl font-bold mb-4">Languages</h3>

  <ul className="text-white space-y-2 text-center">
    <li>Java</li>
    <li>C++</li>
    <li>SQL</li>
  </ul>
</div>

         {/* 2. DATABASES */}
<div className="flex flex-col items-center p-6 border border-transparent hover:border-purple-100 rounded-2xl transition-all">
  <div className="border-2 border-purple-600 p-4 rounded-xl mb-6 text-purple-600 bg-purple-50">
    <Database size={28} />
  </div>

  <h3 className="text-white text-xl font-bold mb-4">Databases</h3>

  <ul className="text-white space-y-2 text-center">
    <li>MySQL</li>
    <li>JDBC</li>
    <li>Hibernate ORM</li>
  </ul>
</div>

         {/* 3. FRAMEWORKS */}
<div className="flex flex-col items-center p-6 border border-transparent hover:border-purple-100 rounded-2xl transition-all">
  <div className="border-2 border-purple-600 p-4 rounded-xl mb-6 text-purple-600 bg-purple-50">
    <Layout size={28} />
  </div>

  <h3 className="text-white text-xl font-bold mb-4">Frameworks</h3>

  <ul className="text-white space-y-2 text-center">
    <li>Spring Boot</li>
    <li>Spring MVC</li>
    <li>Spring Security</li>
    <li>Spring Data JPA</li>
    <li>Hibernate</li>
    <li>Thymeleaf</li>
  </ul>
</div>

        {/* 4. TOOLS */}
<div className="flex flex-col items-center p-6 border border-transparent hover:border-purple-100 rounded-2xl transition-all">
  <div className="border-2 border-purple-600 p-4 rounded-xl mb-6 text-purple-600 bg-purple-50">
    <Settings size={28} />
  </div>

  <h3 className="text-white text-xl font-bold mb-4">Tools</h3>

  <ul className="text-white space-y-2 text-center">
    <li>Git & GitHub</li>
    <li>Docker</li>
    <li>Maven</li>
    <li>Postman</li>
    <li>IntelliJ IDEA</li>
    <li>VS Code</li>
  </ul>
</div>
        </div>
      </div>
    </div>
  );
}