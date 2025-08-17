import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  User,
  FileText
} from "lucide-react"
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

const Contact = () => {
  const [senderName, setSenderName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleMessage = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post(
        "https://portfolio-backend-b5dh.onrender.com/api/v1/message/send",
        { senderName, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      )

      toast.success(res.data.message)
      setSenderName("")
      setSubject("")
      setMessage("")
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-bottom">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start a conversation? Let's discuss your next project or
            just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities,
                exciting projects, or just having a chat about technology and
                development. Feel free to reach out!
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      mishraabhishek20725@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground text-sm">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground text-sm">
                      Chandigarh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></span>
                    <span className="relative bg-green-400 rounded-full h-3 w-3"></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400">
                      Available for Opportunities
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Open to freelance work and full-time positions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Send a Message
              </h3>

              <form onSubmit={handleMessage} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-base font-medium flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Enter your full name"
                    className="h-12 px-4 text-base border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="text-base font-medium flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this about?"
                    className="h-12 px-4 text-base border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-base font-medium flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project or just say hello..."
                    className="min-h-32 px-4 py-3 text-base border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>

              {/* Form Note */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl border border-blue-400/10">
                <p className="text-sm text-muted-foreground text-center">
                  I typically respond within 24 hours. Looking forward to
                  hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Summary */}
        <div className="mt-16 text-center animate-slide-in-bottom">
          <div className="glass-card inline-block">
            <p className="text-lg text-muted-foreground">
              Let's turn your ideas into reality together
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Always open to new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
