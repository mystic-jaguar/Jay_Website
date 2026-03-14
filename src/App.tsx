import Navbar from './components/sections/Navbar';
import Scene3D from './components/3d/Scene3D';
import Hero3D from './components/sections/Hero3D';
import Projects3D from './components/sections/Projects3D';
import Skills3D from './components/sections/Skills3D';
import About3D from './components/sections/About3D';
import Contact3D from './components/sections/Contact3D';
import Footer from './components/sections/Footer';
import { Analytics } from "@vercel/analytics/react";
import './index.css';

function App() {
  return (
    <div className="bg-void text-text-primary font-sans antialiased min-h-screen">
      <Scene3D />
      <Navbar />

      {/* Scrollable Content */}
      <div className="relative z-10 w-full">
        <Hero3D />
        <Projects3D />
        <Skills3D />
        <About3D />
        <Contact3D />
        <Footer />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
