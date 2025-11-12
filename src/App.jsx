import React from 'react'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="text-center p-10 rounded-2xl shadow-lg bg-white/80 backdrop-blur">
        <h1 className="text-5xl font-extrabold tracking-tight text-pink-700 mb-4">
          Hello, World!
        </h1>
        <p className="text-gray-600 text-lg">Your app is up and glowing in pink.</p>
        <div className="mt-8">
          <a
            href="/test"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Backend & DB Test
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
