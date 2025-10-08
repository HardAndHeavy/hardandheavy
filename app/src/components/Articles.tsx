import { motion } from 'framer-motion'
import { SiHabr } from 'react-icons/si'
import { FaBookOpen, FaEye } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { TfiAngleRight } from 'react-icons/tfi'

const articles = [
  {
    title: 'Я упаковал 10 веб-фреймворков в Docker, чтобы вы могли запустить любой из них одной командой',
    platform: 'Habr',
    views: '14K',
    rating: 11,
    link: 'https://habr.com/ru/articles/951148/'
  },
  {
    title: 'Общение с LLM-моделью по собственной базе знаний в Obsidian',
    platform: 'Habr',
    views: '12K',
    rating: 12,
    link: 'https://habr.com/ru/articles/901562/'
  },
  {
    title: 'Как мы с сыном прошли путь от «Купи слона» до собственного навыка для Алисы',
    platform: 'vc.ru',
    views: '235',
    rating: 4,
    link: 'https://vc.ru/life/2138897-put-ot-igry-kupi-slona-k-navyku-dlya-alisy'
  }
]

export function Articles() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Делюсь знаниями
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Пишу о том, что работает на практике
          </p>
        </motion.div>

        <div className="grid gap-4">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="block"
            >
              <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center gap-1 text-sm text-slate-500">
                        {article.platform === 'Habr' ? <SiHabr className="inline align-middle" /> : <FaBookOpen className="inline align-middle" />}
                        {article.platform}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <FaEye className="mb-[2px] shrink-0" />
                        {article.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <FcLike className="mb-[4px] shrink-0" />
                        <span>{article.rating}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <TfiAngleRight size="1.5em" className="text-slate-400" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
