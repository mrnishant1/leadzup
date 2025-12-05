import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/context/ClientDataContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LeadZup - Personalised marketing Hub",
  description:
    "LeadZup provides inovative advertisement solution to the Brands, we work on personalsed advertisement ads modal, we monitor reddit like forums for 24x7, looking for the users that are in need of products that Brands provides we help Brands products to position them into conversation and pitch the products to user.",
  keywords: [
    "LeadZup",
    "web advertisement agency",
    "digital Marketing",
    "tech",
    "marketing",
    "marketing solutions",
    "marketing agency",
    "personalised ads",
  ],
  icons: {
    icon: "/favicon.jpg",
  },
  authors: [{ name: "Leazup.site" }],
  other: {
    "google-site-verification": "ZU59Yq-xG2Jga0ExqdDp44yBs3CtJiUNn8BqoxRp2Xc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
