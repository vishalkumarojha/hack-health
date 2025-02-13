import { useParams, Link } from "react-router-dom"
import { Wifi, Coffee, Clock, MapPin, Users } from "lucide-react"
import { accommodations, teams } from "../lib/data"

export default function AccommodationDetails() {
  const { id } = useParams<{ id: string }>()
  const accommodation = accommodations.find((a) => a.id === id)
  const teamsStaying = teams.filter((team) => team.accommodationId === id)

  if (!accommodation) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Accommodation not found</h2>
          <Link to="/accommodations" className="mt-4 text-primary hover:text-primary/90">
            Back to Accommodations
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-6">
        <Link to="/accommodations" className="text-primary hover:text-primary/90">
          ← Back to Accommodations
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {accommodation.images.map((image, index) => (
              <div key={index} className={index === 0 ? "col-span-2" : ""}>
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${accommodation.name} - ${index + 1}`}
                  className="rounded-lg w-full"
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h1 className="text-3xl font-bold mb-4">{accommodation.name}</h1>
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <MapPin className="h-4 w-4" />
              <span>{accommodation.location.address}</span>
            </div>
            <p className="text-gray-600 mb-6">{accommodation.description}</p>

            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {accommodation.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2">
                  {amenity.includes("Wi-Fi") && <Wifi className="h-4 w-4" />}
                  {amenity.includes("Breakfast") && <Coffee className="h-4 w-4" />}
                  {amenity.includes("24/7") && <Clock className="h-4 w-4" />}
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold">{accommodation.price}</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {accommodation.type.charAt(0).toUpperCase() + accommodation.type.slice(1)}
                </span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>
                    {accommodation.available} / {accommodation.capacity} rooms available
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{accommodation.distance} from venue</span>
                </div>
              </div>
              <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Book Now
              </button>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Teams Staying Here</h2>
              <div className="space-y-4">
                {teamsStaying.length > 0 ? (
                  teamsStaying.map((team) => (
                    <Link
                      key={team.$id}
                      to={`/teams/${team.$id}`}
                      className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-medium mb-1">{team.name}</h3>
                      <p className="text-sm text-gray-500">{team.members.length} members</p>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500">No teams are currently staying here.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

