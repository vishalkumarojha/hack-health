"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { checkAuth } from "../lib/appwrite"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userName, setUserName] = useState("")
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const checkAuthStatus = async () => {
      const { success, user } = await checkAuth()
      setIsAuthenticated(success)
      if (user) {
        setUserName(user.name)
      }
    }
    checkAuthStatus()

    // Set greeting based on time of day
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("Good morning")
    else if (hour < 18) setGreeting("Good afternoon")
    else setGreeting("Good evening")
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900">
            <span className="block">Health Hack</span>
            <span className="block text-purple-600">Hackathon 2024</span>
          </h1>

          {isAuthenticated ? (
            <div className="mt-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {greeting}, {userName}!
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-gray-600">
                Welcome back to Health Hack. Ready to continue innovating?
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/announcements"
                  className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  View Announcements
                </Link>
                <Link
                  to="/teams"
                  className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 transition-colors"
                >
                  My Team
                </Link>
              </div>
            </div>
          ) : (
            <>
              <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Join us in revolutionizing healthcare through technology. Build innovative solutions that matter.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    to="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                  >
                    Register Now
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/login"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

