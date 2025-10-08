import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero'
import { TechStack } from '../components/TechStack'
import { MyProjects } from '../components/MyProjects'
import { Articles } from '../components/Articles'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <TechStack />
      <MyProjects />
      <Articles />
      <FinalCTA />
      <Footer />
    </div>
  )
}
