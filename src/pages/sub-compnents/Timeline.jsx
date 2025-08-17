import { Calendar, MapPin, Award, BookOpen, GraduationCap, Briefcase, Code } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://portfolio-backend-b5dh.onrender.com/api/v1/timeline/getAll"
        );
        setTimeline(data.data || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching timeline:", err);
        setError("Failed to load timeline data");
        // Fallback to empty array if API fails
        setTimeline([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTimeline();
  }, []);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'education': return <GraduationCap className="w-8 h-8" />;
      case 'internship': return <Briefcase className="w-8 h-8" />;
      case 'fulltime': return <Code className="w-8 h-8" />;
      case 'freelance': return <Calendar className="w-8 h-8" />;
      default: return <Calendar className="w-8 h-8" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'education': return 'from-blue-500 to-cyan-500';
      case 'internship': return 'from-green-500 to-emerald-500';
      case 'fulltime': return 'from-purple-500 to-pink-500';
      case 'freelance': return 'from-orange-500 to-red-500';
      default: return 'from-orange-500 to-red-500';
    }
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case 'education': return 'Education';
      case 'internship': return 'Internship';
      case 'fulltime': return 'Full Time';
      case 'freelance': return 'Freelance';
      default: return 'Experience';
    }
  };

  if (loading) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-16"></div>
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card max-w-md mx-auto">
            <div className="text-red-500 mb-4">
              <Calendar className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Failed to Load Timeline</h3>
            <p className="text-muted-foreground">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!timeline || timeline.length === 0) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card max-w-md mx-auto">
            <div className="text-muted-foreground mb-4">
              <Calendar className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Timeline Data</h3>
            <p className="text-muted-foreground">Timeline entries will appear here once added through the dashboard.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-float blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-20 animate-float-delayed blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of my educational journey and professional growth in software development
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item._id || item.id || index}
                className={`relative flex items-start gap-8 animate-slide-in-left ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
              >
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full flex items-center justify-center shadow-lg`}>
                    {getTypeIcon(item.type)}
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full blur-xl opacity-50 animate-pulse`}></div>
                </div>

                {/* Timeline Content */}
                <div className="flex-1 group">
                  <div className="glass-card hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(item.type)}/20 text-xs rounded-full border border-current capitalize font-medium`}>
                            {getTypeLabel(item.type)}
                          </span>
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                        </div>
                        
                        {/* Location */}
                        {item.location && (
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                        )}

                        {/* Date Range */}
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <Calendar className="w-4 h-4" />
                          <span>{item.timeline?.from || item.from} - {item.timeline?.to || item.to || "Present"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    {item.description && (
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {/* Key Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skills Applied */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-sm text-foreground flex items-center gap-2 mb-2">
                          <BookOpen className="w-4 h-4" />
                          Skills Applied
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-xs rounded-full border border-blue-200 dark:border-blue-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Status Indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        (!item.timeline?.to && !item.to) || (item.timeline?.to === "Present" || item.to === "Present") ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                      }`}></span>
                      <span className="text-xs text-muted-foreground">
                        {(!item.timeline?.to && !item.to) || (item.timeline?.to === "Present" || item.to === "Present") ? 'Currently Active' : 'Completed'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block">
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>{timeline.filter(t => (!t.timeline?.to && !t.to) || (t.timeline?.to === "Present" || t.to === "Present")).length} Currently Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{timeline.length} Total Experiences</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
