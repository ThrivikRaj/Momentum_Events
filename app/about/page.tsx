import Link from 'next/link'

const team = [
  { name: 'Aanya Mehra', role: 'Creative Director', focus: 'Concepts, visual direction, guest experience', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85' },
  { name: 'Kabir Sethi', role: 'Head of Production', focus: 'Technical production, staging, show flow', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85' },
  { name: 'Mira Kapoor', role: 'Lead Wedding Planner', focus: 'Guest journeys, vendor coordination, timelines', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85' },
  { name: 'Rohan Bedi', role: 'Experiential Producer', focus: 'Brand activations, launches, audience moments', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85' },
  { name: 'Leela Nair', role: 'Design & Styling Lead', focus: 'Floral direction, tablescapes, spatial styling', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85' },
  { name: 'Dev Malhotra', role: 'Operations Manager', focus: 'Budgets, logistics, supplier partnerships', image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=900&q=85' },
]

export default function AboutPage() {
  return (
    <main className="light-site inner-page">
      <nav className="inner-nav" aria-label="Page navigation">
        <Link href="/">MOMENTUM <sup>™</sup></Link>
        <div className="inner-nav-links"><Link href="/work">Our work</Link><Link href="/gallery">Gallery</Link><Link href="/">Home</Link></div>
      </nav>
      <section className="inner-hero about-hero">
        <p className="light-kicker"><span /> About Momentum</p>
        <h1>We make room for<br /><i>meaningful moments.</i></h1>
        <p>Momentum is an event management studio for celebrations, experiences, and gatherings with something real at their center.</p>
      </section>
      <section className="about-story">
        <div className="about-story-image">
          <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=85" alt="A softly lit celebration space prepared with flowers and thoughtful details" />
        </div>
        <div className="about-story-copy">
          <p className="light-kicker"><span /> The way we see it</p>
          <h2>Strategy with<br /><i>soul.</i></h2>
          <p>The best events are felt before they are understood. They make people feel welcome, make a story tangible, and leave room for the unexpected moments that become the ones everyone remembers.</p>
          <p>We bring creative direction, styling, logistics, and production together, so every decision has a reason and every detail feels like it belongs.</p>
        </div>
      </section>
      <section className="about-team">
        <div className="about-team-heading">
          <div>
            <p className="light-kicker"><span /> The people behind it</p>
            <h2>Good people.<br /><i>Good energy.</i></h2>
          </div>
          <p>Planners, makers, and calm heads who bring all the moving parts together with care.</p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <article className="team-member" key={member.name}>
              <img src={member.image} alt={`${member.name}, ${member.role}`} loading={index < 2 ? 'eager' : 'lazy'} />
              <div className="team-member-title"><h3>{member.name}</h3><span>{member.role}</span></div>
              <p><span>Focus</span>{member.focus}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-principles">
        <p className="light-kicker"><span /> What guides us</p>
        <div className="principle-list">
          <article><span>01</span><h3>Start with listening</h3><p>Your people, your place, your reason to gather. The plan begins there.</p></article>
          <article><span>02</span><h3>Make every detail count</h3><p>Beauty matters most when it feels natural, thoughtful, and true to you.</p></article>
          <article><span>03</span><h3>Leave room for the moment</h3><p>Good preparation makes it easier to be present when the day arrives.</p></article>
        </div>
      </section>
      <section className="about-contact"><p className="light-kicker"><span /> A good place to begin</p><h2>Tell us what<br /><i>you have in mind.</i></h2><Link className="dark-pill" href="mailto:hello@momentum.events">hello@momentum.events</Link></section>
    </main>
  )
}
