import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Курс «Заготовки» от Kelin.Academy — Готовь с любовью, живи без суеты",
  description: "Научись готовить наперёд и собирать полноценный ужин за 5 минут. Домашняя еда без ежедневной готовки — для тебя и твоей семьи.",
  keywords: "заготовки, заморозка еды, meal prep, кулинарный курс, готовка впрок, kelin academy, домашняя кухня",
  openGraph: {
    title: "Курс «Заготовки» — Готовь с любовью, живи без суеты",
    description: "Домашняя еда каждый день без часов у плиты. Научись замораживать готовые блюда так, чтобы никто не отличил от свежих.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${nunito.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
