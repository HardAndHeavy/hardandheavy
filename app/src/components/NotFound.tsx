import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br heavy-gradient opacity-5 z-[-1]" />

      <div className="text-center relative z-10">
        <motion.h1
          className="heavy-h1 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-rose-400">Страница не найдена</span>
        </motion.h1>

        <motion.p
          className="heavy-p1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Похоже, вы забрели в неизведанные земли
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="inline-block bg-gradient-to-r heavy-gradient heavy-gradient-hover text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Вернуться на главную
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
