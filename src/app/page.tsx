import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Categories from "@/components/Categories/Categories";
import FeaturedCourse from "@/components/FeaturedCourse/FeaturedCourse";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Testimonial from "@/components/Testimonial/Testimonial";
import Comunity from "@/components/Comunity/Comunity";
import Contact from "@/components/Contact/Contact";
import FinalCta from "@/components/FinalCta/FinalCta";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <Comunity />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}