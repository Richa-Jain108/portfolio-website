import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Richa Jain | Data Analyst",
    template: "%s | Richa Jain",
  },
  description:
    "Portfolio of Richa Jain showcasing expertise in Data Analytics, SQL, Python, Tableau, Statistics, Data Visualization, and Business Analytics.",
  keywords: [
    "Richa Jain",
    "Data Analyst",
    "SQL",
    "Python",
    "Tableau",
    "Excel",
    "Statistics",
    "Data Visualization",
    "Business Analytics",
    "Portfolio",
  ],
  authors: [{ name: "Richa Jain" }],
  openGraph: {
    title: "Richa Jain | Data Analyst",
    description:
      "Portfolio of Richa Jain showcasing expertise in Data Analytics, SQL, Python, Tableau, Statistics, Data Visualization, and Business Analytics.",
    url: "https://portfolio-richa-jain.vercel.app",
    siteName: "Richa Jain Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richa Jain | Data Analyst",
    description:
      "Portfolio of Richa Jain showcasing expertise in Data Analytics, SQL, Python, Tableau, Statistics, Data Visualization, and Business Analytics.",
    creator: "@richajain108",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#121212] text-white`}>
        {children}
      </body>
    </html>
  );
}
