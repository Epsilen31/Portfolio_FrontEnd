import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        "https://portfolio-backend-b5dh.onrender.com/api/v1/project/getAllProject",
        { withCredentials: true }
      );
      console.log("project", data);
      setProjects(data.data.reverse()); // Reverse the order here
    };
    getMyProjects();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-bottom">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my creative work, technical skills, and problem-solving abilities through various projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects && 
            (viewAll ? projects : projects.slice(0, 9)).map((project, index) => (
              <div
                key={project._id}
                className="group relative animate-slide-in-bottom"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project._id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Card */}
                <div className="relative overflow-hidden rounded-2xl glass-card hover-lift">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      className="project-banner w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={project.projectBanner && project.projectBanner.url}
                      alt={project.title}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    {/* Project Info Overlay */}
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-full">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center gap-3">
                          <Link to={`/project/${project._id}`}>
                            <Button size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </Link>
                          
                          {project.githublink && (
                            <Link to={project.githublink} target="_blank">
                              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            </Link>
                          )}
                          
                          {project.deployementlink && project.deployed === "Yes" && (
                            <Link to={project.deployementlink} target="_blank">
                              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technology Stack */}
                    {project.technologyStack && project.technologyStack.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologyStack.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-xs rounded-full border border-blue-400/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologyStack.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                              +{project.technologyStack.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Project Status */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          project.deployed === "Yes" ? "bg-green-500" : "bg-yellow-500"
                        }`}></span>
                        <span className="text-xs text-muted-foreground">
                          {project.deployed === "Yes" ? "Live" : "In Development"}
                        </span>
                      </div>
                      
                      <Link to={`/project/${project._id}`}>
                        <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 group-hover:text-primary">
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
                </div>
              </div>
            ))}
        </div>

        {/* Show More/Less Button */}
        {projects && projects.length > 9 && (
          <div className="text-center animate-slide-in-bottom">
            <Button 
              onClick={() => setViewAll(!viewAll)}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>{viewAll ? "Show Less" : "Show More Projects"}</span>
              <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                viewAll ? "rotate-180" : "group-hover:translate-x-1"
              }`} />
            </Button>
          </div>
        )}

        {/* Portfolio Summary */}
        <div className="mt-16 text-center animate-slide-in-bottom">
          <div className="glass-card inline-block">
            <p className="text-lg text-muted-foreground">
              Each project represents a unique challenge and learning opportunity
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{projects?.filter(p => p.deployed === "Yes").length || 0} Live Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{projects?.length || 0} Total Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
