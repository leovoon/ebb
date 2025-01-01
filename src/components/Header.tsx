import { Eye } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="w-8 h-8 text-blue-600" />
            <span className="hidden md:inline text-xl font-bold text-gray-800">Eye Break Buddy</span>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
              <li><a href="#download" className="text-gray-600 hover:text-blue-600">Download</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}