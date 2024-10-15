export const metadata = {
  title: "Horizon Developers",
  description: "Full-stack development, web applications, software development, Horizon Developers",
  openGraph: {
    type: 'website',
    title: "Horizon Developers",
    description: "Full-stack development, web applications, software development, Horizon Developers",
    url: "https://horizondevelopers.co.za",
    siteName: "Horizon Developers",
    images: [
      {
        url: "https://horizondevelopers.co.za",
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
    description: "Page description",
    image: "https://horizondevelopers.co.za/image.jpg",
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

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <Workflows />
      <Testimonials />
      <Cta />
    </>
  );
}
