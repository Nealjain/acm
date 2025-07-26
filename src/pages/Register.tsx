import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Mail, Phone, GraduationCap, Calendar, FileText } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    studentId: '',
    year: '',
    branch: '',
    membershipType: 'student',
    interests: '',
    experience: '',
    motivation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully! We will contact you soon.');
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
            Register
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Join the SAKEC ACM community and start your journey in computing excellence
          </motion.p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card-minimal p-8 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <User size={24} />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Mail size={24} />
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
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
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <GraduationCap size={24} />
                  Academic Information
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="studentId" className="block text-sm font-medium mb-2">
                      Student ID *
                    </label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors"
                      placeholder="Enter your student ID"
                    />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium mb-2">
                      Year of Study *
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors"
                    >
                      <option value="">Select Year</option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Fourth Year</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="branch" className="block text-sm font-medium mb-2">
                      Branch *
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors"
                    >
                      <option value="">Select Branch</option>
                      <option value="computer">Computer Engineering</option>
                      <option value="it">Information Technology</option>
                      <option value="electronics">Electronics Engineering</option>
                      <option value="mechanical">Mechanical Engineering</option>
                      <option value="civil">Civil Engineering</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Membership Type */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Calendar size={24} />
                  Membership Type
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <label className="flex items-center p-4 border border-white/20 rounded-lg cursor-pointer hover:border-white/40 transition-colors">
                    <input
                      type="radio"
                      name="membershipType"
                      value="student"
                      checked={formData.membershipType === 'student'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-semibold">Student Membership</div>
                      <div className="text-sm text-gray-400">Free - Access to all chapter events</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-white/20 rounded-lg cursor-pointer hover:border-white/40 transition-colors">
                    <input
                      type="radio"
                      name="membershipType"
                      value="professional"
                      checked={formData.membershipType === 'professional'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-semibold">Professional Membership</div>
                      <div className="text-sm text-gray-400">₹500/year - Additional benefits included</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <FileText size={24} />
                  Additional Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium mb-2">
                      Areas of Interest
                    </label>
                    <input
                      type="text"
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors"
                      placeholder="e.g., Web Development, AI/ML, Cybersecurity, Mobile Development"
                    />
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium mb-2">
                      Programming Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors"
                    >
                      <option value="">Select Experience Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium mb-2">
                      Why do you want to join SAKEC ACM?
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your motivation to join our community..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="btn-minimal text-lg px-12 py-4"
                >
                  Submit Registration
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Need Help?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            If you have any questions about the registration process or membership, feel free to contact us.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="mailto:acm@sakec.ac.in" className="btn-minimal text-lg">
              Email Us
            </a>
            <a href="/contact" className="btn-minimal text-lg">
              Contact Page
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}