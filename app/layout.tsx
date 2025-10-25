import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Farcaster AI Hub",
  description: "Socialized AI for Farcaster: Co-create, share, and own AI interactions on Base.",
  openGraph: {
    title: "Farcaster AI Hub",
    description: "Socialized AI for Farcaster: Co-create, share, and own AI interactions on Base.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="coinbase">
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
