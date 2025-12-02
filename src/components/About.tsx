import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const keywords = [
    "Full-stack development",
    "REST API Development",
    "CRUD Operations",
    "Frontend and Backend Integration",
    "AI & Machine Learning",
    "Linear Regression",
    "Gradient Descent",
    "K-Nearest Neighbors",
    "Always willing to learn new things",
  ];

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="aspect-square rounded-2xl overflow-hidden shadow-elegant relative">
              <img
                src="myphoto3.jpg"
                alt="My Photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay"></div>
              <div className="absolute bottom-4 left-4 text-white/80 text-4xl font-bold tracking-wide">
                EN
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-stack developer who is passionate about integrating
              Machine Learning algorithms and AI into applications. Currently
              I'm pursuing my MSc in Cognitive Science with a focus on AI/ML. As
              AI and machine learning advance rapidly, I believe that progress
              depends on understanding how humans think and behave. By studying
              cognition and human decision-making, I can bring human-centered
              insight with technical innovation - helping build AI systems that
              are more human-connected and effective.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My current goal is to gain real-world experience in full-stack
              development, with a focus on working on ML/AI integration tasks. I
              want to build on my existing full-stack foundation and develop
              practical experience in applying ML and AI in products. That's why
              now I'm looking for an internship where I can contribute to real
              projects while advancing these skills.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, index) => (
                  <motion.span
                    key={keyword}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium transition-smooth hover:bg-primary hover:text-primary-foreground cursor-default"
                  >
                    {keyword}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
