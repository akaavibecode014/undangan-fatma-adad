import "./globals.css";

export const metadata = {
  title: "The Wedding of Fatma & Adad — You Are Invited",
  description:
    "With great joy and love, we invite you to celebrate the union of Fatma & Adad. Join us on this beautiful journey of love.",
  keywords: ["wedding", "invitation", "Fatma", "Adad", "digital invitation"],
  authors: [{ name: "Wedding of F & A" }],
  openGraph: {
    title: "The Wedding of Fatma & Adad",
    description:
      "You are cordially invited to celebrate the union of Fatma & Adad. Open the invitation to see the details.",
    type: "website",
    locale: "id_ID",
    siteName: "The Wedding of Fatma & Adad",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Wedding of Fatma & Adad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wedding of Fatma & Adad",
    description:
      "You are cordially invited to celebrate the union of Fatma & Adad.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FFFDF7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-ivory antialiased">{children}</body>
    </html>
  );
}
