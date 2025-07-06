'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <button
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
      <p className="mt-4">
        Don’t have an account?{' '}
        <Link href="/sign-up" className="text-blue-600 underline">Sign up</Link>
      </p>
    </main>
  )
}
