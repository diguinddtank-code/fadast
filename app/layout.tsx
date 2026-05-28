import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Fada Studio | Cuidados com Unhas de Alto Padrão em Portugal',
  description: 'Hemma & TPO free ! Não fazemos unhas, cuidamos delas. Reserve online no Fada Studio em Aveiro.',
  openGraph: {
    title: 'Fada Studio | Premium Nail Care',
    description: 'Não fazemos unhas, cuidamos delas. Reserve a sua experiência.',
    url: 'https://fadastudio.pt',
    siteName: 'Fada Studio',
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-black antialiased flex flex-col min-h-screen selection:bg-black selection:text-white" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
