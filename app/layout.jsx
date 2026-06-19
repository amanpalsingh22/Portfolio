import "./globals.css";

const themeScript = `
  try {
    const savedTheme = window.localStorage.getItem("theme");
    const theme = savedTheme === "dark" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "light";
  }
`;

export const metadata = {
  title: "Amanpal Singh | Full-Stack Web Developer Portfolio",
  description:
    "Portfolio of Amanpal Singh, a full-stack web developer skilled in React, Next.js, Tailwind CSS, REST APIs, AI APIs, and real-time web applications.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "477x477" },
      { url: "/logo.png", type: "image/png", sizes: "477x477" }
    ],
    shortcut: "/icon.png",
    apple: [{ url: "/logo.png", type: "image/png", sizes: "477x477" }]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
