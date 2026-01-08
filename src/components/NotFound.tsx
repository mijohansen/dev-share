import { IconArrowLeft, IconQuestionMark } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl">
        <IconQuestionMark className="w-20 h-20 text-cyan-400 mx-auto mb-6 opacity-80" />

        <h1 className="text-4xl font-black text-white mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-200 mb-2">Page Not Found</h2>
        <p className="text-gray-400 max-w-xs mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-cyan-500/30"
        >
          <IconArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
