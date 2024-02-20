import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://petlove-seven.vercel.app/"),
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
  openGraph: {
    title: "Petlove",
    description:
      "Discover everething about your little friends! Join Petlove and find out everything related to pets around the globe!",

    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 800,
        height: 600,
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
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
