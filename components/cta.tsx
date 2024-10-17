import Image, { StaticImageData } from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg"; // Import the default image

interface CtaProps {
  title: string;
  backgroundImage?: StaticImageData; 
  height: number
}

export default function Cta({
  title,
  height,
  backgroundImage = BlurredShape, // Set default image
}: CtaProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={backgroundImage}
          width={760}
          height={height}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-bold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
