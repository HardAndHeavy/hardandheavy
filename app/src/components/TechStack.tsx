import { motion } from 'framer-motion'
import { FaAws, FaDatabase, FaDocker, FaGitAlt, FaJs, FaLinux, FaPython, FaReact } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiAnsible, SiHuggingface, SiKubernetes, SiOllama, SiRust, SiVim } from "react-icons/si"

const techStack = [
  { icon: FaLinux, name: 'Linux', color: '#333333' },
  { icon: SiVim, name: 'Vim', color: '#019733' },
  { icon: FaDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiAnsible, name: 'Ansible', color: '#EE0000' },
  { icon: FaPython, name: 'Python', color: '#3776ab' },
  { icon: FaJs, name: 'JavaScript', color: '#f7df1e' },
  { icon: FaReact, name: 'React', color: '#61DAFB' },
  { icon: BiLogoPostgresql, name: 'PostgreSQL', color: '#336791' },
  { icon: SiOllama, name: 'Ollama', color: '#707070' },
  { icon: SiHuggingface, name: 'HuggingFace', color: '#ffcc00' },
]

export function TechStack() {
  return (
    <section id="techStack" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heavy-h2">
            Мой технологический стек
          </h2>
          <p className="heavy-p">
            Инструменты, которые помогают мне создавать будущее
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col items-center">
                <tech.icon
                  className="w-12 h-12 mb-3 transition-colors"
                  style={{ color: tech.color }}
                />
                <h3 className="font-semibold text-slate-800 mb-3 text-center">
                  {tech.name}
                </h3>
                <div
                  className="w-full h-1 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
