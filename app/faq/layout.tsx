import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Cali Door & Window',
  description: 'Find answers to common questions about our door and window products, services, and processes.',
};

export default function FaqLayout({
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