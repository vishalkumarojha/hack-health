import type { TransportOption } from "./types"

export const transportOptions: TransportOption[] = [
  {
    id: 1,
    type: "shuttle",
    name: "Morning Shuttle - Sehore to VIT",
    description: "Morning shuttle service from Sehore Bus stand to VIT Bhopal",
    schedule: ["Departure: 9:00 am", "Arrival: 9:45 am"],
    location: {
      address: "Sehore Bus stand to VIT Bhopal",
      name: "Sehore Bus Stand",
      coordinates: {
        lat: 23.2032,
        lng: 77.085,
      },
    },
    date: "2025-02-18",
    price: "Free",
    contact: "Bus Numbers: 5, 10, and 15",
  },
  {
    id: 2,
    type: "shuttle",
    name: "Evening Shuttle - VIT to Sehore",
    description: "Evening shuttle service from VIT Bhopal to Sehore Bus stand",
    schedule: ["Departure: 6:00 pm", "Arrival: 7:00 pm"],
    location: {
      address: "VIT Bhopal to Sehore Bus stand",
      name: "VIT Bhopal University Main Entrance",
      coordinates: {
        lat: 23.0778,
        lng: 76.8513,
      },
    },
    date: "2025-02-18",
    price: "Free",
    contact: "Bus numbers: 1, 7, 15",
  },
  {
    id: 3,
    type: "shuttle",
    name: "Morning Campus Shuttle",
    description: "Morning shuttle service from Faculty housing to Transport yard",
    schedule: ["Departure: 8:30 am", "Arrival: 8:45 am"],
    location: {
      address: "Faculty housing to Transport yard",
      name: "Faculty Housing",
      coordinates: {
        lat: 23.0778,
        lng: 76.8513,
      },
    },
    date: "2025-02-18",
    price: "Free",
    contact: "Bus Numbers: 1, 2",
  },
  {
    id: 4,
    type: "shuttle",
    name: "Evening Campus Shuttle",
    description: "Evening shuttle service from Transport yard to Faculty housing",
    schedule: ["Departure: 6:00 pm", "Arrival: 6:15 pm"],
    location: {
      address: "Transport yard to Faculty housing",
      name: "Transport Yard",
      coordinates: {
        lat: 23.0778,
        lng: 76.8513,
      },
    },
    date: "2025-02-18",
    price: "Free",
    contact: "Bus Numbers: 2, 6",
  },
]

