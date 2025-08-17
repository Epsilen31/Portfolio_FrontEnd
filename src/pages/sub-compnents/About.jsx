/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import axios from "axios"
import {
  GraduationCap,
  Heart,
  Code,
  Coffee,
  Sparkles,
  Linkedin,
  Instagram,
  Twitter,
  Github
} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"

/**
 * Ultra‑Futuristic About Section
 * - Keeps CTAs out (handled by Hero)
 * - Aurora background + subtle grid
 * - Holographic avatar ring with sparkle
 * - Neon stat strip, premium chips, refined cards
 * - No extra dependencies beyond shadcn + lucide + axios
 */

const About = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-b5dh.onrender.com/api/v1/user/getPortfolioUser/me",
          { withCredentials: true }
        )
        setUser(data.user || {})
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    getMyProfile()
  }, [])

  const name = user?.name || "Your Name"
  const avatar = user?.avatar?.url || "/Profile.jpg"
  const about =
    user?.aboutme ||
    "I'm a full‑stack developer focused on building delightful user experiences and scalable backend services. I enjoy crafting clean UI, robust APIs, and solving complex problems."

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background: aurora beams + soft grid */}
      <div className="absolute inset-0 -z-10">
        {/* grid */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_center,theme(colors.white)_1px,transparent_1px)] [background-size:22px_22px]" />
        {/* aurora beams */}
        <div
          className="absolute -top-40 -left-20 w-[48rem] h-[48rem] blur-3xl pointer-events-none"
          style={{
            background:
              "conic-gradient(from 120deg, rgba(56,189,248,.32), rgba(192,132,252,.32), rgba(250,204,21,.28), transparent 70%)",
            maskImage:
              "radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,.8), transparent)"
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[44rem] h-[44rem] blur-3xl pointer-events-none"
          style={{
            background:
              "conic-gradient(from 260deg, rgba(16,185,129,.28), rgba(99,102,241,.32), rgba(14,165,233,.28), transparent 70%)",
            maskImage:
              "radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,.85), transparent)"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-bottom">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-400/30 rounded-full mb-6 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Available for opportunities
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            A quick look at who I am, what I build, and what I value.
          </p>
          <div className="mx-auto mt-6 h-[2px] w-48 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Profile Card */}
          <Card className="glass-card rounded-3xl animate-slide-in-left">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  {/* holographic ring */}
                  <div className="absolute -inset-2 rounded-[1.4rem] bg-[conic-gradient(var(--tw-gradient-stops))] from-sky-400 via-fuchsia-400 to-amber-300 opacity-60 blur-xl" />
                  <img
                    src={avatar}
                    alt={`${name} avatar`}
                    className="relative w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-2xl ring-1 ring-white/20 shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center shadow-md">
                    <Sparkles className="w-5 h-5 text-gray-900" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                    {name}
                  </span>
                </h3>
                <p className="text-muted-foreground mt-2">
                  Full‑Stack Developer • MERN • DSA
                </p>

                {/* Socials only (no duplicate CTAs) */}
                <div className="flex items-center gap-3 mt-6 p-3 bg-white/5 backdrop-blur border border-white/10 rounded-2xl">
                  {user?.linkedInURL && (
                    <a
                      href={user.linkedInURL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-blue-500/15"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-blue-500" />
                    </a>
                  )}
                  {user?.instagramURL && (
                    <a
                      href={user.instagramURL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-pink-500/15"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-pink-500" />
                    </a>
                  )}
                  {user?.twitterURL && (
                    <a
                      href={user.twitterURL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-sky-500/15"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5 text-sky-500" />
                    </a>
                  )}
                  {user?.gitHubURL && (
                    <a
                      href={user.gitHubURL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-zinc-500/15"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-zinc-400" />
                    </a>
                  )}
                </div>

                {/* Neon stat strip */}
                <div className="grid grid-cols-3 gap-3 mt-8 w-full">
                  {[
                    {
                      k: "5+",
                      v: "Projects",
                      c: "from-blue-500/10 to-purple-500/10"
                    },
                    {
                      k: "MERN",
                      v: "Stack",
                      c: "from-emerald-500/10 to-green-500/10"
                    },
                    {
                      k: "Open",
                      v: "to Work",
                      c: "from-yellow-500/10 to-orange-500/10"
                    }
                  ].map((s) => (
                    <div
                      key={s.v}
                      className={`rounded-2xl p-4 bg-gradient-to-br ${s.c} border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]`}
                    >
                      <p className="text-xl font-bold">{s.k}</p>
                      <p className="text-xs text-muted-foreground">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right column */}
          <div className="lg:col-span-2 space-y-8 animate-slide-in-right">
            {/* Bio */}
            <Card className="glass-card rounded-3xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Who I Am</CardTitle>
                <CardDescription>
                  A brief bio and highlights about my background and interests.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                {loading ? (
                  <div className="h-24 w-full rounded-xl bg-white/5 animate-pulse" />
                ) : (
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {about}
                  </p>
                )}

                {/* Holographic tech chips */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "TailwindCSS",
                    "C++",
                    "DSA"
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-sm font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Focus + Values grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <GraduationCap className="w-6 h-6 text-white" />,
                  title: "Education",
                  text: "Final‑year Computer Science student at Panjab University, specializing in software engineering and modern web technologies.",
                  bg: "from-blue-500 to-indigo-600"
                },
                {
                  icon: <Code className="w-6 h-6 text-white" />,
                  title: "Technical Skills",
                  text: "Proficient in the MERN stack with strong fundamentals in data structures & algorithms. Experienced in designing scalable APIs and engaging user interfaces.",
                  bg: "from-green-500 to-emerald-600"
                },
                {
                  icon: <Heart className="w-6 h-6 text-white" />,
                  title: "Interests",
                  text: "Cricket, volleyball, movies, gaming, and experimenting in the kitchen. I enjoy learning new technologies and solving real‑world problems.",
                  bg: "from-purple-500 to-fuchsia-600"
                },
                {
                  icon: <Coffee className="w-6 h-6 text-white" />,
                  title: "Work Style",
                  text: "Detail‑oriented, collaborative, and user‑focused. I value clean architecture, accessibility, and iterative improvement.",
                  bg: "from-orange-500 to-amber-600"
                }
              ].map((c) => (
                <Card
                  key={c.title}
                  className="glass-card rounded-3xl group transition-transform hover:-translate-y-1"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.bg} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      {c.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {c.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
