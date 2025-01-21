import Link from "next/link";
import { ContextType } from "../types/ContextType";
import { useAuth } from "../context/useAuth";

export default function () {
  const { isAuthenticated }: ContextType = useAuth()!;
  return (
    <>
      <main className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="flex justify-center mb-10">
          <img
            src="https://i.pinimg.com/originals/81/2c/22/812c229c60047ee347f778135cd76b81.gif"
            alt="car"
            className="rounded-md shadow-lg shadow-gray-500 dark:shadow-gray-700 w-5/12 h-auto"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            Get Your Credit Advice Printed Instantly
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Simplify your finance management with our credit advice printing
            service. Get a detailed report that helps you make informed
            decisions for a better future.
          </p>
          {isAuthenticated ? (
            <Link
              href="/credit-advice"
              className="inline-block hover:scale-95 transition-all duration-300 ease-in-out text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold"
            >
              <i className="far fa-rocket"></i> Print Your Credit Advice
            </Link>
          ) : (
            <Link
              href="/login"
              className="inline-block hover:scale-95 transition-all duration-300 ease-in-out text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold"
            >
              <i className="far fa-rocket"></i> Getting Started
            </Link>
          )}
        </div>
      </main>
      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-12">
            Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Instant Print
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Get your credit advice printed with just a few clicks. Quick and
                easy, with no hassle.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Customizable Templates
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Customize your credit advice template to match your personal
                needs and preferences.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Secure and Confidential
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Your privacy is our priority. We ensure your data is handled
                with the highest level of security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
