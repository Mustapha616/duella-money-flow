import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import Waitlist from "@/components/Waitlist";
import AppStores from "@/components/AppStores";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <AppShowcase />
      <Waitlist />
      <AppStores />
      <Footer />
    </main>
  );
};

export default Index;
