'use client'

import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const weddingImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gaaobvQVI0MiInJiXIVoqHBU9uSRpz.png'

const services = [
  ['01', 'Weddings & celebrations', 'Romantic, personal, and beautifully paced celebrations designed around your story.'],
  ['02', 'Corporate experiences', 'Strategic gatherings, summits, and launches that make ideas feel human.'],
  ['03', 'Brand activations', 'Immersive environments that turn attention into lasting affinity.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="light-site">
      <header className="light-header">
        <a href="#top" className="light-wordmark">MOMENTUM <sup>™</sup></a>
        <nav className={menuOpen ? 'light-nav nav-open' : 'light-nav'} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Our process</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Our work</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="light-actions"><a href="#work">View our work</a><a className="dark-pill" href="#contact">Plan your event</a></div>
        <button className="light-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      </header>

      <section className="light-hero" id="top">
        <h1>Thoughtful details, beautiful moments that celebrate.</h1>
        <div className="image-stack"><div className="stack-back back-one" /><div className="stack-back back-two" /><img src={weddingImage} alt="Couple celebrating their wedding ceremony by the water" /></div>
      </section>

      <section className="light-section intro" id="process"><p className="light-kicker"><span /> Event strategy, design, and production — all in one rhythm.</p><div><h2>Events with<br /><i>feeling.</i></h2><p>From first idea to final farewell, our team brings strategy, styling, logistics, and production together so your event feels effortless.</p></div></section>

      <section className="light-section services-light" id="services"><p className="light-kicker"><span /> What we do</p><h2>Designed to be <i>remembered.</i></h2><div className="light-service-list">{services.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p><ArrowUpRight size={19} /></article>)}</div></section>

      <section className="light-section about-preview"><div><p className="light-kicker"><span /> About Momentum</p><h2>Good events<br /><i>feel easy.</i></h2></div><div><p>We are a full-service event management company for people who care about the details. Thoughtful planning, beautiful design, and calm production — all under one roof.</p><a className="outline-pill" href="/about">Meet the team <ArrowDownRight size={15} /></a></div></section>

      <section className="light-section testimonial-preview"><p className="light-kicker"><span /> Kind words</p><blockquote>“Momentum understood the feeling we wanted before we had the words for it.”</blockquote><p className="testimonial-name">— Rhea & Arjun, Goa</p><a className="text-link-dark" href="/testimonials">Read more testimonials <ArrowUpRight size={15} /></a></section>

      <section className="light-section work-light" id="work"><p className="light-kicker"><span /> Selected work</p><h2>A few things<br /><i>we&apos;ve made.</i></h2><div className="work-image"><img src={weddingImage} alt="Wedding celebration details" /></div></section>

      <section className="light-section contact-light" id="contact"><div><p className="light-kicker"><span /> Your turn</p><h2>Have a good<br /><i>feeling about this?</i></h2></div><div><p>Tell us a little about what you are planning. We will be in touch within two working days.</p><a className="dark-pill" href="mailto:hello@momentum.events">hello@momentum.events <ArrowUpRight size={15} /></a></div></section>
      <footer className="light-footer"><strong>MOMENTUM <sup>™</sup></strong><span>Creating room for meaningful moments.</span><span>New Delhi · Mumbai · Goa</span></footer>
    </main>
  )
}
