"use client";

import { useState } from "react";
import { games } from "../../data/games";
import GameCard from "../../components/games/GameCard";

export default function FeaturedGames() {
  const [showAll, setShowAll] = useState(false);

  const visibleGames = showAll ? games : games.slice(0, 6);

  return (
    <section className="py-16 md:py-24 container-custom px-4 sm:px-6 lg:px-8">
      
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 md:mb-12 text-center">
        Featured Games
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {visibleGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {games.length > 6 && (
        <div className="flex justify-center mt-10 md:mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 sm:px-8 py-2 sm:py-3 
            bg-white text-black font-semibold 
            text-sm sm:text-base
            rounded-full hover:bg-gray-200 
            transition duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}