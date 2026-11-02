import Link from 'next/link'

const testimonials = [['“They made the impossible feel completely natural.”', 'Rhea & Arjun · Goa'], ['“Every detail felt personal, considered, and beautifully calm.”', 'Ananya & Kunal · Mumbai'], ['“Our launch felt less like an event and more like a world people wanted to stay in.”', 'Meera Shah · New Delhi']]

export default function TestimonialsPage() {
  return <main className="light-site inner-page"><nav className="inner-nav"><Link href="/">MOMENTUM <sup>™</sup></Link><Link href="/">Back home</Link></nav><section className="inner-hero"><p className="light-kicker"><span /> Testimonials</p><h1>Kind words from<br /><i>good people.</i></h1></section><section className="testimonial-list">{testimonials.map(([quote, name]) => <article key={name}><blockquote>{quote}</blockquote><p>{name}</p></article>)}</section></main>
}
