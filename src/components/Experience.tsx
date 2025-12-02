import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    type: "education",
    title: "MSc Cognitive Science (Computational Neuroscience & AI Track)",
    organization: "Université Paris Cité & Sorbonne Université",
    period: "2025 - Present",
    description:
      "Specializing in Artificial Intelligence and Neuroscience, my work explores how understanding human cognition may improve the design and integration of intelligent systems. This degree provides insights into how the brain functions and perceives information, which helps me approach algorithms and AI development from a different angle.",
  },
  {
    type: "work",
    title: "Full-Stack Developer / CEO of ListenLab",
    organization: "Self-Employed",
    period: "Sep 2025 - Present",
    description:
      "Currently, I proactively reach out to local businesses and early-stage teams providing solutions - from landing pages to complete full-stack applications, gaining practical experience and making sure that the delivered result satisfies stakeholder's needs. Moreover, I am working on a ListenLab startup, founded by me and my best friend, a university-backed platform for Sorbonne and Université Paris Cité that allows psychology students to get experience by connecting them with people who need mental health support. Our goal is to provide Psychology major students with an opportunity to get real-world experience and portfolio that would simplify their career success.",
  },
  {
    type: "education",
    title: "BSc Computer Science",
    organization: "University of Pécs",
    period: "2022 - 2025",
    description:
      "Learned major software engineering methodologies (Agile, Scrum, Waterfall), system architectures (monoliths vs microservices), software developent lifecycle stages, data structures ( stack, queue, graph, linked list, hash table, tree, binary tree), algorithm designs (sorting algorithms, greedy algorithms, backtracking, DFS, BFS).",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20"
              >
                <div className="absolute left-0 w-16 h-16 rounded-2xl bg-card shadow-elegant flex items-center justify-center">
                  {item.type === "education" ? (
                    <GraduationCap className="h-7 w-7 text-primary" />
                  ) : (
                    <Briefcase className="h-7 w-7 text-primary" />
                  )}
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-elegant transition-smooth hover:shadow-hover">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {item.organization}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-3">
                    {item.period}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
