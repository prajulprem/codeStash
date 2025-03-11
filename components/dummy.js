import React from 'react'
import { useRouter } from 'next/navigation'


const Dummy = () => {
    const router = useRouter()
  return (
    <div className='p-4'>
        <nav className='flex justify-between'>
            <div className='logo font-black text-2xl'>
                codeStash
            </div>
            <div className='signin'>
                <button onClick={() => router.push("/login")} className='border px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700'>SignUp</button>
            </div>
        </nav>
        <main>
            <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold">Welcome to Code Stash</h1>
                <p className="text-lg text-gray-600">Save and manage your code snippets with ease.</p>
                <button onClick={() => router.push("/login")} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    SignUp</button>
            </div>
        </main>
    </div>
  )
}

export default Dummy