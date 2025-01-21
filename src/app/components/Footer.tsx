"use client";

import Link from "next/link";
import { useAuth } from "../context/useAuth";
import { ContextType } from "../types/ContextType";

export default function Footer({ navigation }: any) {
  const { isAuthenticated }: ContextType = useAuth()!;
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-white py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <img
              className="h-8"
              src="https://cdn-icons-png.flaticon.com/512/5863/5863203.png"
              alt="Logo"
            />
            <div className="relative group w-fit">
              <p className="mt-2 dark:text-gray-400 font-bold text-gray-600">
                Credit Advice Printing (Temporary).
              </p>
              <span className="w-0 group-hover:w-full border-t-2 border-blue-500 absolute transition-all duration-300 ease-in-out"></span>
            </div>
          </div>
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {isAuthenticated ? (
                navigation.map((item: any) => (
                  <li
                    key={item.name}
                    className="hover:translate-x-1 transition-all duration-300 ease-in-out"
                  >
                    <Link
                      href={item.href}
                      className={` ${
                        item.current
                          ? "font-semibold dark:text-gray-400 hover:dark:text-white text-gray-900 hover:text-gray-800"
                          : "dark:text-gray-400 hover:dark:text-white text-gray-800 hover:text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                  <Link
                    href="/login"
                    className="dark:text-gray-400 hover:dark:text-white text-gray-800 hover:text-gray-700"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Credit Advice Printing (Temporary). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
