import { Card } from "@/components/ui/card";
import { Smartphone, Monitor, Globe, Zap, Download, Star } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

const MyApps = () => {
  const [apps, setApps] = useState([]);
  const [hoveredApp, setHoveredApp] = useState(null);

  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        "https://portfolio-backend-b5dh.onrender.com/api/v1/softwareApplication/getAll",
        { withCredentials: true }
      );
      setApps(data.data);
    };
    getMyApps();
  }, []);

  // Categorize apps by type
  const appCategories = {
    mobile: apps.filter(app => 
      ['mobile', 'app', 'ios', 'android', 'react native', 'flutter'].some(tech => 
        app.name.toLowerCase().includes(tech.toLowerCase())
      )
    ),
    web: apps.filter(app => 
      ['web', 'website', 'portal', 'dashboard'].some(tech => 
        app.name.toLowerCase().includes(tech.toLowerCase())
      )
    ),
    desktop: apps.filter(app => 
      ['desktop', 'windows', 'mac', 'linux', 'electron'].some(tech => 
        app.name.toLowerCase().includes(tech.toLowerCase())
      )
    ),
    other: apps.filter(app => 
      !['mobile', 'app', 'ios', 'android', 'react native', 'flutter', 'web', 'website', 'portal', 'dashboard', 'desktop', 'windows', 'mac', 'linux', 'electron'].some(tech => 
        app.name.toLowerCase().includes(tech.toLowerCase())
      )
    )
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      case 'web': return <Globe className="w-5 h-5" />;
      case 'desktop': return <Monitor className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'mobile': return 'from-green-500 to-emerald-500';
      case 'web': return 'from-blue-500 to-cyan-500';
      case 'desktop': return 'from-purple-500 to-pink-500';
      default: return 'from-orange-500 to-red-500';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-bottom">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Applications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of software applications I've developed across different platforms and technologies
          </p>
        </div>

        {/* Apps by Category */}
        <div className="space-y-16">
          {Object.entries(appCategories).map(([category, categoryApps]) => (
            categoryApps.length > 0 && (
              <div key={category} className="animate-slide-in-bottom">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(category)} rounded-xl flex items-center justify-center shadow-lg`}>
                    {getCategoryIcon(category)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold capitalize">
                      {category === 'other' ? 'Other Applications' : `${category} Applications`}
                    </h3>
                    <p className="text-muted-foreground">
                      {categoryApps.length} {categoryApps.length === 1 ? 'application' : 'applications'}
                    </p>
                  </div>
                </div>

                {/* Apps Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {categoryApps.map((app, index) => (
                    <Card
                      key={app._id}
                      className={`relative overflow-hidden glass-card group cursor-pointer transition-all duration-500 hover-lift ${
                        hoveredApp === app._id ? 'scale-110 z-10' : ''
                      }`}
                      onMouseEnter={() => setHoveredApp(app._id)}
                      onMouseLeave={() => setHoveredApp(null)}
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* App Content */}
                      <div className="relative z-10 flex flex-col items-center gap-4 p-6 text-center">
                        {/* App Icon */}
                        <div className="relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <img
                              src={app.svg && app.svg.url}
                              alt={app.name}
                              className="w-full h-full object-contain transition-all duration-300 group-hover:rotate-12"
                            />
                          </div>
                          
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Download Badge */}
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Download className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* App Name */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {app.name}
                          </h4>
                          
                          {/* App Rating */}
                          <div className="flex items-center justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(Math.random() * 3) + 3 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* App Type Badge */}
                        <div className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-xs rounded-full border border-blue-400/20 capitalize">
                          {category}
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

        {/* Apps Summary */}
        <div className="mt-16 text-center animate-slide-in-bottom">
          <div className="glass-card inline-block">
            <p className="text-lg text-muted-foreground">
              Cross-platform development expertise across mobile, web, and desktop applications
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{apps?.length || 0} Total Applications</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{Object.keys(appCategories).filter(cat => appCategories[cat].length > 0).length} Categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyApps;
