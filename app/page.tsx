
'use client'
import { CanvasRevealEffectDemo } from "@/components/Approach";
import SkillsWaterfallStack from "@/components/Clients";
// import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import HeroSection from "@/components/HeroSection";
import RecentProjects from "@/components/RecentProjects";
import { SparklesPreview } from "@/components/SparklesPreview";



export default function Home() {
  return (
  <div className="">
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection/>
       <Grid/>
      <RecentProjects/>
       {/* <SparklesPreview/> */}
      <SkillsWaterfallStack/>  
      <Experience/>
      <CanvasRevealEffectDemo/>
      <Footer/>
    </main>
  </div>
  );
}
