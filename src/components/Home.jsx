// public/ files are served at the site root by Vite — use the root URL instead
const pic = "/amlesh.png";

// Icons
import {
  FaGitAlt,
  FaJava,
  FaLinkedin,
  FaSquareFacebook,
  FaTelegram,
} from "react-icons/fa6";
import { IoCall, IoLogoYoutube } from "react-icons/io5";
import {
  SiDocker,
  SiGmail,
  SiHibernate,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div
  name="Home"
  className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-24 pb-20"
>
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
          <span className="text-xl font-medium text-gray-600">Hello & Welcome 👋</span>
          <div className="flex space-x-2 text-3xl md:text-5xl">
            <h1>Hello, I&apos;m</h1>
            <ReactTyped
              className="text-purple-600 font-bold"
              strings={[
  "Java Backend Developer",
  "Spring Boot Developer",
  "Problem Solver"
]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          
          <p className="text-md md:text-lg text-gray-700 text-justify leading-relaxed">
            I am a Computer Science Engineering student and an aspiring Java Backend Developer with a strong foundation in Core Java, Object-Oriented Programming, Data Structures & Algorithms, DBMS, and Computer Networks. Having solved 200+ LeetCode problems, I enjoy building secure and scalable applications while continuously improving my problem-solving skills.
            <br /><br />
           I have hands-on experience developing full-stack Java applications using Spring Boot, Spring Security, Spring Data JPA, Hibernate, Thymeleaf, MySQL, Docker, and Maven. Through projects like BudgetManager and Airline Management System, I have gained practical experience in authentication, RESTful application development, database design, cloud deployment, and writing clean, maintainable code. I am passionate about learning modern backend technologies and building software that solves real-world problems.
          </p>

          <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 pt-8">
            {/* Social Media & Contact Section */}
            <div className="space-y-3">
              <h1 className="font-bold text-center md:text-left">Available on</h1>
              <ul className="flex space-x-6">
                {/* Facebook & Phone Group */}
                <li className="flex flex-col items-center space-y-4">
                  <a href="https://www.facebook.com/avinasa.mahato.2025/" target="_blank" rel="noreferrer">
                    <FaSquareFacebook className="text-2xl cursor-pointer hover:text-blue-600 transition-all" />
                  </a>
                  <a href="tel:9608179923">
                    <IoCall className="text-2xl cursor-pointer hover:text-green-600 transition-all" />
                  </a>
                </li>

                {/* LinkedIn & Gmail Group */}
                <li className="flex flex-col items-center space-y-4">
                  <a href="https://www.linkedin.com/in/amalesh-kumar" target="_blank" rel="noreferrer">
                    <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700 transition-all" />
                  </a>
                  <a href="mailto:amlesh.ydv.1@gmail.com">
                    <SiGmail className="text-2xl cursor-pointer hover:text-red-600 transition-all" />
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <IoLogoYoutube className="text-2xl cursor-pointer hover:text-red-700 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/" target="_blank" rel="noreferrer">
                    <FaTelegram className="text-2xl cursor-pointer hover:text-sky-500 transition-all" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack Section */}
            <div className="space-y-3">
              <h1 className="font-bold text-center md:text-left">Backend Technologies</h1>
            <div className="flex flex-wrap gap-4">

  <FaJava
    className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 border-gray-200 cursor-pointer"
    title="Java"
  />

  <SiSpringboot
    className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 border-gray-200 cursor-pointer"
    title="Spring Boot"
  />

  <SiHibernate
    className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 border-gray-200 cursor-pointer"
    title="Hibernate"
  />

  <SiMysql
    className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 border-gray-200 cursor-pointer"
    title="MySQL"
  />

  <SiDocker
    className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 border-gray-200 cursor-pointer"
    title="Docker"
  />

  <FaGitAlt
    className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 border-gray-200 cursor-pointer"
    title="Git"
  />

</div>
            </div>
          </div>
        </div>

        {/* Right Side: The OVAL Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center order-1 md:order-2 mt-10 md:mt-0">
          <div className="relative">
            {/* The Image with Oval/Pill Shape */}
            <img
              src={pic}
              className="
                w-[280px] h-[350px]          /* Oval Dimensions for Mobile */
                md:w-[350px] md:h-[450px]    /* Oval Dimensions for Desktop */
                rounded-[150px]             /* High rounding creates the Oval effect */
                object-cover 
                object-top 
                border-[6px] border-purple-500 
                shadow-2xl 
                transition-all duration-300 cursor-pointer
                rotate-image
              "
              alt="Avinash Kumar"
            />
          </div>
        </div>
      </div>
      <hr className="mt-20" />
    </div>
  );
}

export default Home;