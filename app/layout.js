import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Touba Natural Food",
  description: "Welcome to our West african Store",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
