import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        { props.children }
      </body>
    </html>
  )
}
