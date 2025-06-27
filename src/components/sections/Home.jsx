import { RevealOnScroll } from "./RevealOnScroll"
import { CyclingImageCircle } from "./CyclingImageCircle"

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
  <RevealOnScroll>
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 z-10 max-w-6xl mx-auto">
      
      <div className="text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
          Hi, I'm Matty
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg">
          I'm an aspiring full-stack developer who has a keen interest in learning new things that could advance my skills. My goal is to create scalable applications that help with modern problems.
        </p>

        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            See Projects
          </a>
          <a
            href="#contact"
            className="border border-blue500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Hire Me
          </a>
        </div>
      </div>

      <CyclingImageCircle />
    </div>
  </RevealOnScroll>
</section>
}