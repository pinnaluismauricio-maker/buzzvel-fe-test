import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Categories from "@/components/Categories/Categories";
import FeaturedCourse from "@/components/FeaturedCourse/FeaturedCourse";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedCourse />
      </main>
    </>
  );
}