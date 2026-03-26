
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import HeroSection from '@/pages/homepage/hero-section'

function HomePage() {
  return (
    <div>

      <Navbar />

      <main className="flex-1">
        <HeroSection />
      </main>

      <Footer />

    </div>
  )
}

export default HomePage
