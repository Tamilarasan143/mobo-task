import Hero from '@/components/Hero'
import RoleCards from '@/components/RoleCards'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Services | Homelew',
  description: 'what are the Services provided in  Homelew.',
}

export default function ServicesPage() {
  return (
    <>
      <Hero heading="Our Services" />
      <RoleCards />
    </>
  )
}
