import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        <Header />
        <main className='flex-grow container mx-auto px-4 py-8'>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
    </div>
  )
}

export default App
