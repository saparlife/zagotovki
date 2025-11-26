import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Курс «Заготовки» | Kelin.Academy — Готовьте наперёд и упрощайте жизнь",
  description: "Научитесь готовить и замораживать еду так, чтобы собрать полноценный завтрак или ужин за 5 минут. Курс от Kelin.Academy — 2 недели интенсива, 7 модулей, 30+ рецептов.",
  keywords: "заготовки, заморозка еды, meal prep, кулинарный курс, готовка впрок, kelin academy",
  openGraph: {
    title: "Курс «Заготовки» | Kelin.Academy",
    description: "Собрать полноценный завтрак или ужин за 5 минут — реально! Научитесь замораживать готовую еду без потери вкуса.",
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
