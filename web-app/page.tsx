import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ServiceGrid />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
