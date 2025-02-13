export interface NavItem {
    title: string
    href: string
  }
  
  export interface ServiceItem {
    icon: string
    title: string
    description: string
    href: string
  }
  
  export interface StatItem {
    label: string
    value: string
  }
  
  export interface Team {
    $id: string;
    name: string;
    members: Member[];
    project: string;
    description: string;
    techStack: string[];
    accommodationId: string;
  }
  
  interface Member {
    id: string;
    name: string;
    role: string;
    avatar: string;
    bio: string;
    skills: string[];
  }
  
  export interface Accommodation {
    id: string;
    name: string;
    type: string;
    description: string;
    distance: string;
    price: string;
    amenities: string[];
    images: string[];
    capacity: number;
    available: number;
    location: Location;
  }
  
  interface Location {
    address: string;
    coordinates: Coordinates;
  }
  
  interface Coordinates {
    lat: number;
    lng: number;
  }
  
  export interface TransportOption {
    id: number
    name: string
    description: string
    type: string
    location: {
      name: string
      address: string
      coordinates: {
        lat: number
        lng: number
      }
    }
    schedule: string[]
    capacity: number
    contact: string
    price: string
  }

  interface Location {
    name: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}