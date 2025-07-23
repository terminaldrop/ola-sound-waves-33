import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import AdminButton from "@/components/AdminButton";

const Index = () => {
  useEffect(() => {
    // Set dark theme as default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <AdminButton />
        <Hero />
        <ProjectsGrid />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
