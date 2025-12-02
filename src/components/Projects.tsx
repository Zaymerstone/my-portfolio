import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FriendBook",
    description:
      "A clean and minimalistic contact management app where users can create personalized profile cards for friends. Each card highlights key details - like name, role, and a short description - presented in a modern, easy-to-navigate interface with optional light and dark themes.",
    tags: [
      "React",
      "Flask",
      "Chakra UI",
      "SQLite",
      "SQLAlchemy",
      "Python",
      "JavaScript",
      "RESTAPI",
    ],
    image: "gradient-to-br from-cyan-500 to-blue-600",
    github: "https://github.com/Zaymerstone/FullStackWebApp.git",
    demo: "#",
  },
  {
    title: "HabitQuest - Bachelor’s Thesis Project",
    description:
      "HabitQuest is a gamified habit-tracking platform created as my Bachelor’s thesis. It helps users build better routines through daily check-ins, streaks, levels, mastery ranks, and clear progress indicators. The project was developed with professional one-on-one mentorship and emphasizes thoughtful product design, user motivation, and a clean, consistent user experience.",
    tags: [
      "React",
      "Redux",
      "React-dom",
      "Material UI",
      "Axios",
      "TypeScript",
      "Express",
      "Sequelize",
      "JavaScript",
      "PostgreSQL",
      "Node.js",
      "JWT",
    ],
    image: "gradient-to-br from-purple-500 to-pink-600",
    github: "https://github.com/Zaymerstone/Bachelors_Thesis.git",
    demo: "#",
  },
  {
    title: "CyberSport Hub",
    description:
      "CyberSport Hub is a community-driven blogging platform where users can share their experiences, stories, and achievements from the gaming and eSports world. The platform allows people to create personal posts, update them, interact through comments, and customize their profile, including uploading a profile picture.",
    tags: ["PHP", "HTML", "CSS", "JavaScript"],
    image: "gradient-to-br from-emerald-500 to-teal-600",
    github: "https://github.com/Zaymerstone/Cybersport_Website_Project.git",
    demo: "#",
  },
  {
    title: "ReactLogic Calculator",
    description:
      "ReactLogic Calculator is an interactive calculator built entirely with React’s core features. By implementing every function - buttons, operations, and dynamic updates - the project helped me deeply understand the core logic behind user interaction flows through components and how modern interfaces handle real-time changes. The app provides a clean, responsive interface for basic arithmetic operations, built fully with functional components, using React hooks to manage state and updates, and was designed as a hands-on playground to practice and strengthen my React skills.",
    tags: ["Python", "React", "JavaScript", "CSS"],
    image: "gradient-to-br from-orange-500 to-red-600",
    github: "https://github.com/Zaymerstone/React_Calculator.git",
    demo: "#",
  },
  // {
  //   title: "ListenLab",
  //   description:
  //     "Now, I am working on it and will add it later.",
  //   tags: ["-", "-", "-", "-"],
  //   image: "gradient-to-br from-indigo-500 to-purple-600",
  //   github: "#",
  //   demo: "#",
  // },
  // {
  //   title: "TODO LATER",
  //   description: "Real-time collaborative coding environment with syntax highlighting and live chat functionality.",
  //   tags: ["React", "WebSocket", "Monaco", "Redis"],
  //   image: "gradient-to-br from-yellow-500 to-orange-600",
  //   github: "#",
  //   demo: "#",
  // },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-elegant transition-smooth hover:shadow-hover hover:scale-105 h-full flex flex-col">
                <div
                  className={`h-48 bg-${project.image} flex items-center justify-center`}
                >
                  <div
                    className={`w-full h-full bg-${project.image} flex items-center justify-center`}
                  >
                    <span className="text-white text-6xl font-bold opacity-30">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 rounded-full"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="flex-1 rounded-full bg-primary hover:bg-primary/90"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
