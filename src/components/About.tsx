export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About PyIndore
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a collaborative and knowledge-rich ecosystem that empowers individuals 
            and strengthens Indore&apos;s position as a burgeoning tech center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Python Indore is more than just a community – we&apos;re a movement dedicated to fostering 
              innovation, collaboration, and continuous learning in the world of Python programming. 
              Our mission is to create an inclusive environment where knowledge flows freely and 
              everyone can grow their skills.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in the power of community-driven learning and are committed to making 
              Python accessible to everyone, regardless of their background or experience level.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-python-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Regular Meetups & Workshops</h4>
                  <p className="text-gray-600">Monthly events featuring expert speakers and hands-on sessions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-python-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mentorship Programs</h4>
                  <p className="text-gray-600">Connect with experienced developers and guide newcomers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-python-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Open Source Contributions</h4>
                  <p className="text-gray-600">Collaborate on projects and contribute to the Python ecosystem</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="bg-gradient-to-br from-python-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Who We Are</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-python-yellow rounded-lg flex items-center justify-center">
                  <span className="text-python-blue font-bold">👨‍💻</span>
                </div>
                <div>
                  <h4 className="font-semibold">Software Engineers</h4>
                  <p className="text-blue-100">Building scalable applications</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-python-yellow rounded-lg flex items-center justify-center">
                  <span className="text-python-blue font-bold">📊</span>
                </div>
                <div>
                  <h4 className="font-semibold">Data Scientists</h4>
                  <p className="text-blue-100">Extracting insights from data</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-python-yellow rounded-lg flex items-center justify-center">
                  <span className="text-python-blue font-bold">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Students & Educators</h4>
                  <p className="text-blue-100">Learning and teaching Python</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-python-yellow rounded-lg flex items-center justify-center">
                  <span className="text-python-blue font-bold">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold">Tech Leaders</h4>
                  <p className="text-blue-100">Driving innovation forward</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}