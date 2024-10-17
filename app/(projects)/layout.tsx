

import PageIllustration from "@/components/page-illustration";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex grow flex-col">
      <PageIllustration multiple />

      {children}
    </main>
  );
}