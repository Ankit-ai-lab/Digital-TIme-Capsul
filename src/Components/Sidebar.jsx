import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-48 bg-gray-100 h-screen p-4">
      <h2 className="text-xl font-bold mb-6">My Capsule</h2>
      <nav className="flex flex-col gap-4">
       
        <Link to="/create" className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
          Create Capsule
        </Link>
        <Link to="/total" className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600">
          Total Capsule
        </Link>
      </nav>
    </div>
  )
}
