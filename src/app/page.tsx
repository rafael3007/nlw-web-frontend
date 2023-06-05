import { cookies } from 'next/headers'

import Copyright from '@/components/Copytigth'
import EmptyMemories from '@/components/EmptyMemories'

import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Signin from '@/components/Signin'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      {/** Left */}
      <div className=" relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        {/** Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
        {/* Stripes */}
        <div className="absolute bottom-0 right-0 top-0 w-2 bg-Stripes"></div>
        {/** Sign In */}

        {isAuthenticated ? <Profile /> : <Signin />}

        {/** Hero */}
        <Hero />

        {/** Copyright */}
        <Copyright />
      </div>
      {/** Direita */}
      <div className="bg-{url(../assets/bg-stars.svg)} flex flex-col bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
