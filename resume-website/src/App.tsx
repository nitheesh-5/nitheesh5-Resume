import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import ScrollProgress from "./components/ScrollProgress";

// 🔥 AI Assistant
import AssistantBot from "./components/ai/AssistantBot";

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-16">
        <ScrollProgress />

        <section id="home">
          <Hero />
        </section>

        <Section id="about">
          <About />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Section id="experience">
          <Experience />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="education">
          <Education />
        </Section>

        <Section id="certifications">
          <Certifications />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>

      {/* 🤖 Floating AI Assistant */}
      <AssistantBot />
    </div>
  );
}

export default App;
