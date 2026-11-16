import Image from "next/image";
import Button from "@/components/Button/Button";

type Photo = {
  src: string;
  alt: string;
  left: string;
  top: string;
  width: string;
  height: string;
  position?: string;
};

const photos: Photo[] = [
  {
    src: "/images/people/waving-student.jpg",
    alt: "Student waving during an online class",
    left: "6.73%",
    top: "20.58%",
    width: "19.81%",
    height: "29.42%",
    position: "75% 50%",
  },
  {
    src: "/images/people/group-study.jpg",
    alt: "Learners and a teacher gathered around a laptop",
    left: "0%",
    top: "52.5%",
    width: "26.54%",
    height: "39.81%",
    position: "40% 50%",
  },
  {
    src: "/images/people/hoodie-student.jpg",
    alt: "Student in a hoodie reading a book",
    left: "29.62%",
    top: "5%",
    width: "19.81%",
    height: "32.69%",
    position: "55% 50%",
  },
  {
    src: "/images/people/music-lesson.jpg",
    alt: "Teacher and student singing during a music lesson",
    left: "29.62%",
    top: "40.19%",
    width: "19.81%",
    height: "33.08%",
  },
  {
    src: "/images/people/man-studying.jpg",
    alt: "Man with glasses taking notes while studying",
    left: "29.62%",
    top: "75.77%",
    width: "19.81%",
    height: "24.62%",
    position: "50% 60%",
  },
  {
    src: "/images/people/graduate.jpg",
    alt: "Graduate in a cap and gown holding a diploma",
    left: "52.5%",
    top: "6.54%",
    width: "19.81%",
    height: "26.35%",
    position: "50% 35%",
  },
  {
    src: "/images/people/home-study.jpg",
    alt: "Woman studying at a table with a laptop",
    left: "52.5%",
    top: "35.38%",
    width: "19.81%",
    height: "26.54%",
  },
  {
    src: "/images/people/video-lesson.jpg",
    alt: "Student following a video lesson on a desktop computer",
    left: "52.5%",
    top: "64.42%",
    width: "19.81%",
    height: "29.62%",
    position: "60% 50%",
  },
  {
    src: "/images/people/curly-student.jpg",
    alt: "Smiling student with curly hair holding folders",
    left: "75.38%",
    top: "16.54%",
    width: "24.62%",
    height: "39.42%",
    position: "62% 50%",
  },
  {
    src: "/images/people/hijab-student.jpg",
    alt: "Student wearing a hijab holding a coffee cup and books",
    left: "75.38%",
    top: "58.46%",
    width: "19.62%",
    height: "25.38%",
    position: "50% 30%",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-title"
      className="scroll-mt-20 bg-background"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-4 px-5 py-[60px] xl:grid-cols-[minmax(0,1fr)_530px] xl:gap-[60px] xl:px-20 xl:py-[100px]">
        {/* Texto */}
        <div>
          <p className="text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-primary">
            The people
          </p>

          <h2
            id="community-title"
            className="mt-2 max-w-[560px] font-display text-[32px] font-extrabold leading-9 tracking-[-0.8px] text-foreground md:text-5xl md:leading-[58px] md:tracking-[-1.2px]"
          >
            Meet international students &amp; teachers
          </h2>

          <p className="mt-6 max-w-[530px] text-base leading-[26px] text-muted md:mt-7 md:text-[18px] md:leading-7">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>

          <Button
            href="#contact"
            variant="outline"
            size="lg"
            className="mt-6 md:mt-8"
          >
            Explore teachers and students
          </Button>
        </div>

        {/* Colagem */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px] xl:mx-0">
          <div
            aria-hidden="true"
            className="absolute left-[3.08%] top-[1.92%] aspect-square w-[96.15%] rounded-full bg-primary-light"
          />

          {photos.map((photo) => (
            <div
              key={photo.src}
              className="absolute overflow-hidden rounded-[5px] shadow-[0_2px_8px_rgba(23,27,44,0.12)]"
              style={{
                left: photo.left,
                top: photo.top,
                width: photo.width,
                height: photo.height,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1280px) 130px, 28vw"
                className="object-cover"
                style={{ objectPosition: photo.position }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}