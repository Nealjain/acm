import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">SAKEC ACM</h3>
            <p className="text-gray-300 leading-relaxed">
              Innovation begins here. Join the SAKEC ACM Student Chapter and be part of the world's largest computing society.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/why-join" className="text-gray-300 hover:text-white transition-colors">
                  Why Join Us
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://www.acm.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  ACM International
                </a>
              </li>
              <li>
                <a href="https://sakec.ac.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  SAKEC Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm leading-relaxed">
                  Shah And Anchor Kutchhi Engineering College<br />
                  W.T.Patil Marg, Chembur<br />
                  Mumbai - 400 088
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:acm@sakec.ac.in" className="text-gray-300 hover:text-white transition-colors text-sm">
                  acm@sakec.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+919819734910" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 9819734910
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 SAKEC ACM Student Chapter. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}