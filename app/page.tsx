import Hero from "@/components/pages/hero"
import FeatureCards from "@/components/pages/feature-cards"

export default function Home() {
  return (
    <>
      <Hero />
      <main className="md:container">
        <FeatureCards />
      </main>
    </>
  )
}
