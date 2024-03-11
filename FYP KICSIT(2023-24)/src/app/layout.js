import './globals.css'
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import React from 'react';
import { Inter , Lexend } from 'next/font/google'
import Head from 'next/head';


const inter = Inter({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-inter',
});

const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-lexend',
})

export const metadata = {
  title: 'NexusNest | Empower Your Tech Journey',
  description: 'NexusNest | Empower Your Tech Journey',
}

export default function RootLayout({ children }) {
  return (
    
   
          
    <html lang="en" dir="LTR">
    <Head>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/logoC.png"/>
    </Head>
      <body  className={`${inter.variable} ${lexend.variable} font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900`}>{children}</body>
    </html> 
  )
}
