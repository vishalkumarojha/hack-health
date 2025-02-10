"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Announcements from "./pages/Announcements"
import Schedule from "./pages/Schedule"
import Teams from "./pages/Teams"
import TeamDetails from "./pages/TeamDetails"
import { checkAuth } from "./lib/appwrite"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAuthStatus = async () => {
      const { success } = await checkAuth()
      setIsAuthenticated(success)
    }
    checkAuthStatus()
  }, [])

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
            <Route path="/announcements" element={isAuthenticated ? <Announcements /> : <Navigate to="/login" />} />
            <Route path="/schedule" element={isAuthenticated ? <Schedule /> : <Navigate to="/login" />} />
            <Route path="/teams" element={isAuthenticated ? <Teams /> : <Navigate to="/login" />} />
            <Route path="/teams/:id" element={isAuthenticated ? <TeamDetails /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

