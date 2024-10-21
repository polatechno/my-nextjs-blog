
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";

const inter = Montserrat({
  subsets: ['latin'],
  weight: "600"
})

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black grid grid-cols-[1fr_min(960px,_98%)_1fr] grid-rows-[72px_minmax(calc(100vh-144px),auto)_72px] " >
        <header className="col-start-2"><p>New Header</p></header>
        <main className="col-start-2" > {children} </main>
        <footer className="col-start-2">New Footer</footer>
      </body>
    </html>
  );
}
