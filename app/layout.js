import "./globals.css";

export const metadata = {
  title: "Touba Natural Food",
  description: "Welcome to our West african Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
