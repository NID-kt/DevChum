import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer src="../content.js"></script>
        <script defer src="../background.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
