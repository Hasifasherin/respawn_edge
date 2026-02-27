import Link from "next/link";
import { Game } from "../../types/game";
import { Card, CardContent } from "../ui/card";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Link href="/pricing" className="group block">
      <Card
        className="
          overflow-hidden
          bg-[#0a0f2a]/80
          border border-[rgba(0,245,255,0.2)]
          backdrop-blur-xl
          transition-all duration-300
          hover:shadow-[0_0_30px_rgba(0,245,255,0.6)]
          hover:border-[rgba(0,245,255,0.6)]
          hover:-translate-y-2
        "
      >
        <CardContent className="p-0 relative">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={game.image}
              alt={game.title}
              className="
                h-48 sm:h-56 md:h-60 w-full object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />
          </div>

          {/* Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />

          {/* Title */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
            <h3 className="font-orbitron text-lg sm:text-xl text-white text-glow-neon">
              {game.title}
            </h3>
          </div>

        </CardContent>
      </Card>
    </Link>
  );
}