import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Get in touch with the SAKEC ACM Student Chapter
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  We'd love to hear from you. Whether you have questions about our events, 
                  want to join our community, or need more information about ACM, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Shah And Anchor Kutchhi Engineering College<br />
                      W.T.Patil Marg, Chembur<br />
                      Mumbai - 400 088, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a 
                      href="mailto:acm@sakec.ac.in" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      acm@sakec.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a 
                      href="tel:+919819734910" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      +91 9819734910
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Office Hours</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-minimal p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <User size={16} />
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <Mail size={16} />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors"
                    placeholder="Enter the subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <MessageSquare size={16} />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors resize-none"
                    placeholder="Enter your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-minimal w-full flex items-center justify-center gap-2 text-lg py-4"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Find Us
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-minimal p-4 rounded-lg"
          >
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-400 text-lg">Interactive Map</p>
                <p className="text-gray-500 text-sm mt-2">
                  Shah And Anchor Kutchhi Engineering College<br />
                  W.T.Patil Marg, Chembur, Mumbai - 400 088
                </p>
                <a
                  href="https://maps.google.com/?q=Shah+And+Anchor+Kutchhi+Engineering+College+Chembur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-minimal mt-4 inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: "How can I join SAKEC ACM?",
                answer: "You can join by filling out our registration form on the Register page. Membership is open to all SAKEC students and computing professionals."
              },
              {
                question: "What are the membership fees?",
                answer: "Student membership is free for SAKEC students. Professional membership is ₹500 per year and includes additional benefits like ACM Digital Library access."
              },
              {
                question: "What events do you organize?",
                answer: "We organize workshops, seminars, hackathons, coding competitions, industry expert talks, and networking events throughout the year."
              },
              {
                question: "Can non-SAKEC students participate?",
                answer: "While membership is primarily for SAKEC students, we welcome participants from other institutions for certain events. Contact us for specific event details."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-minimal p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}