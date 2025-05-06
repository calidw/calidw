'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <svg className="h-16 w-16 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">Something went wrong!</h1>
          <p className="mt-4 text-lg text-slate-600">
            We apologize for the inconvenience. Please try again or contact us if the problem persists.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="rounded-full px-6 py-3 bg-gradient-to-r from-red-800 to-red-700 text-white font-medium hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full px-6 py-3 bg-slate-200 text-slate-800 font-medium hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
} 