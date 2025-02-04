import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing"
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer"

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Hero></Hero>
      <LogoTicker></LogoTicker>
      <ProductShowcase></ProductShowcase>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  );
}
