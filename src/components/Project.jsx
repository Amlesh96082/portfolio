import {
  ExternalLink,
  Github,
  Plane,
  Wallet,
} from "lucide-react";

function Project() {
  const projects = [
    {
      id: 1,
      title: "BudgetManager - Personal Finance Management System",
      year: "2026",
      icon: <Wallet size={55} className="text-purple-600" />,
      description:
        "A full-stack personal finance management application built with Spring Boot that allows users to manage income, expenses, budgets, savings goals, and financial reports securely.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "Spring Data JPA",
        "Thymeleaf",
        "MySQL",
        "Docker",
      ],
      live: "https://budgetmanager-c8vz.onrender.com",
      github: "https://github.com/Amlesh96082/budgetmanager",
    },
    {
      id: 2,
      title: "Airline Management System",
      year: "2024",
      icon: <Plane size={55} className="text-purple-600" />,
      description:
        "Desktop-based airline reservation system developed using Java Swing with booking, cancellation, boarding pass generation, QR payment, and MySQL integration.",
      technologies: [
        "Java",
        "Swing",
        "JDBC",
        "MySQL",
        "iTextPDF",
        "ZXing",
      ],
      live: "#", // Replace with your live/demo link if available
      github: "https://github.com/Amlesh96082/airline_management_system",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
    >
      {/* Heading */}

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-purple-600">
          Projects
        </h1>

        <div className="w-28 h-1.5 bg-purple-600 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-lg">
          Some of the projects I've built using Java & Spring Boot
        </p>
      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project) => (

          <div
            key={project.id}
            className="
            bg-[#111827]
            border
            border-gray-700
            rounded-2xl
            p-8
            shadow-xl
            hover:shadow-purple-500/30
            hover:-translate-y-2
            duration-300
            transition-all
          "
          >

            {/* Icon */}

            <div className="mb-6">
              {project.icon}
            </div>

            {/* Title */}

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-bold text-white">
                {project.title}
              </h2>

              <span className="text-purple-400 font-semibold">
                {project.year}
              </span>

            </div>

            {/* Description */}

            <p className="text-gray-300 mt-5 leading-7">
              {project.description}
            </p>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-2 mt-6">

              {project.technologies.map((tech, index) => (

                <span
                  key={index}
                  className="
                  bg-purple-700/20
                  text-purple-300
                  px-3
                  py-1
                  rounded-full
                  text-sm
                "
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* Buttons */}

            <div className="flex gap-5 mt-8">

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-2
                bg-purple-600
                hover:bg-purple-700
                text-white
                px-5
                py-2
                rounded-lg
                duration-300
              "
              >
                <ExternalLink size={18} />
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-2
                border
                border-purple-600
                text-purple-400
                hover:bg-purple-600
                hover:text-white
                px-5
                py-2
                rounded-lg
                duration-300
              "
              >
                <Github size={18} />
                GitHub
              </a>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}

export default Project;