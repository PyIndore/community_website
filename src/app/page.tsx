import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Community from '@/components/Community';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Hero />
      <About />
      <Events />
      <Community />
      <Contact />
      <Footer />
    </main>
  );
}