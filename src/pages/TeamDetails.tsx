"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getTeamById, type Team } from "../lib/localStorage"

export default function TeamDetails() {
  const { id } = useParams<{ id: string }>()
  const [team, setTeam] = useState<Team | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      const teamData = getTeamById(id)
      setTeam(teamData || null)
    }
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (!team) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Team not found</h2>
          <Link to="/teams" className="mt-4 text-purple-600 hover:text-purple-700">
            Back to Teams
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/teams" className="text-purple-600 hover:text-purple-700">
          ← Back to Teams
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{team.name}</h1>
              <p className="text-xl text-purple-600 mt-2">{team.project}</p>
            </div>
            {(team.githubLink || team.demoLink) && (
              <div className="flex space-x-4 mt-4 sm:mt-0">
                {team.githubLink && (
                  <a
                    href={team.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                  >
                    GitHub
                  </a>
                )}
                {team.demoLink && (
                  <a
                    href={team.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Project Description</h2>
            <p className="text-gray-600">{team.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {team.techStack.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {team.progress !== undefined && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Progress</h2>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-purple-600 h-4 rounded-full" style={{ width: `${team.progress}%` }} />
              </div>
              <p className="text-right mt-1 text-sm text-gray-600">{team.progress}% Complete</p>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.members.map((member) => (
                <div
                  key={member.id}
                  className="bg-gray-50 rounded-lg p-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                >
                  <img src={member.avatar || "/placeholder.svg"} alt={member.name} className="w-20 h-20 rounded-full" />
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-purple-600">{member.role}</p>
                    {member.bio && <p className="text-gray-600 text-sm mt-2">{member.bio}</p>}
                    {member.skills && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {member.skills.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-white text-gray-600 text-xs rounded-full border">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

