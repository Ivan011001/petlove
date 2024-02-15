import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "700", "800"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Petlove",
    default: "Petlove",
  },
  description: "Discover everething about your little friends! Join Petlove.",
  icons: {
    icon: [
      {
        url: "/icon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
