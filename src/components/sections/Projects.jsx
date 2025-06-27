import { RevealOnScroll } from "./RevealOnScroll"

export const Projects = () => {
    return <section
    id="projects"
    className="min-h-screen flex items-center justify-center py=20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent text-center">
                {" "}
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Parking Lot Management System</h3>
                    <p className="text-gray-400 mb-4">
                    A Python-based application for efficiently managing parking lot operations.
                    </p>
                        <div>
                            {["Python", "TKInter", "SQLite"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                    "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://drive.google.com/drive/folders/1XJiGGVvH0U3__FKZZ_acJGugMrl-ittb?usp=sharing"
                                    className="text-blue-400 hover:text-blue-200 transition-colors my-4"
                                >
                                    {" "}
                                    Get Project →
                                </a>
                            </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Student Information System</h3>
                    <p className="text-gray-400 mb-4">
                    A comprehensive and scalable Student Information System with a working database.
                    </p>
                        <div>
                            {["Python", "CustomTKInter", "MySQL"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                    "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://drive.google.com/drive/folders/1pitie_3gs0nKqBzM9bIeKQreCho8jkXk?usp=sharing"
                                    className="text-blue-400 hover:text-blue-200 transition-colors my-4"
                                >
                                    {" "}
                                    Get Project →
                                </a>
                            </div>
                    </div>
                    <div className="md:col-span-2 md:row-span-2 p-6 rounded-xl border border-white/10 mb-7 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">PinoyScapes</h3>
                        <p className="text-gray-400 mb-4">
                            Developed with Java using Android Studio, Pinoyscapes is an android game similar to Four pics One word aiming to improve the tagalog vocabulary of Filipinoes of all ages.
                        </p>
                        <div className="mb-4">
                            {["Java", "Android Studio", "Android"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm mr-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                href="https://drive.google.com/drive/folders/example"
                                className="text-blue-400 hover:text-blue-200 transition-colors"
                            >
                                Get Project →
                            </a>
                        </div>
                    </div>
                    </div>
                        <div className="flex justify-center space-x-4">
                        <a
                        href="https://github.com/MCQuisao/Projects"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                        >
                                View More Projects
                        </a>
                    </div>
        </div>
        </RevealOnScroll>
    </section>
}