import "./globals.css";
import GlobalStyles from "@/styles/global";

export const metadata = {
  title: "Sofia Franek - Graphic Designer",
  description: "Graphic Designer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: "#f8efeb" }}>
      <body
        style={{
          margin: 0,
          backgroundColor: "#f8efeb",
        }}
      >
        <GlobalStyles />
        {children}
      </body>
    </html>
  );
}