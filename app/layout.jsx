import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"], weight: ["700", "400"] });

export const metadata = {
  title: "Next | Sneakers",
  description: "My first next-js sneakers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  );
}
