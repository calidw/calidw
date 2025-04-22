import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Cali Door & Window',
  description: 'View our portfolio of completed door and window installation projects. Get inspired for your own home.',
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