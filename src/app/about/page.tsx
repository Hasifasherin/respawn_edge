"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== HERO SECTION ===== */}
        <div className="text-center mb-14 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6">
            About <span className="text-blue-500">RespawnEdge</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">
            RespawnEdge is your ultimate gaming destination where players come
            together to experience the thrill of console gaming. Whether you're
            battling it out on PS5, competing with friends, or just enjoying a
            casual session, we provide a high-energy environment built for real gamers.
          </p>
        </div>

        {/* ===== MISSION SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-400">
              Our Mission
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Our mission is simple — create the best gaming hub experience in town.
              We aim to bring gamers together in a premium setup featuring
              high-performance consoles, immersive screens, comfortable seating,
              and an electrifying atmosphere that makes every match unforgettable.
            </p>
          </div>

          <div className="bg-blue-900/20 p-6 sm:p-8 rounded-xl border border-blue-800/40">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              What We Offer
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li>🎮 Latest PS5 & Console Gaming Setup</li>
              <li>🕹️ Multiplayer & Competitive Game Modes</li>
              <li>🏆 Weekly Tournaments & Challenges</li>
              <li>🔥 High-Speed Internet & Smooth Gameplay</li>
              <li>😎 Chill Gaming Lounge Environment</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}