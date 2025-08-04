import React from "react";
import Link from "next/link";
import { Terminal, Zap, Code, Sparkles, Gamepad2, Shield } from "lucide-react";

const Commands = () => {
  const commandCategories = [
    {
      title: "Minecraft Commands",
      icon: Gamepad2,
      commands: [
        {
          name: "/minecraft server <ip> <type>",
          description:
            "Get server status and player count (type: bedrock or java)",
        },
        {
          name: "/minecraft skin <player>",
          description: "Display player skin and avatar",
        },
      ],
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Moderation",
      icon: Shield,
      commands: [
        { name: "/ticket setup", description: "Configure ticket plugin" },
        {
          name: "/tempvoice setup",
          description: "Configure temporary voice plugin",
        },
        { name: "/afk set <reason>", description: "Set AFK" },
        {
          name: "/discussion setup",
          description: "Configure discussion plugin",
        },
        {
          name: "/config view",
          description: "Shows the plugin config of the server.",
        },
      ],
      gradient: "from-purple-400 to-violet-500",
    },
    {
      title: "Utility",
      icon: Zap,
      commands: [
        // {
        //   name: "/info server",
        //   description: "Display server information and stats",
        // },
        // {
        //   name: "/info user <@user>",
        //   description: "Get detailed user information",
        // },
        // {
        //   name: "/settings view",
        //   description: "View current bot configuration",
        // },
        // {
        //   name: "/help <command>",
        //   description: "Get help for specific commands",
        // },
      ],
      gradient: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section
      id="commands"
      className="relative py-20 bg-gradient-to-b from-black via-gray-900/50 to-black"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-pink-900/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
            <Terminal className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Command Library
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover all the powerful commands Shinobu has to offer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {commandCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${category.gradient} rounded-xl mb-6`}
                >
                  <category.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.commands.map((command, cmdIndex) => (
                    <div key={cmdIndex} className="group/cmd">
                      <div className="flex items-start space-x-3">
                        <Code className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-mono text-purple-300 text-sm group-hover/cmd:text-purple-200 transition-colors duration-200">
                            {command.name}
                          </div>
                          <div className="text-gray-400 text-sm mt-1 group-hover/cmd:text-gray-300 transition-colors duration-200">
                            {command.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href={"/docs"}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 cursor-pointer">
              <span className="relative z-10 flex items-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span>View All Commands</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Commands;
