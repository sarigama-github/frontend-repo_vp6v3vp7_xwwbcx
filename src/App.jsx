import React from 'react'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="text-center p-10 rounded-2xl shadow-lg bg-white/80 backdrop-blur">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          Hello, World!
        </h1>
        <p className="text-gray-600 text-lg">Your app is up and running.</p>
        <div className="mt-8">
          <a
            href="/test"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Backend & DB Test
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
