// app/layout.tsx
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>JRMT Website</title>
      </head>
      <body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0' }}>
        {/* Navigation Bar */}
        <nav style={{ backgroundColor: '#333', padding: '10px' }}>
          <Link href="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
          <Link href="/about" style={{ color: 'white', marginRight: '10px' }}>About</Link>
          <Link href="/contest" style={{ color: 'white', marginRight: '10px' }}>Contest</Link>
          <Link href="/schedule" style={{ color: 'white', marginRight: '10px' }}>Schedule</Link>
          <Link href="/registration" style={{ color: 'white', marginRight: '10px' }}>Registration</Link>
        </nav>

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
