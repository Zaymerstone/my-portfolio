import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "Redux",
      "TypeScript / JavaScript",
      "Chakra UI",
      "Tailwind CSS",
      "Material UI",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Python / JavaScript",
      "Flask",
      "FastAPI",
      "Express",
      "SQLAlchemy",
      "Sequelize",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["NumPy", "Jupyter Notebook", "Theoretical Machine Learning"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "Supabase",
      "PostgreSQL",
      "Docker",
      "Cursor IDE",
      "GitHub Copilot",
    ],
    color: "from-orange-500/20 to-red-500/20",
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`p-6 h-full rounded-2xl shadow-elegant transition-smooth hover:shadow-hover hover:scale-105 bg-gradient-to-br ${category.color}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-background/50">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-background/70 backdrop-blur-sm rounded-lg text-sm font-medium transition-smooth hover:bg-background"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
