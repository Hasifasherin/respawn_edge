import Hero from "../components/home/Hero";
import FeaturedGames from "../components/home/FeaturedGames";

export default function HomePage() {
  return (
    <main className="text-white min-h-screen overflow-x-hidden">
      <section className="pt-18 md:pt-20">
        <Hero />
      </section>

      <section className="py-12 md:py-16">
        <FeaturedGames />
      </section>
    </main>
  );
}