import { Link } from "react-router-dom"
import { Wifi, Coffee, Clock, MapPin } from "lucide-react"
import { accommodations } from "../lib/data"

export default function Accommodations() {
  const getTypeStyles = (type: string) => {
    switch (type) {
      case "hotel":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "hostel":
        return "bg-green-50 text-green-700 border-green-200"
      case "apartment":
        return "bg-purple-50 text-purple-700 border-purple-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">Accommodations</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accommodations.map((accommodation) => (
          <Link
            key={accommodation.id}
            to={`/accommodations/${accommodation.id}`}
            className="group border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={accommodation.images[0] || "/placeholder.svg"}
                alt={accommodation.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <span className={`text-xs px-2 py-1 rounded-full ${getTypeStyles(accommodation.type)}`}>
                  {accommodation.type.charAt(0).toUpperCase() + accommodation.type.slice(1)}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{accommodation.name}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{accommodation.distance}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block font-medium">{accommodation.price}</span>
                  <span className="text-sm text-gray-500">
                    {accommodation.available} / {accommodation.capacity} available
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{accommodation.description}</p>
              <div className="flex flex-wrap gap-2">
                {accommodation.amenities.slice(0, 3).map((amenity) => (
                  <span
                    key={amenity}
                    className="inline-flex items-center gap-1 text-sm px-2 py-1 bg-gray-100 rounded-md"
                  >
                    {amenity.includes("Wi-Fi") && <Wifi className="h-3 w-3" />}
                    {amenity.includes("Breakfast") && <Coffee className="h-3 w-3" />}
                    {amenity.includes("24/7") && <Clock className="h-3 w-3" />}
                    {amenity}
                  </span>
                ))}
                {accommodation.amenities.length > 3 && (
                  <span className="text-sm px-2 py-1 bg-gray-100 rounded-md">
                    +{accommodation.amenities.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

