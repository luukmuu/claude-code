import DogImage from './components/DogImage';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section id="home" className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary-900 mb-4">
              Welcome to Stray Dog
            </h1>
            <p className="text-xl text-primary-700 max-w-2xl mx-auto">
              Helping stray dogs find loving homes, one paw at a time
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <DogImage />
          </div>

          <div className="text-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
              Get Involved
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are dedicated to rescuing and rehoming stray dogs. Our mission is to provide
            shelter, medical care, and love to dogs in need while helping them find their
            forever homes.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Medical Care</h3>
              <p className="text-gray-600">
                Providing essential veterinary care and vaccinations for all rescued dogs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Shelter</h3>
              <p className="text-gray-600">
                Safe and comfortable temporary housing for dogs awaiting adoption.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Adoption</h3>
              <p className="text-gray-600">
                Matching loving families with their perfect canine companions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-900 mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-blue-100 rounded-lg flex items-center justify-center">
                <DogImage />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-900 mb-6">Contact Us</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
