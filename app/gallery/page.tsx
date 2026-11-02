import Link from 'next/link'

const moments = [
  {
    title: 'A garden, just after the rain',
    type: 'Wedding · Goa',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85',
    alt: 'Couple sharing a quiet moment beneath a floral wedding arch',
    className: 'gallery-photo-tall',
  },
  {
    title: 'Dinner under the old trees',
    type: 'Private celebration · Jaipur',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85',
    alt: 'Long candlelit dinner table prepared for an outdoor celebration',
    className: '',
  },
  {
    title: 'A room full of possibility',
    type: 'Brand experience · Mumbai',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85',
    alt: 'Guests gather beneath warm lights at a thoughtfully designed event',
    className: '',
  },
  {
    title: 'The first look, the first light',
    type: 'Wedding · Udaipur',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1400&q=85',
    alt: 'Newlyweds celebrating together outdoors',
    className: 'gallery-photo-tall',
  },
  {
    title: 'Small details, long memories',
    type: 'Wedding · New Delhi',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=85',
    alt: 'Elegant floral table setting with candles and place settings',
    className: '',
  },
  {
    title: 'A reason to stay a little longer',
    type: 'Company gathering · Mumbai',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85',
    alt: 'Friends and guests enjoying an evening celebration together',
    className: '',
  },
]

export default function GalleryPage() {
  return (
    <main className="light-site inner-page">
      <nav className="inner-nav" aria-label="Page navigation">
        <Link href="/">MOMENTUM <sup>™</sup></Link>
        <div className="inner-nav-links"><Link href="/work">Our work</Link><Link href="/about">About</Link><Link href="/">Home</Link></div>
      </nav>
      <section className="inner-hero gallery-hero">
        <p className="light-kicker"><span /> The gallery</p>
        <h1>Little glimpses<br />of <i>big feelings.</i></h1>
        <p>A collection of celebrations, gatherings, and in-between moments we still think about.</p>
      </section>
      <section className="gallery-grid" aria-label="Event photography">
        {moments.map((moment, index) => (
          <figure className={`gallery-item ${moment.className}`} key={moment.title}>
            <img src={moment.image} alt={moment.alt} loading={index < 2 ? 'eager' : 'lazy'} />
            <figcaption><span>{moment.title}</span><span>{moment.type}</span></figcaption>
          </figure>
        ))}
      </section>
      <section className="gallery-end"><p className="light-kicker"><span /> A moment of your own</p><h2>Let&apos;s make something<br /><i>worth remembering.</i></h2><Link className="dark-pill" href="mailto:hello@momentum.events">Tell us what you&apos;re planning</Link></section>
    </main>
  )
}
