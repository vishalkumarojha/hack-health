import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Announcements from "./pages/Announcements"
import Schedule from "./pages/Schedule"
import Transport from "./pages/Transport"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/transport" element={<Transport />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

