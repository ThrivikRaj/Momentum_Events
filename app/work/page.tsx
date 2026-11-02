import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'A day that felt like them',
    category: 'Wedding · Goa',
    description: 'A coastal celebration built around unhurried afternoons, family recipes, and the light just before sunset.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85',
    alt: 'Newlyweds celebrating beneath a floral ceremony arch',
  },
  {
    number: '02',
    name: 'A gathering with a point of view',
    category: 'Brand experience · Mumbai',
    description: 'A launch that brought a new collection to life through considered spaces, tactile details, and good conversation.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=85',
    alt: 'A warmly lit brand event with guests gathered in the space',
  },
  {
    number: '03',
    name: 'One long table, everyone together',
    category: 'Private celebration · Jaipur',
    description: 'An evening of flowers, candlelight, and a dinner that made a milestone feel entirely personal.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=85',
    alt: 'A beautifully set long table ready for an outdoor dinner celebration',
  },
]

export default function WorkPage() {
  return (
    <main className="light-site inner-page">
      <nav className="inner-nav" aria-label="Page navigation">
        <Link href="/">MOMENTUM <sup>™</sup></Link>
        <div className="inner-nav-links"><Link href="/gallery">Gallery</Link><Link href="/about">About</Link><Link href="/">Home</Link></div>
      </nav>
      <section className="inner-hero work-hero">
        <p className="light-kicker"><span /> Selected work</p>
        <h1>Made with care.<br /><i>Remembered for good.</i></h1>
        <p>Every gathering starts with people and a feeling. Here are a few stories that stayed with us.</p>
      </section>
      <section className="project-list" aria-label="Selected event projects">
        {projects.map((project, index) => (
          <article className="project-item" key={project.number}>
            <div className="project-image"><img src={project.image} alt={project.alt} loading={index === 0 ? 'eager' : 'lazy'} /></div>
            <div className="project-copy">
              <span className="project-number">{project.number} / 03</span>
              <p className="light-kicker"><span /> {project.category}</p>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <Link href="/gallery" aria-label={`View gallery for ${project.name}`}><ArrowUpRight size={18} /></Link>
            </div>
          </article>
        ))}
      </section>
      <section className="work-end"><p className="light-kicker"><span /> What could we make together?</p><h2>Your story belongs<br />in <i>the next chapter.</i></h2><Link className="dark-pill" href="mailto:hello@momentum.events">Start a conversation <ArrowUpRight size={15} /></Link></section>
    </main>
  )
}
