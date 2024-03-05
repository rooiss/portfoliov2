import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-screen w-screen mt-16">
        <Experience />
        <Projects />
      </div>
    </>
  )
}

export default App
