import {
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail
} from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h3 className="text-2xl font-bold gradient-text">
                  Abhishek Mishra
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Full-stack developer passionate about creating innovative
                digital experiences and building scalable solutions for the
                modern web.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Link to="https://github.com" target="_blank" className="group">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                </Link>
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  className="group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                </Link>
                <Link
                  to="https://twitter.com"
                  target="_blank"
                  className="group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Twitter className="w-5 h-5 text-white" />
                  </div>
                </Link>
                <Link
                  to="https://instagram.com"
                  target="_blank"
                  className="group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-3">
                <Link
                  to="/"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/#about"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  to="/#skills"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Skills
                </Link>
                <Link
                  to="/#projects"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Projects
                </Link>
                <Link
                  to="/#contact"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>mishraabhishek20725@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium">Stay Updated</h5>
                <p className="text-xs text-muted-foreground">
                  Get notified about new projects and opportunities
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>
                © {new Date().getFullYear()} Abhishek Mishra. Made with
              </span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in India</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link
                to="/privacy"
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <span>v1.0.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

export default Footer
