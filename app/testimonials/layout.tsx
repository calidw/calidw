import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Cali Door & Window',
  description: 'Read reviews and feedback from satisfied Cali Door & Window customers.',
};

export default function TestimonialsLayout({
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