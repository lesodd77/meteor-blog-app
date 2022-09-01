/* This example requires Tailwind CSS v2.0+ */
import React from 'react';


export const NotFound = () => (
      <>
      <div className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="mx-5 -my-2 flex flex-wrap justify-center">
          <p className="text-4xl font-extrabold text-cyan-600 sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extra bold font-bold text-center tracking-tight sm:text-5xl">Page not found</h1>
              <p className="mt-1 text-sm text-darkGrayishBlue">Please check the URL in the address bar and try again.</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Go back home
              </a>
              <a
                href="contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-cyan-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Contact Us
              </a>
            </div>
          </div>
        </main>
      </div>
      </div>
      </>
    );
