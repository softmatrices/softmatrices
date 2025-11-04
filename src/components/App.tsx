import type { ReactNode } from 'react';
import AnimatedBackground from './AnimatedBackground';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Process from './Process';
import WhyChooseUs from './WhyChooseUs';
import Contact from './Contact';
import Footer from './Footer';

interface AppProps {
  children?: ReactNode;
}

const App = ({ children }: AppProps) => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      {children}
    </div>
  );
};

export default App;
