import {
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  Sparkles
} from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { motion } from "framer-motion"

/**
 * Modern + Futuristic Hero
 * - Glassmorphism + neon gradients
 * - Particle glow background
 * - 3D hover tilt for the media card
 * - Better loading, null checks, and error fallback
 * - Updated GIF path: /assets/hero/coder-loop.gif (replace with your asset)
 */

const floating = {
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
}

const glowPulse = {
  initial: { opacity: 0.4, scale: 0.95 },
  animate: {
    opacity: [0.25, 0.5, 0.25],
    scale: [0.95, 1.05, 0.95],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
  }
}

const Hero = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-b5dh.onrender.com/api/v1/user/getPortfolioUser/me",
          { withCredentials: true }
        )
        setUser(data?.user || {})
      } catch (err) {
        console.error("Failed to load user profile:", err)
        setError("Couldn't load profile – showing demo content.")
      } finally {
        setLoading(false)
      }
    }
    getMyProfile()
  }, [])

  const name = user?.name || "Abhishek Mishra"
  const instagram = user?.instagramURL || "#"
  const linkedin = user?.linkedInURL || "#"
  const twitter = user?.twitterURL || "#"
  const github = user?.gitHubURL || "#"
  const resumeUrl = user?.resume?.url

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background: gradient mesh + orbs + grid */}
      <div className="absolute inset-0 -z-10">
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,theme(colors.white)_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden
        />

        {/* gradient mesh blur patches */}
        <motion.div
          variants={glowPulse}
          initial="initial"
          animate="animate"
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-cyan-400/60 via-fuchsia-400/50 to-purple-500/50"
        />
        <motion.div
          variants={glowPulse}
          initial="initial"
          animate="animate"
          className="absolute top-40 right-10 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-emerald-400/50 via-sky-500/50 to-indigo-500/50"
          style={{ filter: "saturate(120%)" }}
        />
        <motion.div
          variants={glowPulse}
          initial="initial"
          animate="animate"
          className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full blur-3xl bg-gradient-to-r from-amber-400/40 to-rose-500/40"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "anticipate" }}
            className="space-y-8"
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-400/30 backdrop-blur rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Available for opportunities
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Hey, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                  {name}
                </span>
              </h1>

              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  <Typewriter
                    words={[
                      "FULL‑STACK DEVELOPER",
                      "CREATIVE THINKER",
                      "PROGRAMMER",
                      "FREELANCER"
                    ]}
                    loop={0}
                    cursor
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={1200}
                  />
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I craft immersive, performant web apps with clean architectures
              and delightful UX. Let&apos;s turn your ideas into reality using
              modern tech and thoughtful design.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur border border-white/15 rounded-2xl">
                <Link
                  to={instagram}
                  target="_blank"
                  className="p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-pink-500/15"
                >
                  <Instagram className="w-6 h-6 text-pink-500" />
                </Link>
                <Link
                  to={linkedin}
                  target="_blank"
                  className="p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-blue-500/15"
                >
                  <Linkedin className="w-6 h-6 text-blue-500" />
                </Link>
                <Link
                  to={twitter}
                  target="_blank"
                  className="p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-sky-500/15"
                >
                  <Twitter className="w-6 h-6 text-sky-500" />
                </Link>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={github} target="_blank">
                <Button className="group bg-gradient-to-r from-zinc-900 to-zinc-700 hover:from-zinc-800 hover:to-zinc-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)]">
                  <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View GitHub</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>

              {resumeUrl && (
                <Link to={resumeUrl} target="_blank">
                  <Button
                    variant="outline"
                    className="group border-2 border-zinc-300/60 hover:border-zinc-200 text-zinc-800 dark:text-zinc-200 px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-50/40 dark:hover:bg-zinc-800/40"
                  >
                    <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Download Resume</span>
                  </Button>
                </Link>
              )}
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-3">
              {[
                "Frontend Developer",
                "Backend Developer",
                "DSA Enthusiast"
              ].map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 rounded-full text-sm font-medium border bg-gradient-to-r from-white/5 to-white/0 border-white/20 backdrop-blur shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                >
                  {label}
                </span>
              ))}
            </div>

            {error && <p className="text-sm text-amber-500/90">{error}</p>}
          </motion.div>

          {/* Right: Media card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "anticipate" }}
            className="relative"
          >
            <motion.div
              variants={floating}
              initial="initial"
              animate="animate"
              className="relative group"
            >
              {/* Neon ring */}
              <div className="absolute -inset-4 rounded-[2rem] bg-[conic-gradient(var(--tw-gradient-stops))] from-sky-400 via-fuchsia-400 to-amber-300 opacity-60 blur-2xl group-hover:opacity-80 transition-opacity" />

              {/* Card */}
              <div className="relative p-1 rounded-[2rem] bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/25 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.4)]">
                <div className="relative overflow-hidden rounded-[1.7rem]">
                  {/* Animated radial highlight */}
                  <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_600px_at_var(--x,_70%)_var(--y,_20%),rgba(255,255,255,0.12),transparent_60%)]" />

                  {/* Updated GIF */}
                  <img
                    src="/assets/hero/coder-loop.gif"
                    alt="Coder at work animation"
                    className="block w-full max-w-xl h-auto object-cover"
                    onMouseMove={(e) => {
                      const r = e.currentTarget.parentElement
                      if (!r) return
                      const rect = r.getBoundingClientRect()
                      r.style.setProperty(
                        "--x",
                        `${((e.clientX - rect.left) / rect.width) * 100}%`
                      )
                      r.style.setProperty(
                        "--y",
                        `${((e.clientY - rect.top) / rect.height) * 100}%`
                      )
                    }}
                  />
                </div>
              </div>

              {/* Floating accents */}
              <motion.div
                className="absolute -top-5 -right-5 h-16 w-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 flex items-center justify-center"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="h-6 w-6 border-2 border-white rounded-full" />
              </motion.div>
            </motion.div>

            {/* Skeleton while loading */}
            {loading && (
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-64 w-64 animate-pulse rounded-3xl bg-white/10 border border-white/20" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
