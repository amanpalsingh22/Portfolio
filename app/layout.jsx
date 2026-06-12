import "./globals.css";

export const metadata = {
  title: "Amanpal Singh | Full-Stack Web Developer Portfolio",
  description:
    "Portfolio of Amanpal Singh, a full-stack web developer skilled in React, Next.js, Tailwind CSS, REST APIs, AI APIs, and real-time web applications.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo.svg", type: "image/svg+xml" }
    ],
    shortcut: "/icon.svg",
    apple: "/logo.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
