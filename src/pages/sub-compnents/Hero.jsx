import {
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Hero = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://portfolio-backend-b5dh.onrender.com/api/v1/user/getPortfolioUser/me",
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-8 py-8 lg:py-16">
      <div className="flex-1 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
          <span className="bg-green-400 rounded-full h-2 w-2"></span>
          <p className="text-sm font-medium">Online</p>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4">
          Hey, I&apos;m {user.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-tubeLight-effect font-bold tracking-tight mb-6">
          <Typewriter
            words={["FULLSTACK DEVELOPER", "PROGRAMMER", "FREELANCER"]}
            loop={50}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <div className="w-fit px-6 py-3 bg-slate-50 rounded-full flex gap-4 items-center justify-center mb-6">
          <Link to={user.instagramURL} target="_blank">
            <Instagram className="text-pink-500 w-8 h-8" />
          </Link>
          <Link to={user.linkedInURL} target="_blank">
            <Linkedin className="text-sky-500 w-8 h-8" />
          </Link>
          <Link to={user.twitterURL} target="_blank">
            <Twitter className="text-blue-800 w-8 h-8" />
          </Link>
        </div>
        <div className="flex gap-4 justify-center lg:justify-start mb-8">
          <Link to={user.gitHubURL} target="_blank">
            <Button className="rounded-full flex items-center gap-2 py-2 px-4 text-sm">
              <Github className="w-5 h-5" />
              <span>Github</span>
            </Button>
          </Link>
          <Link to={user.resume && user.resume.url} target="_blank">
            <Button className="rounded-full flex items-center gap-2 py-2 px-4 text-sm">
              <ExternalLink className="w-5 h-5" />
              <span>Resume</span>
            </Button>
          </Link>
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl font-medium tracking-wide leading-relaxed">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
            Frontend Developer
          </span>
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
            Backend Developer
          </span>
          <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
            DSA Enthusiast
          </span>
        </p>
      </div>
      <div className="flex-shrink-0 flex justify-center lg:justify-center lg:items-center lg:w-1/3">
        <img
          src="/giphy.gif"
          alt="Giphy"
          className="w-full max-w-md h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
