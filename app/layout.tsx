import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import I18nProvider from "./I18nProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urban Crops",
  description:
    "Urban Crops to start-up zajmujący się tworzeniem miejskich farm, które dostarczają świeże i zdrowe rośliny przez cały rok. Ekologicznie, wydajnie i zawsze blisko Ciebie! 🌱🏙",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} antialiased`}>
        {/* <LanguageSwitcher /> */}
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
