import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/sections/Navbar'
import { MobileMenu } from './components/sections/MobileMenu'
import { Home } from './components/sections/Home'
import { Techstack } from './components/sections/Techstack'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { Login } from './components/sections/Login'
import './index.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 👈 Add this

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
      >
        {!isLoggedIn ? (
          <Login onLoginSuccess={() => setIsLoggedIn(true)} /> // 👈 Login screen
        ) : (
          <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <Techstack />
            <Projects />
            <Contact />
          </>
        )}
      </div>
    </>
  )
}

export default App
