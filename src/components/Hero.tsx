export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Hero Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-python-blue">Py</span>
            <span className="text-python-yellow">Indore</span>
          </h1>
          
          {/* Hero Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            The leading and official community dedicated to Python programming in Indore, India
          </p>
          
          {/* Hero Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Join our vibrant, active, and rapidly growing hub for everyone passionate about Python – 
            from seasoned software engineers and data scientists to aspiring developers, students, 
            educators, and technology leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-python-blue text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto">
              Join Our Community
            </button>
            <button className="border-2 border-python-blue text-python-blue px-8 py-3 rounded-lg text-lg font-semibold hover:bg-python-blue hover:text-white transition-colors duration-200 w-full sm:w-auto">
              Upcoming Events
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl font-bold text-python-blue mb-2">500+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl font-bold text-python-blue mb-2">50+</div>
              <div className="text-gray-600">Events Hosted</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl font-bold text-python-blue mb-2">5+</div>
              <div className="text-gray-600">Years Strong</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}