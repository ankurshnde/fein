import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fein.ankurshinde.com"),
  title: "FEIN | Financial Enterprise Intelligence Network",
  description:
    "A coordination protocol for bilateral commitment, cryptographic verification, and conditional settlement between sovereign enterprise AI agents. Designed by Ankur Shinde.",
  authors: [{ name: "Ankur Shinde", url: "https://ankurshinde.com" }],
  creator: "Ankur Shinde",
  publisher: "Ankur Shinde",
  openGraph: {
    type: "website",
    url: "https://fein.ankurshinde.com",
    title: "FEIN | Financial Enterprise Intelligence Network",
    description:
      "A coordination protocol for bilateral commitment, cryptographic verification, and conditional settlement between sovereign enterprise AI agents.",
    siteName: "FEIN",
  },
  twitter: {
    card: "summary_large_image",
    title: "FEIN | Financial Enterprise Intelligence Network",
    description:
      "A coordination protocol for bilateral commitment, cryptographic verification, and conditional settlement between sovereign enterprise AI agents.",
    creator: "@ankurshn",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Poppins:wght@300;400;500;600;700&family=Geist:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
