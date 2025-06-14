import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/component/Navbar";
export const metadata = {
  icons: { icon: "/assets/images/favicon.png" },
  title: "Hira Moueen",
  description: "Software Engineer",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} font-sans ${mont.variable} font-mono `}
    >
      <body className=' text-textLight '>{children}</body>
    </html>
  );
}
