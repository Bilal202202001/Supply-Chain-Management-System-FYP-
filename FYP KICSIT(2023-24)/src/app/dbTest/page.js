'use client'
import React from 'react'

import { helloWorld } from '../lib/db';

export default async function Pricing() {
        const dbHello = await helloWorld()
    console.log("DB HELLO : ",dbHello);
    return (
        <>
        </>)
}

export const runtime = 'edge'
export const preferredRegion = 'iad1'