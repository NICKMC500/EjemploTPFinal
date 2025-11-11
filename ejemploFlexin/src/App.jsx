import React, { useEffect } from 'react'
import SiteNavbar from './components/SiteNavbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Ecology from './components/Ecology'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Stats from './components/Stats'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'


export default function App(){
// Scroll reveal básico sin dependencias
useEffect(() => {
const nodes = Array.from(document.querySelectorAll('.reveal'))
const obs = new IntersectionObserver((entries) => {
for (const e of entries) {
if (e.isIntersecting) {
e.target.classList.add('reveal-visible')
obs.unobserve(e.target)
}
}
}, { threshold: 0.15 })
nodes.forEach(n => obs.observe(n))
return () => obs.disconnect()
}, [])


return (
<>
<SiteNavbar />
<Hero />
<Features />
<Products />
<Stats />
<Ecology />
<Testimonials />
<CTA />
<Contact />
<Footer />
</>
)
}