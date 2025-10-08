import { motion } from 'framer-motion'
import { FaTelegram } from 'react-icons/fa'
import { MdArrowDownward, MdArrowForward } from 'react-icons/md'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br heavy-gradient opacity-5" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Познай{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r heavy-gradient">
              себя
            </span>
            , преодолей и превзойди
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            <div>Мой путь к большой мечте — созданию «программы программ».</div>
            <div>А по дороге я рассказываю о том, что меня вдохновляет.</div>
          </p>

          <motion.a
            href={import.meta.env.VITE_TELEGRAM_BLOG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r heavy-gradient heavy-gradient-hover text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTelegram size="1.5em" />
            Читать мой блог в Telegram
            <MdArrowForward
              size="1.2em"
              className="group-hover:translate-x-2 transition-transform"
            />
          </motion.a>

          <motion.div
            className="mt-16 flex justify-center group"
            onClick={() => {
              const aboutSection = document.getElementById('techStack');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            style={{ cursor: 'pointer' }}
          >
            <motion.div
              className="relative w-16 h-16 flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-slate-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <MdArrowDownward size="2em" className="text-slate-400 relative group-hover:text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
