import Navbar from './components/sections/Navbar';
import CyberBackground from './components/sections/CyberBackground';
import Hero from './components/sections/Hero';
import ProjectsShowcase from './components/sections/ProjectsShowcase';
import AboutContact from './components/sections/AboutContact';
import './index.css';

function App() {
  return (
    <div className="bg-cyber-void text-hud-text font-sans antialiased min-h-screen">
      <CyberBackground />
      <Navbar />

      {/* Scrollable Content */}
      <div className="relative z-10 w-full">
        <Hero />
        <ProjectsShowcase />
        <AboutContact />
      </div>
    </div>
  );
}

export default App;
