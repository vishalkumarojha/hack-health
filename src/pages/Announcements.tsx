import { useState } from "react"

interface Announcement {
  $id: string
  title: string
  content: string
  date: string
  priority: "high" | "medium" | "low"
}

export default function Announcements() {
  const [announcements] = useState<Announcement[]>([
    {
      $id: "1",
      title: "Welcome to Health Hack 2024!",
      content:
        "We're excited to kick off this year's hackathon. Get ready for an amazing journey of innovation and creativity in healthcare technology.",
      date: new Date().toISOString(),
      priority: "high",
    },
    {
      $id: "2",
      title: "Mentor Sessions Available",
      content:
        "Book your mentor sessions now! Our industry experts are ready to guide you through your project development.",
      date: new Date(Date.now() - 86400000).toISOString(),
      priority: "medium",
    },
    {
      $id: "3",
      title: "Workshop: AI in Healthcare",
      content:
        "Join us tomorrow at 2 PM for an exciting workshop on implementing AI solutions in healthcare applications.",
      date: new Date(Date.now() - 172800000).toISOString(),
      priority: "medium",
    },
    {
      $id: "4",
      title: "Deadline Extension",
      content: "Project submission deadline has been extended by 24 hours. Make the most of this extra time!",
      date: new Date(Date.now() - 259200000).toISOString(),
      priority: "high",
    },
    {
      $id: "5",
      title: "New Resources Available",
      content: "Check out the new healthcare APIs and datasets added to our resources section.",
      date: new Date(Date.now() - 345600000).toISOString(),
      priority: "low",
    },
  ])

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-500 bg-red-50"
      case "medium":
        return "border-yellow-500 bg-yellow-50"
      case "low":
        return "border-green-500 bg-green-50"
      default:
        return "border-gray-200"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
        <div className="flex space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-800">
            High Priority
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-50 text-yellow-800">
            Medium Priority
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-800">
            Low Priority
          </span>
        </div>
      </div>
      <div className="space-y-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.$id}
            className={`border-l-4 ${getPriorityColor(announcement.priority)} bg-white shadow overflow-hidden sm:rounded-lg p-6`}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{announcement.title}</h2>
            <p className="text-gray-600 mb-4">{announcement.content}</p>
            <p className="text-sm text-gray-500">
              Posted {new Date(announcement.date).toLocaleDateString()} at{" "}
              {new Date(announcement.date).toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

