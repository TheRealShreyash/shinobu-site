import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Added pt-16 padding to the top of the red container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="">
          <div className="relative inline-block">
            <Image
              src="/icon.png"
              alt="logo"
              width={100}
              height={100}
              className="text-purple-400 mx-auto mb-6"
            />
            <div className="absolute inset-0 bg-purple-400 blur-xl opacity-50 animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Shinobu
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          A{" "}
          <span className="text-purple-400 font-semibold">
            robust Discord bot
          </span>{" "}
          focused on multipurpose
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Advanced ticket system, discussion management, temporary voice
          channels, AFK detection, and powerful Minecraft integration - all in
          one beautiful package.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href={
              "https://discord.com/oauth2/authorize?client_id=1398351842294890719"
            }
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 cursor-pointer">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Invite now</span>
                {/* <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" /> */}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
          <Link href={"/dashboard"}>
            <button className="group px-8 py-4 border-2 border-purple-500/50 rounded-full font-semibold text-purple-400 hover:border-purple-400 hover:text-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer">
              <span className="flex items-center space-x-2">
                {/* <Sparkles className="h-5 w-5" /> */}
                <span>Dashboard</span>
              </span>
            </button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Online & Ready
            </div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Uptime Guaranteed
            </div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              1000+
            </div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Servers Trusted
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
