import Copyright from '@/components/Copytigth'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Signin from '@/components/Signin'
import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import { cookies } from 'next/headers'
import React from 'react'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construida com React, Next.js Tailwind e Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
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
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
