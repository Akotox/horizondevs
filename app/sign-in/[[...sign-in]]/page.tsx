export const metadata = {
  title: "Sign In - Horizon Developers",
  description:
    "Access your Horizon Developers account. Sign in to explore our latest resources, updates, and tools for web development. Join us in creating efficient applications!",
  openGraph: {
    type: "website",
    title: "Sign In - Horizon Developers",
    description:
      "Log in to your account at Horizon Developers and continue your journey in web development.",
    url: "https://horizondevelopers.co.za/sign-in",
    siteName: "Horizon Developers",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/electro-523c1.appspot.com/o/features.png?alt=media&token=a456925b-fa96-4996-9eef-fb554800eb17", // Replace with actual image URL
        width: 800,
        height: 600,
        alt: "Sign In at Horizon Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle", // Replace with your Twitter handle
    title: "Sign In - Horizon Developers",
    description:
      "Log in to your account and unlock resources tailored for web developers.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/electro-523c1.appspot.com/o/features.png?alt=media&token=a456925b-fa96-4996-9eef-fb554800eb17", // Replace with actual image URL
  },
  canonical: "https://horizondevelopers.co.za/sign-in",
  robots: "index, follow",
  keywords:
    "sign in, login, account access, web development, Horizon Developers",
  author: "Horizon Developers",
};

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="py-12 md:py-20">
        <SignIn />
      </div>
    </div>
  );
}
