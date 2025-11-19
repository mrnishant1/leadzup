import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyReddit from "@/components/WhyReddit";
import RedditMarketingHard from "@/components/RedditMarketingHard";
import TwoWays from "@/components/TwoWays";
import Features from "@/components/Features";
import ROI from "@/components/ROI";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import CustomerQuestions from "@/components/CustomerQuestions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyReddit />
      <RedditMarketingHard />
      <TwoWays />
      <Features />
      <ROI />
      <HowItWorks />
      <Comparison />
      <CustomerQuestions />
      <Footer />
    </div>
  );
}
