import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-yellow-900 shadow-lg flex justify-center sm:justify-between items-center px-6 py-3 sticky top-0">
        <div className="text-white font-bold text-xl">
          Fun Website!!
        </div>
        <div className="flex gap-6">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition-colors duration-300 font-semibold"
          >
            Random Jokes
          </Link>
          <Link
            to="/weatherApp"
            className="text-white hover:text-yellow-300 transition-colors duration-300 font-semibold"
          >
            Weather App
          </Link>
           <Link
            to="/calculator"
            className="text-white hover:text-yellow-300 transition-colors duration-300 font-semibold"
          >
            Mini-Calculator
          </Link>
          <Link
            to="/time"
            className="text-white hover:text-yellow-300 transition-colors duration-300 font-semibold"
          >
            Time-System
          </Link>
        </div>
      </nav>

      {/* Outlet for child routes */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default App
