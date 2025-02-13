"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { getAllTeams } from "../lib/localStorage"

export default function Teams() {
  const [teams] = useState(() => getAllTeams())

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Link
            key={team.$id}
            to={`/teams/${team.$id}`}
            className="block transform hover:scale-105 transition-transform duration-200"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{team.name}</h2>
                <p className="text-purple-600 font-medium mb-4">{team.project}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">{team.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {team.techStack.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 mb-2">Team Members:</p>
                  <div className="flex flex-wrap gap-4">
                    {team.members.map((member) => (
                      <div key={member.id} className="flex items-center space-x-2">
                        <img
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{member.name}</p>
                          <p className="text-xs text-gray-500">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

