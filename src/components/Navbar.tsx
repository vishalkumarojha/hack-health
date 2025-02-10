"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { logout, checkAuth } from "../lib/appwrite"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkLoginStatus = async () => {
      const { success } = await checkAuth()
      setIsLoggedIn(success)
    }
    checkLoginStatus()
  }, [])

  const handleLogout = async () => {
    const result = await logout()
    if (result.success) {
      setIsLoggedIn(false)
      navigate("/")
      window.location.reload() // Force reload to update auth state
    }
  }

  return (
    <nav className="bg-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Health Hack
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md hover:bg-purple-700">
                Home
              </Link>
              {isLoggedIn && (
                <>
                  <Link to="/announcements" className="px-3 py-2 rounded-md hover:bg-purple-700">
                    Announcements
                  </Link>
                  <Link to="/schedule" className="px-3 py-2 rounded-md hover:bg-purple-700">
                    Schedule
                  </Link>
                  <Link to="/teams" className="px-3 py-2 rounded-md hover:bg-purple-700">
                    Teams
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="hidden md:block">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="px-3 py-2 rounded-md hover:bg-purple-700">
                  Login
                </Link>
                <Link to="/register" className="px-3 py-2 rounded-md hover:bg-purple-700">
                  Register
                </Link>
              </>
            ) : (
              <button onClick={handleLogout} className="px-3 py-2 rounded-md hover:bg-purple-700">
                Sign Out
              </button>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-purple-700">
              Home
            </Link>
            {isLoggedIn && (
              <>
                <Link to="/announcements" className="block px-3 py-2 rounded-md hover:bg-purple-700">
                  Announcements
                </Link>
                <Link to="/schedule" className="block px-3 py-2 rounded-md hover:bg-purple-700">
                  Schedule
                </Link>
                <Link to="/teams" className="block px-3 py-2 rounded-md hover:bg-purple-700">
                  Teams
                </Link>
              </>
            )}
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="block px-3 py-2 rounded-md hover:bg-purple-700">
                  Login
                </Link>
                <Link to="/register" className="block px-3 py-2 rounded-md hover:bg-purple-700">
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-purple-700"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

