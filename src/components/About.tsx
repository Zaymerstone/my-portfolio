import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const keywords = [
    "Full-stack Architecture",
    "REST API Development",
    "CRUD Operations",
    "Feature-Sliced Design",
    "Scalable Backend Design",
    "Product Ownership",
    "System Design & Tradeoffs",
    "RAG & LLM Integration",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who am I?</h2>
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
              My journey started with full-stack development, but I always felt
              like something was missing - the "why" behind how people actually
              use tools. That’s how I ended up doing my MSc in Cognitive
              Science. I wanted to understand humans first before building AIs
              helping them. Now, I’m in the hardest chapter of my life balancing
              a million things at once: my studies, my startup ListenLab, work I
              do on the side, participating in competitions, and just growing as
              a person. Because I want to save the memories, I document my
              technical headaches, wins and losses on YouTube and Telegram.
              Well, now you know more about me 😉 !
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              So what I am actually looking for? I’m not here for a
              "comfortable" internship or a line on my CV. I want to expose
              myself to the type of an environment where "Damn, how do I even do
              it?" kicks in. Only by becoming the busiest I can be in such
              environments, I do grow. That's why, I am currently in search for
              such place :)
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
