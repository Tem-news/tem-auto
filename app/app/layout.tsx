import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tem-Auto',
  description: 'Auto tirgus platforma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv">
      <script src="https://cdn.tailwindcss.com"></script>
      <body>{children}</body>
    </html>
  );
}
