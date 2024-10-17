import About from "@/components/about";
import App from "@/components/app";
import Contact from "@/components/contact";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Idea from "@/components/idea";

export default function Home() {
  return (
    <>
      <Hero />
      <App />
      <Idea />
      <About />
      <Features />
      <Contact />
    </>
  );
}
