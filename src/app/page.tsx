import Sidebar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ResumePage from './components/Resume';
import PortfolioPage from './components/portfolio';
import Contact from './components/Contact';



export default function Home() {
  return (
    <main 
    className="flex">
      <Sidebar />
      <div >
        <Hero />
        <About />
        <Skills />
        <ResumePage/>
        <PortfolioPage />
       <Contact />
  
        
      </div>
    </main>
  );
}
