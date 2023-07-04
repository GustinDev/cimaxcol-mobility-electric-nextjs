import './globals.css';
import Navbar from '../components/Navbar';
import { Footer } from '@/components';

export const metadata = {
  title: 'CME - Motos Eléctricas',
  description: 'Venta de motos eléctricas en Colombia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
