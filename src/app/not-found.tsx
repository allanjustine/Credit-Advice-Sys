"use client";

import Link from "next/link";
import { useAuth } from "./context/useAuth";
import { ContextType } from "./types/ContextType";

export default function NotFound() {
  const { isAuthenticated }: ContextType = useAuth()!;
  return (
    <section className="bg-white dark:bg-gray-900 h-screen items-center flex justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link
            href={isAuthenticated ? "/credit-advice" : "/login"}
            className="inline-flex text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            <i className="far fa-arrow-left mr-2 mt-0.5" /> Back to{" "}
            {isAuthenticated ? "Home" : "Login"}
          </Link>
        </div>
      </div>
    </section>
  );
}
