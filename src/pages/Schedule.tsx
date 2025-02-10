import { useState } from "react"

interface Event {
  $id: string
  title: string
  description: string
  startTime: string
  endTime: string
  venue: string
  type: "workshop" | "presentation" | "break" | "judging"
}

export default function Schedule() {
  const [events] = useState<Event[]>([
    {
      $id: "1",
      title: "Opening Ceremony",
      description: "Welcome address and hackathon kickoff",
      startTime: "2024-02-15T09:00:00",
      endTime: "2024-02-15T10:00:00",
      venue: "Main Hall",
      type: "presentation",
    },
    {
      $id: "2",
      title: "Team Formation",
      description: "Find your teammates and start brainstorming",
      startTime: "2024-02-15T10:00:00",
      endTime: "2024-02-15T11:00:00",
      venue: "Collaboration Space",
      type: "workshop",
    },
    {
      $id: "3",
      title: "AI in Healthcare Workshop",
      description: "Learn about implementing AI solutions in healthcare",
      startTime: "2024-02-15T11:00:00",
      endTime: "2024-02-15T12:30:00",
      venue: "Workshop Room A",
      type: "workshop",
    },
    {
      $id: "4",
      title: "Lunch Break",
      description: "Network with other participants while enjoying lunch",
      startTime: "2024-02-15T12:30:00",
      endTime: "2024-02-15T13:30:00",
      venue: "Cafeteria",
      type: "break",
    },
    {
      $id: "5",
      title: "Mentor Sessions",
      description: "One-on-one mentoring with industry experts",
      startTime: "2024-02-15T13:30:00",
      endTime: "2024-02-15T17:30:00",
      venue: "Mentoring Rooms",
      type: "workshop",
    },
  ])

  const getEventTypeStyles = (type: string) => {
    switch (type) {
      case "workshop":
        return "bg-blue-50 border-blue-500 text-blue-700"
      case "presentation":
        return "bg-purple-50 border-purple-500 text-purple-700"
      case "break":
        return "bg-green-50 border-green-500 text-green-700"
      case "judging":
        return "bg-red-50 border-red-500 text-red-700"
      default:
        return "bg-gray-50 border-gray-500 text-gray-700"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Event Schedule</h1>
      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.$id}
            className={`border-l-4 ${getEventTypeStyles(event.type)} bg-white shadow overflow-hidden sm:rounded-lg p-6`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeStyles(event.type)}`}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
              <div>
                <span className="font-medium">Start:</span> {new Date(event.startTime).toLocaleTimeString()}
              </div>
              <div>
                <span className="font-medium">End:</span> {new Date(event.endTime).toLocaleTimeString()}
              </div>
              <div className="col-span-2">
                <span className="font-medium">Venue:</span> {event.venue}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

