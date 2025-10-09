import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const projects = [
  {
    name: 'devbox',
    description: '12 веб-фреймворков на разных языках в Docker',
    stars: 32,
    benefit: 'Старт проекта за 5 минут'
  },
  {
    name: 'comfyui-rocm-docker',
    description: 'Генерация изображений на AMD GPU',
    stars: 21,
    benefit: 'Профессиональный инструмент для генерации изображений'
  },
  {
    name: 'dotfiles',
    description: 'Файлы конфигурации Linux',
    stars: 0,
    benefit: 'Быстрая настройка Linux'
  }
]

export function MyProjects() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-100 via-white to-indigo-100">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heavy-h2">
            Мои проекты
          </h2>
          <p className="heavy-p">
            Создаю инструменты, которые делают сложные технологии доступными
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={`https://github.com/HardAndHeavy/${project.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="block"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-lg text-slate-900 flex-1">
                      {project.name}
                    </h4>
                    <div className="flex items-center gap-1 text-amber-500">
                      <FaStar className="text-sm" />
                      <span className="text-sm font-semibold">{project.stars}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                      {project.benefit}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
