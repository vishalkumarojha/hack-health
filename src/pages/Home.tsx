import { Link } from "react-router-dom"
import type { ServiceItem, StatItem } from "../lib/types"

const services: ServiceItem[] = [
  {
    icon: "🎯",
    title: "PITCH DECKS",
    description: "Present your healthcare innovation Showcase groundbreaking ideas in digital health, AI-powered diagnostics, and patient care solutions to a panel of industry experts and investors.",
    href: "#",
  },
  {
    icon: "🤖",
    title: "AI SOLUTIONS",
    description: "Leverage artificial intelligence Develop AI-driven tools for medical imaging, predictive analytics, and personalized treatment plans to revolutionize healthcare efficiency and accessibility",
    href: "#",
  },
  {
    icon: "🏥",
    title: "HEALTHCARE",
    description: "Transform patient care 🏥 Design and prototype innovative solutions for telemedicine, wearable health devices, and smart hospital management to improve patient outcomes and healthcare accessibility",
    href: "#",
  },
]

const stats: StatItem[] = [
  { label: "University Participated", value: "190+" },
  { label: "Teams Qualified", value: "250+" },
]

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="flex gap-2 mb-6">
              <img
                src="src\assets\health_hack-removebg-preview.png"
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-lg"
              />
              <img
                src="src\assets\health_hack-removebg-preview.png"
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-lg -ml-4"
              />
              <img
                src="src\assets\health_hack-removebg-preview.png"
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-lg -ml-4"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Health-Hack Hackethon
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Transform healthcare through technology. Join us in building innovative solutions that matter.
            </p>
            <Link
              to="/announcements"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-6 font-medium text-white hover:bg-gray-800 transition-colors"
            >
              View Announcements
            </Link>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <img
                src="https://cloud.appwrite.io/v1/storage/buckets/67ae07850038fae2b4b8/files/67ae079f000c5bb56177/view?project=67a99dc400202e23d936&mode=admin"
                alt="Health Hack Participants"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-white/90 to-white/0">
                <div className="flex justify-between items-center">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group p-4 sm:p-6 border rounded-xl hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl mb-4 block">{service.icon}</span>
                <h3 className="text-sm font-medium text-gray-400 mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

