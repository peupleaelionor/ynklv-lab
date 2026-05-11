import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  metadataBase: new URL('https://ynklv.com'),
  title: {
    default: 'YNKLV_ Creative Engineering Lab',
    template: '%s | YNKLV_',
  },
  description: 'Raw ideas in. Sharp systems out. Roman, systèmes, outils IA, objets et signaux nobles.',
  keywords: ['YNKLV', 'Creative Engineering Lab', 'roman', 'systems', 'AI tools', 'MABELE', 'ZAWIOS'],
  openGraph: {
    title: 'YNKLV_ Creative Engineering Lab',
    description: 'Raw ideas in. Sharp systems out.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YNKLV_ Creative Engineering Lab',
    description: 'Raw ideas in. Sharp systems out.',
  },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${space.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
