import React from "react";
import {
  Ticket,
  MessageCircle,
  Volume2,
  Moon,
  Gamepad2,
  Shield,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Ticket,
      title: "Advanced Ticket System",
      description:
        "Professional support ticket management with categories, priorities, and automated workflows.",
      gradient: "from-purple-500 to-purple-600",
      glowColor: "purple-500/50",
    },
    {
      icon: MessageCircle,
      title: "Discussion Management",
      description:
        "Smart discussion threads, moderation tools, and engagement tracking for better community interaction.",
      gradient: "from-pink-500 to-pink-600",
      glowColor: "pink-500/50",
    },
    {
      icon: Volume2,
      title: "TempVoice Channels",
      description:
        "Dynamic temporary voice channels that auto-create and delete based on user activity.",
      gradient: "from-indigo-500 to-indigo-600",
      glowColor: "indigo-500/50",
    },
    {
      icon: Moon,
      title: "AFK Detection",
      description:
        "Intelligent AFK system with customizable timeouts and automatic status management.",
      gradient: "from-violet-500 to-violet-600",
      glowColor: "violet-500/50",
    },
    {
      icon: Gamepad2,
      title: "Minecraft Integration",
      description:
        "Comprehensive Minecraft commands for server stats, player info, and game mechanics.",
      gradient: "from-green-500 to-green-600",
      glowColor: "green-500/50",
    },
    {
      icon: Shield,
      title: "More Coming Soon",
      description:
        "Continuously expanding with new features, moderation tools, and community enhancements.",
      gradient: "from-cyan-500 to-cyan-600",
      glowColor: "cyan-500/50",
    },
  ];
  return (
    <section
      id="features"
      className="relative py-20 bg-gradient-to-b from-black via-purple-950/20 to-black"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to manage and enhance your Discord community
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:shadow-lg group-hover:shadow-${feature.glowColor} transition-all duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
