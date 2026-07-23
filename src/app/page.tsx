import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge";
import CatFramework from "@/components/CatFramework";
import HowItWorks from "@/components/HowItWorks";
import Faqs from "@/components/Faqs";
import Testimonials from "@/components/Testimonials";
import EnquireForm from "@/components/EnquireForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <CatFramework />
        <HowItWorks />
        <Faqs />
        <Testimonials />
        <EnquireForm />
      </main>
      <Footer />
    </>
  );
}
