import { games } from "../../data/games";
import GameCard from "../../components/games/GameCard";

export default function GamesPage() {
  return (
    <div className="py-24 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">
        All Games
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}