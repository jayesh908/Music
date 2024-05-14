import Featured_courses from "@/components/Featured_courses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import TestimonialsCard from "@/components/TestimonialsCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/instructors";

export default function Home() {
  return (
 <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  <h1 className="text-2xl text-center">
    Music 
  </h1>
  <Herosection/>
  <Featured_courses/>
  <WhyChooseUs/>
  <TestimonialsCard/>
  <Instructors/>
  <Footer/>
 </main>
  );
}
