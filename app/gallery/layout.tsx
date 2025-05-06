import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Cali Door & Window',
  description: 'Explore our portfolio of completed door and window projects and get inspired for your next home improvement.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 