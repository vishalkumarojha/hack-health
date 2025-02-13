import type { Team, Accommodation, TransportOption } from "./types"

export const teams: Team[] = [
  {
    $id: "1",
    name: "HealthTech Innovators",
    members: [
      {
        id: "1",
        name: "John Doe",
        role: "Full Stack Developer",
        avatar: "/placeholder.svg?height=80&width=80",
        bio: "Experienced developer with a passion for healthcare innovation",
        skills: ["React", "Node.js", "Python", "AWS"],
      },
      {
        id: "2",
        name: "Jane Smith",
        role: "UI/UX Designer",
        avatar: "/placeholder.svg?height=80&width=80",
        bio: "Creative designer focused on creating intuitive healthcare interfaces",
        skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
      },
    ],
    project: "AI-Powered Health Monitoring",
    description: "Developing an AI system for early disease detection using wearable data.",
    techStack: ["React", "Python", "TensorFlow", "AWS", "Docker"],
    accommodationId: "1",
  },
  // Add more teams...
]

export const accommodations: Accommodation[] = [
  {
    id: "1",
    name: "Tech Hub Hotel",
    type: "hotel",
    description: "Modern hotel with tech-friendly amenities, perfect for hackathon participants.",
    distance: "5 min walk",
    price: "$120/night",
    amenities: ["Free Wi-Fi", "24/7 Access", "Co-working Space", "Breakfast"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    capacity: 50,
    available: 20,
    location: {
      name: "Tech Hub Hotel",
      address: "123 Tech Street, Innovation District",
      coordinates: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
  },
  // Add more accommodations...
]

export const transportOptions: TransportOption[] = [
  {
    id: 33,
    type: "shuttle",
    name: "Event Shuttle Service",
    description: "Free shuttle service between venue and official accommodations",
    schedule: ["Every 30 mins from 7:00 AM to 10:00 PM"],
    location: {
      address: "123 Event Venue Street",
      name: "Main Entrance",
      coordinates: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
    capacity: 20,
    price: "",
    contact: "+1 (555) 123-4567",
  },
  // Add more transport options...
]

