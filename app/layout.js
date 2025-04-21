import "./globals.css";

export const metadata = {
  title: "CodeStash",
  description: " A minimalist code snippet manager ",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
