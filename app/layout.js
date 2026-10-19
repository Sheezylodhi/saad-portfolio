import "./globals.css";

export const metadata = {
  title: "Syed Saad Ahmed Shah — Student Portfolio",
  description: "A student portfolio for Syed Saad Ahmed Shah, Iqra University, Karachi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
