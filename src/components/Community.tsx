import { FaTelegram, FaLinkedin, FaGithub, FaMeetup, FaWhatsapp, FaQuoteLeft, FaUsers } from 'react-icons/fa';

export default function Community() {
  const communityFeatures = [
    {
      icon: "💬",
      title: "Active Discussions",
      description: "Join our vibrant online community for daily discussions, Q&A, and knowledge sharing."
    },
    {
      icon: "🤝",
      title: "Mentorship",
      description: "Connect with experienced developers who can guide you in your Python journey."
    },
    {
      icon: "🚀",
      title: "Project Collaboration",
      description: "Find team members for your projects or contribute to community-driven initiatives."
    },
    {
      icon: "📚",
      title: "Learning Resources",
      description: "Access curated learning materials, tutorials, and best practices shared by the community."
    },
    {
      icon: "🎯",
      title: "Career Opportunities",
      description: "Discover job openings, internships, and freelance opportunities in the Python ecosystem."
    },
    {
      icon: "🏆",
      title: "Recognition",
      description: "Celebrate achievements and get recognized for your contributions to the community."
    }
  ];

  const socialPlatforms = [
    {
      name: "Telegram",
      description: "Daily discussions & announcements",
      href: "https://t.me/pyindore",
      icon: <FaTelegram className="w-6 h-6" />,
      bgColor: "bg-blue-600"
    },
    {
      name: "LinkedIn",
      description: "Professional networking",
      href: "https://www.linkedin.com/company/pyindore",
      icon: <FaLinkedin className="w-6 h-6" />,
      bgColor: "bg-blue-500"
    },
    {
      name: "WhatsApp",
      description: "Quick community chat",
      href: "https://chat.whatsapp.com/pyindore",
      icon: <FaWhatsapp className="w-6 h-6" />,
      bgColor: "bg-green-500"
    },
    {
      name: "GitHub",
      description: "Open source projects",
      href: "https://github.com/pyindore",
      icon: <FaGithub className="w-6 h-6" />,
      bgColor: "bg-gray-900"
    },
    {
      name: "Meetup",
      description: "Event registration",
      href: "https://www.meetup.com/pyindore",
      icon: <FaMeetup className="w-6 h-6" />,
      bgColor: "bg-orange-500"
    }
  ];

  const testimonials = [
    // {
    //   name: "Aakash Verma",
    //   role: "Software Engineer at TCS",
    //   content: "PyIndore has been instrumental in my career growth. The community's support and regular workshops helped me transition from a beginner to a confident Python developer.",
    //   avatar: "AV"
    // },
    // {
    //   name: "Sneha Agarwal",
    //   role: "Data Scientist at Infosys",
    //   content: "The mentorship program at PyIndore connected me with amazing professionals who guided me through complex data science concepts. Highly recommend joining!",
    //   avatar: "SA"
    // },
    // {
    //   name: "Rohit Jain",
    //   role: "Freelance Developer",
    //   content: "PyIndore's project collaboration opportunities helped me build an impressive portfolio. The networking events are fantastic for meeting like-minded developers.",
    //   avatar: "RJ"
    // }
  ];

  // For demonstration, uncomment to see empty state
  // const testimonials = [];

  return (
    <section id="community" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of Indore's most active Python community. Connect, learn, and grow together 
            with passionate developers from all backgrounds.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Community Platforms */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Connect With Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {socialPlatforms.map((platform, index) => (
              <a 
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-python-blue hover:shadow-md transition-all duration-200"
              >
                <div className={`w-12 h-12 ${platform.bgColor} rounded-lg flex items-center justify-center mb-3 text-white`}>
                  {platform.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{platform.name}</h4>
                <p className="text-gray-600 text-sm text-center">{platform.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Members Say</h3>
          
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-start mb-4">
                    <FaQuoteLeft className="w-6 h-6 text-python-blue mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 italic leading-relaxed">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-python-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-lg">
              <FaUsers className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-600 mb-2">No Testimonials Yet</h4>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                We're building an amazing community! Be one of the first members to share your 
                experience and inspire others to join.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Want to share your PyIndore story?</p>
                <button className="bg-python-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Share Your Experience
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Join CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-python-blue to-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join PyIndore?</h3>
            <p className="text-blue-100 mb-6">
              Start your journey with India's most active Python community in Indore. 
              Connect with developers, learn new skills, and advance your career.
            </p>
            <button className="bg-python-yellow text-python-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200">
              Join Now - It's Free!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}