import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Models from '@/components/Models'
import CTA from '@/components/CTA'
import Navbar from '@/components/Navbar'
import Marquee from '@/components/Marquee'
import StickyFeatures from '@/components/StickyFeatures'

export default function Home() {
  return (
    <div className="min-h-screen">
        {/* <Navbar /> */}
      <Hero />
      <Marquee />
      <Features />
      <Models />
      <StickyFeatures />
      <CTA />
    </div>
  )
}

