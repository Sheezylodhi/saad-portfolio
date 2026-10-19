import "./globals.css";

export const metadata = {
  title: "Syed Ghazi Raza Kazmi — Student Portfolio",
  description: "A student portfolio for Syed Ghazi Raza Kazmi, Iqra University, Karachi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
