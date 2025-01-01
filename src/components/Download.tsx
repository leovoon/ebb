import { Download as DownloadIcon, Smartphone, Shield } from 'lucide-react';

export function DownloadSection() {
  return (
    <section id="download" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Download Eye Break Buddy
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start taking better care of your eyes today. Download our Android app for free.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://expo.dev/artifacts/eas/oDYGGHPBy4RUVNXMPyytqx.apk"
              download="eyebb.apk"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              <DownloadIcon className="w-6 h-6" />
              Download APK
            </a>
            <div className="flex items-center gap-2 text-gray-600">
              <Smartphone className="w-5 h-5" />
              <span>Android 6.0 and above</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600 bg-white/80 p-3 rounded-lg">
              <Shield className="w-4 h-4 text-green-600 shrink-0" />
              <span>This APK is safe to install. Our app is malware-free.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}