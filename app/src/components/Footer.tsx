import { FaGithub, FaRegEnvelope, FaTelegram } from 'react-icons/fa'
import { SiHabr } from 'react-icons/si'

export function Footer() {
  return (
    <footer className="py-10 bg-slate-900 text-slate-400">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a
              href={import.meta.env.VITE_TELEGRAM_BLOG}
              target="_blank"
              rel="noopener noreferrer">
              <h3 className="text-2xl font-bold text-white mb-2 heavy-text-gradient-hover">Хэви</h3>
              <p className="heavy-text-gradient-hover">Познай себя, преодолей и превзойди</p>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={import.meta.env.VITE_TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaTelegram size="2em" />
            </a>
            <a
              href={`mailto:${import.meta.env.VITE_MAIL}`}
              className="hover:text-white transition-colors"
            >
              <FaRegEnvelope size="2em"/>
            </a>
            <a
              href={import.meta.env.VITE_HABR}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <SiHabr size="2em" />
            </a>
            <a
              href={import.meta.env.VITE_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub size="2em" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-4 pt-4 text-center text-sm">
          <a
            href="https://github.com/HardAndHeavy/hardandheavy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Исходный код
          </a>
        </div>
      </div>
    </footer>
  )
}
