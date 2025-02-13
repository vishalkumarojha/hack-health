import { MapPin, Clock, Users, Phone } from "lucide-react"
import { transportOptions } from "../lib/data"

export default function Transport() {
  const getTransportTypeStyles = (type: string) => {
    switch (type) {
      case "shuttle":
        return "bg-blue-50 border-blue-500 text-blue-700"
      case "parking":
        return "bg-green-50 border-green-500 text-green-700"
      case "public":
        return "bg-yellow-50 border-yellow-500 text-yellow-700"
      default:
        return "bg-gray-50 border-gray-500 text-gray-700"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <h1 className="text-4xl font-bold mb-8">Transportation</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {transportOptions.map((option) => (
          <div
            key={option.id}
            className={`border-l-4 ${getTransportTypeStyles(
              option.type,
            )} bg-white shadow-sm rounded-lg overflow-hidden`}
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{option.name}</h2>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{option.location.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <div className="flex flex-col">
                        {option.schedule.map((time, index) => (
                          <span key={index}>{time}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4" />
                      <span>Capacity: {option.capacity} passengers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4" />
                      <span>{option.contact}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-bold">{option.price}</span>
                  {/* <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                    Book Now
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

