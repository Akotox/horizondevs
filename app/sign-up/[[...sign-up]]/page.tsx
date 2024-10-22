export const metadata = {
  title: "Sign Up - Horizon Developers",
  description: "Join Horizon Developers today! Create an account to access exclusive content, updates, and personalized features. Sign up now to unlock your potential in full-stack web development.",
  openGraph: {
    type: 'website',
    title: "Sign Up - Horizon Developers",
    description: "Create your account with Horizon Developers and start your journey in web development.",
    url: "https://horizondevelopers.co.za/sign-up",
    siteName: "Horizon Developers",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/electro-523c1.appspot.com/o/features.png?alt=media&token=a456925b-fa96-4996-9eef-fb554800eb17", // Replace with actual image URL
        width: 800,
        height: 600,
        alt: "Sign Up at Horizon Developers",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@YourTwitterHandle', // Replace with your Twitter handle
    title: "Sign Up - Horizon Developers",
    description: "Join us today and take the first step in your web development journey.",
    image: "https://firebasestorage.googleapis.com/v0/b/electro-523c1.appspot.com/o/features.png?alt=media&token=a456925b-fa96-4996-9eef-fb554800eb17", // Replace with actual image URL
  },
  canonical: "https://horizondevelopers.co.za/sign-up",
  robots: "index, follow",
  keywords: "sign up, register, account creation, web development, Horizon Developers",
  author: "Horizon Developers",
};


import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="py-12 md:py-20">
        <SignUp />
      </div>
    </div>
  );
}
