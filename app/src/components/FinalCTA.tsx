import { motion } from 'framer-motion'
import { FaTelegram } from 'react-icons/fa'
import { MdArrowForward } from 'react-icons/md'

export function FinalCTA() {
  return (
    <section className="py-30 pb-20 px-4 bg-gradient-to-br heavy-gradient text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Блог о движении вперёд
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-rose-200">
            Здесь — про цели, код и внутреннюю работу
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex flex-col items-center gap-4">
              <motion.a
                href={import.meta.env.VITE_TELEGRAM_BLOG}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white font-bold px-10 py-5 rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTelegram size="1.2em" className="sm:size-1.5em text-rose-300" />
                <span className="heavy-text-gradient heavy-text-gradient-hover">
                  Перейти на канал Хэви
                </span>
                <MdArrowForward
                  size="1.1em"
                  className="sm:size-1.2em group-hover:translate-x-2 transition-transform text-rose-300"
                />
              </motion.a>
              <p className="text-rose-200 text-sm">
                Присоединяйся
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
