'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import Header from "./components/Header"
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import Services from './components/Services'
import ServiceDetails from './components/ServiceDetails'
import Banners from './components/Banner'
import WorkWithUs from './components/WorkWithUs'
import Testimonials from './components/Testimonials'
// import Header from './components/Header'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
     <Banners />
     <Header />
     <HeroSection />
     <Services />
     <ServiceDetails />
     <WorkWithUs />
     <Testimonials />
    </div>
  )
}
