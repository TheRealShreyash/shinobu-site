import { Navbar, Hero, Features, Commands, Footer } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Features />
      <Commands />
      <Footer />
    </div>
  );
}
