import "./globals.css";

export const metadata = {
  title: "Amanpal Singh | Full-Stack Web Developer Portfolio",
  description:
    "Portfolio of Amanpal Singh, a full-stack web developer skilled in React, Next.js, Tailwind CSS, REST APIs, AI APIs, and real-time web applications."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
