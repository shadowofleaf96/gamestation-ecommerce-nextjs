import { Inter } from "next/font/google";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: '/images/favicon.ico',
  },
  title: "GameStation",
  description: "Coming Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
