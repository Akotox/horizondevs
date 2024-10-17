export const metadata = {
  title: "Horizon Developers",
  description: "Horizon Developers: Specializing in full-stack web development and custom software solutions, we create efficient, user-friendly web applications tailored to your needs. Partner with us to turn your ideas into reality!",
  openGraph: {
    type: 'website',
    title: "Horizon Developers",
    description: "Full-stack development, web applications, software development, Horizon Developers",
    url: "https://horizondevelopers.co.za",
    siteName: "Horizon Developers",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/electro-523c1.appspot.com/o/features.png?alt=media&token=a456925b-fa96-4996-9eef-fb554800eb17",
        width: 800,
        height: 600,
        alt: "Description of the image",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@YourTwitterHandle',
    title: "Horizon Developers",
    description: "Horizon Developers: Specializing in full-stack web development and custom software solutions, we create efficient, user-friendly web applications tailored to your needs. Partner with us to turn your ideas into reality!",
    image: "https://firebasestorage.googleapis.com/v0/b/electro-523c1.appspot.com/o/features.png?alt=media&token=a456925b-fa96-4996-9eef-fb554800eb17",
  },
  canonical: "https://horizondevelopers.co.za",
  robots: "index, follow",
  keywords: "Full-stack development, web applications, software development, Horizon Developers",
  author: "Horizon Developers",
};


import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import ContactUs from "@/components/contactus";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <Workflows />
      <Testimonials />
      <Cta  title="Reach out to discover tailored solutions that meet your needs and drive success." height={468}/>
      <ContactUs />
    </>
  );
}
