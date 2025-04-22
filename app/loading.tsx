export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-amber-600 animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-10 w-10 rounded-full border-t-4 border-b-4 border-slate-300 animate-spin animation-delay-150"></div>
          </div>
        </div>
        <p className="mt-4 text-lg font-medium text-slate-700">Loading...</p>
      </div>
    </div>
  )
} 