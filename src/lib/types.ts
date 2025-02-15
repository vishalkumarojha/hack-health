export interface Team {
  $id: string
  name: string
  members: {
    id: string
    name: string
    role: string
    avatar: string
    bio: string
    skills: string[]
  }[]
  project: string
  description: string
  techStack: string[]
  accommodationId: string
}

export interface Accommodation {
  id: string
  name: string
  type: string
  description: string
  distance: string
  price: string
  amenities: string[]
  images: string[]
  capacity: number
  available: number
  location: {
    name: string
    address: string
    coordinates: {
      lat: number
      lng: number
    }
  }
}

export interface TransportOption {
  id: number
  type: string
  name: string
  description: string
  schedule: string[]
  location: {
    address: string
    name: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  date: string
  price: string
  contact: string
}
export type StatItem = {
  label: string;
  value: string;
};

export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export interface NavItem {
  title: string;
  href: string;
}