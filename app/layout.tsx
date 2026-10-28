
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wina Mahatsuna Atsmara Hanifah | Portfolio",
  description:
    "Personal portfolio of Wina Mahatsuna Atsmara Hanifah, UI/UX Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
