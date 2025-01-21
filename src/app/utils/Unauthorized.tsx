"use client";

import Link from "next/link";
import { useAuth } from "../context/useAuth";
import { ContextType } from "../types/ContextType";

export default function Unauthorized() {
  const { isAuthenticated }: ContextType = useAuth()!;
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-6xl font-extrabold text-red-600">403</h1>
        <h2 className="text-xl text-gray-700 mt-4">Unauthorized</h2>
        <p className="text-gray-500 mt-2">
          You do not have permission to view this page.
        </p>
        {isAuthenticated ? (
          <Link
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition duration-300"
          >
            Back to home
          </Link>
        ) : (
          <Link
            href="/login"
            className="mt-6 inline-block px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-400 transition duration-300"
          >
            Go to Login
          </Link>
        )}
      </div>
    </div>
  );
}
