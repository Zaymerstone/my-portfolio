import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, FolderOpen } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="name-label name-label-underline text-lg md:text-xl">
            Egor Nesterov
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Full-Stack Developer</span>
            <span className="block text-foreground mt-2">
              Interested in ML/AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-muted-foreground">
            Cognitive Science MSc Student
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          I love bringing value by solving real-world problems and gain new
          knowledge in the process.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 transition-smooth shadow-elegant hover:shadow-hover hover:scale-105 glow-primary"
          >
            <FolderOpen className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 transition-smooth hover:scale-105 border-2"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Egor_Nesterov_CV.pdf";
              link.download = "Egor_Nesterov_CV.pdf";
              link.click();
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-12"
        >
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
