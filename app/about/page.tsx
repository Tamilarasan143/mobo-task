import Hero from '@/components/Hero'
import ServiceTiles from '@/components/ServiceTiles'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'About Us | Homelew',
  description: 'Learn more about Homelew and our vision to support professionals across industries.',
}

export default function AboutPage() {
  return (
    <>
      <Hero heading="About Us" />
      <ServiceTiles />
    </>
  )
}
