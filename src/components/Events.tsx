'use client';

import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaUser, FaCalendarAlt } from 'react-icons/fa';

// TypeScript interfaces
interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  speaker: string;
  type: string;
  image?: string;
}

interface PastEvent {
  title: string;
  date: string;
  attendees: number;
  image?: string;
}

export default function Events() {
  const upcomingEvents: UpcomingEvent[] = [
    // {
    //   id: 1,
    //   title: "Python Web Development with Django",
    //   date: "2025-01-15",
    //   time: "6:00 PM - 8:00 PM",
    //   venue: "Tech Hub Indore",
    //   description: "Learn to build robust web applications using Django framework",
    //   speaker: "Rahul Sharma",
    //   type: "Workshop",
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
    // }
  ];

  const pastEvents: PastEvent[] = [
    // {
    //   title: "Machine Learning Fundamentals",
    //   date: "2024-12-15",
    //   attendees: 85,
    // },
    // {
    //   title: "Python for Automation",
    //   date: "2024-11-20",
    //   attendees: 72,
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="events" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Events & <span className="text-python-blue">Workshops</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-dark-muted max-w-3xl mx-auto"
          >
            Join our regular meetups, workshops, and seminars to enhance your Python skills
            and connect with fellow developers.
          </motion.p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center">
            <span className="w-8 h-1 bg-python-blue rounded-full mr-4" />
            Upcoming Events
          </h3>

          {upcomingEvents.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-python-blue/50 transition-all duration-300 group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-python-blue/20 to-dark-bg flex items-center justify-center">
                    <FaCalendarAlt className="w-16 h-16 text-python-blue/30 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-python-blue text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-python-blue transition-colors">{event.title}</h4>
                    <p className="text-dark-muted mb-6 text-sm leading-relaxed line-clamp-2">{event.description}</p>

                    <div className="space-y-3 text-sm text-dark-muted/80 mb-8">
                      <div className="flex items-center">
                        <FaClock className="w-4 h-4 mr-3 text-python-blue" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="w-4 h-4 mr-3 text-python-blue" />
                        {event.venue}
                      </div>
                      <div className="flex items-center">
                        <FaUser className="w-4 h-4 mr-3 text-python-blue" />
                        {event.speaker}
                      </div>
                    </div>

                    <button className="w-full bg-python-blue hover:bg-blue-600 text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-python-blue/20">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-dark-card/50 border border-dark-border rounded-3xl">
              <FaCalendarAlt className="w-16 h-16 text-dark-muted/30 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-white mb-3">No Upcoming Events</h4>
              <p className="text-dark-muted mb-8 max-w-md mx-auto">
                We&apos;re planning exciting new events. Join our newsletter to stay updated!
              </p>
              <button className="bg-white text-dark-bg px-8 py-3 rounded-full font-bold hover:bg-python-blue hover:text-white transition-all duration-300">
                Join Newsletter
              </button>
            </div>
          )}
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center">
            <span className="w-8 h-1 bg-python-yellow rounded-full mr-4" />
            Recent Successes
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-card/30 border border-dark-border p-6 rounded-2xl hover:bg-dark-card/50 transition-colors"
              >
                <div className="text-python-yellow font-bold text-sm mb-2">{new Date(event.date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</div>
                <h4 className="font-bold text-white mb-3">{event.title}</h4>
                <div className="flex items-center text-dark-muted text-sm">
                  <FaUser className="w-3 h-3 mr-2 text-python-blue" />
                  {event.attendees} Attendees
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24 p-12 rounded-3xl bg-gradient-to-r from-python-blue/10 to-python-yellow/10 border border-white/5"
        >
          <p className="text-xl text-white font-medium mb-8">Want to speak at our next event or suggest a topic?</p>
          <button className="bg-python-yellow text-dark-bg px-10 py-4 rounded-full font-black hover:scale-105 transition-transform duration-300 shadow-xl shadow-python-yellow/10">
            Become a Speaker
          </button>
        </motion.div>
      </div>
    </section>
  );
}