
'use client'
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import HeroSection from "@/components/HeroSection";
import RecentProjects from "@/components/RecentProjects";
import RecentProjects2 from "../components/ui/RecentProjects2";



export default function Home() {
  return (
  <div className="">
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection/>
      <Grid/>
      <RecentProjects/>
      <RecentProjects2/>
      <Clients/>
      <Experience/>
      <Approach/>
      <Footer/>
    </main>
  </div>
  );
}
