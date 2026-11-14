import SectionHeading from "@/components/SectionHeading/SectionHeading";
import CategoryCard, { type Category } from "./CategoryCard";

const categories: Category[] = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "#courses",
  },
  {
    number: "02",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
    href: "#courses",
  },
  {
    number: "03",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
    href: "#courses",
  },
  {
    number: "04",
    title: "Creative",
    description:
      "Explore new ways to communicate, create and tell stories.",
    href: "#courses",
  },
];

export default function Categories() {
  return (
    <section
      id="courses"
      aria-labelledby="categories-title"
      className="scroll-mt-20 bg-background"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-[60px] lg:px-20 lg:py-[100px]">
        <SectionHeading
          id="categories-title"
          eyebrow="Find your next skill"
          title="Learn something worth knowing."
          description="Short, practical courses designed around skills you can put to work immediately."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <CategoryCard key={category.number} {...category} />
          ))}
        </ul>
      </div>
    </section>
  );
}