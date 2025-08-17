import { Card } from "@/components/ui/card";
import { Zap, TrendingUp, Star } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        "https://portfolio-backend-b5dh.onrender.com/api/v1/skills/getAllSkills",
        { withCredentials: true }
      );
      console.log("data", data);
      setSkills(data.data);
    };
    getMySkills();
  }, []);

  // Group skills by category for better organization
  const skillCategories = {
    frontend: skills.filter(skill => 
      ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Vue', 'Angular'].some(tech => 
        skill.title.toLowerCase().includes(tech.toLowerCase())
      )
    ),
    backend: skills.filter(skill => 
      ['Node', 'Express', 'MongoDB', 'SQL', 'Python', 'Java', 'PHP'].some(tech => 
        skill.title.toLowerCase().includes(tech.toLowerCase())
      )
    ),
    tools: skills.filter(skill => 
      ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel', 'Netlify'].some(tech => 
        skill.title.toLowerCase().includes(tech.toLowerCase())
      )
    ),
    other: skills.filter(skill => 
      !['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Vue', 'Angular', 'Node', 'Express', 'MongoDB', 'SQL', 'Python', 'Java', 'PHP', 'Git', 'Docker', 'AWS', 'Firebase', 'Vercel', 'Netlify'].some(tech => 
        skill.title.toLowerCase().includes(tech.toLowerCase())
      )
    )
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'frontend': return <Zap className="w-5 h-5" />;
      case 'backend': return <TrendingUp className="w-5 h-5" />;
      case 'tools': return <Star className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'frontend': return 'from-blue-500 to-cyan-500';
      case 'backend': return 'from-green-500 to-emerald-500';
      case 'tools': return 'from-purple-500 to-pink-500';
      default: return 'from-orange-500 to-red-500';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-bottom">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive collection of technologies and tools I've mastered through projects and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            categorySkills.length > 0 && (
              <div key={category} className="animate-slide-in-bottom">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(category)} rounded-xl flex items-center justify-center`}>
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-2xl font-bold capitalize">
                    {category === 'other' ? 'Other Skills' : `${category} Technologies`}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {categorySkills.map((skill, index) => (
                    <Card
                      key={skill._id}
                      className={`relative overflow-hidden glass-card group cursor-pointer transition-all duration-500 hover-lift ${
                        hoveredSkill === skill._id ? 'scale-110 z-10' : ''
                      }`}
                      onMouseEnter={() => setHoveredSkill(skill._id)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Skill Content */}
                      <div className="relative z-10 flex flex-col items-center gap-4 p-6 text-center">
                        {/* Skill Icon */}
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={skill.svg && skill.svg.url}
                              alt={skill.title}
                              className="w-full h-full object-contain transition-all duration-300 group-hover:rotate-12"
                            />
                          </div>
                          
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Skill Name */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                            {skill.title}
                          </h4>
                          
                          {/* Skill Level Indicator */}
                          <div className="flex items-center justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                  i < Math.floor(Math.random() * 3) + 3 
                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                                    : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
                    </Card>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center animate-slide-in-bottom">
          <div className="glass-card inline-block">
            <p className="text-lg text-muted-foreground">
              Continuously expanding my skill set with new technologies and frameworks
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Always learning and growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
