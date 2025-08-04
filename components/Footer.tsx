import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, MessageCircle, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black to-purple-950/30 border-t border-purple-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-pink-900/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/icon.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="text-purple-400"
                />
                <div className="absolute inset-0 bg-purple-400 blur-md opacity-50 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shinobu
              </span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              The most robust Discord bot for community management. Built with
              love and continuously evolving to serve your server&apos;s needs.
            </p>

            <div className="flex items-center space-x-4">
              <Link
                href={
                  "https://discord.com/oauth2/authorize?client_id=1398351842294890719"
                }
              >
                <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Add to Server</span>
                    <ExternalLink className="h-4 w-4" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a
                href="#features"
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#commands"
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Commands
              </a>
              <a
                href="#roadmap"
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Roadmap
              </a>
              <Link
                href={"/docs"}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Documentation
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <div className="space-y-3">
              <Link
                href={"https://discord.gg/q4fZeFw4XF"}
                className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Discord Server</span>
              </Link>
              <Link
                href={"https://github.com/TheRealShreyash"}
                className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
              <Link
                href={"/privacy-policy"}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/tos"}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>for the Discord community</span>
            </div>

            <div className="mt-4 md:mt-0 text-gray-400 text-sm">
              © 2025 Shinobu Bot. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
