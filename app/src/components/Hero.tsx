import { motion } from 'framer-motion'
import { FaTelegram } from 'react-icons/fa'
import { MdArrowDownward, MdArrowForward } from 'react-icons/md'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br heavy-gradient opacity-5" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="heavy-h1">
            Познай{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r heavy-gradient">
              себя
            </span>
            , преодолей и превзойди
          </h1>

          <div className="heavy-p1">
            <div className="mb-2">Мой путь к большой мечте — созданию «программы программ».</div>
            <div>А по дороге я рассказываю о том, что меня вдохновляет.</div>
          </div>

          <motion.a
            href={import.meta.env.VITE_TELEGRAM_BLOG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r heavy-gradient heavy-gradient-hover text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group mx-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTelegram size="1.2em" className="sm:size-1.5em" />
            <span className="whitespace-nowrap">Читать мой блог в Telegram</span>
            <MdArrowForward
              size="1.1em"
              className="sm:size-1.2em group-hover:translate-x-2 transition-transform"
            />
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-[16vh] left-0 right-0 z-10 flex justify-center">
        <motion.div
          className="group"
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
            className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-slate-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            <MdArrowDownward size="1.5em" className="sm:size-2em text-slate-400 relative group-hover:text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
