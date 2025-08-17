import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Globe, Code, Eye, Star } from "lucide-react";

const ViewProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState("");
  const [gitRepoLink, setGitRepoLink] = useState("");
  const [deployed, setDeployed] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectBanner, setProjectBanner] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await axios.get(
          `https://portfolio-backend-b5dh.onrender.com/api/v1/project/getSingleProject/${id}`,
          { withCredentials: true }
        );
        console.log("res", res);
        const data = res.data.data;

        setTitle(data.title);
        setDescription(data.description || "");
        setStack(data.stack || "");
        setDeployed(data.deployed || "");
        setTechnologies(data.technologyStack || []); // Ensure technologies is always an array
        setGitRepoLink(data.githublink || ""); // Note: Changed to deployementlink
        setProjectLink(data.deployementlink || ""); // Note: Changed to deployementlink
        setProjectBanner(data.projectBanner?.url || "");
      } catch (error) {
        toast.error(error.response?.data?.message || "Error fetching project");
      }
    };
    getProject();
  }, [id]);

  const navigateTo = useNavigate();
  const handleReturnToDashboard = () => {
    navigateTo("/");
  };

  // Directly use technologies as an array
  const descriptionList = (description || "").split(".").filter(item => item.trim());
  const technologiesList = technologies;

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-12 animate-slide-in-bottom">
          <Button 
            onClick={handleReturnToDashboard}
            variant="outline"
            className="group bg-white/10 backdrop-blur-sm border border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </Button>
        </div>

        {/* Project Header */}
        <div className="text-center mb-16 animate-slide-in-bottom">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Project Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Banner */}
            <div className="animate-slide-in-left">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={projectBanner ? projectBanner : "/avatarHolder.jpg"}
                  alt="Project Banner"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay with Project Status */}
                <div className="absolute top-4 right-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    deployed === "Yes" 
                      ? 'bg-green-500/90 text-white backdrop-blur-sm' 
                      : 'bg-yellow-500/90 text-white backdrop-blur-sm'
                  }`}>
                    {deployed === "Yes" ? "Live" : "In Development"}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-blue-500" />
                  Project Overview
                </h2>
                
                {descriptionList.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Description</h3>
                    <ul className="space-y-3">
                      {descriptionList.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">
                            {item.trim()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technology Stack */}
                {technologiesList.length > 0 && (
                  <div className="mt-8 space-y-4">
                    <h3 className="text-lg font-semibold text-primary flex items-center gap-3">
                      <Code className="w-5 h-5" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {technologiesList.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-400/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stack Information */}
                {stack && (
                  <div className="mt-8 space-y-4">
                    <h3 className="text-lg font-semibold text-primary flex items-center gap-3">
                      <Tag className="w-5 h-5" />
                      Tech Stack
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {stack}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Project Links */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 gradient-text">Project Links</h3>
              <div className="space-y-4">
                {gitRepoLink && (
                  <Link to={gitRepoLink} target="_blank">
                    <Button className="w-full group bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                      <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      View Source Code
                    </Button>
                  </Link>
                )}
                
                {deployed === "Yes" && projectLink && (
                  <Link to={projectLink} target="_blank">
                    <Button className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                      <Globe className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      Live Demo
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 gradient-text">Project Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/20">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    <p className="text-sm text-muted-foreground">
                      {deployed === "Yes" ? "Live & Active" : "Under Development"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                  <Star className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">Type</p>
                    <p className="text-sm text-muted-foreground">
                      {stack.includes('Full Stack') ? 'Full Stack' : 'Web Application'}
                    </p>
                  </div>
                </div>

                {technologiesList.length > 0 && (
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                    <Code className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm font-medium">Technologies</p>
                      <p className="text-sm text-muted-foreground">
                        {technologiesList.length} technologies used
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="glass-card p-6 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-400/20">
              <h3 className="text-xl font-bold mb-4 gradient-text">Interested?</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Like what you see? Let's discuss how we can work together on your next project.
              </p>
              <Link to="/#contact">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProject;
