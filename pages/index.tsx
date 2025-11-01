import React from 'react'
import Head from 'next/head'
import Card from '../components/common/Card'
import { DUMMY_PROPERTIES, APP_NAME } from '../constants'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">{APP_NAME}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DUMMY_PROPERTIES.map((property, index) => (
            <Card key={index} {...property} />
          ))}
        </div>
      </main>
    </div>
  )
}
