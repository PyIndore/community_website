import { FaClock, FaMapMarkerAlt, FaUser, FaCalendarAlt } from 'react-icons/fa';

export default function Events() {
  const upcomingEvents = [
    // {
    //   id: 1,
    //   title: "Python Web Development with Django",
    //   date: "2025-01-15",
    //   time: "6:00 PM - 8:00 PM",
    //   venue: "Tech Hub Indore",
    //   description: "Learn to build robust web applications using Django framework",
    //   speaker: "Rahul Sharma",
    //   type: "Workshop",
    //   image: "/api/placeholder/400/200", // Placeholder image URL
    // },
    // {
    //   id: 2,
    //   title: "Data Science with Pandas & NumPy",
    //   date: "2025-01-28",
    //   time: "2:00 PM - 5:00 PM",
    //   venue: "IET DAVV",
    //   description: "Deep dive into data manipulation and analysis using Python libraries",
    //   speaker: "Dr. Priya Patel",
    //   type: "Seminar",
    //   image: "/api/placeholder/400/200", // Placeholder image URL
    // },
    // {
    //   id: 3,
    //   title: "PyIndore Monthly Meetup",
    //   date: "2025-02-10",
    //   time: "5:30 PM - 7:30 PM",
    //   venue: "Brilliant Convention Centre",
    //   description: "Monthly community gathering with networking and lightning talks",
    //   speaker: "Community Members",
    //   type: "Meetup",
    //   image: "/api/placeholder/400/200", // Placeholder image URL
    // }
  ];

  const pastEvents = [
    // {
    //   title: "Machine Learning Fundamentals",
    //   date: "2024-12-15",
    //   attendees: 85,
    //   image: "/api/placeholder/300/150",
    // },
    // {
    //   title: "Python for Automation",
    //   date: "2024-11-20",
    //   attendees: 72,
    //   image: "/api/placeholder/300/150",
    // },
    // {
    //   title: "Flask Web Development",
    //   date: "2024-10-25",
    //   attendees: 94,
    //   image: "/api/placeholder/300/150",
    // }
  ];

  // For demonstration, uncomment to see empty state
  // const upcomingEvents = [];
  // const pastEvents = [];

  return (
    <section id="events" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Events & Workshops
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our regular meetups, workshops, and seminars to enhance your Python skills 
            and connect with fellow developers.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Event Image */}
                  <div className="relative h-48 bg-gradient-to-r from-python-blue to-blue-600">
                    {event.image ? (
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white">
                        <FaCalendarAlt className="w-12 h-12 opacity-50" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white bg-opacity-90 text-python-blue px-3 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white bg-opacity-90 text-python-blue px-3 py-1 rounded-full text-sm font-medium">
                        {new Date(event.date).toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'short' 
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaClock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                        {event.venue}
                      </div>
                      <div className="flex items-center">
                        <FaUser className="w-4 h-4 mr-2" />
                        {event.speaker}
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 bg-python-blue text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <FaCalendarAlt className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-600 mb-2">No Upcoming Events</h4>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                We're working on planning exciting new events for our community. 
                Stay tuned for announcements!
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Want to be notified when new events are announced?</p>
                <button className="bg-python-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Join Our Newsletter
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Events</h3>
          
          {pastEvents.length > 0 ? (
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pastEvents.map((event, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    {/* Event Image */}
                    <div className="relative h-32 mb-3 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg overflow-hidden">
                      {event.image ? (
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white">
                          <FaCalendarAlt className="w-8 h-8 opacity-50" />
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {new Date(event.date).toLocaleDateString('en-IN')}
                      </p>
                      <div className="text-python-blue font-bold">
                        {event.attendees} attendees
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <FaCalendarAlt className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-600 mb-2">No Past Events Yet</h4>
              <p className="text-gray-500 max-w-md mx-auto">
                We're just getting started! Check back soon to see our event history 
                and community achievements.
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to speak at our next event or suggest a topic?</p>
          <button className="bg-python-yellow text-python-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200">
            Become a Speaker
          </button>
        </div>
      </div>
    </section>
  );
}