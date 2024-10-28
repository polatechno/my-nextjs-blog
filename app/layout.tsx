
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: "600"
})

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-black grid grid-cols-[1fr_min(960px,_98%)_1fr] grid-rows-[72px_minmax(calc(100vh-144px),auto)_72px] " >
        <Header />
        <main className="col-start-2" > {children} </main>
        <Footer />
      </body>
    </html>
  );
}
