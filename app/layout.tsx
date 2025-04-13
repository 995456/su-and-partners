export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
          <header className="flex justify-between items-center border-b pb-4">
            <h1 className="text-2xl font-bold">Su & Partners</h1>
            <nav className="space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/about" className="hover:underline">About</a>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/media" className="hover:underline">Media</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
          </header>
          {children}
          <footer className="pt-8 border-t text-sm text-gray-500">
            “Corporate law is a language of civilization. I translate it.” – Miller Jill
          </footer>
        </main>
      </body>
    </html>
  );
}
