import { JetBrains_Mono, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

const mono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
});
const sans = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});
const display = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
});

export const metadata = {
    title: 'Mustafa Mahmoud — Front-end Developer',
    description:
        'Front-end Developer specializing in React & Next.js, building high-performance, real-time web interfaces. Based in Cairo, Egypt.',
};

// Runs before paint to set the theme class, preventing a light/dark flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t!=='light';document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body
                className={`${mono.variable} ${sans.variable} ${display.variable} font-sans bg-bg text-content`}
            >
                <ThemeProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
