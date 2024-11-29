import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h2>
        <p className="text-lg text-gray-700 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
