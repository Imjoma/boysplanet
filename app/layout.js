import "./globals.css";
import Navbar from "./components/Navigation/Navbar";
import MobileMenu from "./components/Navigation/MobileMenu";
import LaptopMenu from "./components/Navigation/LaptopMenu";

//self hosting fonts
import localFont from "@next/font/local";
const azonix = localFont({
  src: "../public/assets/fonts/Azonix.otf",
});

// nextjs13 metadata
export const metadata = {
  title: "BoysPlanet",
  description:
    "5th Generation KPOP Boy Group Debut Project. Global Fan made KPOP Idol Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={azonix.className}>
      <body className="relative max-w-4xl mx-auto bg-[#120A30] lg:max-w-3xl">
        <Navbar />
        <LaptopMenu />
        {children}
        <MobileMenu />
      </body>
    </html>
  );
}
