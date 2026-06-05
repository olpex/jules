import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Tools from './components/Tools'
import Demo from './components/Demo'
import Quiz from './components/Quiz'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <Education />
        <Tools />
        <Demo />
        <Quiz />
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 py-10 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} MobiSafe. Проєкт про безпеку мобільних пристроїв.
        </div>
      </footer>
    </div>
  )
}

export default App
