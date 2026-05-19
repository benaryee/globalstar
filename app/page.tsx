import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import About from '@/components/About'
import Services from '@/components/Services'
import Showcase from '@/components/Showcase'
import StackedCards from '@/components/StackedCards'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Showcase />
      <StackedCards />
      <WhyChooseUs />
      <Testimonials />
      {/*<Pricing />*/}
      <FAQ />
      <CTA />
      <Contact />
    </>
  )
}
