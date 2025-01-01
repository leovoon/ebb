import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DownloadSection } from './components/Download';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <DownloadSection />
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Eye Break Buddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;