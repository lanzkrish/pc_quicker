import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import CTA from './components/cta';

export default function Home() {
  return (
    <main>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="why-choose-us"><WhyChooseUs /></section>
      <section id="faq"><FAQ /></section>
      <section id="cta"><CTA /></section>
    </main>
  );
}
