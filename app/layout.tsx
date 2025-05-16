import './globals.css';

export const metadata = {
  title: 'Choose Your News',
  description: 'Your custom AI-powered newsletter',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}