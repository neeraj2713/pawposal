'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Create an Account</h1>
      <button
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Continue with Google
      </button>
      <p className="mt-4">
        Already have an account?{' '}
        <Link href="/sign-in" className="text-green-600 underline">Sign in</Link>
      </p>
    </main>
  )
}
