export default function Footer() {
  return (
    <footer className="bg-purple-600 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h3 className="text-lg font-bold">Health Hack Hackathon</h3>
            <p className="mt-2">Innovating for a healthier tomorrow</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-200">
              Twitter
            </a>
            <a href="#" className="hover:text-purple-200">
              LinkedIn
            </a>
            <a href="#" className="hover:text-purple-200">
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">© 2024 Health Hack. All rights reserved.</div>
      </div>
    </footer>
  )
}

